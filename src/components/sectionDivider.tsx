"use client";
import React from 'react';
import {motion} from "framer-motion";
export default function SectionDivider() {
  return (
    <motion.div 
        initial={{opacity : 0, y: 100}} 
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.125}}
        className='bg-gray-200 h-20 w-1 mt-12 rounded-full '>

    </motion.div>
  )
}
