"use client";
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { useState } from 'react'
import Modal from './ui/Modal'

// Privacy Policy content
const privacyContent = (
  <div className="space-y-4 text-gray-600">
    
    <p>Last updated: {new Date().toLocaleDateString()}</p>
    
    <div className="space-y-4">
      <section>
        <h4 className="font-medium text-gray-900">1. Information We Collect</h4>
        <p>We collect information that you provide directly to us, including:</p>
        <ul className="list-disc pl-5 mt-2">
          <li>Name and contact information</li>
          <li>Business information</li>
          <li>Project requirements and preferences</li>
          <li>Communication history</li>
        </ul>
      </section>

      <section>
        <h4 className="font-medium text-gray-900">2. How We Use Your Information</h4>
        <p>We use the collected information to:</p>
        <ul className="list-disc pl-5 mt-2">
          <li>Provide and improve our web development and SEO services</li>
          <li>Communicate with you about your projects</li>
          <li>Send important updates and notifications</li>
          <li>Analyze and improve our website performance</li>
        </ul>
      </section>

      <section>
        <h4 className="font-medium text-gray-900">3. Data Protection</h4>
        <p>Forgeweb.uk implements appropriate security measures to protect your personal information. We follow industry standards and regularly update our security practices.</p>
      </section>

      <section>
        <h4 className="font-medium text-gray-900">4. Cookies</h4>
        <p>We use cookies to enhance your browsing experience and analyze website traffic. You can control cookie preferences through your browser settings.</p>
      </section>

      <section>
        <h4 className="font-medium text-gray-900">5. Contact Us</h4>
        <p>For privacy-related inquiries, please contact us at privacy@forgeweb.uk</p>
      </section>
    </div>
  </div>
);

// Terms of Service content
const termsContent = (
  <div className="space-y-4 text-gray-600">
    
    <p>Last updated: {new Date().toLocaleDateString()}</p>

    <div className="space-y-4">
      <section>
        <h4 className="font-medium text-gray-900">1. Services</h4>
        <p>Forgeweb.uk provides web development, design, and SEO services. By engaging our services, you agree to:</p>
        <ul className="list-disc pl-5 mt-2">
          <li>Provide accurate project requirements and information</li>
          <li>Review and provide feedback in a timely manner</li>
          <li>Make payments according to agreed terms</li>
          <li>Respect intellectual property rights</li>
        </ul>
      </section>

      <section>
        <h4 className="font-medium text-gray-900">2. Project Terms</h4>
        <p>All projects are subject to:</p>
        <ul className="list-disc pl-5 mt-2">
          <li>Written agreement on scope and deliverables</li>
          <li>Agreed timeline and milestones</li>
          <li>Payment schedule and terms</li>
          <li>Revision and modification policies</li>
        </ul>
      </section>

      <section>
        <h4 className="font-medium text-gray-900">3. Intellectual Property</h4>
        <p>Upon full payment, clients receive:</p>
        <ul className="list-disc pl-5 mt-2">
          <li>Full ownership of the final website design</li>
          <li>Rights to all custom code developed</li>
          <li>License to use any included third-party elements</li>
        </ul>
      </section>

      <section>
        <h4 className="font-medium text-gray-900">4. Warranty and Liability</h4>
        <p>Forgeweb.uk warrants that all services will be performed with professional care. We are not liable for:</p>
        <ul className="list-disc pl-5 mt-2">
          <li>Third-party service interruptions</li>
          <li>Content provided by the client</li>
          <li>Changes made by the client or unauthorized parties</li>
        </ul>
      </section>

      <section>
        <h4 className="font-medium text-gray-900">5. Termination</h4>
        <p>Either party may terminate services with written notice. Client remains responsible for payment of services rendered up to termination date.</p>
      </section>

      <section>
        <h4 className="font-medium text-gray-900">6. Governing Law</h4>
        <p>These terms are governed by the laws of the United Kingdom. Any disputes shall be resolved in UK courts.</p>
      </section>
    </div>
  </div>
);

// About Us content
const aboutContent = (
  <div className="space-y-4 text-gray-600">
    <p>Last updated: {new Date().toLocaleDateString()}</p>
    <div className="space-y-4">
      <section>
        <h4 className="font-medium text-gray-900">About Us</h4>
        <p>
          Forgeweb.uk was founded by the visionary duo, Afaan and Ahmad, with a passion for technology and innovation. Our team consists of highly talented individuals dedicated to delivering exceptional web development and SEO services.
        </p>
        <ul className="list-disc pl-5 mt-2">
          <li>Empowering businesses with cutting-edge technology and creative solutions.</li>
          <li>Delivering projects that exceed industry standards in quality and innovation.</li>
          <li>Staying ahead of the curve with continuous skill and knowledge updates.</li>
        </ul>
        <p>
          We offer a comprehensive range of services, including:
        </p>
        <ul className="list-disc pl-5 mt-2">
          <li>Web development</li>
          <li>SEO</li>
          <li>Digital marketing</li>
        </ul>
        <p>
          At Forgeweb.uk, we are more than just a service provider; we are your partners in success. We are committed to building long-lasting relationships based on trust and mutual respect.
        </p>
      </section>
    </div>
  </div>
);

export default function Footer() {
  const [modalContent, setModalContent] = useState<{
    isOpen: boolean;
    title: string;
    content: React.ReactNode;
  }>({
    isOpen: false,
    title: '',
    content: null,
  });

  const closeModal = () => {
    setModalContent(prev => ({ ...prev, isOpen: false }));
  };

  const openPrivacyPolicy = () => {
    setModalContent({
      isOpen: true,
      title: 'Privacy Policy',
      content: privacyContent,
    });
  };

  const openTermsOfService = () => {
    setModalContent({
      isOpen: true,
      title: 'Terms of Service',
      content: termsContent,
    });
  };

  const openAboutUs = () => {
    setModalContent({
      isOpen: true,
      title: 'About Us',
      content: aboutContent,
    });
  };

  return (
    <footer className="bg-gradient-to-br from-[#10375c] to-[#1a4971] text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Left Section */}
          <div className="flex-1 space-y-8">
            <Image
              src="/logo-full.png"
              alt="Forgeweb Logo"
              width={150}
              height={40}
              className="filter brightness-0 invert"
            />
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Let's Discuss Your Project
              </h2>
              <p className="text-gray-300 text-lg">
                Let's make your digital journey a success together!
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://wa.me/+923285038447"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Free Consultation
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-6">Choose How to Contact:</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4">
              <a
                href="https://linkedin.com/company/forgewebuk"
                className="flex items-center gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6 text-[#0077b5]" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://instagram.com/forgeweb"
                className="flex items-center gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-6 w-6 text-[#E4405F]" />
                <span>Instagram</span>
              </a>

              <a
                href="https://www.facebook.com/forgeweb.uk"
                className="flex items-center gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-6 w-6 text-[#1877F2]" />
                <span>Facebook</span>
              </a>

              <a
                href="https://wa.me/+923285038447"
                className="flex items-center gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="h-6 w-6 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-300">
              &copy; {new Date().getFullYear()} Forgeweb, Inc. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-300">
              <button
                onClick={openPrivacyPolicy}
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={openTermsOfService}
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </button>
              <button
                onClick={openAboutUs}
                className="hover:text-white transition-colors"
              >
                About Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalContent.isOpen}
        onClose={closeModal}
        title={modalContent.title}
      >
        {modalContent.content}
      </Modal>
    </footer>
  )
}

