export default function About() {
  return (
    <section id="apropos" className="py-24 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-text mb-4">À Propos de First Institute</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>

          {/* Content */}
          <div className="space-y-8 text-lg text-text-light leading-relaxed">
            <p>
              <strong className="text-text font-semibold">First Institute</strong> est un cabinet de conseil et de
              formation spécialisé en finance d'entreprise. Nous accompagnons les entreprises, les gérants d'actifs et
              les investisseurs dans leurs décisions stratégiques et financières.
            </p>

            <p>
              Notre expertise couvre l'ensemble des besoins en financement d'entreprise : du conseil en financement
              court et long terme à la levée de fonds, en passant par l'asset management, la gestion de patrimoine et
              les stratégies de croissance.
            </p>

            <p>
              Avec plus de 15 années d'expérience et plus de 200 clients accompagnés, nous avons développé une approche
              pragmatique et personnalisée qui place la réussite de nos clients au cœur de nos préoccupations.
            </p>

            {/* Key Values */}
            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-4xl font-serif font-bold text-primary mb-2">Excellence</div>
                <p className="text-sm text-text-muted">Expertise pointue et conseil de haute qualité</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-serif font-bold text-primary mb-2">Proximité</div>
                <p className="text-sm text-text-muted">Accompagnement personnalisé et sur-mesure</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-serif font-bold text-primary mb-2">Résultats</div>
                <p className="text-sm text-text-muted">Performance mesurable et croissance durable</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
