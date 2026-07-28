import HeroSection from "@/components/home/HeroSection";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Navbar />
      <main className="grow">
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
}