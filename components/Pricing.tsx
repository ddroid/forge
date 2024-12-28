"use client";
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Basic',
    price: 99,
    features: ['5 pages', 'Basic SEO', 'Mobile Responsive', '1 month support'],
  },
  {
    name: 'Pro',
    price: 199,
    features: ['10 pages', 'Advanced SEO', 'Mobile Responsive', 'E-commerce Integration', '3 months support'],
  },
  {
    name: 'Enterprise',
    price: 399,
    features: ['Unlimited pages', 'Premium SEO', 'Mobile Responsive', 'E-commerce Integration', 'Custom Features', '6 months support'],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-[rgb(16,55,92)] sm:text-4xl">
            Pricing Plans
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Choose the perfect plan for your business needs.
          </p>
        </motion.div>

        <div className="mt-12 md:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                className={`flex flex-col h-full bg-[rgb(244,246,255)] rounded-lg shadow-lg overflow-hidden relative border-2 
                  ${plan.name === 'Pro'
                    ? 'border-[#eb8317] md:scale-105 z-10'
                    : 'border-gray-200'}`}
              >
                {plan.name === 'Pro' && (
                  <div className="absolute top-0 right-0 bg-[rgb(235,131,23)] text-white px-3 py-1 rounded-bl-lg text-sm font-medium">
                    Popular
                  </div>
                )}
                <div className="flex-grow px-4 md:px-6 py-6 md:py-8">
                  <h3 className="text-xl md:text-2xl font-semibold text-[rgb(16,55,92)]">
                    {plan.name}
                  </h3>
                  <p className="mt-4 flex items-baseline">
                    <span className="text-3xl md:text-4xl font-extrabold text-[rgb(16,55,92)]">
                      ${plan.price}
                    </span>
                    <span className="ml-1 text-lg md:text-xl font-medium text-gray-500">
                      /month
                    </span>
                  </p>
                  <ul className="mt-6 space-y-3 md:space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <div className="flex-shrink-0">
                          <Check className="h-5 w-5 text-[rgb(235,131,23)]" aria-hidden="true" />
                        </div>
                        <p className="ml-3 text-sm md:text-base text-gray-700">
                          {feature}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-4 md:px-6 pb-6 md:pb-8">
                  <button
                    type="button"
                    className={`relative inline-flex w-full items-center justify-center px-6 py-2.5 overflow-hidden tracking-tighter text-white rounded-md group hover:shadow-[0_0_15px_rgba(235,131,23,0.5)] transition-shadow duration-300
                      ${plan.name === 'Pro'
                        ? 'bg-[#eb8317]'
                        : 'bg-[#10375c]'}`}
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
                    <span className="relative text-sm md:text-base font-semibold whitespace-nowrap">
                      Get started
                    </span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

