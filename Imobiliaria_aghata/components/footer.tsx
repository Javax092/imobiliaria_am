import Link from "next/link"
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="font-serif text-2xl font-bold">
                Elite<span className="text-secondary">Imóveis</span>
              </span>
            </Link>
            <p className="text-primary-foreground/80 mb-6 max-w-sm">
              Há mais de 15 anos conectando pessoas ao imóvel dos seus sonhos. 
              Consultoria completa em compra, venda e locação de propriedades de alto padrão.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#imoveis" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Imóveis
                </Link>
              </li>
              <li>
                <Link href="#sobre" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="#depoimentos" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link href="#contato" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>
                <a href="tel:+5511999999999" className="hover:text-primary-foreground transition-colors">
                  (11) 99999-9999
                </a>
              </li>
              <li>
                <a href="mailto:contato@eliteimoveis.com.br" className="hover:text-primary-foreground transition-colors">
                  contato@eliteimoveis.com.br
                </a>
              </li>
              <li>
                Av. Paulista, 1000<br />
                Bela Vista, São Paulo - SP<br />
                CEP 01310-100
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2026 Elite Imóveis. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Política de Privacidade
            </Link>
            <Link href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
