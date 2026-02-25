import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: { 
    translation: {
      nav: { 
        about: 'About Us', 
        software: 'The Software', 
        pricing: 'Pricing', 
        faqs: 'FAQs', 
        contact: 'Contact', 
        login: 'Login', 
        getStarted: 'Get Started' 
      },
      hero: { 
        badge: 'Reviuxx Platform 2.0', 
        title_part1: 'Dominate Your', 
        title_part2: 'Online Reputation.', 
        subtitle: 'The intelligent software to automate reviews, intercept negative feedback, and skyrocket your local search rankings instantly.', 
        cta_primary: 'Start Free Trial', 
        cta_secondary: 'See how it works' 
      },
      integration: {
        prefix: 'This means for you: ',
        manual: 'no more tedious manual monitoring',
        middle: ', but a ',
        central: 'central platform',
        suffix: ' to manage and maximize all your reviews.'
      },
      about: {
        badge: 'About Reviuxx',
        title: 'The Ultimate Hub for Your Online Reputation',
        description: 'Manage reviews in one central location, actively solicit feedback, and optimize customer interaction. Save time and boost your online presence—let us help you succeed!'
      },
      software: {
        title: 'The Software',
        description: 'With our software, local businesses can not only monitor reviews on various platforms but also actively request feedback from customers. You have the option to send personalised review requests and encourage your customers to share their experiences online. This not only leads to better online reputation, but also increases revenue, as satisfied customers are more likely to buy from you and recommend your services.'
      },
      footer: {
        description: 'The all-in-one software solution for effective review management, automated responses, and optimizing your online presence to drive more sales.'
      }
    }
  },
  de: { 
    translation: {
      nav: { 
        about: 'Über Uns', 
        software: 'Die Software', 
        pricing: 'Preise', 
        faqs: 'FAQs', 
        contact: 'Kontakt', 
        login: 'Login', 
        getStarted: 'Loslegen' 
      },
      hero: { 
        badge: 'Reviuxx Plattform 2.0', 
        title_part1: 'Dominiere Deine', 
        title_part2: 'Online-Reputation.', 
        subtitle: 'Die intelligente Software, um Bewertungen zu automatisieren, negatives Feedback abzufangen und deine lokalen Suchrankings sofort zu steigern.', 
        cta_primary: 'Kostenlos Testen', 
        cta_secondary: 'So funktioniert\'s' 
      },
      integration: {
        prefix: 'Das bedeutet für dich: ',
        manual: 'kein mühsames manuelles Monitoring mehr',
        middle: ', sondern eine ',
        central: 'zentrale Plattform',
        suffix: ', um all deine Bewertungen zu verwalten und zu maximieren.'
      },
      about: {
        badge: 'Über Reviuxx',
        title: 'Der ultimative Hub für deine Online-Reputation',
        description: 'Verwalte Bewertungen an einem zentralen Ort, hole aktiv Feedback ein und optimiere die Kundeninteraktion. Spare Zeit und stärke deine Online-Präsenz – lass uns dir zum Erfolg verhelfen!'
      },
      software: {
        title: 'Die Software',
        description: 'Mit unserer Software können lokale Unternehmen nicht nur Bewertungen auf verschiedenen Plattformen überwachen, sondern auch aktiv Feedback von Kunden einholen. Du hast die Möglichkeit, personalisierte Bewertungsanfragen zu senden und deine Kunden zu ermutigen, ihre Erfahrungen online zu teilen. Dies führt nicht nur zu einer besseren Online-Reputation, sondern steigert auch den Umsatz, da zufriedene Kunden eher bei dir kaufen und deine Dienstleistungen weiterempfehlen.'
      },
      footer: {
        description: 'Die All-in-One-Softwarelösung für effektives Bewertungsmanagement, automatisierte Antworten und die Optimierung deiner Online-Präsenz, um mehr Umsatz zu generieren.'
      }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // default language
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

export default i18n;