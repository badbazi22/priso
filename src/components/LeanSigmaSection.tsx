import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, TrendingUp, AlertTriangle, Target, BarChart3, Activity, Gauge, Eye, Zap, Search } from 'lucide-react';

const LeanSigmaSection = () => {
  return (
    <section id="lean-sigma" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Intégration Lean & Six Sigma
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Automatisez vos indicateurs de performance et optimisez vos processus 
            avec les méthodologies éprouvées
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <Card className="bg-green-50 border-green-200 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
              <CardContent className="p-8">
                <div className="absolute top-2 right-2 opacity-10">
                  <BarChart3 className="h-12 w-12 text-green-600 animate-pulse" />
                </div>
                <div className="flex items-center mb-6">
                  <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Suivi automatique des KPIs
                  </h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    TRS (Taux de Rendement Synthétique)
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    OEE (Overall Equipment Effectiveness)
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    PPM (Parts Per Million défauts)
                  </li>
                </ul>
                
                {/* Dashboard Image for KPIs */}
                <div className="mt-6 relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Dashboard moderne avec graphiques de performance TRS et OEE"
                    className="relative rounded-xl shadow-lg border border-gray-200 w-full h-48 object-cover group-hover:shadow-xl transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl"></div>
                  
                  {/* Floating KPI indicators */}
                  <div className="absolute top-3 left-3 bg-green-500/20 backdrop-blur-md rounded-lg p-2 border border-green-400/30">
                    <Gauge className="h-4 w-4 text-green-400" />
                  </div>
                  <div className="absolute top-3 right-3 bg-blue-500/20 backdrop-blur-md rounded-lg p-2 border border-blue-400/30">
                    <Activity className="h-4 w-4 text-blue-400" />
                  </div>
                  
                  <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-md rounded-lg p-3 border border-white/50">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <div className="text-lg font-bold text-green-600">85.2%</div>
                        <div className="text-xs text-gray-600">TRS</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-blue-600">89.7%</div>
                        <div className="text-xs text-gray-600">OEE</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-purple-600">42</div>
                        <div className="text-xs text-gray-600">PPM</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section Détection des gaspillages améliorée */}
            <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200 hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
              <CardContent className="p-8 relative">
                <div className="absolute top-2 right-2 opacity-10">
                  <Eye className="h-12 w-12 text-orange-600 animate-pulse" />
                </div>
                <div className="flex items-center mb-6">
                  <AlertTriangle className="h-8 w-8 text-orange-600 mr-3 animate-bounce" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Détection des gaspillages
                  </h3>
                </div>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-center text-gray-700 hover:bg-orange-100 p-2 rounded-lg transition-colors">
                    <Zap className="h-4 w-4 text-orange-500 mr-2" />
                    <strong>Muda</strong> (gaspillages identifiés)
                  </li>
                  <li className="flex items-center text-gray-700 hover:bg-red-100 p-2 rounded-lg transition-colors">
                    <Search className="h-4 w-4 text-red-500 mr-2" />
                    <strong>Variabilité</strong> des processus
                  </li>
                  <li className="flex items-center text-gray-700 hover:bg-yellow-100 p-2 rounded-lg transition-colors">
                    <AlertTriangle className="h-4 w-4 text-yellow-600 mr-2" />
                    <strong>Défauts qualité</strong> temps réel
                  </li>
                </ul>
                
                {/* Photo pour détection des gaspillages */}
                <div className="relative group/inner">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600/30 to-red-500/30 rounded-xl blur-lg group-hover/inner:blur-xl transition-all duration-300"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Analyse des gaspillages industriels avec détection intelligente des défauts"
                    className="relative rounded-xl shadow-lg border border-gray-200 w-full h-40 object-cover group-hover/inner:shadow-xl transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                  
                  <div className="absolute top-2 left-2 bg-orange-500/20 backdrop-blur-md rounded-lg p-2 border border-orange-400/30">
                    <Eye className="h-3 w-3 text-orange-400" />
                  </div>
                  <div className="absolute top-2 right-2 bg-red-500/20 backdrop-blur-md rounded-lg p-2 border border-red-400/30">
                    <AlertTriangle className="h-3 w-3 text-red-400" />
                  </div>
                  
                  <div className="absolute bottom-2 left-2 right-2 bg-white/90 backdrop-blur-md rounded-lg p-2 border border-white/50">
                    <div className="grid grid-cols-3 gap-1 text-center">
                      <div>
                        <div className="text-sm font-bold text-orange-600">7</div>
                        <div className="text-xs text-gray-600">Mudas</div>
                      </div>
                      <div>
                        <div className="text-sm font-bold text-red-600">23%</div>
                        <div className="text-xs text-gray-600">Variabilité</div>
                      </div>
                      <div>
                        <div className="text-sm font-bold text-yellow-600">12</div>
                        <div className="text-xs text-gray-600">Défauts</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section DMAIC améliorée */}
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
              <CardContent className="p-8 relative">
                <div className="absolute top-2 right-2 opacity-10">
                  <Target className="h-12 w-12 text-blue-600 animate-spin" style={{animationDuration: '8s'}} />
                </div>
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Démarche DMAIC
                  </h3>
                </div>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-center text-gray-700 hover:bg-blue-100 p-2 rounded-lg transition-colors">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">D</div>
                    <strong>Define</strong> (Définir les objectifs)
                  </li>
                  <li className="flex items-center text-gray-700 hover:bg-indigo-100 p-2 rounded-lg transition-colors">
                    <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">M</div>
                    <strong>Measure</strong> (Mesurer les performances)
                  </li>
                  <li className="flex items-center text-gray-700 hover:bg-purple-100 p-2 rounded-lg transition-colors">
                    <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">A</div>
                    <strong>Analyze, Improve, Control</strong>
                  </li>
                </ul>
                
                {/* Photo pour DMAIC */}
                <div className="relative group/inner">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-indigo-500/30 rounded-xl blur-lg group-hover/inner:blur-xl transition-all duration-300"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Processus DMAIC avec analyse des données et amélioration continue"
                    className="relative rounded-xl shadow-lg border border-gray-200 w-full h-40 object-cover group-hover/inner:shadow-xl transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                  
                  <div className="absolute top-2 left-2 bg-blue-500/20 backdrop-blur-md rounded-lg p-2 border border-blue-400/30">
                    <Target className="h-3 w-3 text-blue-400" />
                  </div>
                  
                  <div className="absolute bottom-2 left-2 right-2 bg-white/90 backdrop-blur-md rounded-lg p-2 border border-white/50">
                    <div className="flex justify-between text-center">
                      <div className="text-xs">
                        <div className="text-sm font-bold text-blue-600">D</div>
                        <div className="text-gray-600">Define</div>
                      </div>
                      <div className="text-xs">
                        <div className="text-sm font-bold text-indigo-600">M</div>
                        <div className="text-gray-600">Measure</div>
                      </div>
                      <div className="text-xs">
                        <div className="text-sm font-bold text-purple-600">AIC</div>
                        <div className="text-gray-600">Analyze</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-500/20 rounded-2xl blur-2xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Robot industriel automatisé dans environnement de production moderne"
              className="relative rounded-2xl shadow-2xl border border-gray-200 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/90 backdrop-blur-md rounded-xl p-6 shadow-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Performance Temps Réel</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">87.2%</div>
                    <div className="text-sm text-gray-600">TRS Actuel</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">12</div>
                    <div className="text-sm text-gray-600">Alertes Actives</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Dashboards KPIs en Temps Réel</h3>
            <p className="text-lg text-gray-600">Visualisation avancée de vos indicateurs de performance</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/30 to-blue-500/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <img 
                src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Dashboard TRS avec graphiques circulaires et barres de progression"
                className="relative rounded-2xl shadow-2xl border border-gray-200 w-full h-64 object-cover group-hover:shadow-3xl transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
              
              <div className="absolute top-4 left-4 bg-green-500/20 backdrop-blur-md rounded-lg p-3 border border-green-400/30">
                <TrendingUp className="h-5 w-5 text-green-400" />
              </div>
              
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-4 border border-white/50">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Dashboard TRS/OEE</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center bg-green-50 rounded-lg p-2">
                    <div className="text-xl font-bold text-green-600">87.2%</div>
                    <div className="text-xs text-gray-600">TRS Global</div>
                  </div>
                  <div className="text-center bg-blue-50 rounded-lg p-2">
                    <div className="text-xl font-bold text-blue-600">89.7%</div>
                    <div className="text-xs text-gray-600">OEE Moyen</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-orange-500/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Dashboard qualité PPM avec alertes et tendances"
                className="relative rounded-2xl shadow-2xl border border-gray-200 w-full h-64 object-cover group-hover:shadow-3xl transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
              
              <div className="absolute top-4 right-4 bg-purple-500/20 backdrop-blur-md rounded-lg p-3 border border-purple-400/30">
                <BarChart3 className="h-5 w-5 text-purple-400" />
              </div>
              
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-4 border border-white/50">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Dashboard Qualité</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center bg-purple-50 rounded-lg p-2">
                    <div className="text-xl font-bold text-purple-600">42</div>
                    <div className="text-xs text-gray-600">PPM Défauts</div>
                  </div>
                  <div className="text-center bg-orange-50 rounded-lg p-2">
                    <div className="text-xl font-bold text-orange-600">95.8%</div>
                    <div className="text-xs text-gray-600">Qualité</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-8 lg:p-12 text-white shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Résultats Mesurables
              </h3>
              <p className="text-lg text-gray-300 mb-8">
                Nos clients observent une amélioration significative de leurs performances 
                grâce à l'implémentation de nos solutions Lean Six Sigma digitalisées.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">+35%</div>
                  <div className="text-sm text-gray-300">Efficacité opérationnelle</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">-60%</div>
                  <div className="text-sm text-gray-300">Défauts qualité</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">-45%</div>
                  <div className="text-sm text-gray-300">Temps de cycle</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">+28%</div>
                  <div className="text-sm text-gray-300">ROI première année</div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">TRS Ligne 1</span>
                  <span className="text-sm text-green-400">87.2%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '87.2%' }}></div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">OEE Global</span>
                  <span className="text-sm text-blue-400">82.8%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '82.8%' }}></div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Qualité (PPM)</span>
                  <span className="text-sm text-purple-400">45 PPM</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeanSigmaSection;
