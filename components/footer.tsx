import Link from "next/link"
import { Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-4">FIRST INSTITUTE</h3>
            <p className="text-white/80 leading-relaxed mb-4">Conseil et Formation en Finance d'Entreprise</p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@firstinstitute.fr"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#accueil" className="text-white/80 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="#expertises" className="text-white/80 hover:text-white transition-colors">
                  Nos Expertises
                </Link>
              </li>
              <li>
                <Link href="#apropos" className="text-white/80 hover:text-white transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-white/80">Financement d'entreprise</li>
              <li className="text-white/80">Levée de fonds</li>
              <li className="text-white/80">Asset Management</li>
              <li className="text-white/80">Conseil en patrimoine</li>
              <li className="text-white/80">Transaction services</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>© {currentYear} First Institute. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="hover:text-white transition-colors">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="hover:text-white transition-colors">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
