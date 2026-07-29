'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight, FiShoppingBag, FiPercent } from 'react-icons/fi';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">

      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Aquarium Background"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Overlay for optimal readability */}
        <div className="absolute inset-0 bg-slate-950/45" />
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/60 via-slate-950/20 to-slate-950/90" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 w-full pt-20 sm:pt-24 flex flex-col items-center text-center">

        {/* Promotional Offer Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-[11px] sm:text-xs font-semibold tracking-wide backdrop-blur-md animate-pulse mb-3 sm:mb-4">
          <FiPercent className="w-3.5 h-3.5 text-cyan-400" />
          <span>Limited Offer: Get Up To 30% OFF Today!</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight leading-snug mb-3 sm:mb-4">
          Bring the Wonder of <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-teal-300 to-sky-400">
            Underwater Life
          </span> To Your Home
        </h1>

        {/* Subtitle / Description */}
        <p className="text-xs sm:text-sm text-slate-200 max-w-lg leading-relaxed mb-5 sm:mb-6">
          Discover healthy exotic fishes, handpicked vibrant aquatic plants, and premium setup tools carefully curated for aquascaping enthusiasts and hobbyists.
        </p>

        {/* CTA Action Buttons */}
        <div className="flex flex-row items-center justify-center gap-3 w-auto mb-4 sm:mb-6">
          <Link
            href="/fishes"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl shadow-lg shadow-cyan-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <FiShoppingBag className="w-4 h-4" />
            Explore Fishes
          </Link>

          <Link
            href="/plants"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-cyan-500/30 hover:border-cyan-400/60 rounded-xl backdrop-blur-md transition-all"
          >
            <span>Aquatic Plants</span>
            <FiArrowRight className="w-4 h-4 text-cyan-400" />
          </Link>
        </div>

        {/* Key Highlights */}
        <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800/80 w-full max-w-md">
          <div className="flex flex-col items-center">
            <p className="text-base sm:text-lg font-extrabold text-cyan-400">100%</p>
            <p className="text-[10px] sm:text-xs text-slate-300">Healthy Guarantee</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base sm:text-lg font-extrabold text-cyan-400">50+</p>
            <p className="text-[10px] sm:text-xs text-slate-300">Exotic Species</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base sm:text-lg font-extrabold text-cyan-400">Express</p>
            <p className="text-[10px] sm:text-xs text-slate-300">Safe Delivery</p>
          </div>
        </div>

      </div>
    </section>
  );
}