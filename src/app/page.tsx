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


export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed inset-0 -z-10 h-full w-full">
        <BackgroundGradientAnimation 
           gradientBackgroundStart="var(--background)"
           gradientBackgroundEnd="var(--background)"
           firstColor="210, 40%, 96.1%"
           secondColor="217.2, 91.2%, 59.8%"
           thirdColor="210, 40%, 96.1%"
           fourthColor="217.2, 91.2%, 59.8%"
           fifthColor="222.2 84% 4.9%"
           pointerColor="210, 40%, 96.1%"
        />
      </div>
      
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
