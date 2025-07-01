import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Cpu, Zap, Target, Gauge, Settings2, Activity } from 'lucide-react';
import QuoteRequestModal from '@/components/QuoteRequestModal';

const HeroSection = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = React.useState(false);

  return (
    <>
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 border border-blue-400/20 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-green-400/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-purple-400/20 rounded-full animate-pulse delay-2000"></div>
        </div>
        
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="block text-white">Metrics that</span>
                  <span className="block text-green-400 relative">
                    Matter
                    <div className="absolute -right-8 top-2 w-6 h-6">
                      <Settings2 className="w-6 h-6 text-green-400 animate-spin" style={{animationDuration: '3s'}} />
                    </div>
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-300 font-light">
                  Connect, Monitor, Optimize.
                </p>
              </div>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                Transformez votre performance industrielle avec notre plateforme unifiée de monitoring temps réel. 
                Connectez vos équipements, analysez vos données, optimisez vos processus.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => setIsQuoteModalOpen(true)}
                >
                  Demander une démo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-4">
                <div className="flex flex-col items-center space-y-2 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <Gauge className="h-8 w-8 text-green-400" />
                  <span className="text-sm text-gray-300 font-medium text-center">Temps Réel</span>
                </div>
                <div className="flex flex-col items-center space-y-2 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <Cpu className="h-8 w-8 text-blue-400" />
                  <span className="text-sm text-gray-300 font-medium text-center">IoT Compatible</span>
                </div>
                <div className="flex flex-col items-center space-y-2 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <Target className="h-8 w-8 text-purple-400" />
                  <span className="text-sm text-gray-300 font-medium text-center">Lean & Six Sigma</span>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-500/20 rounded-2xl blur-3xl transform rotate-3 group-hover:rotate-6 group-hover:scale-105 transition-all duration-500"></div>
              <div className="relative">
                <img 
                  src="/dashboard-industrie-photo-2-1.jpeg" 
                  alt="Équipe d'ingénieurs analysant des données sur écrans multiples dans un centre de contrôle industriel"
                  className="relative rounded-2xl shadow-2xl border border-white/20 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
                
                {/* Floating data points */}
                <div className="absolute top-4 right-4 bg-green-500/20 backdrop-blur-md rounded-full p-3 border border-green-400/30 animate-pulse">
                  <Activity className="h-4 w-4 text-green-400" />
                </div>
                <div className="absolute top-1/3 left-4 bg-blue-500/20 backdrop-blur-md rounded-full p-3 border border-blue-400/30 animate-pulse delay-1000">
                  <Zap className="h-4 w-4 text-blue-400" />
                </div>
                
                <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/30 shadow-xl">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400 mb-1">98.5%</div>
                      <div className="text-sm text-gray-200 font-medium">TRS Global</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400 mb-1">24/7</div>
                      <div className="text-sm text-gray-200 font-medium">Monitoring</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuoteRequestModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </>
  );
};

export default HeroSection;