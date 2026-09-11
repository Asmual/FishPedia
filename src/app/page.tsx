import HeroSection from "@/components/home/HeroSection";
import ServicesFeatures from "@/components/home/ServicesFeatures";
import FishPlantsShowcase from "@/components/home/FishPlantsShowcase";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <main className="grow">
        <HeroSection />
        <ServicesFeatures />
        <FishPlantsShowcase />
      </main>
    </div>
  );
}