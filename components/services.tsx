"use client"

import {
  TrendingUp,
  Users,
  PieChart,
  Briefcase,
  Target,
  Building2,
  Calculator,
  Shield,
  FileText,
  UserCheck,
  LineChart,
  Lightbulb,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: TrendingUp,
    title: "Conseils en financement d'entreprise",
    description:
      "Accompagnement complet pour tous types de financement : court terme (affacturage, escompte) et long terme (emprunt, subventions, crédit-bail, restructuration, LBO).",
  },
  {
    icon: Users,
    title: "Levée de fonds",
    description:
      "Recherche d'investisseurs et institutions pour financer votre projet ou développer votre entreprise, en capital d'amorçage ou de développement.",
  },
  {
    icon: PieChart,
    title: "Conseils en asset management",
    description:
      "Accompagnement des gérants d'actifs et investisseurs institutionnels : stratégies, benchmarking, optimisation, négociation, back office, conformité et ESG.",
  },
  {
    icon: Briefcase,
    title: "Conseils en patrimoine et investissement",
    description:
      "Stratégies d'investissement personnalisées pour professions libérales, chefs d'entreprise, cadres, salariés et indépendants.",
  },
  {
    icon: Target,
    title: "Conseils en stratégies d'entreprises",
    description:
      "Mise en place de stratégies de croissance : repositionnement, diversification, développement de nouveaux produits/services, optimisation.",
  },
  {
    icon: Building2,
    title: "Transaction services",
    description:
      "Accompagnement dans votre développement : prises de participation, acquisitions, cessions, fusions, management buy-out et restructurations.",
  },
  {
    icon: Calculator,
    title: "Comptabilité & Audit",
    description:
      "Services comptables et d'audit complets pour assurer la conformité et la transparence financière de votre entreprise.",
  },
  {
    icon: Shield,
    title: "Conformité & Réglementation",
    description:
      "Expertise en conformité réglementaire et mise en place de processus pour respecter les normes financières en vigueur.",
  },
  {
    icon: FileText,
    title: "Financement structuré",
    description:
      "Solutions de financement complexes adaptées aux besoins spécifiques de votre entreprise et de vos projets.",
  },
  {
    icon: UserCheck,
    title: "DAF à temps partagé",
    description:
      "Expertise financière de 1 à 3 jours par semaine pour piloter et augmenter votre performance financière.",
  },
  {
    icon: LineChart,
    title: "Business Plan",
    description:
      "Élaboration de business plans solides et convaincants pour présenter vos projets aux investisseurs et partenaires.",
  },
  {
    icon: Lightbulb,
    title: "Placement d'intervenants",
    description:
      "Mise en relation avec des experts qualifiés (Bac+5, expérience professionnelle) pour vos besoins en formation et conseil.",
  },
]

export default function Services() {
  return (
    <section id="expertises" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-text mb-4">Nos Expertises</h2>
          <p className="text-lg text-text-light leading-relaxed">
            Une gamme complète de services pour accompagner votre croissance et optimiser votre performance financière
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-serif text-text group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-text-light leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
