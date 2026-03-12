import Image from "next/image"
import { MapPin, Bed, Bath, Square, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const properties = [
  {
    id: 1,
    image: "/images/property-1.jpg",
    title: "Penthouse Jardins",
    location: "Jardins, São Paulo",
    price: "R$ 4.500.000",
    bedrooms: 4,
    bathrooms: 5,
    area: 380,
    badge: "Destaque"
  },
  {
    id: 2,
    image: "/images/property-2.jpg",
    title: "Casa com Piscina",
    location: "Alphaville, Barueri",
    price: "R$ 3.200.000",
    bedrooms: 5,
    bathrooms: 6,
    area: 450,
    badge: "Novo"
  },
  {
    id: 3,
    image: "/images/property-3.jpg",
    title: "Apartamento Alto Padrão",
    location: "Itaim Bibi, São Paulo",
    price: "R$ 2.800.000",
    bedrooms: 3,
    bathrooms: 4,
    area: 220,
    badge: null
  },
  {
    id: 4,
    image: "/images/property-4.jpg",
    title: "Cobertura Duplex",
    location: "Vila Nova Conceição, São Paulo",
    price: "R$ 6.900.000",
    bedrooms: 4,
    bathrooms: 5,
    area: 520,
    badge: "Exclusivo"
  }
]

export function PropertiesSection() {
  return (
    <section id="imoveis" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Imóveis em Destaque
            </h2>
            <p className="text-muted-foreground max-w-xl text-pretty">
              Conheça nossa seleção de propriedades exclusivas nas melhores localizações
            </p>
          </div>
          <Button variant="outline" className="w-fit">
            Ver todos os imóveis
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property) => (
            <div 
              key={property.id}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {property.badge && (
                  <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
                    {property.badge}
                  </Badge>
                )}
              </div>
              
              <div className="p-5">
                <div className="flex items-center gap-1 text-muted-foreground text-sm mb-2">
                  <MapPin className="h-3.5 w-3.5" />
                  {property.location}
                </div>
                
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {property.title}
                </h3>
                
                <p className="text-xl font-bold text-primary mb-4">
                  {property.price}
                </p>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground border-t border-border pt-4">
                  <span className="flex items-center gap-1">
                    <Bed className="h-4 w-4" />
                    {property.bedrooms}
                  </span>
                  <span className="flex items-center gap-1">
                    <Bath className="h-4 w-4" />
                    {property.bathrooms}
                  </span>
                  <span className="flex items-center gap-1">
                    <Square className="h-4 w-4" />
                    {property.area}m²
                  </span>
                </div>
              </div>
              
              <div className="px-5 pb-5">
                <Button variant="outline" className="w-full">
                  Ver detalhes
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
