'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { 
  FiPercent, 
  FiClock, 
  FiCopy, 
  FiCheck, 
  FiShoppingBag, 
  FiGift, 
  FiArrowRight, 
  FiZap 
} from 'react-icons/fi';

interface OfferBundle {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  discountPercentage: number;
  originalPrice: number;
  salePrice: number;
  image: string;
  itemsIncluded: string[];
  endsIn: string;
  slug: string;
}

const bundles: OfferBundle[] = [
  {
    id: 'bundle-1',
    title: "Aquascaper's Complete Starter Combo",
    badge: 'Best Value',
    tagline: 'Everything you need to launch a breathtaking planted aquarium.',
    discountPercentage: 28,
    originalPrice: 1950,
    salePrice: 1399,
    image: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80',
    itemsIncluded: [
      '1 Pair German Blue Rams',
      '3x Anubias Nana Petite on Lava Rock',
      'Aquarium Plant Nutrition Substrate (3L)',
      'Free Water Conditioner Sachet'
    ],
    endsIn: '28 Hours Left',
    slug: 'aquascapers-starter-combo'
  },
  {
    id: 'bundle-2',
    title: 'Exotic Betta Collector Trio Pack',
    badge: 'High Demand',
    tagline: 'Hand-selected showcase Bettas with intense genetics and coloration.',
    discountPercentage: 30,
    originalPrice: 1650,
    salePrice: 1150,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    itemsIncluded: [
      '1x Premium Halfmoon Male Betta',
      '2x Koi Galaxy Female Bettas',
      'Natural Indian Almond Leaves (Pack of 5)',
      'High-Protein Betta Pellets (Sample)'
    ],
    endsIn: 'Limited Stock',
    slug: 'exotic-betta-collector-trio'
  },
  {
    id: 'bundle-3',
    title: 'Lush Carpet & Midground Plant Bundle',
    badge: 'Plant Special',
    tagline: 'Create a vivid emerald underwater carpet in under 3 weeks.',
    discountPercentage: 29,
    originalPrice: 980,
    salePrice: 699,
    image: 'https://images.unsplash.com/photo-1518877593221-1f28d84a147e?auto=format&fit=crop&w=800&q=80',
    itemsIncluded: [
      '1 Cup Monte Carlo (Tissue Culture)',
      '1 Cup Dwarf Hairgrass (Eleocharis)',
      'Macro & Micro Liquid Plant Fertilizer (100ml)',
      'Snail-Free Laboratory Certificate'
    ],
    endsIn: 'Selling Fast',
    slug: 'lush-carpet-plant-bundle'
  }
];

