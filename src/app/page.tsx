import HeroSection from "@/components/home/HeroSection";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <main className="grow">
        <HeroSection />
      </main>
    </div>
  );
}