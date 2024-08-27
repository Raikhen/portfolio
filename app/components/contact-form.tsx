'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { sendEmail } from 'utils/send-email'
import { ToastContainer, toast } from 'react-toastify'
import { Flip } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

export type FormData = {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm<FormData>()
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (data: FormData) => {
    setIsLoading(true)

    try {
      await sendEmail(data)
      reset()
      toast.success('Message sent successfully.')
    } catch (error) {
      console.error('Error sending email:', error)
      toast.error('There was an error sending your message.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w mx-auto">
      <div className='mb-5'>
        <label htmlFor='name' className='mb-3 block font-medium'>
          Full Name
        </label>
        <input
          type='text'
          id='name'
          placeholder='Jane Doe'
          className='w-full md:w-1/2 rounded py-2 px-3 outline-none border border-gray-300 focus:border-yellow-500'
          {...register('name', { required: true })}
          disabled={isLoading}
        />
      </div>
      <div className='mb-5'>
        <label htmlFor='email' className='mb-3 block font-medium'>
          Email Address
        </label>
        <input
          type='email'
          id='email'
          placeholder='jane.doe@company.com'
          className='md:w-3/4 w-full rounded py-2 px-3 outline-none border border-gray-300 focus:border-yellow-500'
          {...register('email', { required: true })}
          disabled={isLoading}
        />
      </div>
      <div className='mb-5'>
        <label htmlFor='message' className='mb-3 block font-medium'>
          Message
        </label>
        <textarea
          id='message'
          rows={6}
          placeholder='Type your message'
          className='w-full resize-none rounded py-2 px-3 outline-none border border-gray-300 focus:border-yellow-500'
          {...register('message', { required: true })}
          disabled={isLoading}
        ></textarea>
      </div>
      <div className="inline-flex items-center space-x-4">
        <button
          type="submit"
          disabled={isLoading}
          className={`flex items-center justify-center cursor-pointer rounded py-3 px-8 font-semibold border border-gray-300 duration-500 transform 
            ${isLoading ? 'cursor-not-allowed opacity-75' : 'hover:bg-white hover:text-black'}`}
        >
          {isLoading ? (
            <>
              <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
              Loading...
            </>
          ) : (
            'Submit'
          )}
        </button>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        closeButton={false}
        transition={Flip}
      />
    </form>
  )
}
