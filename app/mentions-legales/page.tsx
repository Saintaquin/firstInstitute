import Header from "@/components/header"
import Footer from "@/components/footer"
import { Mail, Phone, MapPin, Building2, FileText, Briefcase } from "lucide-react"

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Mentions légales</h1>
          <div className="w-24 h-1 bg-primary/30" />
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Siège social */}
          <div className="mb-12 bg-white rounded-lg shadow-sm p-8 border border-border">
            <div className="flex items-start gap-3 mb-6">
              <Building2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <h2 className="text-2xl font-serif font-bold text-primary">Siège social</h2>
            </div>
            <div className="space-y-3 text-text leading-relaxed">
              <p className="font-semibold text-lg">FIRST INSTITUTE</p>
              <p>
                <span className="font-medium">Représenté par :</span> M. Foued AYARI
              </p>
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-primary/70 mt-0.5 flex-shrink-0" />
                <p>
                  <span className="font-medium">Adresse :</span> 27 rue du Chemin Vert, 75011, Paris, France
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="mb-12 bg-white rounded-lg shadow-sm p-8 border border-border">
            <div className="flex items-start gap-3 mb-6">
              <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <h2 className="text-2xl font-serif font-bold text-primary">Contact</h2>
            </div>
            <div className="space-y-3 text-text leading-relaxed">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary/70 flex-shrink-0" />
                <p>
                  <span className="font-medium">Téléphone :</span>{" "}
                  <a href="tel:+33668503590" className="text-primary hover:underline">
                    06 68 50 35 90
                  </a>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary/70 flex-shrink-0" />
                <p>
                  <span className="font-medium">Email :</span>{" "}
                  <a href="mailto:fayari@firstinstitute.fr" className="text-primary hover:underline">
                    fayari@firstinstitute.fr
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Informations juridiques */}
          <div className="mb-12 bg-white rounded-lg shadow-sm p-8 border border-border">
            <div className="flex items-start gap-3 mb-6">
              <FileText className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <h2 className="text-2xl font-serif font-bold text-primary">Informations juridiques</h2>
            </div>
            <div className="space-y-3 text-text leading-relaxed">
              <p>
                <span className="font-medium">Forme juridique :</span> SAS (Société par Actions Simplifiée)
              </p>
              <p>
                <span className="font-medium">RCS :</span> 981 762 941 – Versailles
              </p>
              <p>
                <span className="font-medium">Code APE :</span> 8559A
              </p>
              <p>
                <span className="font-medium">TVA intracommunautaire :</span> FR41981762941
              </p>
            </div>
          </div>

          {/* Activité */}
          <div className="bg-white rounded-lg shadow-sm p-8 border border-border">
            <div className="flex items-start gap-3 mb-6">
              <Briefcase className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <h2 className="text-2xl font-serif font-bold text-primary">Activité</h2>
            </div>
            <p className="text-text leading-relaxed">
              Formation professionnelle continue pour adultes et formation en entreprise, dans les domaines suivants :
              Finance, Gestion, Data et analyse décisionnelle.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
