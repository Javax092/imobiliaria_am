"use client"

import { useState } from "react"
import Image from "next/image"
import { Search, Home, Building, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function HeroSection() {
  const [searchType, setSearchType] = useState("comprar")

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Imóveis de alto padrão"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 text-balance">
            Encontre o imóvel ideal para você em minutos
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto text-pretty">
            Casas, apartamentos e investimentos imobiliários nas melhores localizações.
          </p>

          <div className="bg-card rounded-lg p-6 shadow-xl max-w-3xl mx-auto">
            <div className="flex gap-4 mb-6">
              <button
                onClick={() => setSearchType("comprar")}
                className={`flex-1 py-3 px-4 rounded-md font-medium transition-all ${
                  searchType === "comprar"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                Comprar
              </button>
              <button
                onClick={() => setSearchType("alugar")}
                className={`flex-1 py-3 px-4 rounded-md font-medium transition-all ${
                  searchType === "alugar"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                Alugar
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <Select>
                <SelectTrigger className="h-12">
                  <Home className="h-4 w-4 mr-2 text-muted-foreground" />
                  <SelectValue placeholder="Tipo de imóvel" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apartamento">Apartamento</SelectItem>
                  <SelectItem value="casa">Casa</SelectItem>
                  <SelectItem value="cobertura">Cobertura</SelectItem>
                  <SelectItem value="terreno">Terreno</SelectItem>
                  <SelectItem value="comercial">Comercial</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="h-12">
                  <Building className="h-4 w-4 mr-2 text-muted-foreground" />
                  <SelectValue placeholder="Quartos" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Quarto</SelectItem>
                  <SelectItem value="2">2 Quartos</SelectItem>
                  <SelectItem value="3">3 Quartos</SelectItem>
                  <SelectItem value="4">4+ Quartos</SelectItem>
                </SelectContent>
              </Select>

              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Cidade ou bairro" 
                  className="h-12 pl-10"
                />
              </div>
            </div>

            <Button size="lg" className="w-full h-12 text-base">
              <Search className="h-5 w-5 mr-2" />
              Ver imóveis disponíveis
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
