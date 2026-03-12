import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const highlights = [
  "Mais de 15 anos de experiência no mercado imobiliário",
  "Mais de 2.000 imóveis negociados com sucesso",
  "Equipe de consultores especializados e certificados",
  "Parceria com as principais construtoras do país"
]

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/team.jpg"
                alt="Equipe Elite Imóveis"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-6 rounded-lg shadow-xl hidden md:block">
              <p className="text-4xl font-bold font-serif">15+</p>
              <p className="text-sm">Anos de Experiência</p>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Somos especialistas em conectar pessoas ao imóvel ideal
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Com mais de 15 anos de experiência no mercado imobiliário de alto padrão, a Elite Imóveis 
              oferece consultoria completa para compra, venda e locação de propriedades exclusivas.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Nossa equipe de consultores especializados está preparada para entender suas necessidades 
              e encontrar a propriedade perfeita para você e sua família.
            </p>

            <ul className="space-y-4">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
