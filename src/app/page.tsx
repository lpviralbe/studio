'use client';
import { Home, Sparkles, MessageCircle, BarChart, HelpCircle } from "lucide-react";
import { Faq } from "@/components/landing/faq";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Pricing } from "@/components/landing/pricing";
import { ProblemSolution } from "@/components/landing/problem-solution";
import { SocialProof } from "@/components/landing/social-proof";
import { Testimonials } from "@/components/landing/testimonials";
import { NavBar } from "@/components/ui/navbar";

const navItems = [
  { name: "Início", url: "#", icon: Home },
  { name: "Como Funciona", url: "#how-it-works", icon: Sparkles },
  { name: "Depoimentos", url: "#testimonials", icon: MessageCircle },
  { name: "Preços", url: "#pricing", icon: BarChart },
  { name: "FAQ", url: "#faq", icon: HelpCircle },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <NavBar items={navItems} />
      <main className="flex-1">
        <Hero />
        <ProblemSolution />
        <SocialProof />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
