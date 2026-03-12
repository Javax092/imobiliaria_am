import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Ricardo Mendes",
    role: "Empresário",
    content: "Encontrei o apartamento dos meus sonhos graças à equipe da Elite Imóveis. O atendimento foi impecável do início ao fim. Recomendo a todos!",
    rating: 5
  },
  {
    id: 2,
    name: "Fernanda Costa",
    role: "Médica",
    content: "Profissionais extremamente competentes e atenciosos. Me ajudaram a encontrar uma casa perfeita para minha família em tempo recorde.",
    rating: 5
  },
  {
    id: 3,
    name: "Carlos Eduardo",
    role: "Investidor",
    content: "A consultoria de investimento imobiliário da Elite Imóveis é excepcional. Já adquiri três propriedades com eles e sempre tive ótimo retorno.",
    rating: 5
  }
]

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            A satisfação dos nossos clientes é nossa maior conquista
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-background rounded-lg p-8 border border-border relative"
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-secondary/20" />
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                ))}
              </div>
              
              <p className="text-foreground mb-6 leading-relaxed">
                &quot;{testimonial.content}&quot;
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <span className="text-secondary font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
