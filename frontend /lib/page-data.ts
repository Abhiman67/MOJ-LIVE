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
    eyebrow: 'Founder',
    title: 'The future of mobility will not be built by adapting old systems.',
    lead:
      'Amit Kumar shares the vision behind building India\'s AAM infrastructure from first principles.',
    sections: [
      {
        title: 'Founder message',
        description:
          'The strategy is intentionally infrastructure-first, long-term, and built around systems thinking rather than short-term novelty.'
      },
      {
        title: 'Focus areas',
        cards: [
          { title: 'First principles', description: 'Re-think mobility from the ground up.' },
          { title: 'System design', description: 'Build the network, not just the product layer.' },
          { title: 'Long-term scale', description: 'Choose durable foundations over quick wins.' }
        ]
      }
    ],
    cta: {
      title: 'Connect with the company',
      description: 'If the vision resonates, explore the partner or investor paths.',
      primary: { label: 'Partner With Us', href: '/partner-with-us' },
      secondary: { label: 'Investors', href: '/investors' }
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
    eyebrow: 'Reports',
    title: 'Shaping the Intelligence Layer of Advanced Air Mobility',
    lead:
      'Strategic insights on AAM, eVTOL, vertiports, infrastructure, policy, and ecosystem intelligence.',
    sections: [
      {
        title: 'What the reports cover',
        cards: [
          { title: 'Market perspective', description: 'Understand where the ecosystem is heading.' },
          { title: 'Infrastructure analysis', description: 'Evaluate the physical and digital layers.' },
          { title: 'Policy and ecosystem intelligence', description: 'Track the systems that influence scale.' }
        ]
      }
    ],
    cta: {
      title: 'Stay informed',
      description: 'Subscribe to receive updates when reports and whitepapers are published.',
      primary: { label: 'Subscribe', href: '/subscribe' },
      secondary: { label: 'Whitepapers', href: '/whitepapers' }
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
      description: 'Subscription handling will be connected to the backend in the next phase.',
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
      description: 'Whitepaper access and request handling will be wired into backend routes next.',
      primary: { label: 'Subscribe', href: '/subscribe' },
      secondary: { label: 'Contact', href: '/contact' }
    }
  },
  '/privacy-policy': {
    eyebrow: 'Legal',
    title: 'Privacy Policy',
    lead:
      'This page explains how MyOnlineJet may collect, use, disclose, and protect information when you visit the site or submit an inquiry.',
    sections: [
      {
        title: 'Information we collect',
        bullets: [
          'Contact details you submit through forms or email',
          'Basic usage data such as pages viewed and device/browser details',
          'Message content, attachments, and inquiry context you choose to share'
        ]
      },
      {
        title: 'How we use information',
        bullets: [
          'Respond to inquiries and manage partnerships, investor, and support requests',
          'Improve the site, security, and user experience',
          'Comply with applicable legal and operational requirements'
        ]
      },
      {
        title: 'Your choices',
        bullets: [
          'You can choose not to submit a form or share personal information',
          'You can contact us to request access, correction, or removal where appropriate',
          'You can manage browser-level cookie and tracking preferences'
        ]
      }
    ],
    cta: {
      title: 'Questions about privacy?',
      description:
        'If you need clarification about how your data is handled, please reach out through the contact page.',
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
