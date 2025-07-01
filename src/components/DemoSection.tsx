import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Zap, Thermometer, Power, AlertTriangle, Play, Pause, FileText, Cpu, Gauge, Settings, Cog } from 'lucide-react';

const DemoSection = () => {
  const [isRunning, setIsRunning] = useState(true);
  const [trs, setTrs] = useState(87.2);
  const [availability, setAvailability] = useState(94.5);
  const [mttr, setMttr] = useState(12.3);
  const [energy, setEnergy] = useState(156.8);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTrs(prev => Math.max(75, Math.min(98, prev + (Math.random() - 0.5) * 2)));
      setAvailability(prev => Math.max(85, Math.min(99, prev + (Math.random() - 0.5) * 1)));
      setMttr(prev => Math.max(8, Math.min(25, prev + (Math.random() - 0.5) * 3)));
      setEnergy(prev => Math.max(120, Math.min(200, prev + (Math.random() - 0.5) * 10)));
    }, 2000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const alerts = [
    { id: 1, type: "warning", message: "Température élevée - Ligne 2", time: "Il y a 5 min" },
    { id: 2, type: "info", message: "Maintenance programmée - Zone A", time: "Il y a 15 min" },
    { id: 3, type: "error", message: "Arrêt imprévu - Machine M3", time: "Il y a 2h" }
  ];

  const getAlertColor = (type: string) => {
    switch (type) {
      case "error": return "bg-red-100 text-red-800 border-red-200";
      case "warning": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "info": return "bg-blue-100 text-blue-800 border-blue-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <section id="demo" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <Cog className="absolute top-20 left-20 w-20 h-20 text-blue-400 animate-spin" style={{animationDuration: '12s'}} />
        <Settings className="absolute top-40 right-32 w-16 h-16 text-green-400 animate-spin" style={{animationDuration: '8s', animationDirection: 'reverse'}} />
        <Cpu className="absolute bottom-20 left-1/3 w-12 h-12 text-purple-400 animate-pulse" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-green-500 rounded-full p-4 animate-pulse">
              <Gauge className="h-10 w-10 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Dashboard Démo Interactif
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Découvrez en temps réel la puissance de notre plateforme de monitoring industriel
          </p>
          <div className="flex justify-center space-x-4">
            <Button 
              onClick={() => setIsRunning(!isRunning)}
              className={`${isRunning ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'} text-white transform hover:scale-105 transition-all duration-300 shadow-lg`}
            >
              {isRunning ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
              {isRunning ? 'Arrêter la démo' : 'Lancer la démo'}
            </Button>
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
              <FileText className="h-4 w-4 mr-2" />
              Générer rapport
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                <Gauge className="h-4 w-4 mr-2 text-green-600 group-hover:animate-spin" style={{animationDuration: '2s'}} />
                TRS Global
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600 mb-2">
                {trs.toFixed(1)}%
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-500 h-2 rounded-full transition-all duration-1000" 
                  style={{ width: `${trs}%` }}
                ></div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                <Zap className="h-4 w-4 mr-2 text-blue-600 group-hover:animate-pulse" />
                Disponibilité
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {availability.toFixed(1)}%
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full transition-all duration-1000" 
                  style={{ width: `${availability}%` }}
                ></div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                <Thermometer className="h-4 w-4 mr-2 text-purple-600 group-hover:animate-bounce" />
                MTTR
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {mttr.toFixed(1)}h
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-purple-500 h-2 rounded-full transition-all duration-1000" 
                  style={{ width: `${(25 - mttr) * 4}%` }}
                ></div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                <Power className="h-4 w-4 mr-2 text-orange-600 group-hover:animate-pulse" />
                Consommation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-600 mb-2">
                {energy.toFixed(0)} kW
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-orange-500 h-2 rounded-full transition-all duration-1000" 
                  style={{ width: `${(energy / 200) * 100}%` }}
                ></div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="bg-white border-0 shadow-lg relative overflow-hidden">
            <div className="absolute top-2 right-2 opacity-10">
              <Cpu className="h-12 w-12 text-blue-400 animate-pulse" />
            </div>
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900 flex items-center">
                <Thermometer className="h-6 w-6 text-red-500 mr-3" />
                Carte Thermique - Zones de Production
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                {[...Array(9)].map((_, index) => {
                  const temp = 20 + Math.random() * 40;
                  const getColor = (temp: number) => {
                    if (temp < 30) return "bg-blue-200 border-blue-300 hover:bg-blue-300";
                    if (temp < 40) return "bg-green-200 border-green-300 hover:bg-green-300";
                    if (temp < 50) return "bg-yellow-200 border-yellow-300 hover:bg-yellow-300";
                    return "bg-red-200 border-red-300 hover:bg-red-300";
                  };
                  
                  return (
                    <div 
                      key={index}
                      className={`p-4 rounded-lg border-2 text-center ${getColor(temp)} transition-all duration-300 cursor-pointer transform hover:scale-105`}
                    >
                      <div className="text-sm font-medium text-gray-700">Zone {index + 1}</div>
                      <div className="text-lg font-bold text-gray-900">{temp.toFixed(1)}°C</div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-lg relative overflow-hidden">
            <div className="absolute top-2 right-2 opacity-10">
              <AlertTriangle className="h-12 w-12 text-orange-400 animate-bounce" />
            </div>
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900 flex items-center justify-between">
                <div className="flex items-center">
                  <AlertTriangle className="h-6 w-6 text-orange-500 mr-3" />
                  Alertes en Temps Réel
                </div>
                <Badge className="bg-red-100 text-red-800 animate-pulse">
                  {alerts.length} alertes
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {alerts.map((alert) => (
                  <div 
                    key={alert.id}
                    className={`p-4 rounded-lg border ${getAlertColor(alert.type)} flex items-start justify-between hover:shadow-md transition-all duration-300 transform hover:scale-102`}
                  >
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium">{alert.message}</div>
                        <div className="text-sm opacity-75">{alert.time}</div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="text-xs hover:scale-105 transition-transform">
                      Action
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
              <Settings className="w-full h-full text-blue-600 animate-spin" style={{animationDuration: '20s'}} />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center">
              <Cpu className="h-8 w-8 text-blue-600 mr-3" />
              Prêt à transformer votre industrie ?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Cette démo ne représente qu'un aperçu des possibilités offertes par IO Metric - Precision. 
              Contactez-nous pour découvrir comment adapter notre solution à vos besoins spécifiques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Planifier une démo personnalisée
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Télécharger la brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
