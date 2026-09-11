import HeroSection from "@/components/home/HeroSection";
import ServicesFeatures from "@/components/home/ServicesFeatures";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <main className="grow">
        <HeroSection />
        <ServicesFeatures />
      </main>
    </div>
  );
}