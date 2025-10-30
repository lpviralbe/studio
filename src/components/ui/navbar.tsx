"use client"
import React, { useState } from "react"
import Link from "next/link"
import { Globe, LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Logo } from "../logo"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "./button"
import { useI18n } from "@/lib/i18n"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const { setLanguage, t } = useI18n();

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/40", className)}>
        <div className="container flex items-center justify-between h-16">
            <Logo />
            <div className="flex items-center gap-2">
                <nav className="hidden md:flex items-center gap-6">
                    {items.map((item) => (
                        <Link 
                          key={item.name} 
                          href={item.url} 
                          className="group relative text-base font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                        >
                            <item.icon className="h-4 w-4" />
                            {item.name}
                            <span className="absolute bottom-[-8px] left-0 h-0.5 bg-primary w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                        </Link>
                    ))}
                </nav>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Globe className="h-5 w-5" />
                            <span className="sr-only">Selecionar idioma</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setLanguage("pt")}>
                            🇧🇷 Português (BR)
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setLanguage("en")}>
                            🇺🇸 English
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setLanguage("es")}>
                            🇪🇸 Español
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    </header>
  )
}
