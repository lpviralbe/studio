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
import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";
import Link from "next/link";


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
      <div className="fixed inset-0 -z-10">
        <BackgroundGradientAnimation />
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
      
      <div className="fixed bottom-10 left-0 right-0 z-50">
        <Dock>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <DockItem key={item.url}>
                <Link href={item.url}>
                  <DockIcon>
                    <Icon />
                  </DockIcon>
                  <DockLabel>{item.name}</DockLabel>
                </Link>
              </DockItem>
            )
          })}
        </Dock>
      </div>

      <Footer />
    </div>
  );
}
