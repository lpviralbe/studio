"use client"
import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Logo } from "../logo"

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/40">
        <div className="container flex items-center justify-between h-16">
            <Logo />
            <nav className="hidden md:flex items-center gap-6">
                {items.slice(1).map((item) => ( // Pula o 'Início'
                    <Link key={item.name} href={item.url} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                        {item.name}
                    </Link>
                ))}
            </nav>
        </div>
    </header>
  )
}
