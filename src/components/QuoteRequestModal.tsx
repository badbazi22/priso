import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from '@/components/ui/sonner';
import { Mail, Phone, Building, User, MessageSquare, Calendar, CheckCircle } from 'lucide-react';

interface QuoteRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  position: string;
  industry: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
  currentSystems: string;
  teamSize: string;
  urgency: string;
  newsletter: boolean;
  gdprConsent: boolean;
}

const QuoteRequestModal: React.FC<QuoteRequestModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    industry: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    currentSystems: '',
    teamSize: '',
    urgency: '',
    newsletter: false,
    gdprConsent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(formData.firstName && formData.lastName && formData.email && formData.company);
      case 2:
        return !!(formData.industry && formData.projectType && formData.timeline);
      case 3:
        return !!(formData.description && formData.gdprConsent);
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3));
    } else {
      toast.error('Veuillez remplir tous les champs obligatoires');
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep(3)) {
      toast.error('Veuillez remplir tous les champs obligatoires et accepter les conditions');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate successful API response for development
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
      
      // Log the form data for development purposes
      console.log('Quote request submitted:', {
        ...formData,
        submittedAt: new Date().toISOString(),
        source: 'Website Quote Request'
      });

      toast.success('Votre demande de devis a été envoyée avec succès ! Nous vous contacterons sous 24h.');
      onClose();
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        position: '',
        industry: '',
        projectType: '',
        budget: '',
        timeline: '',
        description: '',
        currentSystems: '',
        teamSize: '',
        urgency: '',
        newsletter: false,
        gdprConsent: false,
      });
      setCurrentStep(1);
    } catch (error) {
      console.error('Error submitting quote request:', error);
      toast.error('Une erreur est survenue. Veuillez réessayer ou nous contacter directement.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Informations de contact</h3>
        <p className="text-sm text-gray-600">Parlez-nous de vous et de votre entreprise</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="flex items-center">
            <User className="h-4 w-4 mr-2 text-blue-600" />
            Prénom *
          </Label>
          <Input
            id="firstName"
            value={formData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            placeholder="Jean"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Nom *</Label>
          <Input
            id="lastName"
            value={formData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            placeholder="Dupont"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="flex items-center">
          <Mail className="h-4 w-4 mr-2 text-blue-600" />
          Email professionnel *
        </Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          placeholder="jean.dupont@entreprise.com"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="flex items-center">
          <Phone className="h-4 w-4 mr-2 text-blue-600" />
          Téléphone
        </Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
          placeholder="+33 1 23 45 67 89"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="company" className="flex items-center">
            <Building className="h-4 w-4 mr-2 text-blue-600" />
            Entreprise *
          </Label>
          <Input
            id="company"
            value={formData.company}
            onChange={(e) => handleInputChange('company', e.target.value)}
            placeholder="Nom de votre entreprise"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="position">Poste</Label>
          <Input
            id="position"
            value={formData.position}
            onChange={(e) => handleInputChange('position', e.target.value)}
            placeholder="Directeur technique"
          />
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Détails du projet</h3>
        <p className="text-sm text-gray-600">Aidez-nous à comprendre vos besoins</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="industry">Secteur d'activité *</Label>
        <Select value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Sélectionnez votre secteur" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="automobile">Automobile</SelectItem>
            <SelectItem value="aeronautique">Aéronautique</SelectItem>
            <SelectItem value="agroalimentaire">Agroalimentaire</SelectItem>
            <SelectItem value="chimie">Chimie & Pharmacie</SelectItem>
            <SelectItem value="metallurgie">Métallurgie</SelectItem>
            <SelectItem value="textile">Textile</SelectItem>
            <SelectItem value="electronique">Électronique</SelectItem>
            <SelectItem value="energie">Énergie</SelectItem>
            <SelectItem value="autre">Autre</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="projectType">Type de projet *</Label>
        <Select value={formData.projectType} onValueChange={(value) => handleInputChange('projectType', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Sélectionnez le type de projet" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="monitoring-iot">Monitoring IoT</SelectItem>
            <SelectItem value="lean-six-sigma">Lean & Six Sigma</SelectItem>
            <SelectItem value="project-management">Gestion de projet</SelectItem>
            <SelectItem value="plm-integration">Intégration PLM</SelectItem>
            <SelectItem value="dashboard-custom">Dashboard personnalisé</SelectItem>
            <SelectItem value="formation">Formation</SelectItem>
            <SelectItem value="audit">Audit & Conseil</SelectItem>
            <SelectItem value="solution-complete">Solution complète</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="budget">Budget estimé</Label>
          <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Sélectionnez une fourchette" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10k-25k">10k - 25k €</SelectItem>
              <SelectItem value="25k-50k">25k - 50k €</SelectItem>
              <SelectItem value="50k-100k">50k - 100k €</SelectItem>
              <SelectItem value="100k-250k">100k - 250k €</SelectItem>
              <SelectItem value="250k+">250k+ €</SelectItem>
              <SelectItem value="non-defini">Non défini</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="timeline" className="flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-blue-600" />
            Délai souhaité *
          </Label>
          <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Quand démarrer ?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="asap">Dès que possible</SelectItem>
              <SelectItem value="1-month">Dans le mois</SelectItem>
              <SelectItem value="3-months">Dans les 3 mois</SelectItem>
              <SelectItem value="6-months">Dans les 6 mois</SelectItem>
              <SelectItem value="next-year">L'année prochaine</SelectItem>
              <SelectItem value="flexible">Flexible</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="teamSize">Taille de l'équipe</Label>
          <Select value={formData.teamSize} onValueChange={(value) => handleInputChange('teamSize', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Nombre d'utilisateurs" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-5">1-5 utilisateurs</SelectItem>
              <SelectItem value="6-20">6-20 utilisateurs</SelectItem>
              <SelectItem value="21-50">21-50 utilisateurs</SelectItem>
              <SelectItem value="51-100">51-100 utilisateurs</SelectItem>
              <SelectItem value="100+">100+ utilisateurs</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="urgency">Niveau d'urgence</Label>
          <Select value={formData.urgency} onValueChange={(value) => handleInputChange('urgency', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Priorité du projet" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Faible</SelectItem>
              <SelectItem value="medium">Moyenne</SelectItem>
              <SelectItem value="high">Élevée</SelectItem>
              <SelectItem value="critical">Critique</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Détails du projet</h3>
        <p className="text-sm text-gray-600">Décrivez vos besoins spécifiques</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description" className="flex items-center">
          <MessageSquare className="h-4 w-4 mr-2 text-blue-600" />
          Description du projet *
        </Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
          placeholder="Décrivez votre projet, vos objectifs, les défis que vous rencontrez..."
          rows={4}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="currentSystems">Systèmes actuels</Label>
        <Textarea
          id="currentSystems"
          value={formData.currentSystems}
          onChange={(e) => handleInputChange('currentSystems', e.target.value)}
          placeholder="Quels outils/systèmes utilisez-vous actuellement ? (ERP, MES, SCADA, etc.)"
          rows={3}
        />
      </div>

      <div className="space-y-4 pt-4 border-t">
        <div className="flex items-start space-x-3">
          <Checkbox
            id="newsletter"
            checked={formData.newsletter}
            onCheckedChange={(checked) => handleInputChange('newsletter', checked as boolean)}
          />
          <Label htmlFor="newsletter" className="text-sm leading-relaxed">
            Je souhaite recevoir la newsletter IO Metric avec les dernières actualités et conseils en optimisation industrielle
          </Label>
        </div>

        <div className="flex items-start space-x-3">
          <Checkbox
            id="gdprConsent"
            checked={formData.gdprConsent}
            onCheckedChange={(checked) => handleInputChange('gdprConsent', checked as boolean)}
            required
          />
          <Label htmlFor="gdprConsent" className="text-sm leading-relaxed">
            J'accepte que mes données soient utilisées pour traiter ma demande de devis et être recontacté par IO Metric. 
            <span className="text-red-500 ml-1">*</span>
          </Label>
        </div>
      </div>
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-gray-900">
            Demande de Devis Personnalisé
          </DialogTitle>
        </DialogHeader>

        {/* Progress indicator */}
        <div className="flex items-center justify-center space-x-4 mb-6">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                currentStep >= step 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {currentStep > step ? <CheckCircle className="h-5 w-5" /> : step}
              </div>
              {step < 3 && (
                <div className={`w-12 h-1 mx-2 ${
                  currentStep > step ? 'bg-blue-600' : 'bg-gray-200'
                }`} />
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}

          <div className="flex justify-between pt-6 border-t">
            {currentStep > 1 && (
              <Button type="button" variant="outline" onClick={prevStep}>
                Précédent
              </Button>
            )}
            
            <div className="ml-auto">
              {currentStep < 3 ? (
                <Button type="button" onClick={nextStep} className="bg-blue-600 hover:bg-blue-700">
                  Suivant
                </Button>
              ) : (
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-green-600 hover:bg-green-700"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande'}
                </Button>
              )}
            </div>
          </div>
        </form>

        <div className="text-center text-sm text-gray-500 pt-4 border-t">
          <p>🔒 Vos données sont sécurisées et ne seront jamais partagées avec des tiers</p>
          <p>⚡ Réponse garantie sous 24h ouvrées</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteRequestModal;