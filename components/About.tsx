"use client";
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  const sections = [
    {
      id: 'mission',
      title: 'Our Mission',
      description: 'At Forgeweb, we strive to empower businesses with cutting-edge web technologies and innovative solutions. Our mission is to transform your digital presence and help you achieve your online goals.',
      image: '/mission.png',
    },
    {
      id: 'expertise',
      title: 'Our Expertise',
      description: 'With years of experience in web development, design, and digital marketing, our team of experts is equipped to handle projects of any scale. We combine creativity with technical prowess to deliver outstanding results.',
      image: '/experties.png',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-20 bg-white min-h-screen relative preserve-3d">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-[#10375c] sm:text-4xl">
            About Forgeweb
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            We are passionate about crafting exceptional web solutions that drive your business forward.
          </p>
        </motion.div>

        <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="relative bg-white rounded-xl shadow-2xl p-4 md:p-6"
            >
              <div className="relative flex flex-col h-full">
                <h3 className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-[#f3c623] to-[#eb8317] inline-block text-transparent bg-clip-text mb-4 text-center md:text-left">
                  {section.title}
                </h3>
                <div className="relative w-full aspect-[4/3] mb-4">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="rounded-lg object-contain"
                  />
                </div>
                <div className="relative z-10 p-3 md:p-4 rounded-lg bg-[#f4f6ff] mt-auto">
                  <p className="text-[#10375c] text-sm md:text-base">
                    {section.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

