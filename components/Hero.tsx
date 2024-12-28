"use client";

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import SparklesText from '@/components/ui/sparkles-text'
import { BoxReveal } from '@/components/ui/box-reveal'
import ShineBorder from '@/components/ui/shine-border'

export default function Hero() {
  return (
    <section className="bg-[rgb(244,246,255)] overflow-hidden min-h-[600px]">
      <div className="pt-24 md:pt-36 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="text-left lg:mt-0">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <BoxReveal replay={true}>
                  <h1 className="text-3xl md:text-4xl font-extrabold text-[rgb(16,55,92)] lg:text-5xl xl:text-6xl flex flex-wrap items-center gap-x-3">
                    Forge Your Web{" "}
                    <SparklesText
                      text="Success"
                      className="text-[rgb(243,198,35)]"
                      colors={{ first: "#eb8317", second: "#f3c623" }}
                    />
                  </h1>
                </BoxReveal>

                <BoxReveal duration={0.7} replay={true}>
                  <p className="mt-4 md:mt-5 text-base text-[rgb(16,55,92)] sm:text-lg md:text-xl max-w-2xl">
                    We craft cutting-edge web solutions that propel your business to new heights.
                    From stunning designs to powerful functionality, we forge the digital tools you need to succeed.
                  </p>
                </BoxReveal>

                <BoxReveal duration={0.9} replay={true}>
                  <div className="mt-8 md:mt-10 flex flex-row gap-3">
                    <div className="flex-1 md:flex-none">
                      <Link
                        href="#contact"
                        className="relative inline-flex w-full items-center justify-center px-6 md:px-8 py-3 overflow-hidden tracking-tighter text-white bg-[#eb8317] rounded-md group hover:shadow-[0_0_15px_rgba(16,55,92,0.5)] transition-shadow duration-300 md:py-4 md:text-lg"
                      >
                        <span className="absolute bottom-0 left-0 h-full -ml-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-auto h-full opacity-100 object-stretch"
                            viewBox="0 0 487 487"
                          >
                            <path
                              fillOpacity=".1"
                              fillRule="nonzero"
                              fill="#FFF"
                              d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                            ></path>
                          </svg>
                        </span>
                        <span className="absolute top-0 right-0 w-12 h-full -mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="object-cover w-full h-full"
                            viewBox="0 0 487 487"
                          >
                            <path
                              fillOpacity=".1"
                              fillRule="nonzero"
                              fill="#FFF"
                              d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                            ></path>
                          </svg>
                        </span>
                        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200"></span>
                        <span className="relative text-base font-semibold whitespace-nowrap">Get Started</span>
                      </Link>
                    </div>
                    <div className="flex-1 md:flex-none">
                      <Link
                        href="#services"
                        className="relative inline-flex w-full items-center justify-center px-6 md:px-8 py-3 overflow-hidden tracking-tighter text-white bg-[#10375c] rounded-md group hover:shadow-[0_0_15px_rgba(16,55,92,0.5)] transition-shadow duration-300 md:py-4 md:text-lg"
                      >
                        <span className="absolute bottom-0 left-0 h-full -ml-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-auto h-full opacity-100 object-stretch"
                            viewBox="0 0 487 487"
                          >
                            <path
                              fillOpacity=".1"
                              fillRule="nonzero"
                              fill="#FFF"
                              d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                            ></path>
                          </svg>
                        </span>
                        <span className="absolute top-0 right-0 w-12 h-full -mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="object-cover w-full h-full"
                            viewBox="0 0 487 487"
                          >
                            <path
                              fillOpacity=".1"
                              fillRule="nonzero"
                              fill="#FFF"
                              d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                            ></path>
                          </svg>
                        </span>
                        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200"></span>
                        <span className="relative text-base font-semibold whitespace-nowrap">Learn More</span>
                      </Link>
                    </div>
                  </div>
                </BoxReveal>
              </motion.div>
            </div>

            <div className="flex items-center justify-center w-full mt-12 lg:mt-0">
              <div className="relative w-full max-w-md lg:max-w-lg">
                <ShineBorder
                  borderRadius={12}
                  borderWidth={2}
                  duration={10}
                  color={["#63a9f5", "#eb8317", "#f3c623"]}
                  className="w-full"
                >
                  <div className="w-full h-full">
                    <motion.div
                      initial={{ scale: 1 }}
                      animate={{
                        y: [5, -5, 5],
                        rotate: [0, 5, 0],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: 0.5,
                      }}
                      className="w-full h-full"
                    >
                      <Image
                        className="w-full h-full object-cover rounded-lg"
                        src="/i8-forge.webp"
                        alt="Web Design"
                        width={400}
                        height={300}
                        priority={true}
                      />
                    </motion.div>
                  </div>
                </ShineBorder>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

