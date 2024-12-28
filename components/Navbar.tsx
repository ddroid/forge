"use client";
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { RainbowButton } from "@/components/ui/rainbow-button";
import { scrollToElement } from '@/lib/utils'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const checkScroll = () => {
      const scrollPosition = window.scrollY > 0
      setIsScrolled(scrollPosition)
      setIsLoaded(true)
    }

    checkScroll()

    const handleScroll = () => {
      const scrollPosition = window.scrollY > 0
      setIsScrolled(scrollPosition)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToElement(id.replace('#', ''));
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${!isLoaded ? 'bg-transparent' :
      isScrolled ? 'bg-[#f4f6ff] md:bg-background/40 md:backdrop-blur-lg md:supports-backdrop-blur:bg-background/90 shadow-sm' : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between ${isScrolled ? 'h-16' : 'h-24'} transition-all duration-300`}>
          <div className="flex-shrink-0 flex items-center">
            <Image src="/logo-full.svg" alt="Forgeweb Logo" width={150} height={40} />
          </div>
          <div className="hidden md:flex md:items-center md:justify-center flex-1">
            <div className="flex space-x-4">
              <Link
                href="#about"
                onClick={(e) => handleClick(e, '#about')}
                className="relative text-[rgb(16,55,92)] px-3 py-2 text-sm font-medium"
              >
                <span className="relative group">
                  about
                  <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-[#eb8317] group-hover:w-full transition-all duration-300 ease-in-out" />
                </span>
              </Link>
              <Link
                href="#services"
                onClick={(e) => handleClick(e, '#services')}
                className="relative text-[rgb(16,55,92)] px-3 py-2 text-sm font-medium"
              >
                <span className="relative group">
                  services
                  <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-[#eb8317] group-hover:w-full transition-all duration-300 ease-in-out" />
                </span>
              </Link>
              <Link
                href="#pricing"
                onClick={(e) => handleClick(e, '#pricing')}
                className="relative text-[rgb(16,55,92)] px-3 py-2 text-sm font-medium"
              >
                <span className="relative group">
                  pricing
                  <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-[#eb8317] group-hover:w-full transition-all duration-300 ease-in-out" />
                </span>
              </Link>
              <Link
                href="#portfolio"
                onClick={(e) => handleClick(e, '#portfolio')}
                className="relative text-[rgb(16,55,92)] px-3 py-2 text-sm font-medium"
              >
                <span className="relative group">
                  portfolio
                  <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-[#eb8317] group-hover:w-full transition-all duration-300 ease-in-out" />
                </span>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex md:items-center">
            <Link href="#contact">
              <RainbowButton className="flex items-center gap-2">
                discuss the project
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 400 400"
                  className="text-white"
                >
                  <path
                    fill="currentColor"
                    d="M 300.699219 105.199219 L 300.699219 294.316406 L 344.746094 294.316406 L 344.746094 30.003906 L 80.433594 30.003906 L 80.433594 74.050781 L 269.546875 74.050781 L 17.664062 325.933594 L 48.8125 357.085938 Z M 300.699219 105.199219"
                    fillOpacity="1"
                    fillRule="nonzero"
                  />
                </svg>
              </RainbowButton>
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[rgb(16,55,92)] hover:text-[rgb(243,198,35)] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[rgb(243,198,35)]"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div
            className="fixed inset-0 bg-black/20"
            onClick={() => setIsOpen(false)}
          />
          <div
            className={`fixed top-0 right-0 h-full w-80 bg-[#f4f6ff] transform transition-all duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
          >
            <div className="h-[64px] flex items-center justify-end pr-4">
              <button
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center p-2 rounded-md text-[rgb(16,55,92)] hover:text-[rgb(243,198,35)] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[rgb(243,198,35)]"
              >
                <X className="block h-6 w-6" />
              </button>
            </div>
            <div className="px-4 pt-2 pb-3 space-y-1">
              <Link
                href="#about"
                onClick={(e) => handleClick(e, '#about')}
                className="relative block px-3 py-4 text-base font-medium transition-colors duration-200"
              >
                <span className="relative group text-[rgb(16,55,92)]">
                  About
                  <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-[#eb8317] group-hover:w-full transition-all duration-300 ease-in-out" />
                </span>
              </Link>
              <Link
                href="#services"
                onClick={(e) => handleClick(e, '#services')}
                className="relative block px-3 py-4 text-base font-medium transition-colors duration-200"
              >
                <span className="relative group text-[rgb(16,55,92)]">
                  Services
                  <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-[#eb8317] group-hover:w-full transition-all duration-300 ease-in-out" />
                </span>
              </Link>
              <Link
                href="#pricing"
                onClick={(e) => handleClick(e, '#pricing')}
                className="relative block px-3 py-4 text-base font-medium transition-colors duration-200"
              >
                <span className="relative group text-[rgb(16,55,92)]">
                  Pricing
                  <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-[#eb8317] group-hover:w-full transition-all duration-300 ease-in-out" />
                </span>
              </Link>
              <Link
                href="#portfolio"
                onClick={(e) => handleClick(e, '#portfolio')}
                className="relative block px-3 py-4 text-base font-medium transition-colors duration-200"
              >
                <span className="relative group text-[rgb(16,55,92)]">
                  Portfolio
                  <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-[#eb8317] group-hover:w-full transition-all duration-300 ease-in-out" />
                </span>
              </Link>
              <div className="pt-4 pb-2">
                <Link
                  href="#contact"
                  onClick={(e) => handleClick(e, '#contact')}
                >
                  <RainbowButton className="inline-flex items-center justify-center gap-2 min-w-fit">
                    Discuss the project
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 400 400"
                      className="text-white"
                    >
                      <path
                        fill="currentColor"
                        d="M 300.699219 105.199219 L 300.699219 294.316406 L 344.746094 294.316406 L 344.746094 30.003906 L 80.433594 30.003906 L 80.433594 74.050781 L 269.546875 74.050781 L 17.664062 325.933594 L 48.8125 357.085938 Z M 300.699219 105.199219"
                      />
                    </svg>
                  </RainbowButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

