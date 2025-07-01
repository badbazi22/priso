import React from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import QuoteRequestModal from '@/components/QuoteRequestModal';
import ContactFormModal from '@/components/ContactFormModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = React.useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <button 
                  onClick={scrollToTop}
                  className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg transition-transform hover:scale-105"
                  aria-label="Retour à l'accueil"
                >
                  <img 
                    src="/ChatGPT Image Jun 28, 2025, 10_40_53 AM copy.png" 
                    alt="IO Metric - Precision"
                    className="h-10 w-auto cursor-pointer"
                  />
                </button>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#solution" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Solution</a>
              <a href="#lean-sigma" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Lean & Six Sigma</a>
              <a href="#project-mgmt" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Gestion Projet</a>
              <a href="#plm" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">PLM Connecté</a>
              <a href="#demo" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Demo</a>
            </nav>

            <div className="hidden md:flex space-x-4">
              <Button 
                variant="outline" 
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
                onClick={() => setIsContactModalOpen(true)}
              >
                Nous contacter
              </Button>
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => setIsQuoteModalOpen(true)}
              >
                Demander une démo
              </Button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <a href="#solution" className="text-gray-600 hover:text-blue-600 transition-colors">Solution</a>
                <a href="#lean-sigma" className="text-gray-600 hover:text-blue-600 transition-colors">Lean & Six Sigma</a>
                <a href="#project-mgmt" className="text-gray-600 hover:text-blue-600 transition-colors">Gestion Projet</a>
                <a href="#plm" className="text-gray-600 hover:text-blue-600 transition-colors">PLM Connecté</a>
                <a href="#demo" className="text-gray-600 hover:text-blue-600 transition-colors">Demo</a>
                <div className="pt-4 space-y-2">
                  <Button 
                    variant="outline" 
                    className="w-full border-blue-600 text-blue-600"
                    onClick={() => setIsContactModalOpen(true)}
                  >
                    Nous contacter
                  </Button>
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => setIsQuoteModalOpen(true)}
                  >
                    Demander une démo
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

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

export default Header;