export default function SpecialOffers() {
  const [copied, setCopied] = useState(false);
  const couponCode = 'AQUA30';

  const handleCopyCoupon = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    toast.success(`Coupon code ${couponCode} copied to clipboard! Enjoy 30% OFF!`, {
      icon: '🎉',
      style: {
        background: '#0a2531',
        color: '#f8fafc',
        border: '1px solid rgba(34, 211, 238, 0.4)',
      },
    });
    setTimeout(() => setCopied(false), 3000);
  };

  const handleClaimDeal = (bundle: OfferBundle) => {
    toast.success(`Combo deal "${bundle.title}" added to cart!`, {
      icon: '🎁',
      style: {
        background: '#0a2531',
        color: '#f8fafc',
        border: '1px solid rgba(34, 211, 238, 0.4)',
      },
    });
  };

  return (
    <section className="relative py-20 bg-[#051721] overflow-hidden border-t border-slate-800/80">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-120 h-120 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wide mb-3">
            <FiZap className="w-3.5 h-3.5 shrink-0" />
            <span>Exclusive Flash Deals & Combo Packs</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-100 tracking-tight leading-tight mb-3">
            Special Aquascaping Offers of the Week
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Curated combos designed by experienced aquarists. Save big on compatible fish species, healthy plant packs, and setup essentials.
          </p>
        </div>

        {/* Promo Coupon Card Banner */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-linear-to-r from-[#0a2531] via-[#0b3345] to-[#0a2531] border border-cyan-500/30 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-cyan-400/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            
            <div className="flex items-center gap-4 text-left">
              <div className="p-4 rounded-2xl bg-cyan-400 text-slate-950 shrink-0 shadow-lg shadow-cyan-400/20">
                <FiGift className="w-8 h-8" />
              </div>
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-cyan-400">
                  Weekend Flash Special
                </span>
                <h3 className="text-lg sm:text-2xl font-black text-slate-100 mt-0.5">
                  Get 30% OFF On All Live Fish Orders Over ৳1,500
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Apply coupon code at checkout. Limited to the first 50 shoppers this weekend!
                </p>
              </div>
            </div>

            {/* Click to Copy Coupon Box */}
            <div className="flex items-center gap-3 bg-[#051721]/90 border border-cyan-500/40 p-2 sm:p-2.5 rounded-2xl shrink-0 shadow-inner">
              <div className="px-3 sm:px-4 text-center">
                <p className="text-[10px] uppercase font-bold text-slate-400">Coupon Code</p>
                <p className="text-base sm:text-lg font-mono font-black text-cyan-300 tracking-wider">
                  {couponCode}
                </p>
              </div>

              <button
                onClick={handleCopyCoupon}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                {copied ? (
                  <>
                    <FiCheck className="w-4 h-4 text-emerald-950" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <FiCopy className="w-4 h-4" />
                    <span>Copy Code</span>
                  </>
                )}
              </button>
            </div>

          </div>
        </div>

        {/* Combo Bundles Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bundles.map((bundle) => (
            <div
              key={bundle.id}
              className="group relative flex flex-col rounded-3xl bg-[#0a2531]/80 hover:bg-[#0b2b3a]/90 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-md overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1.5"
            >
              
              {/* Bundle Image Container */}
              <div className="relative w-full h-56 overflow-hidden bg-[#051721]">
                <Image
                  src={bundle.image}
                  alt={bundle.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0a2531] via-transparent to-transparent opacity-90" />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                  <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-md bg-cyan-400 text-slate-950 shadow-md">
                    {bundle.badge}
                  </span>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-red-500 text-white shadow-md">
                    SAVE {bundle.discountPercentage}%
                  </span>
                </div>

                {/* Expiry Pill */}
                <div className="absolute top-4 right-4 inline-flex items-center gap-1 text-[10px] font-bold text-slate-200 bg-[#051721]/80 border border-slate-700/60 px-2.5 py-1 rounded-full backdrop-blur-md">
                  <FiClock className="w-3 h-3 text-cyan-400 shrink-0" />
                  <span>{bundle.endsIn}</span>
                </div>
              </div>

              {/* Bundle Content */}
              <div className="p-6 flex flex-col flex-grow">
                
                <h3 className="text-lg font-extrabold text-slate-100 group-hover:text-cyan-300 transition-colors mb-1.5">
                  {bundle.title}
                </h3>
                
                <p className="text-xs text-slate-400 leading-relaxed mb-5">
                  {bundle.tagline}
                </p>

                {/* Included Items Checklist */}
                <div className="mb-6 p-4 rounded-2xl bg-[#051721]/70 border border-slate-800">
                  <p className="text-[10px] uppercase font-bold text-cyan-400 tracking-wider mb-2.5">
                    Package Includes:
                  </p>
                  <ul className="space-y-2">
                    {bundle.itemsIncluded.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <FiCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price and CTA */}
                <div className="mt-auto pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] uppercase text-slate-400 font-semibold block">
                      Combo Price
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-black text-cyan-300">
                        ৳{bundle.salePrice}
                      </span>
                      <span className="text-xs text-slate-400 line-through">
                        ৳{bundle.originalPrice}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleClaimDeal(bundle)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-extrabold text-xs shadow-lg shadow-cyan-500/20 transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <FiShoppingBag className="w-4 h-4" />
                    <span>Claim Deal</span>
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Explore All Combos Footer Link */}
        <div className="mt-12 text-center">
          <Link
            href="/fishes?category=combos"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>View All Weekly Flash Deals & Combos</span>
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
