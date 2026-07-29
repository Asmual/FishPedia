'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiHome, FiArrowLeft } from 'react-icons/fi';

export default function NotFound() {
  return (
    <main className="relative min-h-[calc(100vh-80px)] w-full flex items-center justify-center bg-[#051721] text-slate-100 overflow-hidden px-4 pt-24 pb-12">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 translate-y-1/2 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Card */}
      <div className="relative z-10 max-w-lg w-full text-center flex flex-col items-center">
        
        {/* Animated Brand Logo Container */}
        <div className="mb-4 p-2 animate-pulse transition-transform duration-500 hover:scale-105">
          <div className="relative w-64 sm:w-80 h-16 sm:h-20 shrink-0 overflow-hidden">
            <Image
              src="https://i.ibb.co.com/xKWFSGYy/fishpedia-logo.png"
              alt="FishPedia Logo"
              fill
              priority
              sizes="(max-width: 640px) 256px, 320px"
              className="object-contain object-center"
            />
          </div>
        </div>

        {/* Animated Large 404 Text */}
        <h1 className="text-7xl sm:text-8xl lg:text-9xl font-black tracking-widest text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-teal-300 to-sky-500 animate-pulse select-none mb-1">
          404
        </h1>

        {/* Subtitle */}
        <h2 className="text-lg sm:text-xl font-bold text-slate-100 mb-2">
          Lost in the Deep Waters?
        </h2>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md mb-6">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable in our aquatic realm.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
          
          {/* Go Back Button */}
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-200 bg-[#0a2531] hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 rounded-xl backdrop-blur-md transition-all duration-200 cursor-pointer"
          >
            <FiArrowLeft className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Go Back</span>
          </button>

          {/* Return Home Button */}
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl shadow-lg shadow-cyan-500/20 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <FiHome className="w-4 h-4 shrink-0" />
            <span>Back to Home</span>
          </Link>

        </div>

        {/* Bottom Accent Line */}
        <div className="mt-8 w-28 h-1 bg-linear-to-r from-transparent via-cyan-500/40 to-transparent rounded-full" />

      </div>
    </main>
  );
}