import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Minimal inline translations (we can move these to JSON files later)
const resources = {
  en: { translation: {
      nav: { features: 'Features', pricing: 'Pricing', about: 'About Us', getStarted: 'Get Started' },
      hero: { badge: 'The All-In-One Reputation Platform', title_part1: 'Optimize Your', title_part2: 'Online Presence.', subtitle: 'Reviuxx gives you the powerful software needed to manage reviews effectively, increase sales, and master customer interactions.', cta_primary: 'Start Free Trial', cta_secondary: 'Watch Demo' }
  }},
  de: { translation: {
      nav: { features: 'Funktionen', pricing: 'Preise', about: 'Über Uns', getStarted: 'Loslegen' },
      hero: { badge: 'Die All-In-One Reputationsplattform', title_part1: 'Optimiere Deine', title_part2: 'Online-Präsenz.', subtitle: 'Reviuxx bietet dir die leistungsstarke Software, die du benötigst, um Bewertungen effektiv zu verwalten, den Umsatz zu steigern und Kundeninteraktionen zu meistern.', cta_primary: 'Kostenlos Testen', cta_secondary: 'Demo Ansehen' }
  }}
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // default language
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

export default i18n;