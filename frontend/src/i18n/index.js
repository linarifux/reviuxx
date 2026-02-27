import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: { 
    translation: {
      nav: { 
        home: 'Home',
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
      trust: {
        badge: 'Trusted By',
        title: 'Loved by leading local businesses',
        subtitle: 'Join hundreds of companies that use Reviuxx to dominate their local search rankings and automate their customer feedback.',
        integrationText: 'Seamlessly connects with over 50+ platforms',
        testimonials: [
          {
            quote: "Reviuxx completely changed how we handle customer feedback. Our Google rating went from 4.1 to 4.8 in just three months. The AI responses save us hours every week.",
            name: "Sarah Jenkins",
            role: "Operations Manager",
            company: "Bloom Coffee Roasters"
          },
          {
            quote: "Managing 15 different retail locations was a nightmare before Reviuxx. Now, I have a single dashboard that gives me a bird's-eye view of our entire brand reputation.",
            name: "Marcus Thorne",
            role: "CEO",
            company: "Thorne Retail Group"
          },
          {
            quote: "The automated WhatsApp requests are incredible. Our conversion rate for getting reviews after a service appointment has tripled.",
            name: "Elena Rodriguez",
            role: "Owner",
            company: "Rapid Repair Services"
          }
        ]
      },
      about: {
        badge: 'About Reviuxx',
        title: 'The Ultimate Hub for Your Online Reputation',
        description: 'Manage reviews in one central location, actively solicit feedback, and optimize customer interaction. Save time and boost your online presence—let us help you succeed!',
        cards: {
          platforms: {
            title: 'Leading Review Platforms',
            desc: "Seamlessly integrate with Google, Trustpilot, Yelp, Facebook, and dozens more. Never miss a customer's voice."
          },
          ai: {
            title: 'AI-Powered Responses',
            desc: 'Generate intelligent, personalized replies instantly to maintain perfect customer relationships.'
          },
          feedback: {
            title: 'Video & Private Feedback',
            desc: 'Leverage authentic video testimonials while securely collecting private, constructive comments.'
          },
          branches: {
            title: 'Manage Multiple Branches',
            desc: 'Scale your business effortlessly. Monitor, compare, and optimize reputation scores across all your physical locations from one single dashboard.',
            locations: ['New York HQ', 'Berlin Office', 'London Branch']
          }
        }
      },
      software: {
        title: 'The Software',
        description: 'With our software, local businesses can not only monitor reviews on various platforms but also actively request feedback from customers. You have the option to send personalised review requests and encourage your customers to share their experiences online. This not only leads to better online reputation, but also increases revenue, as satisfied customers are more likely to buy from you and recommend your services.',
        feature_feedback: 'Furthermore, our software allows you to collect private feedback to gain valuable insights into customer satisfaction and identify areas for improvement. By responding to your customers\' feedback and adjusting your offerings accordingly, you not only increase their satisfaction but also their profitability.',
        feature_centralized: 'A standout feature of our solution is the centralized management of all reviews. Whether you run a single business or a chain of stores, our software allows you to easily manage all reviews in one place. You gain a clear overview of your customer feedback and can respond to it effortlessly.',
        feature_ai: 'And the best part is: our software uses artificial intelligence to help you respond to reviews. With intelligent response suggestions, you can save time and respond professionally to your customers\' feedback. This feature is also available for multiple branches simultaneously, allowing you to maintain consistent and effective communication.'
      },
      pricing: {
        title: 'Prices and Packages',
        subtitle: 'Choose the perfect plan to dominate your online reputation and scale your business.',
        orderNow: 'Order Now',
        perMonth: 'per month',
        perYear: 'per year',
        unlimited: 'Unlimited',
        sites: {
          bronze: '1 Review Site (e.g. Google)',
          silver: '2 Review Sites',
          gold: 'Multiple Review Sites',
          platinum: 'All Review Sites'
        },
        features: {
          qr: 'Custom QR-Code',
          dashboard: 'Custom Dashboard',
          import: 'Option to import data',
          analytics: 'Analytics tool',
          social: 'Share reviews on social media',
          ai: 'AI-technology for responses',
          zapier: 'Zapier integration (Automated processes)',
          noBrand: 'No Revuxx branding',
        }
      },
      faqs: {
        title: 'Frequently Asked Questions',
        subtitle: 'Everything you need to know about the Reviuxx platform and how it can help your business.',
        searchPlaceholder: 'Looking for something specific?',
        category: 'General FAQs',
        items: [
          {
            q: 'What kind of customer support or training is available to users of your platform?',
            a: 'Our support team is available via chat and email. We strive to answer all inquiries within 24 hours. Instructions for using our platform and training courses are, of course, provided.'
          },
          {
            q: 'What types of reviews can be managed and monitored? Are they limited to specific websites?',
            a: 'You can manage and monitor reviews from over 50+ major platforms including Google, Facebook, TripAdvisor, Yelp, and industry-specific sites. Everything is consolidated into one centralized dashboard.'
          },
          {
            q: 'How are reviews shared? Can they be posted directly on social media?',
            a: 'Yes! Our platform features a seamless social media integration. With just one click, you can turn your best 5-star reviews into beautiful graphic posts and share them directly to your Instagram, Facebook, or LinkedIn feeds.'
          },
          {
            q: 'How does your platform contribute to generating reviews?',
            a: 'We automate the ask. You can send highly personalized review requests via Email, SMS, or WhatsApp directly to your customers after a purchase or visit, drastically increasing your conversion rate.'
          },
          {
            q: 'Is your platform adaptable and scalable for companies of different sizes or industries?',
            a: 'Absolutely. Whether you are a single local restaurant or a massive retail franchise with hundreds of locations, our software scales to fit your needs, allowing you to manage multiple branches from a single master account.'
          }
        ]
      },
      contact: {
        badge: 'Contact Us',
        title: 'Get in Touch',
        subtitle: 'Ready to dominate your online reputation? Reach out to us today. Our team is here to help your business scale.',
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Type your message here...',
        privacyStart: 'I have read the ',
        privacyLink: 'Privacy Policy',
        privacyEnd: ' and consent to Reviuxx LLC processing my data to handle my inquiry and contact me. I may withdraw my consent at any time with future effect.',
        submit: 'Send Message',
        submitting: 'Sending...',
        successTitle: 'Message Sent!',
        successText: 'Thank you for reaching out. Our team will get back to you shortly.',
        emailLabel: 'Email Us',
        phoneLabel: 'Call Us',
        emailValue: 'info@reviuxx.com',
        phoneValue: '015234662968'
      },
      footer: {
        description: 'The all-in-one software solution for effective review management, automated responses, and optimizing your online presence to drive more sales.'
      }
    }
  },
  de: { 
    translation: {
      nav: { 
        home: 'Startseite',
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
      trust: {
        badge: 'Vertraut Von',
        title: 'Geliebt von führenden lokalen Unternehmen',
        subtitle: 'Schließe dich Hunderten von Unternehmen an, die Reviuxx nutzen, um ihre lokalen Suchrankings zu dominieren und Kundenfeedback zu automatisieren.',
        integrationText: 'Nahtlose Integration mit über 50+ Plattformen',
        testimonials: [
          {
            quote: "Reviuxx hat unseren Umgang mit Kundenfeedback komplett verändert. Unsere Google-Bewertung stieg in nur drei Monaten von 4.1 auf 4.8. Die KI-Antworten sparen uns jede Woche Stunden.",
            name: "Sarah Jenkins",
            role: "Betriebsleiterin",
            company: "Bloom Coffee Roasters"
          },
          {
            quote: "Die Verwaltung von 15 verschiedenen Einzelhandelsstandorten war vor Reviuxx ein Albtraum. Jetzt habe ich ein einziges Dashboard, das mir einen Überblick über unsere gesamte Markenreputation gibt.",
            name: "Marcus Thorne",
            role: "CEO",
            company: "Thorne Retail Group"
          },
          {
            quote: "Die automatisierten WhatsApp-Anfragen sind unglaublich. Unsere Konversionsrate für Bewertungen nach einem Servicetermin hat sich verdreifacht.",
            name: "Elena Rodriguez",
            role: "Inhaberin",
            company: "Rapid Repair Services"
          }
        ]
      },
      about: {
        badge: 'Über Reviuxx',
        title: 'Der ultimative Hub für deine Online-Reputation',
        description: 'Verwalte Bewertungen an einem zentralen Ort, hole aktiv Feedback ein und optimiere die Kundeninteraktion. Spare Zeit und stärke deine Online-Präsenz – lass uns dir zum Erfolg verhelfen!',
        cards: {
          platforms: {
            title: 'Führende Bewertungsportale',
            desc: "Nahtlose Integration mit Google, Trustpilot, Yelp, Facebook und dutzenden mehr. Verpasse nie wieder die Stimme eines Kunden."
          },
          ai: {
            title: 'KI-gestützte Antworten',
            desc: 'Generiere sofort intelligente, personalisierte Antworten, um perfekte Kundenbeziehungen zu pflegen.'
          },
          feedback: {
            title: 'Video & Privates Feedback',
            desc: 'Nutze authentische Video-Testimonials und sammle gleichzeitig sicher privates, konstruktives Feedback.'
          },
          branches: {
            title: 'Mehrere Filialen Verwalten',
            desc: 'Skaliere dein Geschäft mühelos. Überwache, vergleiche und optimiere die Reputationswerte aller physischen Standorte über ein einziges Dashboard.',
            locations: ['New York HQ', 'Büro Berlin', 'Filiale London']
          }
        }
      },
      software: {
        title: 'Die Software',
        description: 'Mit unserer Software können lokale Unternehmen nicht nur Bewertungen auf verschiedenen Plattformen überwachen, sondern auch aktiv Feedback von Kunden einholen. Du hast die Möglichkeit, personalisierte Bewertungsanfragen zu senden und deine Kunden zu ermutigen, ihre Erfahrungen online zu teilen. Dies führt nicht nur zu einer besseren Online-Reputation, sondern steigert auch den Umsatz, da zufriedene Kunden eher bei dir kaufen und deine Dienstleistungen weiterempfehlen.',
        feature_feedback: 'Darüber hinaus ermöglicht unsere Software das Sammeln von privatem Feedback, um wertvolle Erkenntnisse über die Kundenzufriedenheit zu gewinnen und Verbesserungspotenziale zu identifizieren. Indem du auf das Feedback deiner Kunden eingehst und dein Angebot entsprechend anpasst, steigerst du nicht nur deren Zufriedenheit, sondern auch deine Rentabilität.',
        feature_centralized: 'Ein herausragendes Merkmal unserer Lösung ist die zentrale Verwaltung aller Bewertungen. Egal, ob du ein einzelnes Geschäft oder eine Filialkette betreibst, unsere Software ermöglicht es dir, alle Bewertungen einfach an einem Ort zu verwalten. Du erhältst einen klaren Überblick über das Kundenfeedback und kannst mühelos darauf reagieren.',
        feature_ai: 'Und das Beste daran: Unsere Software nutzt künstliche Intelligenz, um dir bei der Beantwortung von Bewertungen zu helfen. Mit intelligenten Antwortvorschlägen sparst du Zeit und kannst professionell auf das Feedback deiner Kunden reagieren. Diese Funktion steht auch für mehrere Filialen gleichzeitig zur Verfügung, sodass du eine konsistente und effektive Kommunikation aufrechterhalten kannst.'
      },
      pricing: {
        title: 'Preise und Pakete',
        subtitle: 'Wähle den perfekten Plan, um deine Online-Reputation zu dominieren und dein Geschäft zu skalieren.',
        orderNow: 'Jetzt Bestellen',
        perMonth: 'pro Monat',
        perYear: 'pro Jahr',
        unlimited: 'Unbegrenzt',
        sites: {
          bronze: '1 Bewertungsportal (z.B. Google)',
          silver: '2 Bewertungsportale',
          gold: 'Mehrere Bewertungsportale',
          platinum: 'Alle Bewertungsportale'
        },
        features: {
          qr: 'Individueller QR-Code',
          dashboard: 'Individuelles Dashboard',
          import: 'Möglichkeit zum Datenimport',
          analytics: 'Analyse-Tool',
          social: 'Bewertungen auf Social Media teilen',
          ai: 'KI-Technologie für Antworten',
          zapier: 'Zapier-Integration (Automatisierte Prozesse)',
          noBrand: 'Kein Revuxx Branding',
        }
      },
      faqs: {
        title: 'Häufig gestellte Fragen',
        subtitle: 'Alles, was du über die Reviuxx-Plattform wissen musst und wie sie deinem Unternehmen helfen kann.',
        searchPlaceholder: 'Suchst du etwas Bestimmtes?',
        category: 'Allgemeine FAQs',
        items: [
          {
            q: 'Welcher Kundensupport oder welches Training steht den Nutzern zur Verfügung?',
            a: 'Unser Support-Team ist per Chat und E-Mail erreichbar. Wir bemühen uns, alle Anfragen innerhalb von 24 Stunden zu beantworten. Anleitungen zur Nutzung unserer Plattform und Schulungen werden selbstverständlich bereitgestellt.'
          },
          {
            q: 'Welche Arten von Bewertungen können verwaltet werden? Sind sie auf bestimmte Websites beschränkt?',
            a: 'Du kannst Bewertungen von über 50+ wichtigen Plattformen wie Google, Facebook, TripAdvisor und branchenspezifischen Seiten verwalten. Alles wird in einem zentralen Dashboard zusammengefasst.'
          },
          {
            q: 'Wie werden Bewertungen geteilt? Können sie direkt auf Social Media gepostet werden?',
            a: 'Ja! Unsere Plattform bietet eine nahtlose Social-Media-Integration. Mit nur einem Klick kannst du deine besten 5-Sterne-Bewertungen in ansprechende Grafiken verwandeln und sie direkt auf Instagram, Facebook oder LinkedIn teilen.'
          },
          {
            q: 'Wie trägt eure Plattform zur Generierung von Bewertungen bei?',
            a: 'Wir automatisieren die Anfrage. Du kannst hochgradig personalisierte Bewertungsanfragen per E-Mail, SMS oder WhatsApp direkt nach einem Kauf oder Besuch an deine Kunden senden und so deine Konversionsrate drastisch erhöhen.'
          },
          {
            q: 'Ist die Plattform anpassbar und skalierbar für Unternehmen unterschiedlicher Größe?',
            a: 'Absolut. Egal, ob du ein einzelnes lokales Restaurant oder ein riesiges Einzelhandels-Franchise mit hunderten von Standorten bist, unsere Software skaliert mit deinen Anforderungen und ermöglicht es dir, mehrere Filialen über ein einziges Master-Konto zu verwalten.'
          }
        ]
      },
      contact: {
        badge: 'Kontakt',
        title: 'Lass uns sprechen',
        subtitle: 'Bereit, deine Online-Reputation zu dominieren? Kontaktiere uns noch heute. Wir helfen dir beim Wachstum.',
        name: 'Name',
        email: 'E-Mail',
        subject: 'Betreff',
        message: 'Schreibe hier deine Nachricht...',
        privacyStart: 'Ich habe die ',
        privacyLink: 'Datenschutzerklärung',
        privacyEnd: ' gelesen und willige ein, dass die Reviuxx LLC meine Daten zur Bearbeitung meiner Anfrage und Kontaktaufnahme verarbeitet. Ich kann meine Einwilligung jederzeit widerrufen.',
        submit: 'Nachricht Senden',
        submitting: 'Senden...',
        successTitle: 'Nachricht gesendet!',
        successText: 'Vielen Dank für deine Nachricht. Unser Team wird sich in Kürze bei dir melden.',
        emailLabel: 'Schreib uns',
        phoneLabel: 'Ruf uns an',
        emailValue: 'info@reviuxx.com',
        phoneValue: '015234662968'
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