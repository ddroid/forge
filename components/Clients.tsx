"use client";
import { motion } from 'framer-motion'
import Image from 'next/image'

const clients = [
  { id: 1, name: 'Client 1', logo: '/c1.webp' },
  { id: 2, name: 'Client 2', logo: '/c2.webp' },
  { id: 3, name: 'Client 3', logo: '/c3.webp' },
  { id: 4, name: 'Client 4', logo: '/c4.webp' },
  { id: 5, name: 'Client 5', logo: '/c5.webp' },
  { id: 6, name: 'Client 6', logo: '/c6.webp' },
]

export default function Clients() {
  return (
    <section id="clients" className="py-16 md:py-20 bg-[rgb(244,246,255)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="md:w-1/4"
          >
            <h2 className="text-3xl font-extrabold text-[rgb(16,55,92)] sm:text-4xl text-center md:text-left">
              Lovely Clients
            </h2>
          </motion.div>

          <div className="w-full md:w-3/4">
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 overflow-hidden">
              <div className="flex animate-marquee whitespace-nowrap">
                {/* First set of logos */}
                {clients.map((client) => (
                  <motion.div
                    key={client.id}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                    className="flex-shrink-0 mx-4 md:mx-8 flex items-center"
                  >
                    <Image
                      className="h-auto w-auto max-h-16 md:max-h-20"
                      src={client.logo}
                      alt={client.name}
                      width={160}
                      height={80}
                    />
                  </motion.div>
                ))}
                {/* Duplicate set for seamless loop */}
                {clients.map((client) => (
                  <motion.div
                    key={`${client.id}-duplicate`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                    className="flex-shrink-0 mx-4 md:mx-8 flex items-center"
                  >
                    <Image
                      className="h-auto w-auto max-h-16 md:max-h-20"
                      src={client.logo}
                      alt={client.name}
                      width={160}
                      height={80}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

