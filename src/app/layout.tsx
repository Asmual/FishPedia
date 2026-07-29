import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

// Primary Font for Body Text
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Stylistic & Professional Font for Headings/Brand Text
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "FishPedia | Discover Ornamental Fishes & Aquatic Plants",
    template: "%s | FishPedia",
  },
  description:
    "Your ultimate companion for exploring exotic ornamental fishes, vibrant aquatic plants, and premium aquarium accessories.",
  keywords: ["FishPedia", "Aquarium Plants", "Ornamental Fish", "Aquascaping"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body 
        className="min-h-full flex flex-col font-sans bg-slate-950 text-slate-100"
        suppressHydrationWarning
      >
        {/* React Hot Toast Setup */}
        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={8}
          toastOptions={{

            style: {
              marginTop: '65px',
              background: '#0f172a', // Slate-900 (Theme Card Color)
              color: '#f8fafc',      // Text Color
              border: '1px solid rgba(34, 211, 238, 0.2)', // Cyan Border
              fontSize: '14px',
              borderRadius: '8px',
            },
            success: {
              iconTheme: {
                primary: '#22d3ee', // Cyan primary accent
                secondary: '#0f172a',
              },
            },
            error: {
              iconTheme: {
                primary: '#f87171', // Red danger color
                secondary: '#0f172a',
              },
            },
          }}
        />

        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}