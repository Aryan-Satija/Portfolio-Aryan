'use client';
import React from 'react';
import {motion} from 'framer-motion';
export default function About() {
  return (
    <motion.section 
        id = "about"
        initial={{y: 200, opacity: 0}} 
        animate={{y: 0, opacity: 1}} 
        transition={{duration: 1}} 
        className='mb-28 max-w-[45rem] text-center leading-8 scroll-mt-28'
    >
        <h2 className='text-2xl mt-12 font-semibold'>About Me</h2>
        <p className="mb-3">
            Hello there! I am {" "}
            <span className="font-medium">Aryan Satija</span>, I&apos;m someone who&apos;s deeply passionate about the world of software development and technology.
            I&apos;ve been fortunate to achieve some milestones along the way, 
            such as scoring <span className="font-medium">94.2% in Class 10</span> and <span className='font-medium'>93.4% in Class 12</span>
            ,which laid the foundation for my academic pursuits. 
            I secured <span className='font-medium'>98.71%ile in JEE MAINS</span> and
            My JEE Advanced rank of 6877 has allowed me to explore my potential in engineering, putting me in the top <span className="font-medium">0.7% of students in India</span>. 
        </p>
        <p>
            Outside of academia, 
            I&apos;ve found joy in <span className='font-medium'>competitive programming</span>, 
            where I&apos;ve earned recognition such as <span className='font-medium'>4 stars on CodeChef</span>, 
            the title of <span className='font-medium'>Knight on LeetCode</span>, 
            and <span className='font-medium'>the rank of Specialist on Codeforces</span>. 
            I&apos;m constantly learning and staying updated with the latest technologies, eager to contribute meaningfully to the field. 
        </p>
    </motion.section>
  )
}
