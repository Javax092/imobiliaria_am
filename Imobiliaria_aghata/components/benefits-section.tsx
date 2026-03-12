import { Home, MapPin, Users, TrendingUp } from "lucide-react"

const benefits = [
  {
    icon: Home,
    title: "Imóveis Selecionados",
    description: "Curadoria exclusiva de propriedades de alto padrão para atender suas expectativas."
  },
  {
    icon: MapPin,
    title: "Melhores Localizações",
    description: "Acesso às regiões mais valorizadas e com maior potencial de crescimento."
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description: "Consultores especializados para guiar você em cada etapa do processo."
  },
  {
    icon: TrendingUp,
    title: "Oportunidades de Investimento",
    description: "Análise de mercado e indicações de imóveis com alto retorno financeiro."
  }
]

export function BenefitsSection() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que escolher a Elite Imóveis?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Oferecemos uma experiência completa para encontrar o imóvel dos seus sonhos
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group p-6 rounded-lg bg-background border border-border hover:border-secondary hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-lg bg-secondary/20 flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-colors">
                <benefit.icon className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
