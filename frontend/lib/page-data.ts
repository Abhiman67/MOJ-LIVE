import type { ContentPageData } from '@/components/page/ContentPage'

export const pageData: Record<string, ContentPageData> = {
  '/advanced-air-mobility': {
    eyebrow: 'AAM',
    title: 'Advanced Air Mobility',
    lead:
      'Advanced Air Mobility is not an upgrade to aviation - it is the emergence of an entirely new mobility layer above the roads, beyond congestion, and independent of legacy constraints.',
    sections: [
      {
        title: 'What is Advanced Air Mobility?',
        description:
          "Advanced Air Mobility (AAM) integrates next-generation electric aircraft, primarily eVTOL into urban, regional, and intercity networks. But most conversations limit AAM to aircraft innovation. That is incomplete."
      },
      {
        title: 'Why AAM matters now',
        cards: [
          { title: 'Urban congestion', description: 'is economically unsustainable' },
          { title: 'Ground infra expansion', description: 'is capital-intensive and limited' },
          { title: 'Time-efficient demand', description: 'is accelerating globally' }
        ]
      },
      {
        title: 'Strategic positioning',
        cards: [
          { title: 'Infrastructure first', description: 'Vertiport planning, rooftop hubs, airport integration, and commercial nodes.' },
          { title: 'eVTOL ecosystem', description: 'Collaborating with innovators to enable routes, landing infra, and scalability.' },
          { title: 'Intelligent network layer', description: 'Real-time orchestration, demand-supply balancing, predictive utilization.' },
          { title: 'Multi-sector integration', description: 'Hospitals, luxury hotels, logistics, and corporate districts.' }
        ]
      },
      {
        title: 'Use cases we are enabling',
        cards: [
          { title: 'Urban Air Mobility', description: 'Fast intra-city travel - hours to minutes.' },
          { title: 'Intercity Connectivity', description: 'Seamless aerial corridors between high-demand cities.' },
          { title: 'Medical & Emergency', description: 'Time-critical patient transport and organ logistics.' },
          { title: 'Luxury & Tourism', description: 'Premium experiences for high-value travelers.' },
          { title: 'Business Transport', description: 'Efficient executive mobility between key locations.' },
          { title: 'Logistics & Cargo', description: 'Time-sensitive supply chains and express delivery.' }
        ]
      },
      {
        title: 'India opportunity',
        description:
          'India is not just a market, it is a defining landscape for AAM. With the right infrastructure strategy, India can leapfrog traditional mobility limits and build one of the world\'s largest AAM networks.'
      },
      {
        title: 'Safety, regulation and trust',
        description:
          'AAM cannot scale without trust. We align with aviation authorities, safety best practices, and infrastructure compliance. Speed of innovation must never compromise safety.'
      },
      {
        title: 'Inevitable layer',
        description:
          'The future of air mobility will not be defined by individual aircraft but by how effectively the entire system is coordinated. MyOnlineJet is building that coordination layer.'
      }
    ],
    cta: {
      title: 'Looking ahead: the inevitable layer',
      description:
        'Advanced Air Mobility will define how cities function, how economies move, and how people experience distance. The question is not whether AAM will happen, it is who will build the systems that make it work at scale.',
      primary: { label: 'Become a Partner', href: '/partner-with-us' },
      secondary: { label: 'Early Access', href: '/early-access' }
    }
  },
  '/careers': {
    eyebrow: 'Hiring',
    title: 'Build the Future of Air Mobility',
    lead:
      'Join MyOnlineJet to help shape India\'s foundational vertiport network and advanced air mobility ecosystem.',
    sections: [
      {
        title: 'What we are looking for',
        cards: [
          { title: 'Aviation research', description: 'Support regulatory and systems thinking for the future network.' },
          { title: 'Full-stack development', description: 'Build the digital layer that coordinates infrastructure and users.' },
          { title: 'Partnerships and operations', description: 'Work with ecosystem players to scale the network.' }
        ]
      },
      {
        title: 'Principles',
        bullets: [
          'Long-term careers with real infrastructure impact',
          'Merit-based selection and transparent communication',
          'Professional growth in a high-trust environment'
        ]
      }
    ],
    cta: {
      title: 'Register your interest',
      description: 'We will continue to open roles as the platform matures. Stay connected through the contact page.',
      primary: { label: 'Contact Us', href: '/contact' },
      secondary: { label: 'Subscribe', href: '/subscribe' }
    }
  },
  '/company-profile': {
    eyebrow: 'Company',
    title: 'Company Profile',
    lead:
      'MyOnlineJet is building India\'s foundational vertiport network, AI-driven mobility intelligence, and the infrastructure layer for Advanced Air Mobility.',
    sections: [
      {
        title: 'What the company does',
        cards: [
          { title: 'Vertiport networks', description: 'Strategic access points for future air mobility operations.' },
          { title: 'Mobility intelligence', description: 'Software and systems to coordinate a growing network.' },
          { title: 'Infrastructure layer', description: 'Physical, digital, and operational foundations working together.' }
        ]
      }
    ],
    cta: {
      title: 'Learn more about the vision',
      description: 'Explore the founder story and the long-term strategy behind the company.',
      primary: { label: 'Founder', href: '/founder' },
      secondary: { label: 'Vision & Mission', href: '/vision-mission' }
    }
  },
  '/contact': {
    eyebrow: 'Contact',
    title: 'Let\'s Build the Future of Air Mobility, Together',
    lead:
      'Connect with MyOnlineJet for partnerships, investors, eVTOL collaboration, media, or early access.',
    sections: [
      {
        title: 'Contact channels',
        cards: [
          { title: 'Partnerships', description: 'Strategic infrastructure hosting and ecosystem collaboration.' },
          { title: 'Investors', description: 'Long-term network play and infrastructure opportunity discussions.' },
          { title: 'Media and research', description: 'Request context on the platform, vision, and roadmap.' }
        ]
      },
      {
        title: 'Inquiry form',
        description:
          'This first-pass migration keeps the form UX on the page. Backend submission handling will be added in the Node phase.'
      }
    ],
    cta: {
      title: 'Prefer email or social?',
      description: 'Use the footer links or the partner and investor routes for more context.',
      primary: { label: 'Partner With Us', href: '/partner-with-us' },
      secondary: { label: 'Investors', href: '/investors' }
    }
  },
  '/early-access': {
    eyebrow: 'Priority',
    title: 'Experience the Future of Urban Air Mobility - Before the World Does',
    lead:
      'Request priority early access to India\'s first integrated Advanced Air Mobility ecosystem.',
    sections: [
      {
        title: 'What early access covers',
        cards: [
          { title: 'Vertiport network updates', description: 'Stay informed as the network expands.' },
          { title: 'Intelligent mobility layers', description: 'Follow software and operational readiness progress.' },
          { title: 'Ecosystem access', description: 'Be among the first to hear about collaboration opportunities.' }
        ]
      }
    ],
    cta: {
      title: 'Join the waitlist',
      description: 'Early access is the best way to stay connected while the infrastructure matures.',
      primary: { label: 'Subscribe', href: '/subscribe' },
      secondary: { label: 'Contact', href: '/contact' }
    }
  },
  '/ecosystem-integration': {
    eyebrow: 'Integration',
    title: 'Building India\'s Most Intelligent Air Mobility Network',
    lead:
      'MyOnlineJet connects vertiports, eVTOL aircraft, digital intelligence, partners, and regulatory systems into one scalable mobility stack.',
    sections: [
      {
        title: 'Integration layers',
        cards: [
          { title: 'Physical infrastructure', description: 'The nodes and locations that form the network.' },
          { title: 'Digital intelligence', description: 'Orchestration, routing, and ecosystem awareness.' },
          { title: 'Regulatory alignment', description: 'A path to operating inside real-world constraints.' }
        ]
      }
    ],
    cta: {
      title: 'See the adjacent layers',
      description: 'Technology, services, and vertiports all work together to create the network.',
      primary: { label: 'Technology', href: '/technology' },
      secondary: { label: 'Services', href: '/services' }
    }
  },
  '/evtol-infrastructure': {
    eyebrow: 'Infrastructure',
    title: 'Building the Physical & Digital Backbone of Advanced Air Mobility',
    lead:
      'The full eVTOL infrastructure stack includes vertiports, energy and charging systems, airspace integration, digital orchestration, and safety frameworks.',
    sections: [
      {
        title: 'Backbone components',
        cards: [
          { title: 'Vertiport networks', description: 'Strategic hubs enabling operations in dense cities.' },
          { title: 'Energy and charging', description: 'Systems for electrified flight and turnaround support.' },
          { title: 'Safety frameworks', description: 'Operational controls designed for reliability and trust.' }
        ]
      }
    ],
    cta: {
      title: 'Connect infrastructure to operations',
      description: 'Explore how the service and technology layers bring the physical backbone to life.',
      primary: { label: 'Services', href: '/services' },
      secondary: { label: 'Technology', href: '/technology' }
    }
  },
  '/faq': {
    eyebrow: 'FAQ',
    title: 'Frequently Asked Questions',
    lead:
      'Find answers about the company, infrastructure strategy, partnerships, early access, and the future of urban air mobility.',
    sections: [
      {
        title: 'Common questions',
        bullets: [
          'What is a vertiport and why does it matter?',
          'How does MyOnlineJet fit into the AAM ecosystem?',
          'Who should use the partner and investor routes?'
        ]
      }
    ],
    cta: {
      title: 'Still have questions?',
      description: 'Use the contact page and we can route the inquiry to the right team.',
      primary: { label: 'Contact Us', href: '/contact' },
      secondary: { label: 'Early Access', href: '/early-access' }
    }
  },
  '/founder': {
    eyebrow: "Founder's Vision",
    title: 'The future of mobility will not be built by adapting old systems.',
    lead:
      'Amit Kumar shares the vision behind architecting India’s Advanced Air Mobility infrastructure from first principles.',
    sections: [
      {
        title: 'Founder Message',
        description:
          'The strategy is intentionally infrastructure-first, long-term, and built around systems thinking rather than short-term novelty.'
      },
      {
        title: 'Strategic Pillars',
        cards: [
          { title: 'First Principles', description: 'Re-think mobility & infrastructure from the ground up.' },
          { title: 'Ecosystem Alignment', description: 'Unite vertiports, eVTOL OEMs, and DGCA regulations.' },
          { title: 'Durable Network Scale', description: 'Choose long-term asset foundations over quick wins.' },
          { title: 'Aviation Safety', description: 'Embed aviation-grade safety standards across every node.' }
        ]
      }
    ],
    cta: {
      title: 'Connect with the company',
      description: 'If the vision resonates, explore the partner or investor paths.',
      primary: { label: 'Partner With Us', href: '/partner-with-us' },
      secondary: { label: 'Company Profile', href: '/company-profile' }
    }
  },
  '/investors': {
    eyebrow: 'Investors',
    title: 'Investing in the Infrastructure of the Next Aviation Era',
    lead:
      'A long-term network play built on vertiports, digital intelligence, and the foundation for Advanced Air Mobility.',
    sections: [
      {
        title: 'Investment thesis',
        cards: [
          { title: 'Infrastructure first', description: 'Physical assets support durable network value.' },
          { title: 'Intelligence layer', description: 'Software improves utilization and operational scale.' },
          { title: 'Network expansion', description: 'Every node compounds the strategic value of the system.' }
        ]
      }
    ],
    cta: {
      title: 'Start the conversation',
      description: 'Use the contact page for investor introductions and strategic discussions.',
      primary: { label: 'Contact Us', href: '/contact' },
      secondary: { label: 'Company Profile', href: '/company-profile' }
    }
  },
  '/partner-with-us': {
    eyebrow: 'Partners',
    title: 'Building India\'s Most Advanced Air Mobility Network - Together',
    lead:
      'Partner with MyOnlineJet to architect India\'s first nationwide vertiport and eVTOL ecosystem.',
    sections: [
      {
        title: 'Partnership modes',
        cards: [
          { title: 'Infrastructure hosting', description: 'Add network nodes in strategic locations.' },
          { title: 'Technology integration', description: 'Connect systems, data, and operations.' },
          { title: 'Strategic alliances', description: 'Collaborate on long-term ecosystem development.' }
        ]
      }
    ],
    cta: {
      title: 'Let\'s work together',
      description: 'Partnerships are central to the platform. Start with a simple inquiry.',
      primary: { label: 'Contact Us', href: '/contact' },
      secondary: { label: 'Early Access', href: '/early-access' }
    }
  },
  '/reports': {
    eyebrow: 'Intelligence Hub',
    title: 'Shaping the Intelligence Layer of Advanced Air Mobility',
    lead:
      'MyOnlineJet Industry Reports provide strategic insights on AAM, eVTOL fleet rollout, vertiports, digital infrastructure, policy frameworks, and ecosystem intelligence.',
    sections: [
      {
        title: '6 Core Focus Areas',
        cards: [
          { title: 'AAM Landscape', description: 'Global and regional market evolution and demand projections.' },
          { title: 'eVTOL Ecosystem', description: 'OEM landscape, certification pathways, and fleet deployment.' },
          { title: 'Vertiport Infrastructure', description: 'Site selection, spatial design, and spatial models.' },
          { title: 'Technology Stack', description: 'AI traffic orchestration, digital twins, and smart scheduling.' },
          { title: 'Ecosystem Integration', description: 'PPP models, stakeholder alignment, and municipal policy.' },
          { title: 'Clean Aviation', description: 'Electric propulsion, renewable grid, and net-zero design.' }
        ]
      }
    ],
    cta: {
      title: 'Contribute to Industry Intelligence',
      description: 'We invite research, data, and market collaborations from credible AAM stakeholders.',
      primary: { label: 'Explore Reports', href: '#featured-reports' },
      secondary: { label: 'Contribute Insights', href: '#contribute' }
    }
  },
  '/services': {
    eyebrow: 'Services',
    title: 'Redefining Air Mobility Infrastructure, Access, and Intelligence',
    lead:
      'MyOnlineJet provides vertiport development, eVTOL infrastructure enablement, a digital aviation platform, enterprise partnerships, and AAM network services.',
    sections: [
      {
        title: 'Service pillars',
        cards: [
          { title: 'Vertiport development', description: 'Designing and planning network-ready infrastructure.' },
          { title: 'Digital aviation platform', description: 'The software layer for coordination and operations.' },
          { title: 'Enterprise partnerships', description: 'Connecting ecosystem players to the network.' }
        ]
      }
    ],
    cta: {
      title: 'Match services to your role',
      description: 'If you are a city, operator, investor, or strategic partner, start with the contact page.',
      primary: { label: 'Contact Us', href: '/contact' },
      secondary: { label: 'Partner With Us', href: '/partner-with-us' }
    }
  },
  '/subscribe': {
    eyebrow: 'Subscribe',
    title: 'Stay Ahead of the Future of Air Mobility',
    lead:
      'Subscribe for updates on vertiport infrastructure, eVTOL rollout, ecosystem news, partnerships, and early access programs.',
    sections: [
      {
        title: 'Why subscribe',
        bullets: [
          'Get updates when the network evolves',
          'Receive research and ecosystem intelligence',
          'Stay informed on early access and partnership opportunities'
        ]
      }
    ],
    cta: {
      title: 'Join the list',
      description: 'Stay ahead — be the first to know about early access, investment opportunities, and ecosystem updates.',
      primary: { label: 'Early Access', href: '/early-access' },
      secondary: { label: 'Contact', href: '/contact' }
    }
  },
  '/technology': {
    eyebrow: 'Technology',
    title: 'Powering the Intelligence Layer of Advanced Air Mobility',
    lead:
      'MyOnlineJet builds the real-time, adaptive system that orchestrates vertiports, eVTOL fleets, and partner ecosystems into a seamless aerial mobility network. Not incremental. Foundational.',
    sections: [
      {
        title: 'Unified technology architecture',
        cards: [
          { title: 'Real-time coordination', description: 'Support scheduling, routing, and operations across the network.' },
          { title: 'Vertiport intelligence', description: 'Monitor and manage network nodes efficiently.' },
          { title: 'Ecosystem connectivity', description: 'Link partners, operators, and infrastructure.' }
        ]
      },
      {
        title: 'Platform pillars',
        cards: [
          { title: 'Orchestration Engine', description: 'Real-time task allocation, airspace deconfliction, and predictive resource management.' },
          { title: 'Infrastructure OS', description: 'Digital twin of vertiports, energy systems, and ground assets for optimal uptime.' },
          { title: 'Partner Mesh', description: 'API-first integration layer allowing any operator, city, or service to connect instantly.' }
        ]
      },
      {
        title: 'Why this matters',
        description:
          'The future of air mobility will be defined by how effectively the entire system is coordinated. Our technology is the central nervous system for that future.',
        bullets: [
          'Smarter routing and scheduling',
          'Efficient infrastructure utilization',
          'Cross-stakeholder coordination',
          'Safety-first visibility and control'
        ]
      }
    ],
    cta: {
      title: 'See the infrastructure layer',
      description: 'Technology is built to support the network, not sit apart from it.',
      primary: { label: 'Vertiports', href: '/vertiports' },
      secondary: { label: 'Ecosystem Integration', href: '/ecosystem-integration' }
    }
  },
  '/vertiports': {
    eyebrow: 'Vertiports',
    title: 'The Foundation of Urban Air Mobility in India',
    lead:
      'Urban air mobility will not scale because of aircraft alone. It will scale because of infrastructure that is intelligently designed, strategically located, and deeply integrated into the ecosystem.',
    sections: [
      {
        title: 'Beyond landing zones',
        description:
          'A vertiport is a purpose-built infrastructure hub designed for electric vertical take-off and landing aircraft. But in reality, a true vertiport is far more than that.',
        cards: [
          { title: 'A multi-layer mobility node', description: 'The physical base for aerial movement.' },
          { title: 'A data-driven aviation system', description: 'Connected to intelligence, operations, and demand.' },
          { title: 'A high-frequency transit hub', description: 'Designed for speed, trust, and usability.' }
        ]
      },
      {
        title: 'Why vertiports matter',
        cards: [
          { title: 'Operational feasibility', description: 'Turning eVTOL into real-world transport.' },
          { title: 'Passenger efficiency', description: 'Seamless boarding and alighting.' },
          { title: 'Control layer', description: 'Routes, capacity, and pricing power.' }
        ]
      },
      {
        title: 'MyOnlineJet vertiport strategy',
        bullets: [
          'Strategic location intelligence',
          'Asset-light and asset-heavy hybrid model',
          'Modular and scalable design',
          'AI-driven operations',
          'Regulatory alignment and long-term vision'
        ]
      }
    ],
    cta: {
      title: 'Discover the stack around vertiports',
      description: 'Infrastructure, technology, and services all work together around the node.',
      primary: { label: 'Infrastructure', href: '/evtol-infrastructure' },
      secondary: { label: 'Services', href: '/services' }
    }
  },
  '/vision-mission': {
    eyebrow: 'Vision',
    title: 'Vision & Mission',
    lead:
      'Not just participating in the future of flight, but structuring the foundational layer that makes aerial mobility accessible, intelligent, and enduring.',
    sections: [
      {
        title: 'Vision',
        description:
          'To architect the world’s most intelligent, scalable, and trusted Advanced Air Mobility ecosystem, enabling seamless, efficient, and sustainable aerial mobility across urban and regional landscapes.'
      },
      {
        title: 'Mission: the five pillars of execution',
        bullets: [
          'Design and deploy a nationwide intelligent vertiport network',
          'Enable safe, efficient, and scalable eVTOL operations',
          'Integrate air mobility into everyday transportation systems',
          'Build a high-trust, high-performance aviation ecosystem',
          'Partner with global innovators to accelerate adoption',
          'Use data-driven network intelligence to scale with precision'
        ]
      },
      {
        title: 'From vision to action',
        cards: [
          { title: 'Infrastructure-first', description: 'Vertiports, power, maintenance grid.' },
          { title: 'Intelligence core', description: 'AI orchestration, real-time airspace.' },
          { title: 'Sustainable by design', description: 'Net-zero vertiports, electric ops.' },
          { title: 'Inclusive ecosystem', description: 'Multi-operator, multi-modal synergy.' }
        ]
      }
    ],
    cta: {
      title: 'Read the founder story',
      description: 'Vision and mission are best understood alongside the founder perspective.',
      primary: { label: 'Founder', href: '/founder' },
      secondary: { label: 'About Us', href: '/about-us' }
    }
  },
  '/whitepapers': {
    eyebrow: 'Whitepapers',
    title: 'Defining the Future of Advanced Air Mobility in India and Beyond',
    lead:
      'Official whitepapers on strategic frameworks, infrastructure vision, market opportunity, and ecosystem approach.',
    sections: [
      {
        title: 'Available themes',
        cards: [
          { title: 'Infrastructure vision', description: 'The long-term network architecture.' },
          { title: 'Market opportunity', description: 'Where the ecosystem can expand over time.' },
          { title: 'Ecosystem approach', description: 'How the platform connects the layers.' }
        ]
      }
    ],
    cta: {
      title: 'Request access when ready',
      description: 'Access exclusive whitepapers on urban air mobility, vertiport infrastructure, and technology white papers.',
      primary: { label: 'Subscribe', href: '/subscribe' },
      secondary: { label: 'Contact', href: '/contact' }
    }
  },
  '/privacy-policy': {
    eyebrow: 'Legal Document',
    title: 'Privacy Policy',
    lead:
      'Learn how MyOnlineJet (operated by iAlpha Technologies Private Limited) collects, uses, and protects your personal data in compliance with Indian data protection laws, IT Rules 2011, and the DPDP Act 2023.',
    sections: [
      {
        title: 'Preamble & Legal Framework',
        bullets: [
          'Legally binding notice under IT Rules 2011 and Digital Personal Data Protection Act, 2023',
          'Applies to website visitors, registered users, mobility beneficiaries, and business stakeholders',
          'Data Fiduciary: MyOnlineJet (iAlpha Technologies Private Limited)'
        ]
      },
      {
        title: 'Data Collection & Lawful Basis',
        bullets: [
          'Identity, contact, government verification (PAN, Aadhaar, Passport), and financial data',
          'Technical usage logs, real-time geolocation, and operational aviation manifests',
          'Processed strictly under consent, contractual performance, legal obligation, or legitimate interest'
        ]
      },
      {
        title: 'Data Sharing & Principal Rights',
        bullets: [
          'No sale, rental, or trading of personal data to third parties',
          'Disclosures limited to aviation regulators (DGCA), vertiport partners, and cloud service providers',
          'Right to access, correction, erasure, consent withdrawal, and grievance redressal via contact@myonlinejet.com'
        ]
      }
    ],
    cta: {
      title: 'Questions about privacy?',
      description:
        'If you need clarification about how your data is handled, please reach out to our grievance officer.',
      primary: { label: 'Contact Us', href: '/contact' },
      secondary: { label: 'Terms & Conditions', href: '/terms-conditions' }
    }
  },
  '/terms-conditions': {
    eyebrow: 'Legal',
    title: 'Terms & Conditions',
    lead:
      'These terms describe the basic rules for using the MyOnlineJet website and the information presented here.',
    sections: [
      {
        title: 'Use of the site',
        bullets: [
          'Content is provided for general informational purposes only',
          'You agree not to misuse the site, forms, or any connected services',
          'We may update pages, routes, and availability without prior notice'
        ]
      },
      {
        title: 'No warranties',
        bullets: [
          'We do not guarantee that all information remains current or error-free',
          'Project details, timelines, and availability may change as the platform evolves',
          'External links and third-party services are governed by their own terms'
        ]
      },
      {
        title: 'Limitation and contact',
        bullets: [
          'Use of this site is at your own discretion and risk',
          'If you have questions about these terms, use the contact page',
          'For legal or compliance concerns, please reach out through official channels'
        ]
      }
    ],
    cta: {
      title: 'Need help with a legal question?',
      description:
        'The contact page is the best place to start if you need to route a compliance or policy inquiry.',
      primary: { label: 'Contact Us', href: '/contact' },
      secondary: { label: 'Privacy Policy', href: '/privacy-policy' }
    }
  },
  '/legal-disclaimer': {
    eyebrow: 'Legal',
    title: 'Legal Disclaimer',
    lead:
      'The information on this website is provided for general informational purposes only and should not be treated as legal, financial, technical, or investment advice.',
    sections: [
      {
        title: 'General information only',
        bullets: [
          'Project descriptions, timelines, and references may change as the platform develops',
          'Public pages may include forward-looking statements, high-level concepts, or aspirational goals',
          'You should verify any important decision with qualified professionals where needed'
        ]
      },
      {
        title: 'No warranties',
        bullets: [
          'We do not guarantee that all site content is complete, current, or error-free',
          'Third-party links and services are outside our control and subject to their own terms',
          'Use of this website is at your own discretion'
        ]
      }
    ],
    cta: {
      title: 'Need clarification?',
      description:
        'If you have a question about the information on this site, please use the contact page.',
      primary: { label: 'Contact Us', href: '/contact' },
      secondary: { label: 'Privacy Policy', href: '/privacy-policy' }
    }
  }
}
