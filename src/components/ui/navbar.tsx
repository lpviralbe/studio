"use client"
import React, { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Globe, LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Logo } from "../logo"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "./button"

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
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [language, setLanguage] = useState("PT");

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/40", className)}>
        <div className="container flex items-center justify-between h-16">
            <Logo />
            <div className="flex items-center gap-2">
                <nav className="hidden md:flex items-center gap-6">
                    {items.slice(1).map((item) => ( // Pula o 'Início'
                        <Link 
                          key={item.name} 
                          href={item.url} 
                          className="relative text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                          onMouseEnter={() => setHoveredItem(item.name)}
                          onMouseLeave={() => setHoveredItem(null)}
                        >
                            {hoveredItem === item.name && (
                                <motion.span
                                    layoutId="navbar-highlight"
                                    className="absolute bottom-[-8px] left-0 h-0.5 bg-primary w-full"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                            )}
                            {item.name}
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
                        <DropdownMenuItem onClick={() => setLanguage("PT")}>
                            Português (BR)
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setLanguage("EN")}>
                            English
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setLanguage("ES")}>
                            Español
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    </header>
  )
}
