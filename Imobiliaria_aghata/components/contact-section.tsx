"use client"

import { useState } from "react"
import { Send, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simular envio
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    alert("Mensagem enviada com sucesso! Em breve entraremos em contato.")
  }

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Fale com um especialista agora
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Preencha o formulário e nossa equipe entrará em contato em até 24 horas 
              para ajudá-lo a encontrar o imóvel ideal.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telefone / WhatsApp</p>
                  <a href="tel:+5511999999999" className="text-foreground font-medium hover:text-primary transition-colors">
                    (11) 99999-9999
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">E-mail</p>
                  <a href="mailto:contato@eliteimoveis.com.br" className="text-foreground font-medium hover:text-primary transition-colors">
                    contato@eliteimoveis.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Endereço</p>
                  <p className="text-foreground font-medium">
                    Av. Paulista, 1000 - Bela Vista, São Paulo - SP
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 border border-border">
            <form onSubmit={handleSubmit}>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="name">Nome completo</FieldLabel>
                  <Input id="name" placeholder="Seu nome" required />
                </Field>

                <Field>
                  <FieldLabel htmlFor="phone">Telefone (WhatsApp)</FieldLabel>
                  <Input id="phone" type="tel" placeholder="(11) 99999-9999" required />
                </Field>

                <Field>
                  <FieldLabel htmlFor="property-type">Tipo de imóvel desejado</FieldLabel>
                  <Select required>
                    <SelectTrigger id="property-type">
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartamento">Apartamento</SelectItem>
                      <SelectItem value="casa">Casa</SelectItem>
                      <SelectItem value="cobertura">Cobertura</SelectItem>
                      <SelectItem value="terreno">Terreno</SelectItem>
                      <SelectItem value="comercial">Comercial</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>

                <Field>
                  <FieldLabel htmlFor="message">Mensagem</FieldLabel>
                  <Textarea 
                    id="message"
                    placeholder="Conte-nos sobre o imóvel que você procura..."
                    rows={4}
                  />
                </Field>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Receber atendimento
                    </>
                  )}
                </Button>
              </FieldGroup>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
