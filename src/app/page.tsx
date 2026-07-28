import HeroSection from "@/components/home/HeroSection";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="grow pt-16">
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
}