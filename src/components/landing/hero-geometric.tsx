"use client";

import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import { NicheSearch } from "./niche-search";
import { useI18n } from "@/lib/i18n";
import { Typewriter } from "../ui/typewriter";

function HeroGeometric() {
    const { t } = useI18n();

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-transparent">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />
            
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(160,32,240,0.1),transparent_40%),radial-gradient(circle_at_80%_30%,_rgba(60,130,240,0.1),transparent_40%)]" />

            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <div
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12 animate-fade-in-up"
                    >
                        <Circle className="h-2 w-2 fill-rose-500/80" />
                        <span className="text-sm text-white/60 tracking-wide">
                            ViralBe.AI
                        </span>
                    </div>

                    <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                                {t('hero.title')}
                            </span>
                            <span
                                className={cn(
                                    "block min-h-[50px] md:min-h-[96px] bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 "
                                )}
                            >
                                <Typewriter text={[t('hero.typewriter1'), t('hero.typewriter2')]} />
                            </span>
                        </h1>
                    </div>

                    <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
                            {t('hero.description')}
                        </p>
                    </div>

                    <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                       <NicheSearch />
                    </div>
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
        </div>
    );
}

export { HeroGeometric }
