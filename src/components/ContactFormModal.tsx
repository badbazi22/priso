import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from '@/components/ui/sonner';
import { Mail, Phone, Building, User, MessageSquare, Send } from 'lucide-react';

interface ContactFormModalProps {
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
  subject: string;
  message: string;
  gdprConsent: boolean;
}

const ContactFormModal: React.FC<ContactFormModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    subject: '',
    message: '',
    gdprConsent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateForm = (): boolean => {
    const requiredFields = ['firstName', 'lastName', 'email', 'company', 'subject', 'message'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof FormData]);
    
    if (missingFields.length > 0) {
      toast.error('Veuillez remplir tous les champs obligatoires');
      return false;
    }

    if (!formData.gdprConsent) {
      toast.error('Veuillez accepter les conditions de traitement des données');
      return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Veuillez saisir une adresse email valide');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Create email content
      const emailContent = {
        to: 'manager@precisio.ma',
        subject: `Nouveau contact depuis le site web - ${formData.subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #1e40af, #059669); color: white; padding: 20px; border-radius: 8px 8px 0 0;">
              <h1>📧 Nouveau Message de Contact</h1>
              <p>IO Metric - Precision</p>
            </div>
            
            <div style="background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb;">
              <div style="margin-bottom: 20px;">
                <h2>👤 Informations Contact</h2>
                <p><strong>Nom:</strong> ${formData.firstName} ${formData.lastName}</p>
                <p><strong>Email:</strong> ${formData.email}</p>
                <p><strong>Téléphone:</strong> ${formData.phone || 'Non renseigné'}</p>
                <p><strong>Entreprise:</strong> ${formData.company}</p>
                <p><strong>Poste:</strong> ${formData.position || 'Non renseigné'}</p>
              </div>

              <div style="margin-bottom: 20px;">
                <h2>📝 Message</h2>
                <p><strong>Sujet:</strong> ${formData.subject}</p>
                <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #3b82f6;">
                  ${formData.message.replace(/\n/g, '<br>')}
                </div>
              </div>

              <div style="margin-bottom: 20px;">
                <h2>📊 Informations Complémentaires</h2>
                <p><strong>Date de soumission:</strong> ${new Date().toLocaleString('fr-FR')}</p>
                <p><strong>Source:</strong> Site web - Formulaire de contact</p>
              </div>
            </div>

            <div style="background: #374151; color: white; padding: 15px; border-radius: 0 0 8px 8px; text-align: center;">
              <p>⚡ <strong>Action requise:</strong> Répondre sous 24h</p>
              <p>📧 Email automatique généré par le site IO Metric</p>
            </div>
          </div>
        `,
        replyTo: formData.email,
      };

      // Simulate successful email sending for development
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Log the form data for development purposes
      console.log('Contact form submitted:', {
        ...formData,
        submittedAt: new Date().toISOString(),
        source: 'Website Contact Form'
      });

      console.log('Email content that would be sent:', emailContent);

      toast.success('Votre message a été envoyé avec succès ! Nous vous contacterons sous 24h.');
      onClose();
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        position: '',
        subject: '',
        message: '',
        gdprConsent: false,
      });
    } catch (error) {
      console.error('Error sending contact form:', error);
      toast.error('Une erreur est survenue. Veuillez réessayer ou nous contacter directement.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-gray-900 flex items-center justify-center">
            <Mail className="h-6 w-6 mr-3 text-blue-600" />
            Nous Contacter
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
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

          <div className="space-y-2">
            <Label htmlFor="subject">Sujet *</Label>
            <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Sélectionnez le sujet de votre demande" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="demo">Demande de démonstration</SelectItem>
                <SelectItem value="quote">Demande de devis</SelectItem>
                <SelectItem value="information">Demande d'information</SelectItem>
                <SelectItem value="support">Support technique</SelectItem>
                <SelectItem value="partnership">Partenariat</SelectItem>
                <SelectItem value="other">Autre</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="flex items-center">
              <MessageSquare className="h-4 w-4 mr-2 text-blue-600" />
              Message *
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder="Décrivez votre demande, vos besoins ou vos questions..."
              rows={4}
              required
            />
          </div>

          <div className="space-y-4 pt-4 border-t">
            <div className="flex items-start space-x-3">
              <Checkbox
                id="gdprConsent"
                checked={formData.gdprConsent}
                onCheckedChange={(checked) => handleInputChange('gdprConsent', checked as boolean)}
                required
              />
              <Label htmlFor="gdprConsent" className="text-sm leading-relaxed">
                J'accepte que mes données soient utilisées pour traiter ma demande et être recontacté par IO Metric - Precision. 
                <span className="text-red-500 ml-1">*</span>
              </Label>
            </div>
          </div>

          <div className="flex justify-end pt-6 border-t">
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3"
            >
              {isSubmitting ? (
                'Envoi en cours...'
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Envoyer le message
                </>
              )}
            </Button>
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

export default ContactFormModal;