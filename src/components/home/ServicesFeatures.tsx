'use client';

import React from 'react';
import { 
  FiShield, 
  FiTruck, 
  FiHeart, 
  FiHeadphones, 
  FiPackage, 
  FiCheckCircle,
  FiAward
} from 'react-icons/fi';

interface ServiceFeature {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  badge: string;
}

const features: ServiceFeature[] = [
  {
    icon: FiShield,
    title: '100% Live Arrival Guarantee',
    subtitle: 'Insulated packaging with pure medical oxygen ensures your fishes arrive alive, healthy, and stress-free.',
    badge: 'Guaranteed'
  },
  {
    icon: FiCheckCircle,
    title: '7-Day Health Quarantine',
    subtitle: 'Every ornamental fish undergoes strict 7-day quarantine and prophylactic treatments before being dispatched.',
    badge: 'Parasite Free'
  },
  {
    icon: FiAward,
    title: 'Snail-Free Tissue Plants',
    subtitle: 'Lab-certified tissue-cultured & submerged aquatic plants, free of pest snails, algae, and harmful chemicals.',
    badge: '100% Clean'
  },
  {
    icon: FiTruck,
    title: 'Nationwide Express Shipping',
    subtitle: 'Carefully coordinated live-cargo routes delivering across Chattogram, Dhaka, and all 64 districts of Bangladesh.',
    badge: 'Fast Dispatch'
  },
  {
    icon: FiHeadphones,
    title: 'Aquascaping Consultation',
    subtitle: 'Got questions about CO2, lighting, pH levels, or tank cycling? Our seasoned aquascapers are here to guide you.',
    badge: 'Free Guidance'
  },
  {
    icon: FiPackage,
    title: 'Thermal & Eco Packaging',
    subtitle: 'Custom EPS thermal boxes maintain optimum water temperature regardless of summer heat or winter chills.',
    badge: 'Climate Safe'
  }
];

export default function ServicesFeatures() {
  return (
    <section className="relative py-16 sm:py-20 bg-[#051721] overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wide mb-3">
            <FiHeart className="w-3.5 h-3.5 shrink-0" />
            <span>Why Aquarium Hobbyists Trust Us</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-100 tracking-tight leading-tight mb-3">
            Dedicated Care From Tank to Your Doorstep
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl mx-auto">
            We handle live aquatic species with veterinary care, advanced packaging technology, and genuine passion for the aquascaping community.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-6 sm:p-7 rounded-2xl bg-[#0a2531]/80 hover:bg-[#0c2f3e]/90 border border-slate-800/90 hover:border-cyan-500/40 backdrop-blur-md shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Glow overlay on card hover */}
                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-cyan-500/5 via-transparent to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="flex items-center justify-between mb-4">
                  {/* Icon Box */}
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-slate-950 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 shrink-0" />
                  </div>

                  {/* Badge */}
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
                    {feature.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-100 mb-2 group-hover:text-cyan-300 transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed">
                  {feature.subtitle}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
