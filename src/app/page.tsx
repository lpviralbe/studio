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
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Link from "next/link";
import { NavBar } from "@/components/ui/navbar";


const navItems = [
  { name: 'Início', url: '#', icon: Home },
  { name: 'Como Funciona', url: '#how-it-works', icon: HelpCircle },
  { name: 'Depoimentos', url: '#testimonials', icon: MessageCircle },
  { name: 'Preços', url: '#pricing', icon: BarChart },
  { name: 'FAQ', url: '#faq', icon: Sparkles },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
       <div aria-hidden="true" className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 h-[500px] w-[500px] bg-primary/20 rounded-full blur-[150px] animate-fade-in-up"></div>
          <div className="absolute bottom-0 right-0 h-[300px] w-[300px] bg-accent/20 rounded-full blur-[100px] animate-fade-in-up [animation-delay:200ms]"></div>
        </div>
      
      <NavBar items={navItems} />

      <main className="flex-1 relative z-10">
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
