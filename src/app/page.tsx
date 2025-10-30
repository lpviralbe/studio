'use client';
import { Home, Sparkles, MessageCircle, BarChart, HelpCircle } from "lucide-react";
import { Faq } from "@/components/landing/faq";
import { Footer } from "@/components/landing/footer";
import { HeroGeometric } from "@/components/landing/hero-geometric";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Pricing } from "@/components/landing/pricing";
import { ProblemSolution } from "@/components/landing/problem-solution";
import { SocialProof } from "@/components/landing/social-proof";
import { Testimonials } from "@/components/landing/testimonials";
import { NavBar } from "@/components/ui/navbar";
import { I18nProvider, useI18n } from "@/lib/i18n";


const navItems = [
  { name: 'nav.howItWorks', url: '#how-it-works', icon: HelpCircle },
  { name: 'nav.testimonials', url: '#testimonials', icon: MessageCircle },
  { name: 'nav.pricing', url: '#pricing', icon: BarChart },
  { name: 'nav.faq', url: '#faq', icon: Sparkles },
];

function HomePageContent() {
  const { t } = useI18n();
  const translatedNavItems = navItems.map(item => ({...item, name: t(item.name)}));

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar items={translatedNavItems} />

      <main className="flex-1">
        <HeroGeometric />
        <ProblemSolution />
        <HowItWorks />
        <SocialProof />
        <Testimonials />
        <Pricing />
        <Faq />
      </main>

      <Footer />
    </div>
  );
}

export default function HomePage() {
  return (
    <I18nProvider>
      <HomePageContent />
    </I18nProvider>
  )
}
