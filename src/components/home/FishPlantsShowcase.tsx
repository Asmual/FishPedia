'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { 
  FiShoppingBag, 
  FiHeart, 
  FiEye, 
  FiStar, 
  FiArrowRight, 
  FiCheck,
  FiDroplet
} from 'react-icons/fi';

type FilterCategory = 'all' | 'fish' | 'plant' | 'bestseller';

interface ShowcaseItem {
  id: string;
  title: string;
  category: 'fish' | 'plant';
  categoryLabel: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number;
  reviewsCount: number;
  tag: string;
  waterType: string;
  temperamentOrLight: string;
  slug: string;
  isBestSeller?: boolean;
}

const showcaseItems: ShowcaseItem[] = [
  {
    id: '1',
    title: 'Albino Full Red Dumbo Ear Guppy (Pair)',
    category: 'fish',
    categoryLabel: 'Exotic Guppy',
    price: 450,
    originalPrice: 600,
    image: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewsCount: 38,
    tag: 'Top Breed',
    waterType: 'Freshwater',
    temperamentOrLight: 'Peaceful',
    slug: 'albino-full-red-dumbo-ear-guppy',
    isBestSeller: true,
  },
  {
    id: '2',
    title: 'Royal Samurai Halfmoon Betta Fighter',
    category: 'fish',
    categoryLabel: 'Fighter / Betta',
    price: 750,
    originalPrice: 950,
    image: 'https://images.unsplash.com/photo-1534043464124-3be32fe000c9?auto=format&fit=crop&w=800&q=80',
    rating: 5.0,
    reviewsCount: 52,
    tag: 'Rare Import',
    waterType: 'Freshwater',
    temperamentOrLight: 'Aggressive',
    slug: 'royal-samurai-halfmoon-betta',
    isBestSeller: true,
  },
  {
    id: '3',
    title: 'Anubias Nana Petite on Natural Driftwood',
    category: 'plant',
    categoryLabel: 'Aquatic Plant',
    price: 320,
    originalPrice: 400,
    image: 'https://images.unsplash.com/photo-1518877593221-1f28d84a147e?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviewsCount: 29,
    tag: 'Easy Care',
    waterType: 'Low Light',
    temperamentOrLight: 'CO2 Optional',
    slug: 'anubias-nana-petite-driftwood',
    isBestSeller: false,
  },
  {
    id: '4',
    title: 'Neon Blue Dwarf Gourami (Show Quality)',
    category: 'fish',
    categoryLabel: 'Gourami',
    price: 380,
    originalPrice: 480,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    reviewsCount: 22,
    tag: 'Community Safe',
    waterType: 'Freshwater',
    temperamentOrLight: 'Semi-Peaceful',
    slug: 'neon-blue-dwarf-gourami',
    isBestSeller: false,
  },
  {
    id: '5',
    title: 'Rotala Rotundifolia Blood Red (Bunch)',
    category: 'plant',
    categoryLabel: 'Stem Plant',
    price: 180,
    originalPrice: 250,
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewsCount: 41,
    tag: 'Vibrant Red',
    waterType: 'Med-High Light',
    temperamentOrLight: 'Needs CO2',
    slug: 'rotala-rotundifolia-blood-red',
    isBestSeller: true,
  },
  {
    id: '6',
    title: 'Cardinal Tetra School (Pack of 6)',
    category: 'fish',
    categoryLabel: 'Schooling Fish',
    price: 420,
    originalPrice: 550,
    image: 'https://images.unsplash.com/photo-1520302656913-664000dd9a42?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviewsCount: 34,
    tag: 'Best Schooler',
    waterType: 'Freshwater',
    temperamentOrLight: 'Very Peaceful',
    slug: 'cardinal-tetra-school-pack',
    isBestSeller: true,
  },
  {
    id: '7',
    title: 'Bucephalandra Deep Purple Tissue Culture',
    category: 'plant',
    categoryLabel: 'Epiphyte Plant',
    price: 490,
    originalPrice: 650,
    image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=800&q=80',
    rating: 5.0,
    reviewsCount: 19,
    tag: 'Exotic Collector',
    waterType: 'Low-Med Light',
    temperamentOrLight: 'Slow Growing',
    slug: 'bucephalandra-deep-purple',
    isBestSeller: false,
  },
  {
    id: '8',
    title: 'Celestial Pearl Danio (Galaxy Rasbora Pair)',
    category: 'fish',
    categoryLabel: 'Nano Fish',
    price: 550,
    originalPrice: 700,
    image: 'https://images.unsplash.com/photo-1571752726703-5e7d1f6598a8?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewsCount: 27,
    tag: 'Nano Tank Pick',
    waterType: 'Freshwater',
    temperamentOrLight: 'Peaceful',
    slug: 'celestial-pearl-danio-galaxy',
    isBestSeller: false,
  },
];

