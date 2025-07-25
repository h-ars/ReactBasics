import React from 'react';
import { useForm } from "react-hook-form"

const Login = () => {
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    } = useForm();

    async function onSubmit(data) {
        await new Promise((resolve) => setTimeout(resolve, 5000));
    }

    return (
        <main className='w-screen h-[90vh] flex flex-col gap-20 items-center justify-center'>
            <h1 className='max-sm:hidden'>Login</h1>
            <h1 className='text-5xl font-extrabold text-neutral-50 sm:hidden'>Login</h1>
            <form className="tut gap-6 flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder='E-mail' {...register("email", {required: 'required', pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address"}})}/>{errors.email && <p className='text-red-600 font-medium'>{'*'+errors.email.message}</p>}
                <input type="password" placeholder='Password' {...register("pass", {required: 'required', minLength: {value: 8, message:'Must be within 8-12 chars.'}, maxLength: {value:12, message:'Must be within 8-12 chars.'}})}/>{errors.pass && <p className='text-red-600 font-medium'>{'*'+errors.pass.message}</p>}
                <button type='submit' className='submitBtn mt-8' disabled={isSubmitting}><p>Submit</p></button>
            </form>
        </main>
    );
}
 
export default Login;