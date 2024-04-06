"use client";

import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import { sendEmail } from '@/actions/sendEmail';

export default function Contact() {
  return (
    <section id="contact" className="mb-28 max-w-[50rem] scroll-mt-28" >
        <h2 className='text-2xl mb-4 text-center font-semibold'>Contact Me</h2>
        <p className='text-gray-400 mt-6'>Please contact me diractly at <a href="mailto:aryansatija2003@gmail.com" className='underline text-gray-400/70'>aryansatija2003@gmail.com</a> or through this form.</p>
        <form
            className='mt-10 flex flex-col' 
            action={async (formData)=>{
                // const {data, error} = 
                await sendEmail(formData);
            }}
        >
            <input name="email" type="email" className='h-14 rounded-lg border px-4 bg-white/10 border-black/10'/>
            <textarea name="message" className='h-[20rem] my-3 rounded-lg border border-black/10 bg-white/10 p-4 '/>
            <button type="submit" className='h-[3rem] w-[8rem] text-gray-400 bg-gray-400/10 rounded-full outline-none transition-all flex items-center justify-center gap-2'>Submit <FaPaperPlane/> </button>
        </form>
    </section>
  )
}
