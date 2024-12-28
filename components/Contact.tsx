/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

interface FormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.details || 'Failed to send message')
      }

      reset()
      setSubmitStatus('success')
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-16 md:py-20 bg-[#f4f6ff]">
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 md:space-y-8 backdrop-blur-sm bg-gradient-to-b from-white to-[#f4f6ff] p-6 md:p-8 rounded-2xl shadow-lg"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-[rgb(16,55,92)]">
              Let's Connect
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[rgb(16,55,92)] mb-1">
                Name
              </label>
              <div className="mt-1">
                <input
                  {...register('name', { required: 'Name is required' })}
                  className="py-2.5 md:py-3 px-4 block w-full shadow-sm border-gray-300 rounded-lg 
                    transition-all duration-300 ease-in-out text-base
                    hover:border-[rgb(235,131,23)]
                    focus:ring-[rgb(243,198,35)] focus:border-[rgb(243,198,35)]"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[rgb(16,55,92)] mb-1">
                Email
              </label>
              <div className="mt-1">
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  className="py-2.5 md:py-3 px-4 block w-full shadow-sm border-gray-300 rounded-lg
                    transition-all duration-300 ease-in-out text-base
                    hover:border-[rgb(235,131,23)]
                    focus:ring-[rgb(243,198,35)] focus:border-[rgb(243,198,35)]"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-[rgb(16,55,92)] mb-1">
                Company (Optional)
              </label>
              <div className="mt-1">
                <input
                  {...register('company')}
                  className="py-2.5 md:py-3 px-4 block w-full shadow-sm border-gray-300 rounded-lg
                    transition-all duration-300 ease-in-out text-base
                    hover:border-[rgb(235,131,23)]
                    focus:ring-[rgb(243,198,35)] focus:border-[rgb(243,198,35)]"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-[rgb(16,55,92)] mb-1">
                Message
              </label>
              <div className="mt-1">
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  rows={4}
                  className="py-2.5 md:py-3 px-4 block w-full shadow-sm border-gray-300 rounded-lg
                    transition-all duration-300 ease-in-out text-base
                    hover:border-[rgb(235,131,23)]
                    focus:ring-[rgb(243,198,35)] focus:border-[rgb(243,198,35)]"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="relative inline-flex w-full items-center justify-center px-6 py-3 overflow-hidden tracking-tighter text-white bg-[#10375c] rounded-lg group hover:shadow-[0_0_15px_rgba(16,55,92,0.5)] transition-shadow duration-300 disabled:opacity-70"
              >
                <span className="relative text-base font-semibold">
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </span>
              </button>
            </div>

            {submitStatus === 'success' && (
              <div className="md:col-span-2 p-4 bg-green-50 text-green-700 rounded-md">
                Thank you! Your message has been sent successfully. We'll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="md:col-span-2 p-4 bg-red-50 text-red-700 rounded-md">
                Sorry, there was an error sending your message. Please try again later.
              </div>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  )
}

