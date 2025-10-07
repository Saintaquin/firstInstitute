"use client";

import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xanpwndb"); // <-- ton ID Formspree

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-text mb-4">Contactez-nous</h2>
            <p className="text-lg text-text-light">
              Discutons de vos projets et de la manière dont nous pouvons vous accompagner
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-serif text-text mb-6">Nos coordonnées</h3>
                <p className="text-text-light mb-8 leading-relaxed">
                  Notre équipe est à votre disposition pour répondre à vos questions et vous accompagner dans vos
                  projets financiers.
                </p>
              </div>

              <Card className="border-border">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-text mb-1">Adresse</div>
                      <div className="text-text-light">
                        27 rue du Chemin Vert
                        <br />
                        75011, Paris, France
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-text mb-1">Téléphone</div>
                      <a href="tel:+33668503590" className="text-text-light hover:text-primary transition-colors">
                        +33 6 68 50 35 90
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-text mb-1">Email</div>
                      <a
                        href="mailto:contact@firstinstitute.fr"
                        className="text-text-light hover:text-primary transition-colors"
                      >
                        contact@firstinstitute.fr
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="border-border">
              <CardContent className="p-6">
                {state.succeeded ? (
                  <div className="flex flex-col items-center text-center gap-3 py-12">
                    <CheckCircle className="w-12 h-12 text-primary" />
                    <h3 className="text-2xl font-semibold">Merci !</h3>
                    <p className="text-text-light">Votre message a bien été envoyé. Nous vous répondons au plus vite.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Honeypot anti-spam (champ caché) */}
                    <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-text mb-2">
                          Prénom
                        </label>
                        <Input id="firstName" name="firstName" placeholder="Votre prénom" required />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-text mb-2">
                          Nom
                        </label>
                        <Input id="lastName" name="lastName" placeholder="Votre nom" required />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                        Email
                      </label>
                      <Input id="email" name="email" type="email" placeholder="votre@email.com" required />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-text mb-2">
                        Téléphone
                      </label>
                      <Input id="phone" name="phone" type="tel" placeholder="+33 6 00 00 00 00" />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Décrivez votre projet ou vos besoins..."
                        rows={5}
                        required
                      />
                      <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>

                    <Button type="submit" className="w-full" size="lg" disabled={state.submitting}>
                      {state.submitting ? "Envoi en cours..." : "Envoyer le message"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
