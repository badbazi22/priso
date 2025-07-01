import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trello, AlertTriangle, FileOutput, Clock, Wrench, Cog, Settings2 } from 'lucide-react';

const ProjectManagementSection = () => {
  const kanbanItems = [
    { id: 1, title: "Maintenance préventive Ligne 3", status: "À faire", priority: "Haute", dueDate: "2024-01-15" },
    { id: 2, title: "Calibration capteurs pression", status: "En cours", priority: "Moyenne", dueDate: "2024-01-12" },
    { id: 3, title: "Formation équipe qualité", status: "En cours", priority: "Haute", dueDate: "2024-01-10" },
    { id: 4, title: "Audit 5S atelier", status: "Terminé", priority: "Basse", dueDate: "2024-01-08" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "À faire": return "bg-gray-100 text-gray-800";
      case "En cours": return "bg-blue-100 text-blue-800";
      case "Terminé": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Haute": return "bg-red-100 text-red-800";
      case "Moyenne": return "bg-yellow-100 text-yellow-800";
      case "Basse": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="project-mgmt" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Animated background gears */}
      <div className="absolute inset-0 opacity-5">
        <Cog className="absolute top-20 left-10 w-16 h-16 text-gray-400 animate-spin" style={{animationDuration: '20s'}} />
        <Settings2 className="absolute top-40 right-20 w-12 h-12 text-gray-400 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}} />
        <Wrench className="absolute bottom-20 left-1/4 w-10 h-10 text-gray-400 animate-pulse" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-purple-500 rounded-full p-3 animate-pulse">
              <Trello className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Gestion de Projet Intégrée
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pilotez vos tâches industrielles avec une vue Kanban intuitive et 
            des alertes intelligentes sur les jalons critiques
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className="grid gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group hover:scale-105">
              <CardContent className="p-8 text-center relative overflow-hidden">
                <div className="absolute top-2 right-2 opacity-10">
                  <Trello className="h-8 w-8 text-blue-400 group-hover:animate-pulse" />
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform">
                  <Trello className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Vue Kanban
                </h3>
                <p className="text-gray-600">
                  Organisez et suivez vos tâches industrielles avec une interface visuelle intuitive
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group hover:scale-105">
              <CardContent className="p-8 text-center relative overflow-hidden">
                <div className="absolute top-2 right-2 opacity-10">
                  <AlertTriangle className="h-8 w-8 text-orange-400 group-hover:animate-bounce" />
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform">
                  <AlertTriangle className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Alertes Critiques
                </h3>
                <p className="text-gray-600">
                  Recevez des notifications automatiques sur les écarts de performance et jalons
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group hover:scale-105">
              <CardContent className="p-8 text-center relative overflow-hidden">
                <div className="absolute top-2 right-2 opacity-10">
                  <FileOutput className="h-8 w-8 text-green-400 group-hover:animate-pulse" />
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform">
                  <FileOutput className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Rapports Exportables
                </h3>
                <p className="text-gray-600">
                  Générez automatiquement des rapports d'avancement détaillés et personnalisés
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-500/20 rounded-2xl blur-2xl group-hover:blur-3xl group-hover:scale-105 transition-all duration-300"></div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Équipe d'ingénieurs analysant des données sur écrans multiples dans un centre de contrôle industriel"
                className="relative rounded-2xl shadow-2xl w-full h-full object-cover border border-gray-200 group-hover:shadow-3xl transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              
              {/* Floating tech indicators */}
              <div className="absolute top-4 left-4 bg-blue-500/20 backdrop-blur-md rounded-lg p-2 border border-blue-400/30 animate-pulse">
                <Trello className="h-4 w-4 text-blue-400" />
              </div>
              <div className="absolute top-1/3 right-4 bg-orange-500/20 backdrop-blur-md rounded-lg p-2 border border-orange-400/30 animate-pulse delay-1000">
                <AlertTriangle className="h-4 w-4 text-orange-400" />
              </div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-md rounded-xl p-6 shadow-xl border border-white/50">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Wrench className="h-5 w-5 text-blue-600 mr-2" />
                    Centre de Contrôle
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center hover:bg-blue-50 p-2 rounded-lg transition-colors">
                      <div className="text-2xl font-bold text-blue-600">24</div>
                      <div className="text-sm text-gray-600">Projets Actifs</div>
                    </div>
                    <div className="text-center hover:bg-green-50 p-2 rounded-lg transition-colors">
                      <div className="text-2xl font-bold text-green-600">89%</div>
                      <div className="text-sm text-gray-600">Taux Réalisation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 border border-gray-200">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center">
              <Settings2 className="h-6 w-6 text-blue-600 mr-3 animate-spin" style={{animationDuration: '6s'}} />
              Tableau Kanban - Projets Industriels
            </h3>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-gray-500" />
              <span className="text-sm text-gray-500">Mis à jour il y a 2 min</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 bg-gradient-to-r from-gray-200 to-gray-100 px-4 py-3 rounded-lg shadow-sm">
                À faire (1)
              </h4>
              <div className="space-y-4">
                {kanbanItems.filter(item => item.status === "À faire").map(item => (
                  <Card key={item.id} className="border border-gray-200 hover:shadow-md transition-all duration-300 hover:border-gray-300 hover:scale-105">
                    <CardContent className="p-4">
                      <h5 className="font-medium text-gray-900 mb-3">{item.title}</h5>
                      <div className="flex justify-between items-center">
                        <Badge className={getPriorityColor(item.priority)}>
                          {item.priority}
                        </Badge>
                        <span className="text-sm text-gray-500 font-medium">{item.dueDate}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4 bg-gradient-to-r from-blue-100 to-blue-50 px-4 py-3 rounded-lg shadow-sm">
                En cours (2)
              </h4>
              <div className="space-y-4">
                {kanbanItems.filter(item => item.status === "En cours").map(item => (
                  <Card key={item.id} className="border border-blue-200 hover:shadow-md transition-all duration-300 hover:border-blue-300 bg-blue-50/30 hover:scale-105">
                    <CardContent className="p-4">
                      <h5 className="font-medium text-gray-900 mb-3">{item.title}</h5>
                      <div className="flex justify-between items-center">
                        <Badge className={getPriorityColor(item.priority)}>
                          {item.priority}
                        </Badge>
                        <span className="text-sm text-gray-500 font-medium">{item.dueDate}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4 bg-gradient-to-r from-green-100 to-green-50 px-4 py-3 rounded-lg shadow-sm">
                Terminé (1)
              </h4>
              <div className="space-y-4">
                {kanbanItems.filter(item => item.status === "Terminé").map(item => (
                  <Card key={item.id} className="border border-green-200 hover:shadow-md transition-all duration-300 hover:border-green-300 bg-green-50/30 hover:scale-105">
                    <CardContent className="p-4">
                      <h5 className="font-medium text-gray-900 mb-3">{item.title}</h5>
                      <div className="flex justify-between items-center">
                        <Badge className={getPriorityColor(item.priority)}>
                          {item.priority}
                        </Badge>
                        <span className="text-sm text-gray-500 font-medium">{item.dueDate}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectManagementSection;
