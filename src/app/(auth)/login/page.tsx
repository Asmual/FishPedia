/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { 
  FiMail, 
  FiLock, 
  FiEye, 
  FiEyeOff, 
  FiArrowRight 
} from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import toast from 'react-hot-toast';

export default function LoginPage() {
  const router = useRouter();

  // Form State
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  // UI States
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Handle Input Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Form Submission Logic
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { email, password } = formData;

    // Basic Validations
    if (!email || !password) {
      toast.error('Please enter both email and password!');
      return;
    }

    setLoading(true);
    const toastId = toast.loading('Signing in to your account...');

    try {
      // TODO: Replace with your actual NextAuth / Custom Auth Login API endpoint
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Welcome back to FishPedia!', { id: toastId });
        setFormData({ email: '', password: '', rememberMe: false });
        
        // Redirect to Home or Dashboard
        setTimeout(() => {
          router.push('/');
        }, 1200);
      } else {
        toast.error(data.message || 'Invalid email or password!', { id: toastId });
      }
    } catch (error) {
      toast.error('Something went wrong. Please check your connection.', { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  // Google Sign In Handler
  const handleGoogleSignIn = () => {
    toast('Connecting to Google Sign-In...');
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[#051721] overflow-hidden">
      
      {/* Background Image with Dark Overlay & Minimal Blur */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/auth-bg.jpg"
          alt="Auth Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30"
        />
        <div 
          className="absolute inset-0 backdrop-blur-[2px]" 
          style={{
            background: 'linear-gradient(to bottom, rgba(5, 23, 33, 0.85), rgba(3, 14, 21, 0.95))'
          }}
        />
      </div>

      {/* Main Glassmorphism Form Container */}
      <div className="relative z-10 w-full max-w-md bg-[#0a2531]/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-cyan-950/50">
        
        {/* Header & Logo Section */}
        <div className="flex flex-col items-center text-center space-y-3 mb-5">
          <Link href="/" className="inline-flex items-center gap-2 group">
            <div className="relative w-35 h-11 shrink-0 overflow-hidden">
              <Image 
                src="/images/FishPedia-logo.png" 
                alt="FishPedia Logo" 
                fill 
                sizes="110px"
                className="object-cover" 
              />
            </div>
            
          </Link>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-100">Welcome Back</h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Log in to manage your aquatic catalog & profile
            </p>
          </div>
        </div>

        {/* Focused Sign Up Link Box */}
        <div className="mb-6 p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-between gap-2 text-xs sm:text-sm">
          <span className="text-slate-300 font-medium">New to FishPedia?</span>
          <Link 
            href="/signup" 
            className="inline-flex items-center gap-1 font-bold text-cyan-400 hover:text-cyan-300 hover:underline transition-all"
          >
            Create Account <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Google Sign In Button */}
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="w-full py-2.5 px-4 rounded-xl bg-slate-900/90 border border-slate-700/80 hover:border-cyan-500/50 text-slate-200 text-sm font-semibold flex items-center justify-center gap-3 hover:bg-slate-800 transition-all shadow-md mb-5"
        >
          <FcGoogle className="w-5 h-5" />
          <span>Continue with Google</span>
        </button>

        {/* Divider */}
        <div className="relative flex items-center justify-center mb-5">
          <div className="border-t border-slate-800 w-full" />
          <span className="bg-[#0a2531] px-3 text-xs text-slate-400 font-medium uppercase tracking-wider absolute">
            Or with Email
          </span>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Email Input */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className="w-full pl-10 pr-4 py-2.5 bg-[#051721]/90 border border-slate-700/80 rounded-xl text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Password
            </label>
            <div className="relative">
              <FiLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full pl-10 pr-10 py-2.5 bg-[#051721]/90 border border-slate-700/80 rounded-xl text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-cyan-400 transition-colors"
              >
                {showPassword ? <FiEyeOff className="w-4 h-4" /> : <FiEye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password Options */}
          <div className="flex items-center justify-between text-xs pt-1">
            <label className="flex items-center gap-2 cursor-pointer text-slate-300 hover:text-slate-100 transition-colors">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="w-4 h-4 rounded border-slate-700 bg-[#051721] text-cyan-400 focus:ring-cyan-400 focus:ring-offset-slate-900"
              />
              <span>Remember me</span>
            </label>

            <Link 
              href="/forgot-password" 
              className="text-cyan-400 hover:text-cyan-300 hover:underline transition-all font-medium"
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 mt-2 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-sm font-extrabold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Logging in...' : 'Sign In'}
          </button>
        </form>

      </div>
    </div>
  );
}