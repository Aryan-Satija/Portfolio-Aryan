"use client";

import React, {useRef} from "react";
import Image from "next/image";
import {motion, useScroll, useTransform} from "framer-motion";

const projectsData = [
    {
      title: "CodeBattles",
      description: ["Create and enrol in different courses", "Solve coding problems directly on the platform with an integrated coding environment", "The website has login and signup options and makes use of all the good practices."],
      tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
      imageUrl: '/codebattles.png',
    },
    {
      title: "DocSecure",
      description: ["DocSecure is a powerful tool that allows us to upload and validate PDF documents securely against entries in the blockchain.", "The tool reads the pdf, creates a hash of the data of the PDF and then stores it on the blockchain."],
      tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
      imageUrl: '/DocSecure.png',
    },
    {
      title: "Chat App",
      description: ["Stay connected with friends, family and colleagues in real time using the robust socket.io technology.", "User friendly and responsive interface made using material UI."],
      tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
      imageUrl: '/chatapp.png',
    },
];

export default function Projects() {
    return (
      <section id = "projects" className="mb-12 flex flex-col items-center scroll-mt-28">
        <h2 className='text-2xl mb-4 font-semibold'>My projects</h2>
        <div>
          {projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))}
        </div>
      </section>
    );
}

type ProjectProps = typeof projectsData[number] 
function Project({title, description, tags, imageUrl} : ProjectProps) {
    const ref = useRef<HTMLElement>(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    })

    const scaleProgress = useTransform(scrollYProgress, [0 ,1], [0.5, 1])
    return(
        <motion.article 
            style={{
                opacity: scaleProgress,
                scale: scaleProgress
            }}
            ref={ref} className="group relative bg-gray-100/10 max-w-[42rem] border border-black/5 overflow-hidden h-[20rem] mb-8 last:mb-16 cursor-pointer hover:bg-gray-800 transition rounded-md">
            <div className="py-4 px-5 w-[100%] sm:max-w-[50%] h-full flex flex-col group-even:sm:ml-[19rem]">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <ul className="mt-2 text-gray-400 leading-relaxed">
                    {
                        description.map((desc, index)=>{
                            return <li key={index}>{desc}</li>
                        })
                    }
                </ul>
                <ul className="flex flex-wrap gap-2 mt-auto"> 
                    {
                        tags.map((tag, index) => {
                            return <li className="bg-black/[0.4] text-gray-200 px-3 py-1 text-[0.7rem] uppercase tracking-wider rounded-full" key={index}>{tag}</li>
                        })
                    }
                </ul>
            </div>
            <Image className="hidden sm:block absolute top-8 right-[-22.5rem] group-even:right-[initial] group-even:left-[-22.5rem] w-[50rem] h-[28.25rem] rounded-t-lg shadow-2xl group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:rotate-2 group-hover:scale-102 group-even:group-hover:translate-x-2 group-even:group-hover:-translate-y-2 group-even:group-hover:-rotate-2 transition" src={imageUrl} width={400} height={100} alt={title} quality={100}/>
        </motion.article>
    )
}