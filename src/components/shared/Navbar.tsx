'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from '@/lib/auth-client';
import {
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiLogOut,
  FiLayout,
  FiMenu,
  FiX,
} from 'react-icons/fi';

interface SearchResultItem {
  id: string;
  title: string;
  category: string;
  slug: string;
}

export default function Navbar() {
  const pathname = usePathname();
  const { data: session } = useSession();

  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const [cartCount] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mockSearchData: SearchResultItem[] = [
    { id: '1', title: 'Red Dragon Guppy', category: 'Fish', slug: 'red-dragon-guppy' },
    { id: '2', title: 'Halfmoon Betta Fighter', category: 'Fish', slug: 'halfmoon-betta' },
    { id: '3', title: 'Anubias Nana Plant', category: 'Aquatic Plants', slug: 'anubias-nana' },
    { id: '4', title: 'Neon Tetra', category: 'Fish', slug: 'neon-tetra' },
    { id: '5', title: 'Java Moss', category: 'Aquatic Plants', slug: 'java-moss' },
  ];

  const filteredSuggestions =
    searchQuery.trim() === ''
      ? []
      : mockSearchData.filter(
          (item) =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.category.toLowerCase().includes(searchQuery.toLowerCase())
        );

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'All Fishes', path: '/fishes' },
    { name: 'Aquatic Plants', path: '/plants' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const userRole = (session?.user as unknown as { role?: string })?.role || 'buyer';

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#051721]/90 backdrop-blur-md border-b border-cyan-500/10 shadow-lg shadow-slate-950/20'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-16">

          <Link href="/" className="flex items-center gap-2.5">
            <div className="relative w-35 h-9 shrink-0 overflow-hidden ">
              <Image
                src="https://i.ibb.co.com/xKWFSGYy/fishpedia-logo.png"
                alt="FishPedia Logo"
                fill
                sizes="200px"
                className="object-cover"
                priority
              />
            </div>
            
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`relative py-1 text-sm font-medium transition-colors ${
                    isActive ? 'text-cyan-400 font-semibold' : 'text-slate-300 hover:text-cyan-300'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transition-transform duration-300 ease-out origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0 hover:scale-x-100'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4 sm:gap-5">

            <div className="relative">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`p-2 rounded-lg transition-colors ${
                  isSearchOpen ? 'text-cyan-400 bg-cyan-500/10' : 'text-slate-300 hover:text-cyan-400'
                }`}
                aria-label="Toggle Search"
              >
                <FiSearch className="w-5 h-5" />
              </button>

              {isSearchOpen && (
                <div className="absolute right-0 top-10 z-50 w-64 sm:w-84">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-[#0a2531] border border-cyan-500/40 rounded-md text-slate-100 placeholder-slate-400 focus:outline-none focus:border-cyan-400 shadow-lg"
                    autoFocus
                  />

                  {searchQuery.trim() !== '' && (
                    <div className="mt-1 bg-[#0a2531] border border-slate-800 rounded-md shadow-xl overflow-hidden max-h-48 overflow-y-auto">
                      {filteredSuggestions.length > 0 ? (
                        filteredSuggestions.map((item) => (
                          <Link
                            key={item.id}
                            href={`/product/${item.slug}`}
                            onClick={() => {
                              setIsSearchOpen(false);
                              setSearchQuery('');
                            }}
                            className="flex flex-col px-3 py-2 hover:bg-cyan-500/10 border-b border-slate-800/50 last:border-none transition-colors"
                          >
                            <span className="text-xs font-medium text-slate-200 truncate">{item.title}</span>
                            <span className="text-[10px] uppercase text-cyan-400">{item.category}</span>
                          </Link>
                        ))
                      ) : (
                        <div className="px-3 py-2 text-[10px] text-slate-400 text-center">
                          No items found
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>

            <Link
              href="/cart"
              className="relative p-2 text-slate-300 hover:text-cyan-400 transition-colors"
              aria-label="View Cart"
            >
              <FiShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-cyan-400 text-slate-950 font-bold text-xs w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {session?.user ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-2 focus:outline-none"
                  aria-label="User Options"
                >
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-cyan-500/50 hover:border-cyan-400 transition-colors relative bg-[#0a2531] flex items-center justify-center">
                    {session.user.image ? (
                      <Image
                        src={session.user.image}
                        alt={session.user.name || 'User Profile Avatar'}
                        fill
                        sizes="32px"
                        className="object-cover"
                      />
                    ) : (
                      <FiUser className="w-4 h-4 text-cyan-400" />
                    )}
                  </div>
                </button>

                {isProfileOpen && (
                  <div className="absolute right-0 mt-3 w-60 bg-[#0a2531] border border-cyan-500/20 rounded-xl shadow-xl py-2 z-50">

                    <div className="px-4 py-2 border-b border-slate-800">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-sm font-semibold text-slate-100 truncate">
                          {session.user.name}
                        </p>
                        <span className="text-xs uppercase font-bold px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                          {userRole}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 truncate">{session.user.email}</p>
                    </div>

                    <div className="py-1">
                      <Link
                        href={userRole === 'admin' ? '/admin/dashboard' : '/dashboard'}
                        className="flex items-center gap-2.5 px-4 py-2 text-sm text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        <FiLayout className="w-4 h-4" />
                        Overview
                      </Link>

                      <Link
                        href="/profile"
                        className="flex items-center gap-2.5 px-4 py-2 text-sm text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        <FiUser className="w-4 h-4" />
                        View Profile
                      </Link>
                    </div>

                    <div className="border-t border-slate-800 pt-1 mt-1">
                      <button
                        onClick={() => {
                          setIsProfileOpen(false);
                          signOut();
                        }}
                        className="w-full flex items-center gap-2.5 px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 transition-colors"
                      >
                        <FiLogOut className="w-4 h-4" />
                        Logout
                      </button>
                    </div>

                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/signup"
                className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wider text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-md shadow-md transition-all uppercase"
              >
                Get Started
              </Link>
            )}

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-cyan-400 focus:outline-none"
              aria-label="Toggle Navigation Drawer"
            >
              {isMobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#051721]/95 backdrop-blur-md border-b border-cyan-500/20 px-4 pt-2 pb-5 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-sm font-medium ${
                pathname === link.path
                  ? 'bg-cyan-500/10 text-cyan-400 border-l-2 border-cyan-400'
                  : 'text-slate-300 hover:bg-slate-900 hover:text-cyan-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
          {!session?.user && (
            <div className="pt-2">
              <Link
                href="/signup"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center px-4 py-2 text-slate-950 bg-cyan-400 font-semibold rounded-md text-sm uppercase"
              >
                Get Started
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
}