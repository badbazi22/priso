import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Phone, Mail, Calendar } from 'lucide-react';
import QuoteRequestModal from '@/components/QuoteRequestModal';
import ContactFormModal from '@/components/ContactFormModal';

const CTASection = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = React.useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false);

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-blue-900 via-gray-900 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Robot industriel moderne"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Prêt à Optimiser Votre Performance Industrielle ?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Rejoignez les leaders industriels qui font confiance à IO Metric - Precision 
              pour digitaliser et optimiser leurs opérations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Demander une Démo
                </h3>
                <p className="text-gray-300 mb-6">
                  Découvrez notre solution en action avec une démonstration personnalisée adaptée à votre secteur
                </p>
                <Button 
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                  onClick={() => setIsQuoteModalOpen(true)}
                >
                  Réserver ma démo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Nous Contacter
                </h3>
                <p className="text-gray-300 mb-6">
                  Échangez avec nos experts pour évaluer vos besoins et construire votre projet de digitalisation
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-white text-black hover:bg-white hover:text-black"
                  onClick={() => setIsContactModalOpen(true)}
                >
                  Prendre contact
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/10">
            <div className="grid lg:grid-cols-1 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  Pourquoi Choisir IO Metric - Precision ?
                </h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong className="text-white">ROI prouvé:</strong> Retour sur investissement en moins de 12 mois</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong className="text-white">Support expert:</strong> Accompagnement par nos ingénieurs spécialisés</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong className="text-white">Intégration rapide:</strong> Déploiement en quelques semaines</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong className="text-white">Évolutivité:</strong> Solution qui grandit avec vos besoins</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-8">
              Rejoignez des entreprises leaders dans l'automobile, l'aéronautique, 
              l'agroalimentaire et la chimie qui optimisent déjà leurs performances avec notre solution
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-12 py-4 text-lg font-semibold"
              onClick={() => setIsQuoteModalOpen(true)}
            >
              Commencer dès maintenant
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <QuoteRequestModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />

      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
};

export default CTASection;