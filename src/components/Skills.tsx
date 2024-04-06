"use client";

import React from 'react'
import {motion} from 'framer-motion';

const skillsData = [
    "HTML",
    "CSS",
    "Tailwind CSS", 
    "Javascript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Node.js",
    "MongoDB", 
    "Redux",
    "Express",
    "SQL",
    "C++",
    "Python",
    "Streamlit",
    "Django",
    "Git"
];
const variants = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: (index : number)=>{
    return {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05*index
      }
    }
  }
}

export const Skills = () => {
  return (
    <section  id="skills" className="mb-28 max-w-[50rem] scroll-mt-28">
                <h2 className='text-2xl mb-4 text-center font-semibold'>My Skills</h2>
                <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
                    {
                        skillsData.map((skill, index)=>{
                            return (<motion.li key={index} variants={variants} initial="initial" whileInView="animate" custom={index} className='bg-white/20 border text-gray-900 px-5 py-3 border-black/[0.1] rounded-xl'>{skill}</motion.li>)
                        })
                    }
                </ul>
    </section>
  )
}
