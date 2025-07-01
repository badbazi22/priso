import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GitBranch, Eye, CheckCircle, AlertTriangle, Clock, Link } from 'lucide-react';

const PLMSection = () => {
  const productLifecycles = [
    { 
      id: 1, 
      product: "Module Contrôle MX-450", 
      phase: "Développement", 
      progress: 65, 
      quality: "Conforme",
      lastUpdate: "Il y a 2h"
    },
    { 
      id: 2, 
      product: "Capteur Pression PS-200", 
      phase: "Test & Validation", 
      progress: 80, 
      quality: "À réviser",
      lastUpdate: "Il y a 1h"
    },
    { 
      id: 3, 
      product: "Interface HMI Touch V3", 
      phase: "Production", 
      progress: 100, 
      quality: "Validé",
      lastUpdate: "Il y a 30min"
    }
  ];

  const getPhaseColor = (phase: string) => {
    switch (phase) {
      case "Développement": return "bg-blue-100 text-blue-800";
      case "Test & Validation": return "bg-yellow-100 text-yellow-800";
      case "Production": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getQualityIcon = (quality: string) => {
    switch (quality) {
      case "Validé": return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "À réviser": return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case "Conforme": return <CheckCircle className="h-4 w-4 text-blue-500" />;
      default: return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <section id="plm" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            PLM Connecté
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visualisez et pilotez le cycle de vie de vos produits avec une intégration 
            complète aux systèmes PLM existants
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className="grid gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <Eye className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Visualisation du Cycle de Vie
                </h3>
                <p className="text-gray-600">
                  Suivez chaque étape du développement produit avec des indicateurs visuels clairs
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <Link className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Intégration API REST
                </h3>
                <p className="text-gray-600">
                  Connectivité native avec vos systèmes PLM tiers via API REST sécurisées
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <GitBranch className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Suivi Qualité & REX
                </h3>
                <p className="text-gray-600">
                  Traçabilité complète des changements d'ingénierie et retours d'expérience
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-500/20 rounded-2xl blur-2xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Station de travail d'ingénierie avec ordinateurs et logiciels PLM"
              className="relative rounded-2xl shadow-2xl border border-gray-200 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/90 backdrop-blur-md rounded-xl p-6 shadow-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Station PLM</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">156</div>
                    <div className="text-sm text-gray-600">Projets Actifs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">98.5%</div>
                    <div className="text-sm text-gray-600">Sync Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl border border-gray-200">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Tableau de Bord PLM</h3>
            <Button className="bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition-all duration-300">
              Synchroniser avec PLM
            </Button>
          </div>

          <div className="space-y-6">
            {productLifecycles.map((item) => (
              <Card key={item.id} className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <CardContent className="p-6">
                  <div className="grid lg:grid-cols-6 gap-6 items-center">
                    <div className="lg:col-span-2">
                      <h4 className="font-semibold text-gray-900 mb-2">{item.product}</h4>
                      <div className="flex items-center space-x-2">
                        {getQualityIcon(item.quality)}
                        <span className="text-sm text-gray-600 font-medium">{item.quality}</span>
                      </div>
                    </div>
                    
                    <div>
                      <Badge className={getPhaseColor(item.phase)}>
                        {item.phase}
                      </Badge>
                    </div>
                    
                    <div className="lg:col-span-2">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Progression</span>
                        <span className="text-sm text-gray-600 font-semibold">{item.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full shadow-sm transition-all duration-500" 
                          style={{ width: `${item.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <span className="text-sm text-gray-500 mb-2 block">{item.lastUpdate}</span>
                      <Button variant="outline" size="sm" className="hover:bg-blue-50 hover:border-blue-300 transition-colors">
                        Détails
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl p-8 lg:p-12 text-white shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Intégration PLM Avancée
              </h3>
              <p className="text-lg text-gray-300 mb-8">
                Notre solution s'intègre parfaitement avec les principaux systèmes PLM du marché 
                pour une vue unifiée de vos processus de développement produit.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Connecteurs natifs (Solidworks PDM, Autodesk Vault, PTC Windchill)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>API REST sécurisées pour intégrations customisées</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Synchronisation bidirectionnelle des données</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Traçabilité complète des modifications</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PLMSection;