import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: 'aszothiam28@gmail.com',
    pass: process.env.GMAIL_APP_PASSWORD
  }
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  const { name, email, subject, message } = req.body;

  try {
    // Email envoyé à vous (aszothiam28@gmail.com)
    const mailOptions = {
      from: 'aszothiam28@gmail.com',
      to: 'aszothiam28@gmail.com',
      subject: `Nouveau message de ${name}: ${subject}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>De:</strong> ${name} (${email})</p>
        <p><strong>Sujet:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p><em>Envoyé depuis le formulaire de contact de votre portfolio</em></p>
      `
    };

    await transporter.sendMail(mailOptions);

    // Email de confirmation au visiteur
    const confirmationMail = {
      from: 'aszothiam28@gmail.com',
      to: email,
      subject: 'Confirmation de votre message',
      html: `
        <h2>Bonjour ${name},</h2>
        <p>Merci de nous avoir contactés ! Nous avons bien reçu votre demande : « ${subject} » et nous ferons tout notre possible pour la traiter sous 3 jours ouvrés.</p>
        <p><strong>Votre message :</strong></p>
        <p>${message}</p>
        <p>Cordialement,<br>L'équipe ASZOTHIAM</p>
      `
    };

    await transporter.sendMail(confirmationMail);

    res.status(200).json({ success: true, message: 'Emails envoyés avec succès' });
  } catch (error) {
    console.error('Erreur lors de l\'envoi des emails:', error);
    res.status(500).json({ success: false, message: 'Erreur lors de l\'envoi' });
  }
}
