"use client";
import React from 'react';
import Image from 'next/image';
import {motion} from 'framer-motion';
import Link from 'next/link';
import {BsArrowRight, BsLinkedin} from 'react-icons/bs';
import {HiDownload} from 'react-icons/hi';
import {FaGithub} from 'react-icons/fa';
import {SiCodechef, SiCodeforces, SiLeetcode} from 'react-icons/si';

export default function Intro() {
  return (
    <section id="home" className='max-w-[50rem] text-center scroll-mt-28'>   
        <div
            className='flex items-center justify-center relative'
        >
            
            <Image alt={'asset'} src={'/lightning-1.png'} width={150} height={150} quality={100} className='hidden md:block absolute left-48 bottom-5'/>
            <Image alt={'asset'} src={'/lightning-2.png'} width={150} height={150} quality={100} className='hidden md:block absolute right-52 bottom-5'/>
            <div className='relative'>
                <motion.div
                    initial={{opacity: 0, scale: 0}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{
                        type: "tween",
                        duration: 0.2
                    }}
                >
                    <Image alt={"cool_boy"} src="/cool_boy.jpg" width={150} height={150} quality="95" priority={true} className='rounded-full object-cover border-[0.35rem] border-white shadow-xl'/>
                </motion.div>
                <motion.span initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} transition={{type: "spring", delay:0.2, stiffness: 125,  duration: 0.7}} className='text-4xl absolute bottom-0 right-0'>
                    🦁
                </motion.span>
            </div>
        </div>
        <motion.p 
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            className='mt-8 text-2xl'>
            <span className="font-bold">Hello, I'm Aryan.</span> I'm a{" "}
            <span className="font-bold">full-stack developer</span>. I enjoy
            building <span className="italic">Web Applications and tackling complex problems</span>. 
        </motion.p>

        <motion.div 
            initial={{opacity: 0, y: 200}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.125}}
        className='mt-8 flex items-center gap-4 flex-col md:flex-row'>
            <Link href={""}
                className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-6 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition-all'
            >
                Contact me here <BsArrowRight className="group-hover:translate-x-2 transition"/>
            </Link>
            <a className="group bg-gray-500 cursor-pointer px-7 py-3 gap-2 rounded-full flex items-center outline-none focus:scale-110 hover:scale-110 active:scale-105 transition-all"> 
                Download Resume <HiDownload className='group-hover:translate-y-1 transition'/>
            </a>
            <a href="https://www.linkedin.com/in/4ry4ns4t1j4/" target="_blank" className="bg-gray-900 text-gray-200 cursor-pointer p-4 gap-2 rounded-full flex items-center outline-none focus:scale-110 hover:scale-110 active:scale-105 transition-all">
                <BsLinkedin />
            </a>
            <a href="https://github.com/Aryan-Satija" target="_blank" className="bg-gray-900 text-gray-200 cursor-pointer p-4 gap-2 text-xl rounded-full flex items-center outline-none focus:scale-110 hover:scale-110 active:scale-105 transition-all">
                <FaGithub/>
            </a>
            <a href="https://leetcode.com/__ARYAN1__/" target="_blank" className="bg-gray-900 text-gray-200 cursor-pointer p-4 gap-2 text-xl rounded-full flex items-center outline-none focus:scale-110 hover:scale-110 active:scale-105 transition-all">
                <SiLeetcode/>
            </a>
            <a href="https://www.codechef.com/users/cod3r_s4t1j4" target="_blank" className="bg-gray-900 text-gray-200 cursor-pointer p-4 gap-2 text-xl rounded-full flex items-center outline-none focus:scale-110 hover:scale-110 active:scale-105 transition-all">
                <SiCodechef/>
            </a>
            <a href="https://codeforces.com/profile/aryan_satija_1111" target="_blank" className="bg-gray-900 text-gray-200 cursor-pointer p-4 gap-2 text-xl rounded-full flex items-center outline-none focus:scale-110 hover:scale-110 active:scale-105 transition-all">
                <SiCodeforces/>
            </a>
        </motion.div>
    </section>
  )
}
