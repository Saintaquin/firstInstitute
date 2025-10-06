import type { Metadata } from "next"
import { Mail, Linkedin } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "À propos de nous - First Institute",
  description:
    "Découvrez First Institute, notre équipe d'experts en conseil et formation en finance, entrepreneuriat et management.",
}

const teamMembers = [
  {
    name: "Michel Dagneaux",
    title: "Consultant Sénior",
    image: "/dagneaux.jpg",
    linkedin: "#",
    email: "mailto:mdagneaux@firstinstitute.fr",
  },
  {
    name: "Ian Corns",
    title: "Directeur Associé\nConseil & Externalisation de la formation",
    image: "/corns.png",
    linkedin: "#",
    email: "mailto:icorns@firstinstitute.fr",
  },
  {
    name: "Christian Arfi",
    title: "Consultant Sénior",
    image: "/arfi.jpg",
    linkedin: "#",
    email: "mailto:carfi@firstinstitute.fr",
  },
  {
    name: "Foued Ayari, PhD",
    title: "Président Fondateur de First Institute",
    image: "/ayari.png",
    linkedin: "#",
    email: "mailto:fayari@firstinstitute.fr",
    bio: "Président et fondateur de First Institute, Foued Ayari, PhD a à son actif plus de 25 ans d'expérience sur plusieurs continents dont 12 ans à New York, 1 an à Londres, plusieurs missions au Moyen-Orient et en Asie et le reste à Paris. Il a été analyste crédit et managing consultant pour plusieurs banques et institutions (Merrill Lynch, NYSBD, Fidelity, Lehman Brothers, Société Générale, Euromoney Trading, 7City, Intuition....). Dans le domaine de l'enseignement et la formation, Foued a enseigné dans plusieurs universités américaines (City University of New York où il a par ailleurs eu son Doctorat, Wagner College et Pace University) et plusieurs écoles de commerce françaises dont principalement l'INSEEC MSc et INSEEC Bachelor Paris où il dirige aussi le Pôle Finance.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 sm:mb-8 text-balance">
            Qui sommes-nous?
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-text leading-relaxed text-base sm:text-lg">
              First Institute est une société de conseil et formation alliant conseil stratégique et formation
              professionnelle. Notre équipe (composée d'anciens directeurs de banques, d'experts-comptables, de
              commissaires aux comptes, de DAF, d'ingénieurs, d'Associates et de consultants) vous accompagne en
              financement, création d'entreprise, reprise d'entreprise, levée de fonds et pilotage de la performance
              entre autres.
            </p>
            <p className="text-text leading-relaxed text-base sm:text-lg mt-4">
              Forts de notre approche pragmatique et de notre réseau d'experts, nous plaçons la valeur ajoutée et la
              rigueur au cœur de notre mission : transformer les compétences en leviers concrets de croissance et de
              réussite. Nous accompagnons aussi les talents et les entreprises à travers des formations de haut niveau
              en finance, entrepreneuriat et management.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8 sm:mb-12 text-center">
            Notre équipe
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-12 sm:mb-16">
            {teamMembers.slice(0, 3).map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 mb-4 rounded-full overflow-hidden bg-gray-200 transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-sans font-bold text-base sm:text-lg text-text mb-2">{member.name}</h3>
                <p className="text-text-light text-sm mb-4 whitespace-pre-line">{member.title}</p>
                <div className="flex gap-3">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-primary transition-colors"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <Linkedin size={20} className="sm:w-6 sm:h-6" />
                  </a>
                  <a
                    href={member.email}
                    className="text-gray-500 hover:text-primary transition-colors"
                    aria-label={`Email de ${member.name}`}
                  >
                    <Mail size={20} className="sm:w-6 sm:h-6" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Team Member - Foued Ayari */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-12">
            <div className="grid md:grid-cols-[300px_1fr] gap-8 md:gap-12 items-start">
              <div className="flex flex-col items-center text-center mx-auto">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mb-6 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src={teamMembers[3].image || "/placeholder.svg"}
                    alt={teamMembers[3].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-sans font-bold text-lg sm:text-xl text-text mb-2">{teamMembers[3].name}</h3>
                <p className="text-text-light text-sm mb-4">{teamMembers[3].title}</p>
                <div className="flex gap-3">
                  <a
                    href={teamMembers[3].linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-primary transition-colors"
                    aria-label={`LinkedIn de ${teamMembers[3].name}`}
                  >
                    <Linkedin size={20} className="sm:w-6 sm:h-6" />
                  </a>
                  <a
                    href={teamMembers[3].email}
                    className="text-gray-500 hover:text-primary transition-colors"
                    aria-label={`Email de ${teamMembers[3].name}`}
                  >
                    <Mail size={20} className="sm:w-6 sm:h-6" />
                  </a>
                </div>
              </div>
              <div className="flex items-center h-full">
                <p className="text-text leading-relaxed text-sm sm:text-base md:text-lg">{teamMembers[3].bio}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
