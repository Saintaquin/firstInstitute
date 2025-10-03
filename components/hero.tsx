"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-surface via-white to-surface-dark overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">Conseil et Formation en Finance</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-text mb-6 animate-fade-in-up stagger-1">
            Votre partenaire stratégique en <span className="text-primary">finance d'entreprise</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-text-light max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up stagger-2">
            First Institute accompagne les entreprises, gérants d'actifs et investisseurs dans leurs stratégies de
            financement, levées de fonds et optimisation patrimoniale.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up stagger-3">
            <Button
              size="lg"
              className="group"
              onClick={() => document.getElementById("expertises")?.scrollIntoView({ behavior: "smooth" })}
            >
              Découvrir nos expertises
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Nous contacter
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-border animate-fade-in-up stagger-4">
            <div>
              <div className="text-3xl font-serif font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-text-muted">Années d'expérience</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold text-primary mb-2">200+</div>
              <div className="text-sm text-text-muted">Clients accompagnés</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold text-primary mb-2">€500M+</div>
              <div className="text-sm text-text-muted">Fonds levés</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
