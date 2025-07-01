
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Cpu, Database, BarChart3, Cog, Wifi, Settings, Gauge, Monitor, Activity, TrendingUp, Zap, Network, Brain } from 'lucide-react';

const SolutionSection = () => {
  const features = [
    {
      icon: Cpu,
      title: "Compatible IoT, PLC, capteurs industriels",
      description: "Connectivité universelle avec tous vos équipements industriels existants",
      color: "from-blue-100 to-blue-200",
      iconColor: "text-blue-600"
    },
    {
      icon: BarChart3,
      title: "Dashboards personnalisables",
      description: "Intégration native avec Grafana et Power BI pour vos visualisations",
      color: "from-green-100 to-green-200",
      iconColor: "text-green-600"
    },
    {
      icon: Database,
      title: "Gestion et visualisation des données",
      description: "Architecture robuste avec InfluxDB, MongoDB, et Node-RED",
      color: "from-purple-100 to-purple-200",
      iconColor: "text-purple-600"
    },
    {
      icon: Gauge,
      title: "Monitoring industriel temps réel",
      description: "Surveillance continue de vos processus avec alertes intelligentes",
      color: "from-orange-100 to-orange-200",
      iconColor: "text-orange-600"
    }
  ];

  return (
    <section id="solution" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-green-500 rounded-full p-3">
              <Settings className="h-8 w-8 text-white animate-spin" style={{animationDuration: '4s'}} />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Solution IO Metric
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plateforme unifiée de monitoring industriel temps réel pour optimiser 
            vos performances opérationnelles
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white hover:transform hover:-translate-y-4 group">
              <CardContent className="p-8 text-center relative overflow-hidden">
                {/* Background gear animation */}
                <div className="absolute top-2 right-2 opacity-10">
                  <Cog className="h-12 w-12 text-gray-400 animate-spin" style={{animationDuration: '8s'}} />
                </div>
                
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-md transform group-hover:scale-110 transition-all duration-300`}>
                  <feature.icon className={`h-8 w-8 ${feature.iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-gray-100 relative overflow-hidden">
            {/* Animated circuit pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
              <Wifi className="w-full h-full text-blue-600 animate-pulse" />
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Monitor className="h-8 w-8 text-blue-600 mr-3" />
              Architecture Technique
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group hover:bg-blue-50 p-2 rounded-lg transition-colors">
                <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 animate-pulse"></div>
                <p className="text-gray-700">
                  <strong>Collecte de données:</strong> Protocoles industriels (Modbus, OPC-UA, MQTT)
                </p>
              </div>
              <div className="flex items-start space-x-3 group hover:bg-green-50 p-2 rounded-lg transition-colors">
                <div className="w-3 h-3 bg-green-600 rounded-full mt-2 animate-pulse delay-500"></div>
                <p className="text-gray-700">
                  <strong>Stockage:</strong> Time-series database (InfluxDB) + NoSQL (MongoDB)
                </p>
              </div>
              <div className="flex items-start space-x-3 group hover:bg-purple-50 p-2 rounded-lg transition-colors">
                <div className="w-3 h-3 bg-purple-600 rounded-full mt-2 animate-pulse delay-1000"></div>
                <p className="text-gray-700">
                  <strong>Traitement:</strong> Node-RED pour l'orchestration des flux de données
                </p>
              </div>
              <div className="flex items-start space-x-3 group hover:bg-orange-50 p-2 rounded-lg transition-colors">
                <div className="w-3 h-3 bg-orange-600 rounded-full mt-2 animate-pulse delay-1500"></div>
                <p className="text-gray-700">
                  <strong>Visualisation:</strong> Dashboards interactifs personnalisables
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-500/20 rounded-2xl blur-2xl group-hover:blur-3xl group-hover:scale-105 transition-all duration-300"></div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Circuits électroniques industriels pour collecte de données IoT et protocoles industriels"
                className="relative rounded-2xl shadow-2xl border border-gray-200 group-hover:shadow-3xl transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
              
              {/* Floating indicators */}
              <div className="absolute top-4 left-4 bg-blue-500/20 backdrop-blur-md rounded-lg p-2 border border-blue-400/30 animate-bounce">
                <Cpu className="h-4 w-4 text-blue-400" />
              </div>
              <div className="absolute top-4 right-4 bg-green-500/20 backdrop-blur-md rounded-lg p-2 border border-green-400/30 animate-bounce delay-1000">
                <Database className="h-4 w-4 text-green-400" />
              </div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-md rounded-xl p-6 shadow-xl border border-white/50">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="group hover:bg-blue-50 p-2 rounded-lg transition-colors">
                      <div className="text-2xl font-bold text-blue-600">15,247</div>
                      <div className="text-xs text-gray-600 font-medium">Données/min</div>
                    </div>
                    <div className="group hover:bg-green-50 p-2 rounded-lg transition-colors">
                      <div className="text-2xl font-bold text-green-600">127</div>
                      <div className="text-xs text-gray-600 font-medium">Équipements</div>
                    </div>
                    <div className="group hover:bg-purple-50 p-2 rounded-lg transition-colors">
                      <div className="text-2xl font-bold text-purple-600">99.9%</div>
                      <div className="text-xs text-gray-600 font-medium">Uptime</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Photos Professionnelles pour Architecture Technique */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center justify-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-2 mr-3">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              Architecture Technique Complète
            </h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              De la collecte des données à la visualisation finale - une solution technique robuste et professionnelle
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Collecte de données - Protocoles industriels */}
            <div className="relative group transform transition-all duration-500 hover:scale-105">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Circuits électroniques et protocoles industriels Modbus, OPC-UA, MQTT pour collecte de données"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                <div className="absolute top-4 left-4 bg-blue-500/90 backdrop-blur-md rounded-lg p-2 border border-blue-400/50">
                  <Network className="h-4 w-4 text-white animate-pulse" />
                </div>
                
                <div className="absolute top-4 right-4 flex space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-300"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-700"></div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <Cpu className="h-5 w-5 text-blue-600 mr-2" />
                    Collecte de Données
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center bg-blue-50 p-2 rounded">
                      <span className="font-medium text-blue-700">Modbus TCP</span>
                      <span className="text-blue-600 font-bold">Actif</span>
                    </div>
                    <div className="flex justify-between items-center bg-cyan-50 p-2 rounded">
                      <span className="font-medium text-cyan-700">OPC-UA</span>
                      <span className="text-cyan-600 font-bold">Connecté</span>
                    </div>
                    <div className="flex justify-between items-center bg-indigo-50 p-2 rounded">
                      <span className="font-medium text-indigo-700">MQTT</span>
                      <span className="text-indigo-600 font-bold">En ligne</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stockage - InfluxDB + MongoDB */}
            <div className="relative group transform transition-all duration-500 hover:scale-105">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 via-emerald-500 to-green-700 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-emerald-500"></div>
                
                <img 
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Serveurs et bases de données time-series InfluxDB et MongoDB pour stockage industriel"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                <div className="absolute top-4 left-4 bg-green-500/90 backdrop-blur-md rounded-lg p-2 border border-green-400/50">
                  <Database className="h-4 w-4 text-white animate-bounce" />
                </div>
                
                <div className="absolute top-4 right-4 bg-green-400/20 backdrop-blur-md rounded-full px-2 py-1 border border-green-400/40">
                  <span className="text-green-100 text-xs font-bold">99.9% UP</span>
                </div>
                
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <Database className="h-5 w-5 text-green-600 mr-2" />
                    Stockage
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center bg-green-50 p-2 rounded">
                      <span className="font-medium text-green-700">InfluxDB</span>
                      <span className="text-green-600 font-bold">Time-series</span>
                    </div>
                    <div className="flex justify-between items-center bg-emerald-50 p-2 rounded">
                      <span className="font-medium text-emerald-700">MongoDB</span>
                      <span className="text-emerald-600 font-bold">NoSQL</span>
                    </div>
                    <div className="flex justify-between items-center bg-teal-50 p-2 rounded">
                      <span className="font-medium text-teal-700">Rétention</span>
                      <span className="text-teal-600 font-bold">2 ans</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Traitement - Node-RED */}
            <div className="relative group transform transition-all duration-500 hover:scale-105">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-violet-500 to-purple-700 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-violet-500"></div>
                
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Interface Node-RED pour orchestration et traitement des flux de données industrielles"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                <div className="absolute top-4 left-4 bg-purple-500/90 backdrop-blur-md rounded-lg p-2 border border-purple-400/50">
                  <Brain className="h-4 w-4 text-white animate-spin" style={{animationDuration: '3s'}} />
                </div>
                
                <div className="absolute top-4 right-4 flex space-x-1">
                  <div className="w-3 h-3 bg-purple-400 rounded-sm animate-pulse"></div>
                  <div className="w-3 h-3 bg-violet-400 rounded-sm animate-pulse delay-200"></div>
                  <div className="w-3 h-3 bg-indigo-400 rounded-sm animate-pulse delay-400"></div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <Cog className="h-5 w-5 text-purple-600 mr-2 animate-spin" style={{animationDuration: '4s'}} />
                    Traitement
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center bg-purple-50 p-2 rounded">
                      <span className="font-medium text-purple-700">Node-RED</span>
                      <span className="text-purple-600 font-bold">Orchestration</span>
                    </div>
                    <div className="flex justify-between items-center bg-violet-50 p-2 rounded">
                      <span className="font-medium text-violet-700">Flux</span>
                      <span className="text-violet-600 font-bold">Données</span>
                    </div>
                    <div className="flex justify-between items-center bg-indigo-50 p-2 rounded">
                      <span className="font-medium text-indigo-700">Temps réel</span>
                      <span className="text-indigo-600 font-bold">12ms</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Visualisation - Dashboards interactifs */}
            <div className="relative group transform transition-all duration-500 hover:scale-105">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 via-red-500 to-orange-700 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 to-red-500"></div>
                
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Dashboards interactifs personnalisables pour visualisation de données industrielles"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                <div className="absolute top-4 left-4 bg-orange-500/90 backdrop-blur-md rounded-lg p-2 border border-orange-400/50">
                  <Monitor className="h-4 w-4 text-white animate-bounce" />
                </div>
                
                <div className="absolute top-4 right-4 bg-orange-400/20 backdrop-blur-md rounded-lg px-2 py-1 border border-orange-400/40">
                  <Zap className="h-3 w-3 text-orange-100 animate-pulse" />
                </div>
                
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <BarChart3 className="h-5 w-5 text-orange-600 mr-2" />
                    Visualisation
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center bg-orange-50 p-2 rounded">
                      <span className="font-medium text-orange-700">Dashboards</span>
                      <span className="text-orange-600 font-bold">Interactifs</span>
                    </div>
                    <div className="flex justify-between items-center bg-red-50 p-2 rounded">
                      <span className="font-medium text-red-700">Personnalisable</span>
                      <span className="text-red-600 font-bold">100%</span>
                    </div>
                    <div className="flex justify-between items-center bg-amber-50 p-2 rounded">
                      <span className="font-medium text-amber-700">Temps réel</span>
                      <span className="text-amber-600 font-bold">Live</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
