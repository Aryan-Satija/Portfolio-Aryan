"use client";

import React from "react"
import {motion} from 'framer-motion'
import Link from "next/link";
export default function Header(){
    return(
        <header className='z-[25] relative bg-opacity-10 hidden sm:block'>
            <motion.div 
                initial = {{y: -200, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                className='w-full h-[4.5rem] fixed top-2 rounded-none sm:rounded-full border border-white border-opacity-40 bg-white bg-opacity-10'
            >
            </motion.div>
            <nav className="flex fixed top-[1rem] h-12 py-2 w-full">
                <ul className="w-full flex flex-wrap items-center justify-around text-[0.9rem] gap-y-1 font-medium text-gray-100 sm:flex-nowrap gap-5 sm:gap-0">
                        <motion.li
                            initial={{y: -200, opacity: 0}}
                            animate={{y: 0, opacity: 1}} 
                        >
                            <Link href={"#home"}
                                className="flex w-full items-center justify-center hover:text-gray-950 px-3 py-3 rounded-full hover:bg-gray-500/10 transition"
                            >
                                Home
                            </Link>
                        </motion.li>
                        <motion.li
                            initial={{y: -200, opacity: 0}}
                            animate={{y: 0, opacity: 1}} 
                        >
                            <Link href={"#about"}
                                className="flex w-full items-center justify-center hover:text-gray-950 px-3 py-3 rounded-full hover:bg-gray-500/10 transition"
                            >
                                About
                            </Link>
                        </motion.li>
                        <motion.li
                            initial={{y: -200, opacity: 0}}
                            animate={{y: 0, opacity: 1}} 
                        >
                            <Link href={"#projects"}
                                className="flex w-full items-center justify-center hover:text-gray-950 px-3 py-3 rounded-full hover:bg-gray-500/10 transition"
                            >
                                Projects
                            </Link>
                        </motion.li>
                        <motion.li
                            initial={{y: -200, opacity: 0}}
                            animate={{y: 0, opacity: 1}} 
                        >
                            <Link href={"#skills"}
                                className="flex w-full items-center justify-center hover:text-gray-950 px-3 py-3 rounded-full hover:bg-gray-500/10 transition"
                            >
                                Skills
                            </Link>
                        </motion.li>
                        {/* loading.... */}
                        {/* <motion.li
                            initial={{y: -200, opacity: 0}}
                            animate={{y: 0, opacity: 1}} 
                        >
                            <Link href={"#experience"}
                                className="flex w-full items-center justify-center hover:text-gray-950 px-3 py-3 rounded-full hover:bg-gray-500/10 transition"
                            >
                                Experience
                            </Link>
                        </motion.li> */}
                        <motion.li
                            initial={{y: -200, opacity: 0}}
                            animate={{y: 0, opacity: 1}} 
                        >
                            <Link href={"#contact"}
                                className="flex w-full items-center justify-center hover:text-gray-950 px-3 py-3 rounded-full hover:bg-gray-500/10 transition"
                            >
                                Contact
                            </Link>
                        </motion.li>
                </ul>
            </nav>
        </header>
    )
}