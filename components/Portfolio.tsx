"use client";
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'E-commerce Website',
    image: '/p1.png',
    link: 'https://www.rollinggreens.com/',
    bgColor: '#e78a86'
  },
  {
    id: 2,
    title: 'Corporate Branding',
    image: '/p2.png',
    link: 'https://www.chetsdallas.com/',
    bgColor: '#7da9b3'
  },
  {
    id: 3,
    title: 'Mobile App Design',
    image: '/p3.png',
    link: 'https://www.tempurpedic.com/',
    bgColor: '#bcd5ed'
  },
]

export default function Portfolio() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-16 md:py-20 bg-[rgb(244,246,255)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-[rgb(16,55,92)] sm:text-4xl">
            Our Portfolio
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Explore some of our recent projects and success stories.
          </p>
        </motion.div>

        <div className="mt-12 md:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                layoutId={`card-${project.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
                onClick={() => setSelectedId(selectedId === project.id ? null : project.id)}
                style={{ backgroundColor: project.bgColor }}
                className="relative rounded-lg overflow-hidden w-full max-w-[340px] h-[600px] cursor-pointer group"
              >
                <div className="absolute inset-0 p-4 md:p-[20px] flex flex-col">
                  <div className="relative flex-1 overflow-hidden rounded-lg">
                    <motion.div
                      className="absolute inset-0"
                      animate={{
                        scale: selectedId === project.id ? 1.2 : 1
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                      }}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    className="mt-4 text-center relative z-10"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                      {project.title}
                    </h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-block px-6 py-2.5 bg-white/10 backdrop-blur-sm rounded-md text-sm text-white 
                        hover:bg-white/20 transition-colors duration-300"
                    >
                      View Project
                    </a>
                  </motion.div>
                </div>

                {/* Overlay effect */}
                <motion.div
                  className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20"
                  animate={{
                    backgroundColor: selectedId === project.id ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0)"
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

