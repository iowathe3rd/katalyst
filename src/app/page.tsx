import Cases from "@/components/sections/home/Case";
import Hero from "@/components/sections/home/Hero";
import Services from "@/components/sections/home/Services";
import Team from "@/components/sections/home/Team";

export default function Home() {
  return (
    <main className="space-y-20">
      <Hero />
      <Services />
      <Cases />
      <Team />
    </main>
  );
}
