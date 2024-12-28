"use client";
import { motion, useInView } from 'framer-motion'
import { Code, Palette, Megaphone, BarChart, ShoppingCart } from 'lucide-react'
import { useRef, useState, useEffect, memo } from 'react'
import WordPullUp from './ui/word-pull-up'
import AnimatedGridPattern from './ui/animated-grid-pattern'
import { cn } from '@/lib/utils'
import ShineBorder from './ui/shine-border'
import dynamic from 'next/dynamic'

const slogans = [
  ["Not just website, it's a tool for ", "lead generation"],
  ["Not just a store, it's a hub for ", "innovation"],
  ["Not just a platform, it's a gateway to ", "growth"],
  ["Not just a service, it's a solution for ", "success"],
  ["Not just data, it's the fuel for ", "decision-making"],
  ["Not just design, it's a canvas for ", "impact"],
  ["Not just software, it's a partner in ", "progress"],
  ["Not just content, it's a voice for ", "engagement"],
  ["Not just a system, it's a strategy for ", "excellence"]
]

interface ServiceProps {
  name: string;
  description: string;
  icon: React.ElementType;
  number: string;
  animation: string;
}

interface ServiceCardProps {
  service: ServiceProps;
}

const services = [
  {
    name: 'Web Development',
    description: 'Custom websites and web apps built for your success.',
    icon: Code,
    number: '01',
    animation: '/lotties/webdevelopment.json',
  },
  {
    name: 'Web Design',
    description: 'User-friendly designs that captivate your audience.',
    icon: Palette,
    number: '02',
    animation: '/lotties/webdesign.json',
  },
  {
    name: 'Digital Marketing',
    description: 'Strategic solutions to boost your online presence.',
    icon: Megaphone,
    number: '03',
    animation: '/lotties/marketing.json',
  },
  {
    name: 'Analytics & SEO',
    description: 'Data-driven insights for better performance.',
    icon: BarChart,
    number: '04',
    animation: '/lotties/seo.json',
  },
  {
    name: 'Ecommerce',
    description: 'Seamless online stores for your business growth.',
    icon: ShoppingCart,
    number: '05',
    animation: '/lotties/ecommerce.json',
  },
]

const scrollToContact = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const ArrowIcon = () => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 400 400"
    className="ml-2 cursor-pointer hover:opacity-80 transition-opacity"
    onClick={scrollToContact}
  >
    <path
      fill="#20629e"
      d="M 300.699219 105.199219 L 300.699219 294.316406 L 344.746094 294.316406 L 344.746094 30.003906 L 80.433594 30.003906 L 80.433594 74.050781 L 269.546875 74.050781 L 17.664062 325.933594 L 48.8125 357.085938 Z M 300.699219 105.199219"
      fillOpacity="1"
      fillRule="nonzero"
    />
  </svg>
);

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false
});

// Create a separate component for the service card
const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { once: false });
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    console.log('Attempting to fetch:', service.animation);
    fetch(service.animation)
      .then(response => {
        console.log('Response received:', response.status);
        return response.json();
      })
      .then(data => {
        console.log('Animation data loaded:', !!data);
        setAnimationData(data);
      })
      .catch(error => {
        console.error('Error loading animation:', error, 'for file:', service.animation);
      });
  }, [service.animation]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isCardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="min-h-[12rem] md:h-48"
    >
      <div className="h-full w-full bg-white rounded-lg shadow-lg flex flex-col md:flex-row">
        <div className="w-full md:w-64 h-48 md:h-full">
          {animationData ? (
            <div className="h-48 md:h-full">
              <Lottie
                animationData={animationData}
                loop={true}
                autoplay={true}
                className="w-full h-full"
              />
            </div>
          ) : (
            <div className="w-full h-48 md:h-full flex items-center justify-center">
              <service.icon className="w-12 h-12 text-gray-400" />
            </div>
          )}
        </div>

        <div className="flex-1 p-4 md:p-6 flex items-center">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-4 md:gap-0">
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-medium text-[rgb(16,55,92)]">
                {service.name}
              </h3>
              <p className="mt-1 md:mt-2 text-sm md:text-base text-gray-500 pr-4">
                {service.description}
              </p>
            </div>
            <div className="flex items-center w-full md:w-auto justify-end">
              <ArrowIcon />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Services() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: false })
  const [currentSloganIndex, setCurrentSloganIndex] = useState(0)
  const [key, setKey] = useState(0)
  const [hasStartedRotation, setHasStartedRotation] = useState(false)

  // Add a new ref for the tech stack section
  const techStackRef = useRef(null)
  const isTechStackInView = useInView(techStackRef, {
    once: true,
    amount: 0.3,
    margin: "-100px"
  })

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isHeaderInView) {
      // If header just came into view and rotation hasn't started
      if (!hasStartedRotation) {
        setHasStartedRotation(true);
      }

      // Set up the interval for 4 seconds
      interval = setInterval(() => {
        setCurrentSloganIndex((prev) => (prev + 1) % slogans.length)
        setKey(prev => prev + 1)
      }, 4000)
    }

    // Clear interval when header is not in view
    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [isHeaderInView, hasStartedRotation])

  return (
    <section id="services" className="py-16 md:py-20 bg-[rgb(244,246,255)] relative">
      <AnimatedGridPattern
        className="fill-[#20629e]/20 stroke-[#20629e]/20 absolute inset-0"
        width={32}
        height={32}
        x={0}
        y={0}
        strokeDasharray={4}
        numSquares={30}
        maxOpacity={0.2}
        duration={3}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={headerRef} className="text-center relative">
          <ShineBorder
            borderRadius={8}
            borderWidth={2}
            duration={10}
            color={["#10375c", "#f3c623"]}
            className="inline-block max-w-full"
          >
            <div className="bg-[#ffffff] rounded-lg p-4 md:p-8 inline-block relative italic">
              <div className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#10375c] leading-normal relative">
                <WordPullUp
                  key={key}
                  words={`${slogans[currentSloganIndex][0]}${slogans[currentSloganIndex][1]}`}
                  className="inline"
                  wrapperFramerProps={{
                    hidden: { opacity: 1 },
                    show: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0,
                      },
                    },
                  }}
                  framerProps={{
                    hidden: { y: 20, opacity: 0 },
                    show: { y: 0, opacity: 1 }
                  }}
                  renderWord={(word, index, totalWords) => {
                    const isLastWord = index === totalWords - 1;
                    return (
                      <span
                        className={cn(
                          "inline-block",
                          isLastWord ? "bg-[#f3c623]/30 px-1 py-0.5 rounded ml-[8px] leading-tight" : "mr-[8px]"
                        )}
                      >
                        {word}
                      </span>
                    );
                  }}
                />
              </div>
            </div>
          </ShineBorder>
        </div>

        <div className="mt-12 md:mt-20">
          <div className="grid grid-cols-1 gap-6 md:gap-8">
            {services.map((service) => (
              <ServiceCard key={service.name} service={service} />
            ))}
          </div>
        </div>

        <div className="mt-20 md:mt-32" ref={techStackRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isTechStackInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-extrabold text-[rgb(16,55,92)] lg:text-4xl">
              Your stack, your rules, your success!
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

