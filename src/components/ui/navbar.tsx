"use client"
import React, { useState } from "react"
import Link from "next/link"
import { Globe, LucideIcon, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Logo } from "../logo"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "./button"
import { useI18n } from "@/lib/i18n"
import { Sheet, SheetContent, SheetTrigger } from "./sheet"

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
                          className="group relative text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
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
                            <span className="sr-only">Select language</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setLanguage("en")}>
                            🇺🇸 English
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setLanguage("es")}>
                            🇪🇸 Español
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                 <div className="md:hidden">
                    <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Open menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[240px]">
                            <div className="flex flex-col h-full">
                                <div className="flex items-center justify-between p-4 border-b">
                                    <Logo />
                                    <SheetTrigger asChild>
                                        <Button variant="ghost" size="icon">
                                            <X className="h-6 w-6" />
                                            <span className="sr-only">Close menu</span>
                                        </Button>
                                    </SheetTrigger>
                                </div>
                                <nav className="flex flex-col gap-4 p-4">
                                    {items.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.url}
                                            className="flex items-center gap-3 p-2 rounded-md text-base font-medium text-foreground hover:bg-muted"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            <item.icon className="h-5 w-5" />
                                            {item.name}
                                        </Link>
                                    ))}
                                </nav>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
    </header>
  )
}
