import Cases from "@/components/sections/home/Case";
import Cta from "@/components/sections/home/Cta";
import Hero from "@/components/sections/home/Hero";
import Services from "@/components/sections/home/Services";
import Team from "@/components/sections/home/Team";
import Testimonials from "@/components/sections/home/Testimonials";

export default function Home() {
  return (
    <main className="space-y-20">
      <Hero />
      <Services />
      <Cases />
      <Team />
      <Testimonials />
      <Cta />
    </main>
  );
}
