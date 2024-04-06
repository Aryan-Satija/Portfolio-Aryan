"use server";
import { Resend } from 'resend';

const validate = (field: unknown, maxLength: number) : field is string =>{
    if(field == null || typeof field !== 'string' || field.length > maxLength){ 
        return false;
    }
    return true;
}
const getErrorMessage = (error: unknown)=>{
    let message;
    if(error instanceof Error){
        message = error.message;
    } else if(error && typeof error === "object" && "message" in error){
        message = String(error.message)
    } else if (typeof error === 'string'){
        message = error
    } else{
        message = 'Something went wrong'
    }

    return message
}

export const sendEmail = async (formData : FormData)=>{
    const resend = new Resend('re_4YmMnaYh_KuUQfFoMwpUJ8fgeC5M3v5AN');

    const message = formData.get('message');
    const email = formData.get('email');
    if(!validate(email, 100)){
        return {
            error: "invalid email"
        }
    }
    if(!validate(message, 5000)){
        return {
            error: "invalid message"
        }
    }

    try{
        await resend.emails.send({
          from: 'onboarding@resend.dev',
          to: 'aryansatija2003@gmail.com',
          subject: 'Hello message',
          reply_to: email,
          html: message
        });
    } catch(error){
        return {
            error: getErrorMessage(error)
        }
    }
}