'use client';

import React, { useState } from 'react';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiClock, 
  FiSend, 
  FiCheckCircle,
  FiHelpCircle 
} from 'react-icons/fi';

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <main className="relative min-h-screen bg-[#051721] text-slate-100 overflow-hidden pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wide mb-4">
            <FiMail className="w-3.5 h-3.5 shrink-0" />
            <span>Get In Touch</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight mb-4">
            We’d Love to Hear From You
          </h1>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Have questions about exotic fish care, plant setups, or your order? Reach out to our team of aquascaping experts!
          </p>
        </div>

        {/* Contact Info & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-20">
          
          {/* Left Column: Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <div className="p-6 rounded-2xl bg-[#0a2531]/80 border border-slate-800/80 backdrop-blur-md shadow-xl">
              <h2 className="text-lg font-bold text-slate-100 mb-6 border-b border-slate-800 pb-3">
                Contact Information
              </h2>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                    <FiMapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-200">Our Location</h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      Agrabad Commercial Area, Chattogram, Bangladesh
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                    <FiPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-200">Phone & WhatsApp</h3>
                    <p className="text-xs text-slate-400 mt-1">+880 1700-000000</p>
                    <p className="text-xs text-slate-400">+880 1800-000000</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-200">Email Address</h3>
                    <p className="text-xs text-slate-400 mt-1">support@fishpedia.com</p>
                    <p className="text-xs text-slate-400">info@fishpedia.com</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                    <FiClock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-200">Business Hours</h3>
                    <p className="text-xs text-slate-400 mt-1">Saturday - Thursday: 10:00 AM - 9:00 PM</p>
                    <p className="text-xs text-slate-400">Friday: Closed</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Quick Assurance Box */}
            <div className="p-6 rounded-2xl bg-linear-to-br from-cyan-950/40 to-slate-900/80 border border-cyan-500/20 backdrop-blur-md">
              <h3 className="text-sm font-bold text-cyan-400 mb-2">100% Live Arrival Guarantee</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We take extreme care in packaging live fishes and aquatic plants. Facing any delivery issue? Send us a photo within 2 hours of delivery!
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0a2531]/80 border border-slate-800/80 backdrop-blur-md shadow-xl">
              <h2 className="text-xl font-bold text-slate-100 mb-2">Send Us a Message</h2>
              <p className="text-xs text-slate-400 mb-6">Fill out the form below and our response team will get back to you within 24 hours.</p>

              {isSubmitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-3 text-xs font-semibold">
                  <FiCheckCircle className="w-5 h-5 shrink-0" />
                  <span>Thank you! Your message has been sent successfully.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">Your Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="John Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#051721] border border-slate-800 text-slate-200 placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="john@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#051721] border border-slate-800 text-slate-200 placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">Subject</label>
                  <input 
                    type="text" 
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    placeholder="Inquiry about Betta Fish or Plant Setup"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#051721] border border-slate-800 text-slate-200 placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">Message</label>
                  <textarea 
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#051721] border border-slate-800 text-slate-200 placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <FiSend className="w-4 h-4 shrink-0" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* FAQ Section */}
        <div className="pt-12 border-t border-slate-800/80">
          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 text-cyan-400 text-xs font-semibold mb-2">
              <FiHelpCircle className="w-4 h-4 shrink-0" />
              <span>Got Questions?</span>
            </div>
            <h2 className="text-2xl font-extrabold text-slate-100">Frequently Asked Questions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: "How do you ensure safe live fish delivery?",
                a: "We use insulated oxygenated bags, thermal padding, and express delivery services to ensure your fishes arrive healthy and active."
              },
              {
                q: "Do you offer nationwide delivery across Bangladesh?",
                a: "Yes, we deliver live fishes, aquatic plants, and aquascaping accessories all over Bangladesh through specialized courier services."
              },
              {
                q: "What should I do if a fish arrives unwell?",
                a: "Please record an unboxing video or clear photo within 2 hours of package receipt and contact our WhatsApp support for instant replacement or refund."
              },
              {
                q: "Can I get assistance for setting up my first aquarium?",
                a: "Absolutely! Our expert aquascapers provide step-by-step guidance on substrate, lighting, filtration, and water cycling."
              }
            ].map((faq, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-[#0a2531]/50 border border-slate-800">
                <h3 className="text-sm font-bold text-slate-200 mb-2">{faq.q}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}