export default function FishPlantsShowcase() {
  const [activeTab, setActiveTab] = useState<FilterCategory>('all');
  const [wishlist, setWishlist] = useState<string[]>([]);

  const filteredItems = showcaseItems.filter((item) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'fish') return item.category === 'fish';
    if (activeTab === 'plant') return item.category === 'plant';
    if (activeTab === 'bestseller') return item.isBestSeller;
    return true;
  });

  const handleAddToCart = (item: ShowcaseItem) => {
    toast.success(`${item.title} added to cart!`, {
      icon: '🛒',
      style: {
        background: '#0a2531',
        color: '#f8fafc',
        border: '1px solid rgba(34, 211, 238, 0.4)',
      },
    });
  };

  const toggleWishlist = (id: string, title: string) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((item) => item !== id));
      toast(`${title} removed from favorites`, { icon: '💔' });
    } else {
      setWishlist([...wishlist, id]);
      toast.success(`${title} added to favorites!`, { icon: '❤️' });
    }
  };

  return (
    <section className="relative py-20 bg-[#051721] overflow-hidden border-t border-slate-800/80">
      
      {/* Background Glows */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header and Filter Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wide mb-3">
              <FiDroplet className="w-3.5 h-3.5 shrink-0" />
              <span>Handpicked Aquatic Catalog</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-100 tracking-tight leading-tight">
              Featured Exotic Fishes & Plants
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-xl">
              Thoroughly quarantined, healthy, and acclimatized aquatic life ready to thrive in your sanctuary.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-[#0a2531]/90 p-1.5 rounded-2xl border border-slate-800 backdrop-blur-md self-start lg:self-auto">
            {[
              { id: 'all', label: 'All Species' },
              { id: 'fish', label: 'Exotic Fishes' },
              { id: 'plant', label: 'Aquatic Plants' },
              { id: 'bestseller', label: '⭐ Best Sellers' },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as FilterCategory)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-cyan-400 text-slate-950 shadow-md shadow-cyan-500/20'
                      : 'text-slate-300 hover:text-cyan-300 hover:bg-slate-800/60'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => {
            const isFav = wishlist.includes(item.id);
            const discountPercent = Math.round(
              ((item.originalPrice - item.price) / item.originalPrice) * 100
            );

            return (
              <div
                key={item.id}
                className="group relative flex flex-col bg-[#0a2531]/80 rounded-2xl border border-slate-800 hover:border-cyan-500/40 backdrop-blur-md overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex-1"
              >
                {/* Image Container with Badges */}
                <div className="relative w-full h-52 overflow-hidden bg-[#051721]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Gradient Shadow Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a2531] via-transparent to-transparent opacity-80" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-md bg-cyan-400 text-slate-950 shadow-md">
                      {item.tag}
                    </span>
                    {discountPercent > 0 && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-red-500/90 text-white shadow-md">
                        -{discountPercent}% OFF
                      </span>
                    )}
                  </div>

                  {/* Wishlist Button */}
                  <button
                    onClick={() => toggleWishlist(item.id, item.title)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-[#051721]/80 hover:bg-[#051721] text-slate-300 hover:text-red-400 border border-slate-700/60 backdrop-blur-md transition-all cursor-pointer"
                    aria-label="Save to Wishlist"
                  >
                    <FiHeart className={`w-4 h-4 ${isFav ? 'text-red-500 fill-red-500' : ''}`} />
                  </button>

                  {/* Quick specs pill */}
                  <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[11px] text-slate-300 font-medium">
                    <span className="truncate bg-[#051721]/80 px-2 py-0.5 rounded-md border border-slate-700/60">
                      {item.waterType}
                    </span>
                    <span className="truncate bg-[#051721]/80 px-2 py-0.5 rounded-md border border-slate-700/60">
                      {item.temperamentOrLight}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-4 sm:p-5 flex flex-col flex-grow">
                  
                  {/* Category & Rating */}
                  <div className="flex items-center justify-between gap-2 mb-2 text-xs">
                    <span className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider">
                      {item.categoryLabel}
                    </span>
                    <div className="flex items-center gap-1 text-amber-400 font-bold text-[11px]">
                      <FiStar className="w-3.5 h-3.5 fill-amber-400" />
                      <span>{item.rating}</span>
                      <span className="text-slate-400 text-[10px]">({item.reviewsCount})</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-bold text-slate-100 group-hover:text-cyan-300 transition-colors line-clamp-2 mb-3 min-h-[40px]">
                    {item.title}
                  </h3>

                  {/* Price & Action Container */}
                  <div className="mt-auto pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
                    <div>
                      <p className="text-[10px] uppercase text-slate-400 font-semibold">Price</p>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-base font-extrabold text-slate-100">
                          ৳{item.price}
                        </span>
                        {item.originalPrice > item.price && (
                          <span className="text-xs text-slate-400 line-through">
                            ৳{item.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <FiShoppingBag className="w-3.5 h-3.5" />
                      <span>Add</span>
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom CTA to explore full catalog */}
        <div className="mt-14 text-center">
          <Link
            href="/fishes"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 font-bold text-xs sm:text-sm backdrop-blur-md shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            <span>Explore All Species & Plants in Catalog</span>
            <FiArrowRight className="w-4 h-4 text-cyan-400" />
          </Link>
        </div>

      </div>
    </section>
  );
}
