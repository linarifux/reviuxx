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
        subtitle: 'Reviuxx helps you get more reviews, improve visibility, and generate measurable revenue. Everything in one dashboard: collect, reply to, and analyze reviews across platforms and locations.', 
        cta_primary: 'Start Free Trial', 
        cta_secondary: 'See how it works' 
      },
      stats: {
        title: "Numbers & Facts",
        items: [
          { value: "76%", text: "visit a business within 24 hours after a local search." },
          { value: "28%", text: "purchase after a local search." },
          { value: "+1 Star", text: "lift can be associated with 5–9% higher revenue." }
        ]
      },
      video: {
        badge: "See it in action",
        title: "How Reviuxx Transforms Your Business",
        youtubeId: "oSzjsmB658Q"
      },
      industries: {
        badge: "Industry Benefits",
        title: "Tailored for your industry",
        tabs: [
          { id: "retail", name: "Retail & Supermarkets", desc: "Drive more foot traffic and repeat customers." },
          { id: "gastro", name: "Restaurants", desc: "Generate more reservations and better occupancy." },
          { id: "hotels", name: "Hotels", desc: "Get more bookings and more direct bookings, with fewer portal fees." },
          { id: "medical", name: "Doctors & Law Firms", desc: "Generate more inquiries driven by stronger online trust." },
          { id: "agency", name: "Agencies", desc: "Generate recurring revenue through white-label SaaS and reporting." }
        ]
      },
      featuresList: {
        badge: "Features",
        title: "Everything in one dashboard",
        items: [
          { title: "All reviews in one place", desc: "Google, Facebook, Yelp, TripAdvisor and more—automatically in a central dashboard." },
          { title: "Collect more reviews", desc: "Via QR, link, email, SMS and WhatsApp, including campaigns and reminders." },
          { title: "Structured feedback routing", desc: "Capture private feedback before issues escalate publicly." },
          { title: "Reply to reviews centrally", desc: "With templates and optional AI assistance." },
          { title: "Automations and alerts", desc: "Instant notifications for new or critical reviews." },
          { title: "Analytics and reporting", desc: "Track review volume, reply rate, ranking and competitor insights." },
          { title: "Visibility boosters", desc: "Deploy website widgets, review badges and social posts." },
          { title: "Google profile management", desc: "Keep hours, posts and photos up to date easily." },
          { title: "Multi-location management", desc: "Perfect for chains and multi-site businesses." },
          { title: "Agency & white-label mode", desc: "Use your branding, your packages and integrated billing." }
        ]
      },
      cta: {
        title: "Free profile check and a 90-day plan.",
        subtitle: "Live in 14 days. Book a demo today."
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
        emailValue: 'sales@reviuxx.com',
        phoneValue: '+491776624606'
      },
      footer: {
        description: 'The all-in-one software solution for effective review management, automated responses, and optimizing your online presence to drive more sales.'
      },
      terms: {
        title: 'Terms of Service',
        subtitle: 'Last updated: March 2026',
        sections: [
          {
            id: 'acceptance',
            title: '1) Acceptance of Terms',
            content: 'By creating an account, signing an order, or using Reviuxx, you agree to these Terms of Service (“Terms”), our Privacy Policy, and, where applicable, our Data Processing Addendum (DPA). If you are entering these Terms on behalf of a company, you represent that you have authority to bind that company. Do not use the Service if you disagree with these Terms.'
          },
          {
            id: 'definitions',
            title: '2) Definitions',
            content: '“Service” means the Reviuxx SaaS platform and related websites, APIs, and support.\n“Customer” / “you” means the company or organization that accepts these Terms.\n“Authorized Users” means individuals you permit to access the Service.\n“Order” means the online checkout, plan selection, or signed order form referencing these Terms.\n“Customer Data” means data you or your Users upload or submit to the Service.'
          },
          {
            id: 'eligibility',
            title: '3) Eligibility; Business Use Only',
            content: 'The Service is intended for business customers. If you are a consumer, local law may grant you additional rights; please contact us before using the Service.'
          },
          {
            id: 'account',
            title: '4) Account Registration & Security',
            content: 'Provide accurate information and keep it updated. You are responsible for all activities under your accounts and for maintaining the confidentiality of access credentials.'
          },
          {
            id: 'fees',
            title: '5) Subscription Plans, Fees & Taxes',
            content: '**Plans & Billing:** Subscriptions are billed in advance per selected plan and billing cycle. Fees are non-refundable except as required by law or expressly stated in an Order.\n**Trials:** Trial access is provided “as is” and may be modified or terminated at any time.\n**Upgrades/Downgrades:** Upgrades take effect immediately and are prorated; downgrades apply from the next renewal.\n**Price Changes:** We may change prices for future periods with prior notice; material increases will be announced at least 30 days in advance. You may cancel before the change takes effect.\n**Taxes:** Fees are exclusive of taxes; you are responsible for applicable taxes (VAT/GST/sales tax) except taxes on our income.\n**Late Payment; Suspension:** We may suspend the Service for overdue amounts after notice. You remain responsible for accrued fees during suspension.'
          },
          {
            id: 'term',
            title: '6) Term; Cancellation; Termination',
            content: '**Term:** Your subscription starts on the effective date of your Order and renews automatically unless cancelled.\n**Cancellation:** You may cancel at any time; the subscription remains active through the current paid term.\n**Termination for Cause:** Either party may terminate for material breach if not cured within 30 days of notice. We may suspend or terminate immediately for illegal activity, platform-policy violations, or security risks.\n**Effect:** Upon termination, access ends. We will make Customer Data export available for 30 days unless prohibited by law or third-party terms.'
          },
          {
            id: 'support',
            title: '7) Access; Availability; Support',
            content: 'We strive for reliable operations but do not guarantee uninterrupted availability. Planned maintenance may occur. Standard email support is included during business hours unless otherwise agreed.'
          },
          {
            id: 'acceptable-use',
            title: '8) Acceptable Use & Platform Policies',
            content: 'You will not: (a) submit or facilitate fake, paid, or deceptive reviews; (b) offer incentives in exchange for positive reviews; (c) gate reviews (e.g., only ask satisfied customers); (d) spam or harass; (e) violate laws or third-party rights; (f) reverse engineer or misuse APIs; or (g) attempt to compromise security. You must comply with the policies and terms of the review platforms you connect to (e.g., Google, TripAdvisor, Yelp, HolidayCheck, Booking.com) and applicable laws (including FTC rules on reviews and anti-spam rules). You are solely responsible for the lawfulness of your outreach (e.g., email/SMS consent).'
          },
          {
            id: 'third-party',
            title: '9) Third-Party Services & Integrations',
            content: 'The Service may interoperate with third-party platforms. We are not responsible for third-party services, their availability, or their terms. Platform changes may affect features; we are not liable for resulting limitations.'
          },
          {
            id: 'data',
            title: '10) Customer Data; Privacy; DPA',
            content: '**Ownership:** As between the parties, you own Customer Data.\n**License to Operate:** You grant us a non-exclusive, worldwide license to host, process, transmit, display, and create derivatives of Customer Data solely to provide and improve the Service.\n**Privacy & Security:** We process Customer Data per our Privacy Policy and, where applicable, the DPA (GDPR). You are responsible for obtaining all necessary consents for outreach (email/SMS) and for providing legally required notices to your end-customers.\n**Data Export & Deletion:** During the term, you can export Customer Data. After termination, we retain limited backups for a reasonable time or as legally required.'
          },
          {
            id: 'ip',
            title: '11) Content; IP; Feedback',
            content: '**Your Content:** You are responsible for the accuracy and legality of content you submit (including outreach templates, responses, media).\n**Our IP:** Reviuxx and all related software, designs, logos, and documentation are owned by Reviuxx LLC and its licensors. No rights are granted except those expressly stated.\n**Feedback:** If you provide suggestions, you grant us a royalty-free, irrevocable license to use them without restriction.'
          },
          {
            id: 'confidentiality',
            title: '12) Confidentiality',
            content: 'Non-public information disclosed by either party and marked as confidential (or reasonably understood to be confidential) will be protected and used only for the purposes of the relationship.'
          },
          {
            id: 'warranties',
            title: '13) Warranties & Disclaimers',
            content: 'The Service is provided “AS IS” and “AS AVAILABLE.” We disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Service will be error-free, or that reviews will be published by third-party platforms.'
          },
          {
            id: 'liability',
            title: '14) Limitation of Liability',
            content: 'To the maximum extent permitted by law: (a) neither party will be liable for indirect, incidental, special, consequential, or punitive damages, or for lost profits or revenues, even if foreseeable; and (b) each party’s aggregate liability arising out of or related to the Service is limited to the amounts paid or payable by you to Reviuxx in the 12 months before the first event giving rise to liability. These limits do not apply to liability for death, personal injury, willful misconduct, or amounts that cannot be excluded under applicable law.'
          },
          {
            id: 'indemnification',
            title: '15) Indemnification',
            content: 'You will indemnify and defend Reviuxx against third-party claims arising from (i) your Customer Data, (ii) your use of the Service in violation of these Terms, law, or platform policies, or (iii) your outreach practices (email/SMS) without proper consents. We will indemnify you against third-party claims alleging that the Service, as provided, infringes IP rights, subject to customary carve-outs.'
          },
          {
            id: 'dmca',
            title: '16) DMCA Agent & Policy',
            content: 'If you believe content accessible through the Service infringes your copyright, send a notice to our Designated Agent:\n**Name:** Maurice Klapp, Reviuxx LLC\n**Address:** 1309 Coffeen Avenue, STE 1200, Sheridan, WY 82801, USA\n**Email:** hello@reviuxx.com\nInclude: (1) identification of the copyrighted work, (2) identification of the infringing material, (3) contact information, (4) a good-faith statement, (5) a statement under penalty of perjury, and (6) your physical or electronic signature.'
          },
          {
            id: 'export',
            title: '17) Export Controls; Anti-Corruption; Sanctions',
            content: 'You represent that you are not located in or a resident of any embargoed country and are not a prohibited party under trade sanctions. You will comply with anti-corruption laws and will not offer or accept bribes.'
          },
          {
            id: 'governing-law',
            title: '18) Governing Law & Dispute Resolution',
            content: '**Governing Law:** The laws of the State of Wyoming, without regard to conflicts of laws, govern these Terms.\n**Venue:** The state and federal courts located in Sheridan County, Wyoming shall have exclusive jurisdiction, and the parties consent to personal jurisdiction and venue there.\n**Arbitration:** Disputes will be resolved by binding arbitration under the AAA Commercial Rules in English, in the United States, on an individual basis; no class actions.'
          },
          {
            id: 'changes',
            title: '19) Changes to Service or Terms',
            content: 'We may update the Service and these Terms from time to time. If changes are material, we will provide notice. Continued use after the effective date constitutes acceptance.'
          },
          {
            id: 'publicity',
            title: '20) Publicity',
            content: 'We may use your name and logo to identify you as a customer, unless you opt out by emailing hello@reviuxx.com.'
          },
          {
            id: 'beta',
            title: '21) Beta Features',
            content: 'Features labeled as Beta or Preview are provided “as is,” may change, and may be discontinued at any time.'
          },
          {
            id: 'assignment',
            title: '22) Assignment',
            content: 'You may not assign or transfer the Agreement without our prior written consent; we may assign to an affiliate or in connection with a merger, acquisition, or sale of assets.'
          },
          {
            id: 'force-majeure',
            title: '23) Force Majeure',
            content: 'Neither party is liable for delays or failures due to events beyond reasonable control (e.g., internet or hosting outages, acts of God, governmental actions).'
          },
          {
            id: 'entire-agreement',
            title: '24) Entire Agreement; Order of Precedence',
            content: 'These Terms, the Order, and any referenced policies (Privacy Policy, DPA) form the entire agreement and supersede prior agreements. In case of conflict, the Order prevails, then these Terms, then the policies.'
          }
        ]
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
        subtitle: 'Reviuxx bringt dir mehr Bewertungen, bessere Sichtbarkeit und messbar mehr Umsatz. Alles in einem Dashboard: Bewertungen sammeln, beantworten und auswerten – über alle Plattformen und Standorte.', 
        cta_primary: 'Kostenlos Testen', 
        cta_secondary: 'So funktioniert\'s' 
      },
      stats: {
        title: "Zahlen & Fakten",
        items: [
          { value: "76%", text: "besuchen nach einer lokalen Suche innerhalb von 24 Stunden ein Geschäft." },
          { value: "28%", text: "kaufen nach einer lokalen Suche." },
          { value: "+1 Stern", text: "kann laut Studien mit 5–9 % mehr Umsatz verbunden sein." }
        ]
      },
      video: {
        badge: "Reviuxx in Aktion",
        title: "Wie Reviuxx dein Unternehmen transformiert",
        youtubeId: "za1gx_SWqzo"
      },
      industries: {
        badge: "Branchen-Nutzen",
        title: "Maßgeschneidert für deine Branche",
        tabs: [
          { id: "retail", name: "Retail & Supermärkte", desc: "Sorge für mehr Laufkundschaft und mache Gelegenheitskäufer zu Stammkunden." },
          { id: "gastro", name: "Gastronomie", desc: "Generiere mehr Reservierungen und sorge für eine bessere Auslastung." },
          { id: "hotels", name: "Hotels", desc: "Erhalte mehr Buchungen und mehr Direktbuchungen, weniger Portalgebühren." },
          { id: "medical", name: "Ärzte & Anwälte", desc: "Erhalte mehr Anfragen durch stärkeren Online-Vertrauensaufbau." },
          { id: "agency", name: "Agenturen", desc: "Wiederkehrender Umsatz durch White-Label SaaS und Reporting." }
        ]
      },
      featuresList: {
        badge: "Funktionen",
        title: "Alles in einem Dashboard",
        items: [
          { title: "Alle Bewertungen an einem Ort", desc: "Google, Facebook, Yelp, TripAdvisor und mehr – automatisch im zentralen Dashboard." },
          { title: "Mehr Bewertungen", desc: "Per QR, Link, E-Mail, SMS und WhatsApp – inklusive Kampagnen und Erinnerungen." },
          { title: "Feedback strukturiert steuern", desc: "Interne Rückmeldung vor öffentlicher Bewertung möglich." },
          { title: "Bewertungen zentral beantworten", desc: "Mit Vorlagen und optionaler KI-Unterstützung." },
          { title: "Automationen & Alerts", desc: "Benachrichtigungen bei neuen oder kritischen Bewertungen." },
          { title: "Analytics & Reporting", desc: "Bewertungsvolumen, Antwortquote, Ranking- und Wettbewerbsanalyse." },
          { title: "Sichtbarkeit-Booster", desc: "Website-Widgets, Bewertungs-Badges und Social Posts." },
          { title: "Google-Profilpflege", desc: "Öffnungszeiten, Beiträge und Fotos aktuell halten." },
          { title: "Multi-Standort-Management", desc: "Ideal für Filialen und Ketten." },
          { title: "Agentur- & White-Label-Modus", desc: "Eigenes Branding, eigene Pakete und integrierte Abrechnung." }
        ]
      },
      cta: {
        title: "Kostenloser Profil-Check und 90-Tage-Plan",
        subtitle: "In 14 Tagen live. Jetzt Demo sichern."
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
        emailValue: 'sales@reviuxx.com',
        phoneValue: '+491776624606'
      },
      footer: {
        description: 'Die All-in-One-Softwarelösung für effektives Bewertungsmanagement, automatisierte Antworten und die Optimierung deiner Online-Präsenz, um mehr Umsatz zu generieren.'
      },
      terms: {
        title: 'Allgemeine Geschäftsbedingungen (AGB)',
        subtitle: 'Stand: März 2026',
        sections: [
          {
            id: 'geltungsbereich',
            title: '1. Geltungsbereich',
            content: '1.1 Diese AGB gelten für alle Verträge über die Nutzung der Online-Plattform „Reviuxx“ (SaaS-Lösung zur Generierung, Verwaltung und Beantwortung von Online-Bewertungen auf Drittplattformen).\n1.2 Abweichende, entgegenstehende oder ergänzende AGB des Kunden werden nicht Vertragsbestandteil, es sei denn, wir stimmen ihrer Geltung ausdrücklich schriftlich zu.\n1.3 Sofern nicht anders angegeben, richtet sich unser Angebot an Unternehmer i. S. d. § 14 BGB. Bei Verträgen mit Verbrauchern können zusätzliche Informations- und Widerrufspflichten gelten.'
          },
          {
            id: 'vertragsgegenstand',
            title: '2. Vertragsgegenstand',
            content: '2.1 Wir stellen dem Kunden für die Vertragslaufzeit die Reviuxx-Software ausschließlich über das Internet zur Nutzung bereit (Software-as-a-Service). Eine Überlassung der Software zur lokalen Installation erfolgt nicht.\n2.2 Der konkrete Funktions- und Leistungsumfang ergibt sich aus der jeweils aktuellen Paketbeschreibung auf unserer Website bzw. aus dem Angebot/der Auftragsbestätigung.\n2.3 Wir schulden keine Veröffentlichung oder Sichtbarkeit von Bewertungen auf Drittplattformen (Google, TripAdvisor, Yelp, HolidayCheck, Booking.com etc.), da dies im Einflussbereich der jeweiligen Plattformbetreiber liegt.\n2.4 Wir sind berechtigt, zur Leistungserbringung Unterauftragnehmer/Dienstleister (z. B. Hosting) einzusetzen.'
          },
          {
            id: 'vertragsschluss',
            title: '3. Vertragsschluss',
            content: '3.1 Die Darstellung der Leistungen auf der Website stellt kein rechtlich bindendes Angebot dar.\n3.2 Ein Vertrag kommt zustande durch (a) Online-Buchung/Registrierung und unsere Bestätigungs-E-Mail oder (b) Unterzeichnung eines Angebots/Vertrags.\n3.3 Der Kunde sichert zu, bei der Registrierung vollständige und richtige Angaben zu machen und diese während der Vertragslaufzeit aktuell zu halten.'
          },
          {
            id: 'pflichten',
            title: '4. Nutzungsrechte und Pflichten des Kunden',
            content: '4.1 Der Kunde erhält für die Dauer des Vertrages ein einfaches, nicht übertragbares und nicht unterlizenzierbares Nutzungsrecht an der Software.\n4.2 Zugangsdaten sind geheim zu halten. Der Kunde ist für sämtliche Aktivitäten verantwortlich, die unter seinen Accounts erfolgen.\n4.3 Der Kunde ist verpflichtet, keine verbotenen Anreize für positive Bewertungen zu geben, kein Review-Gating zu betreiben und die Richtlinien der angebundenen Plattformen einzuhalten.\n4.4 Der Kunde ist selbst dafür verantwortlich, dass der Versand von E-Mails/SMS an Endkunden (z. B. Bewertungsaufforderungen) datenschutz- und wettbewerbsrechtlich zulässig ist (DSGVO, UWG).\n4.5 Rechtswidrige oder missbräuchliche Nutzung (Fake-Bewertungen, Spam, rechtswidrige Inhalte) ist untersagt. Bei Verstößen sind wir zur Sperrung berechtigt.'
          },
          {
            id: 'verfuegbarkeit',
            title: '5. Verfügbarkeit',
            content: '5.1 Wir stellen die SaaS-Leistung mit einer jährlichen Verfügbarkeit von 98 % bereit. Ausgenommen sind angekündigte Wartungen sowie Ausfälle außerhalb unseres Einflussbereichs (höhere Gewalt, Störungen bei Dritten).\n5.2 Bei wesentlichen Störungen bemühen wir uns um zeitnahe Behebung.'
          },
          {
            id: 'preise',
            title: '6. Preise und Zahlungsbedingungen',
            content: '6.1 Die Vergütung richtet sich nach dem gebuchten Paket und ist, sofern nichts anderes vereinbart ist, monatlich im Voraus fällig.\n6.2 Alle Preise verstehen sich netto zuzüglich ggf. anfallender Umsatzsteuer nach anwendbarem Recht.\n6.3 Preisänderungen für zukünftige Abrechnungsperioden sind nach mindestens 12 Monaten Vertragslaufzeit mit Ankündigung von 30 Tagen möglich; bei Erhöhungen >10 % steht dem Kunden ein Sonderkündigungsrecht zu.\n6.4 Bei Zahlungsverzug sind wir nach vorheriger Ankündigung zur Sperrung des Zugangs berechtigt; die Zahlungspflicht bleibt bestehen.'
          },
          {
            id: 'laufzeit',
            title: '7. Laufzeit und Kündigung',
            content: '7.1 Sofern nichts anderes vereinbart ist, läuft der Vertrag auf unbestimmte Zeit mit einer Mindestlaufzeit von 1 Monat.\n7.2 Nach Ablauf der Mindestlaufzeit kann der Vertrag mit einer Frist von 14 Tagen zum Monatsende gekündigt werden (Textform ausreichend, z. B. E-Mail).\n7.3 Das Recht zur fristlosen Kündigung aus wichtigem Grund bleibt unberührt (z. B. erhebliche Vertragsverletzungen, Zahlungsverzug > 30 Tage, rechtswidrige Nutzung).'
          },
          {
            id: 'support',
            title: '8. Support',
            content: '8.1 Standard-Support per E-Mail während unserer Geschäftszeiten ist im Paket enthalten (montags bis freitags; ausgenommen Feiertage).\n8.2 Erweiterte Leistungen (Onboarding, Integrationen, individuelle Anpassungen) werden gesondert vergütet.'
          },
          {
            id: 'haftung',
            title: '9. Haftung',
            content: '9.1 Wir haften unbeschränkt bei Vorsatz und grober Fahrlässigkeit sowie bei Verletzung von Leben, Körper oder Gesundheit.\n9.2 Bei einfacher Fahrlässigkeit haften wir nur bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten); in diesem Fall ist die Haftung der Höhe nach auf den vertragstypischen, vorhersehbaren Schaden begrenzt.\n9.3 Eine Haftung für entgangenen Gewinn, ausgebliebene Einsparungen sowie mittelbare und Folgeschäden ist ausgeschlossen, sofern nicht Vorsatz vorliegt.\n9.4 Für Datenverlust haften wir nur in Höhe des typischen Wiederherstellungsaufwands, der bei ordnungsgemäßer Datensicherung durch den Kunden eingetreten wäre.\n9.5 Zwingende Haftung nach Produkthaftungsgesetz oder DSGVO bleibt unberührt.'
          },
          {
            id: 'datenschutz',
            title: '10. Datenschutz / Auftragsverarbeitung',
            content: '10.1 Soweit wir personenbezogene Daten im Auftrag des Kunden verarbeiten, schließen die Parteien einen Vertrag zur Auftragsverarbeitung (Art. 28 DSGVO).\n10.2 Der Kunde bleibt Verantwortlicher im Sinne der DSGVO für die Verarbeitung seiner Kundendaten (Rechtsgrundlagen, Informationspflichten, Opt-ins).\n10.3 Unsere Datenschutzerklärung ist über unsere Website abrufbar.'
          },
          {
            id: 'rechte',
            title: '11. Rechte an der Software',
            content: '11.1 Sämtliche Rechte an der Software verbleiben beim Anbieter; es werden ausschließlich die vertraglich eingeräumten Nutzungsrechte gewährt.\n11.2 Dem Kunden werden keine Rechte am Quellcode eingeräumt.'
          },
          {
            id: 'vertraulichkeit',
            title: '12. Vertraulichkeit',
            content: 'Beide Parteien behandeln alle im Rahmen des Vertragsverhältnisses bekannt werdenden Geschäfts- und Betriebsgeheimnisse vertraulich.'
          },
          {
            id: 'schlussbestimmungen',
            title: '13. Schlussbestimmungen',
            content: '13.1 Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts (CISG).\n13.2 Ist der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder hat keinen allgemeinen Gerichtsstand in Deutschland, ist Gerichtsstand – nach Wahl des Anbieters – am Sitz des Anbieters oder des Kunden.\n13.3 Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. Anstelle der unwirksamen Bestimmung gilt eine Regelung als vereinbart, die dem wirtschaftlichen Zweck am nächsten kommt.'
          }
        ]
      }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'de', // default language
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

export default i18n;