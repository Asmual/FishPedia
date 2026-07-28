'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiGithub, 
  FiFacebook, 
  FiInstagram, 
  FiTwitter, 
  FiHeart 
} from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#051721] text-slate-300 border-t border-cyan-500/10 overflow-hidden">
      
      {/* Background Image with Clear Visibility & Light Blur */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Footer-bg.jpg"
          alt="Footer Background"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        {/* Soft Linear Overlay & Minimal Blur (No VS Code Warnings) */}
        <div 
          className="absolute inset-0 backdrop-blur-[1px]" 
          style={{
            background: 'linear-gradient(to bottom, rgba(5, 23, 33, 0.65), rgba(3, 14, 21, 0.75))'
          }}
        />
      </div>

      {/* Ambient Glow Effects */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px z-10" 
        style={{
          background: 'linear-gradient(to right, transparent, rgba(6, 182, 212, 0.4), transparent)'
        }}
      />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-125 h-50 bg-cyan-500/5 blur-[120px] pointer-events-none z-10" />

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-10 border-b border-slate-800/80">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-2 space-y-4">
            {/* Logo Section */}
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="relative w-9 h-9 shrink-0 overflow-hidden rounded-xl border border-cyan-500/30">
                <Image 
                  src="/images/logo.png" 
                  alt="FishPedia Logo" 
                  fill 
                  sizes="36px"
                  className="object-cover" 
                />
              </div>
              <span className="text-xl font-extrabold tracking-wider">
                <span className="text-cyan-400">Fish</span>
                <span className="text-slate-100">Pedia</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Your trusted destination for healthy exotic fishes, vibrant aquatic plants, and high-quality aquascaping essentials for your modern home sanctuary.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: FiFacebook, href: '#', label: 'Facebook' },
                { icon: FiInstagram, href: '#', label: 'Instagram' },
                { icon: FiTwitter, href: '#', label: 'Twitter' },
                { icon: FiGithub, href: '#', label: 'GitHub' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 rounded-lg bg-[#0a2531]/80 backdrop-blur-md border border-slate-800/80 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-200"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {[
                { name: 'Home', path: '/' },
                { name: 'All Fishes', path: '/fishes' },
                { name: 'Aquatic Plants', path: '/plants' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    href={link.path} 
                    className="text-slate-400 hover:text-cyan-400 transition-colors inline-block py-0.5"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories Column */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wider">Categories</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {[
                { name: 'Exotic Goldfish', path: '/fishes?category=goldfish' },
                { name: 'Fighter / Betta', path: '/fishes?category=betta' },
                { name: 'Planted Aquariums', path: '/plants?category=planted' },
                { name: 'Substrates & Soil', path: '/tools?category=soil' },
                { name: 'Aquarium Lighting', path: '/tools?category=lighting' },
              ].map((cat, idx) => (
                <li key={idx}>
                  <Link 
                    href={cat.path} 
                    className="text-slate-400 hover:text-cyan-400 transition-colors inline-block py-0.5"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wider">Contact Info</h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <FiMapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Agrabad, Chattogram, Bangladesh</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FiPhone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>+880 1700-000000</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FiMail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="truncate">support@fishpedia.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar (Copyright & Credits) */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} FishPedia. All rights reserved.</p>
          
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <FiHeart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>for Aquascaping Enthusiasts</span>
          </p>
        </div>

      </div>
    </footer>
  );
}