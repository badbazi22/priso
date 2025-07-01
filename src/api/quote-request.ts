// This file would be used in a real backend implementation
// For now, it's just a placeholder to show the expected API structure

export interface QuoteRequestData {
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
  submittedAt: string;
  source: string;
}

// Email template for the quote request
export const generateEmailTemplate = (data: QuoteRequestData): string => {
  return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Nouvelle demande de devis - IO Metric</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #1e40af, #059669); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
        .section { margin-bottom: 20px; }
        .label { font-weight: bold; color: #374151; }
        .value { margin-left: 10px; }
        .priority-high { color: #dc2626; font-weight: bold; }
        .priority-medium { color: #d97706; font-weight: bold; }
        .priority-low { color: #059669; font-weight: bold; }
        .footer { background: #374151; color: white; padding: 15px; border-radius: 0 0 8px 8px; text-align: center; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎯 Nouvelle Demande de Devis</h1>
            <p>IO Metric - Precision</p>
        </div>
        
        <div class="content">
            <div class="section">
                <h2>👤 Informations Contact</h2>
                <p><span class="label">Nom:</span><span class="value">${data.firstName} ${data.lastName}</span></p>
                <p><span class="label">Email:</span><span class="value">${data.email}</span></p>
                <p><span class="label">Téléphone:</span><span class="value">${data.phone || 'Non renseigné'}</span></p>
                <p><span class="label">Entreprise:</span><span class="value">${data.company}</span></p>
                <p><span class="label">Poste:</span><span class="value">${data.position || 'Non renseigné'}</span></p>
            </div>

            <div class="section">
                <h2>🏭 Détails Projet</h2>
                <p><span class="label">Secteur:</span><span class="value">${data.industry}</span></p>
                <p><span class="label">Type de projet:</span><span class="value">${data.projectType}</span></p>
                <p><span class="label">Budget estimé:</span><span class="value">${data.budget || 'Non défini'}</span></p>
                <p><span class="label">Délai souhaité:</span><span class="value">${data.timeline}</span></p>
                <p><span class="label">Taille équipe:</span><span class="value">${data.teamSize || 'Non renseigné'}</span></p>
                <p><span class="label">Urgence:</span><span class="value ${
                  data.urgency === 'high' || data.urgency === 'critical' ? 'priority-high' :
                  data.urgency === 'medium' ? 'priority-medium' : 'priority-low'
                }">${data.urgency || 'Non renseigné'}</span></p>
            </div>

            <div class="section">
                <h2>📝 Description du Projet</h2>
                <p style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #3b82f6;">
                    ${data.description}
                </p>
            </div>

            ${data.currentSystems ? `
            <div class="section">
                <h2>🔧 Systèmes Actuels</h2>
                <p style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #10b981;">
                    ${data.currentSystems}
                </p>
            </div>
            ` : ''}

            <div class="section">
                <h2>📊 Informations Complémentaires</h2>
                <p><span class="label">Newsletter:</span><span class="value">${data.newsletter ? '✅ Oui' : '❌ Non'}</span></p>
                <p><span class="label">Date de soumission:</span><span class="value">${new Date(data.submittedAt).toLocaleString('fr-FR')}</span></p>
                <p><span class="label">Source:</span><span class="value">${data.source}</span></p>
            </div>
        </div>

        <div class="footer">
            <p>⚡ <strong>Action requise:</strong> Répondre sous 24h</p>
            <p>📧 Email automatique généré par le site IO Metric</p>
        </div>
    </div>
</body>
</html>
  `;
};

// Function to send email (would be implemented on the backend)
export const sendQuoteRequestEmail = async (data: QuoteRequestData): Promise<boolean> => {
  try {
    // This would be implemented with your email service (SendGrid, Mailgun, etc.)
    const emailContent = generateEmailTemplate(data);
    
    // Example with a generic email service
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'contact@iometric-precision.com', // Your business email
        subject: `🎯 Nouvelle demande de devis - ${data.company} (${data.industry})`,
        html: emailContent,
        replyTo: data.email,
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};