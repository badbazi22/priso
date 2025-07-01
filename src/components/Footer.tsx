import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="mb-4">
              <button 
                onClick={scrollToTop}
                className="focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg transition-transform hover:scale-105"
                aria-label="Retour à l'accueil"
              >
                <img 
                  src="/ChatGPT Image Jun 28, 2025, 10_40_53 AM copy.png" 
                  alt="IO Metric - Precision"
                  className="h-12 w-auto cursor-pointer"
                />
              </button>
            </div>
            <p className="text-gray-400 mb-6">
              Plateforme unifiée de monitoring industriel pour optimiser vos performances opérationnelles.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/precisio-morocco-❇%EF%B8%8F-897941362/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Solutions</h4>
            <ul className="space-y-3">
              <li><a href="#solution" className="text-gray-400 hover:text-white transition-colors">Monitoring IoT</a></li>
              <li><a href="#lean-sigma" className="text-gray-400 hover:text-white transition-colors">Lean & Six Sigma</a></li>
              <li><a href="#project-mgmt" className="text-gray-400 hover:text-white transition-colors">Gestion de Projet</a></li>
              <li><a href="#plm" className="text-gray-400 hover:text-white transition-colors">PLM Connecté</a></li>
              <li><a href="#demo" className="text-gray-400 hover:text-white transition-colors">Dashboard Demo</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Secteurs</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Automobile</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Aéronautique</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Agroalimentaire</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Chimie & Pharma</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Métallurgie</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">contact@precisio.ma</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">+212 61 440 251</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-blue-400 mt-1" />
                <span className="text-gray-400">
                  Maroc
                </span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2026 IO Metric - Precision.ma Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Mentions légales
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              CGU
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;