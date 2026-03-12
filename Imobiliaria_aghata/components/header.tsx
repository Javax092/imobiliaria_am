"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl font-bold text-primary">
              Elite<span className="text-secondary">Imóveis</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#imoveis" className="text-muted-foreground hover:text-primary transition-colors">
              Imóveis
            </Link>
            <Link href="#sobre" className="text-muted-foreground hover:text-primary transition-colors">
              Sobre
            </Link>
            <Link href="#depoimentos" className="text-muted-foreground hover:text-primary transition-colors">
              Depoimentos
            </Link>
            <Link href="#contato" className="text-muted-foreground hover:text-primary transition-colors">
              Contato
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+5511999999999" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              (11) 99999-9999
            </a>
            <Button>Fale Conosco</Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link href="#imoveis" className="text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Imóveis
              </Link>
              <Link href="#sobre" className="text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Sobre
              </Link>
              <Link href="#depoimentos" className="text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Depoimentos
              </Link>
              <Link href="#contato" className="text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Contato
              </Link>
              <a href="tel:+5511999999999" className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                (11) 99999-9999
              </a>
              <Button className="w-fit">Fale Conosco</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
