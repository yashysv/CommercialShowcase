import { ServiceItem, ProgramItem, CaseStudyItem, TestimonialItem, ArticleItem, TeamRoleItem } from '../types';

import heroImg from '../assets/images/hero_marketing_system_1789559583174.jpg';
import founderImg from '../assets/images/founder_yash_portrait_1789559596098.jpg';
import cafeImg from '../assets/images/case_hospitality_brand_1789559611133.jpg';
import analyticsImg from '../assets/images/case_growth_analytics_1789559623625.jpg';
import studioImg from '../assets/images/creative_studio_training_1789559639898.jpg';

export const ASSET_IMAGES = {
  hero: heroImg,
  founder: founderImg,
  caseCafe: cafeImg,
  caseAnalytics: analyticsImg,
  studioTraining: studioImg,
};

export const AGENCY_CONTACT = {
  email: 'commercialshowcase@gmail.com',
  phone: '+91 8080443648',
  phoneClean: '918080443648',
  whatsappUrl: 'https://wa.me/918080443648?text=Hi%20Commercial%20Showcase%2C%20I%27d%20like%20to%20discuss%20my%20marketing%20requirements.',
  socials: {
    instagram: 'https://www.instagram.com/commercialshowcase',
    facebook: 'https://www.facebook.com/profile.php?id=61558675160691',
    linkedin: 'https://www.linkedin.com/company/commercialshowcase',
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'market-research',
    number: '01',
    title: 'MARKET RESEARCH',
    subtitle: 'Audience, Competitor & Opportunity Intelligence',
    problem: 'Most businesses spend advertising budgets targeting broad demographics without verifying audience willingness-to-pay, competitor vulnerabilities, or core purchase triggers.',
    solution: 'We conduct qualitative customer inquiry, competitor message mapping, and demand pattern analysis before launching creative or spending on paid ads.',
    result: 'Clarity on who buys, why they choose you, and the exact positioning required to out-convert saturated competitors.',
    scope: [
      'Audience Persona & Psychographic Profiling',
      'Competitor Messaging & Pricing Audits',
      'Market Positioning & Differentiator Mapping',
      'Customer Purchase Friction Analysis',
      'Offer Viability & Opportunity Identification',
      'Strategic Go-to-Market Briefing'
    ],
    ctaLabel: 'DISCUSS YOUR MARKET →',
    iconName: 'Search'
  },
  {
    id: 'social-media-management',
    number: '02',
    title: 'SOCIAL MEDIA MANAGEMENT',
    subtitle: 'Strategic Brand Presence & Attention Systems',
    problem: 'Companies frequently post arbitrary graphics with zero narrative continuity, burning creative energy without generating genuine trust or qualified inquiries.',
    solution: 'We craft engineered social distribution engines combining editorial content calendars, high-retention short-form video, thought leadership, and active community engagement.',
    result: 'A distinct, credible digital presence that builds organic authority, retains audience attention, and fuels inbound interest.',
    scope: [
      'Channel Growth & Editorial Content Strategy',
      'Creative Direction & Visual Grid Curation',
      'Short-Form Video (Reels/Shorts) Scripting & Production',
      'Compelling Strategic Copywriting',
      'Monthly Thematic Content Calendars',
      'Community Management & Inbound Routing',
      'Monthly Performance & Engagement Reports'
    ],
    ctaLabel: 'BUILD YOUR SOCIAL PRESENCE →',
    iconName: 'Share2'
  },
  {
    id: 'performance-marketing',
    number: '03',
    title: 'PERFORMANCE MARKETING',
    subtitle: 'Multi-Channel Paid Acquisition & Conversion Engines',
    problem: 'Ad campaigns often struggle with high cost-per-click, poor attribution tracking, and creative fatigue due to unstructured ad setups and lack of testing discipline.',
    solution: 'We architect scalable paid funnels across Meta, Google, and YouTube using modular creative variations, rigorous audience testing, and tight retargeting loops.',
    result: 'Predictable pipeline development, lower customer acquisition costs, and transparent reporting tied to verified business inquiries.',
    scope: [
      'Meta Ads (Instagram & Facebook) Full-Funnel Architecture',
      'Google Search & High-Intent Display Campaigns',
      'YouTube Video Prospecting & Retargeting',
      'Iterative Creative & Copy Testing Matrix',
      'Server-Side Conversion Tracking & Pixel Setup',
      'Target ROAS / CPL Optimization & Bid Strategies',
      'Transparent Executive Performance Dashboards'
    ],
    ctaLabel: 'PLAN A CAMPAIGN →',
    iconName: 'TrendingUp'
  },
  {
    id: 'strategy-consulting',
    number: '04',
    title: 'STRATEGY CONSULTING',
    subtitle: 'Executive Positioning & Sustainable Growth Roadmaps',
    problem: 'Founders often jump straight to tactics—requesting reels or ads—without solving core offer positioning, unit economics, or scalable distribution channels.',
    solution: 'We partner with decision-makers to diagnose growth bottlenecks, restructure customer offers, align marketing investments, and establish AI-accelerated operational workflows.',
    result: 'A unified commercial blueprint where every piece of content, ad dollar, and team effort directly advances enterprise revenue goals.',
    scope: [
      'Brand & Value Proposition Positioning',
      'High-Converting Offer Architecture',
      'Customer Acquisition Roadmap & Budget Planning',
      'AI Workflow Integration for Marketing Teams',
      'Channel Selection & Resource Allocation',
      'Quarterly Growth Milestone Reviews'
    ],
    ctaLabel: 'BOOK A STRATEGY CALL →',
    iconName: 'Compass'
  },
  {
    id: 'branding-content-production',
    number: '05',
    title: 'BRANDING + CONTENT PRODUCTION',
    subtitle: 'Cinematic Visual Identity & Brand Assets',
    problem: 'Generic brand identities and bland stock media fail to command prestige, forcing businesses to compete solely on commodity pricing.',
    solution: 'We design bespoke brand systems and produce commercial-grade digital media that immediately project authority, sophistication, and distinct craftsmanship.',
    result: 'An elevated brand presence that captures market attention, commands premium pricing, and sticks in the memory of ideal clients.',
    scope: [
      'Visual Identity Systems & Design Guidelines',
      'Brand Tone, Voice & Messaging Pillars',
      'Commercial Campaign Creative Direction',
      'Product & Commercial Photography Concepts',
      'Cinematic Brand & Explainer Video Production',
      'Digital Collateral, Pitch Decks & Sales Assets'
    ],
    ctaLabel: 'BUILD YOUR BRAND →',
    iconName: 'Palette'
  },
  {
    id: 'funnels-lead-generation',
    number: '06',
    title: 'FUNNELS & LEAD GENERATION',
    subtitle: 'Conversion Architectures & Automated Lead Capture',
    problem: 'Traffic generated from ads or social channels bounces off confusing, unoptimized landing pages without ever entering a measurable sales qualification process.',
    solution: 'We build high-intent conversion pathways, conversational WhatsApp routing, optimized lead capture forms, and CRM automation that nurtures prospects in real time.',
    result: 'Streamlined visitor-to-lead conversion that turns cold clicks into qualified sales conversations without friction.',
    scope: [
      'High-Conversion Landing Page Design & Copy',
      'Automated WhatsApp Conversational Nurture Flows',
      'Lead Magnet Architecture & Gated Assets',
      'CRM Integration & Instant Sales Lead Alerts',
      'Multi-Step Lead Qualification Forms',
      'Behavioral Retargeting Funnels & Abandonment Sequences',
      'Continuous Heatmap & A/B Conversion Rate Optimization'
    ],
    ctaLabel: 'BUILD YOUR FUNNEL →',
    iconName: 'Layers'
  }
];

export const PROGRAMS: ProgramItem[] = [
  {
    id: 'ai-powered-digital-marketing',
    title: 'AI-Powered Digital Marketing Course',
    category: 'Flagship Professional Program',
    duration: '3 Months (Intensive)',
    shortDescription: 'Master modern full-stack digital marketing powered by cutting-edge AI workflows for rapid strategy, content generation, and media buying.',
    whatYouLearn: [
      'AI-accelerated SEO & Semantic Search Optimization',
      'Performance Media Buying across Google Ads & Meta Ads',
      'AI Marketing Workflows (prompt engineering for strategy, copy & analytics)',
      'High-Conversion Landing Page & Funnel Architecture',
      'Data-Driven Campaign Execution & Budget Management',
      'Client Acquisition & Freelance Growth Methodology'
    ],
    skillsBuilt: [
      'Meta Ads Manager',
      'Google Ads & GA4',
      'Generative AI Marketing Tools',
      'Funnel Optimization',
      'Campaign Analytics',
      'Conversion Copywriting'
    ],
    whoItsFor: 'Aspiring digital marketers, entrepreneurs, business owners, and career switchers seeking job-ready modern marketing mastery.',
    certification: 'Professional Certificate in AI-Driven Digital Marketing by Commercial Showcase',
    careerOutcomes: [
      'Digital Marketing Specialist',
      'Performance Media Buyer',
      'Growth Marketing Associate',
      'Independent Marketing Consultant'
    ],
    featured: true
  },
  {
    id: 'social-media-marketing',
    title: 'Social Media Marketing Course',
    category: 'Content & Community',
    duration: '8 Weeks',
    shortDescription: 'Learn how to build attention engines that turn passive social media scrollers into engaged followers and paying customers.',
    whatYouLearn: [
      'Platform-specific Organic Algorithm Dynamics (Instagram, LinkedIn, YouTube)',
      'Short-Form Video Scripting, Hook Engineering & Pacing',
      'Editorial Calendar Planning & Systematic Content Production',
      'Brand Voice Articulation & High-Engagement Copywriting',
      'Inbound Community Nurturing & Direct Message Conversion',
      'Analytics Evaluation & Content Iteration Protocols'
    ],
    skillsBuilt: [
      'Instagram Growth Systems',
      'Short-Form Content Strategy',
      'Copywriting & Narrative Hooks',
      'Community Management',
      'Trend Capitalization',
      'Organic Funnel Routing'
    ],
    whoItsFor: 'Content creators, marketing executives, agency hopefuls, and brand managers looking to master organic audience acquisition.',
    certification: 'Strategic Social Media Professional Certificate',
    careerOutcomes: [
      'Social Media Strategist',
      'Content Operations Manager',
      'Community Manager',
      'Brand Content Producer'
    ],
    featured: true
  },
  {
    id: 'ai-powered-video-editing-graphics',
    title: 'AI-Powered Video Editing & Graphics Design Course',
    category: 'Creative Production',
    duration: '10 Weeks',
    shortDescription: 'Combine classic graphic design principles with next-generation AI image generation and dynamic video editing workflows.',
    whatYouLearn: [
      'Visual Design Hierarchy, Typography, & Commercial Layout Fundamentals',
      'Short-Form Commercial Video Editing (Reels, TikToks, Ad Creatives)',
      'Generative AI Image Creation, Styling & Prompt Control for Campaigns',
      'AI Motion Graphics, B-roll Synthesis & Audio Syncing',
      'Ad Creative Testing Formats (Split screens, dynamic captions, UGC stylings)',
      'Commercial Production Asset Management & Delivery'
    ],
    skillsBuilt: [
      'Adobe Premiere / DaVinci Workflows',
      'Photoshop & Figma for Ad Design',
      'AI Creative Engines & Models',
      'Motion Design & Kinetic Captions',
      'Ad Creative Architecture',
      'Asset Delivery Systems'
    ],
    whoItsFor: 'Video editors, designers, and creative storytellers aiming to modernize their workflow with commercial AI tools.',
    certification: 'AI Creative Media Production Certificate',
    careerOutcomes: [
      'Creative Video Specialist',
      'Commercial Content Creator',
      'Motion & Ad Designer',
      'Agency Creative Associate'
    ],
    featured: true
  },
  {
    id: 'data-analyst-generative-ai',
    title: 'Data Analyst with Generative AI Course',
    category: 'Analytics & Intelligence',
    duration: '10 Weeks',
    shortDescription: 'Bridge the gap between raw business metrics and strategic growth decisions using Power BI, advanced spreadsheets, and Generative AI.',
    whatYouLearn: [
      'Advanced Excel & Google Sheets for Business Modeling',
      'Interactive Dashboard Architecture in Microsoft Power BI',
      'Data Cleaning, Transformation & Pipeline Structuring',
      'Generative AI for Rapid Query Synthesis & Automated Insights',
      'Marketing Attribution, CAC/LTV & Financial Performance Tracking',
      'Executive-Level Data Storytelling & Presentation'
    ],
    skillsBuilt: [
      'Microsoft Power BI',
      'Advanced Spreadsheet Modeling',
      'Data Cleansing & Transformation',
      'GenAI for Data Synthesis',
      'Marketing & Business Intelligence',
      'Executive Dashboards'
    ],
    whoItsFor: 'Professionals, analysts, and marketing team members who need to quantify performance and uncover actionable revenue drivers.',
    certification: 'Business Data Analyst & AI Insights Certificate',
    careerOutcomes: [
      'Marketing Data Analyst',
      'Business Intelligence Associate',
      'Growth Operations Analyst',
      'Reporting Specialist'
    ],
    featured: true
  },
  {
    id: 'on-the-job-training-program',
    title: 'On-the-Job Training (OJT) Program',
    category: 'Practical Apprenticeship',
    duration: '12 Weeks (Hands-on)',
    shortDescription: 'Experience real agency workflows, live client project pipelines, and team collaboration designed to build authentic workplace confidence.',
    whatYouLearn: [
      'Real-world Campaign Briefs & Client Objective Deconstruction',
      'Internal Agency Communication & Project Management Protocols',
      'Live Execution Across Paid Media, Social, and Creative Tracks',
      'Client Meeting Preparation, Reporting & Stakeholder Presentation',
      'Handling Unanticipated Client Revisions & Performance Pivots',
      'Collaborative Team Sprints & Cross-Functional Coordination'
    ],
    skillsBuilt: [
      'Live Agency Workflow Execution',
      'Stakeholder Communication',
      'Real-Time Problem Solving',
      'Sprint Management',
      'Campaign QA & Delivery',
      'Commercial Accountability'
    ],
    whoItsFor: 'Graduates, junior marketers, and career pivoters ready for direct practical exposure in a high-tempo marketing environment.',
    certification: 'Verified Agency Apprenticeship Credential',
    careerOutcomes: [
      'Junior Agency Account Manager',
      'Marketing Operations Coordinator',
      'Campaign Deployment Associate',
      'In-House Marketing Generalist'
    ]
  },
  {
    id: 'business-growth-content-strategy',
    title: 'Business Growth & Content Strategy Program',
    category: 'Executive & Founder Track',
    duration: '6 Weeks (Intensive)',
    shortDescription: 'A focused strategic accelerator for founders and operators looking to build predictable acquisition funnels and authority-driven content systems.',
    whatYouLearn: [
      'Audience Research & High-Margin Value Proposition Design',
      'Organic and Paid Channel Prioritization Frameworks',
      'Multi-Touchpoint Content Architecture that Shortens Sales Cycles',
      'WhatsApp & Email Relationship Systems for Retention',
      'Brand Authority Strategies for Founders and Executives',
      'AI Operational Stack Setup for Lean Team Output'
    ],
    skillsBuilt: [
      'Growth Roadmap Architecture',
      'Offer Positioning & Packaging',
      'Content-Driven Demand Gen',
      'Lead Qualification Systems',
      'AI Leverage for Founders',
      'Conversion Strategy'
    ],
    whoItsFor: 'Entrepreneurs, small business owners, consultants, and business heads who need an actionable growth playbook.',
    certification: 'Strategic Growth & Content Leadership Certificate',
    careerOutcomes: [
      'Marketing Director',
      'Growth Lead',
      'Founder-Led Growth Operator',
      'Strategic Consultant'
    ]
  }
];

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 'artisan-cafe-hospitality',
    title: 'Brand Modernization & Local Footfall Engine',
    clientIndustry: 'Artisan Bistro & Specialty Coffee',
    category: 'branding',
    challenge: 'A prominent urban cafe struggled with volatile mid-week footfall and relied entirely on occasional food aggregator discounts that eroded profit margins.',
    objective: 'Establish a distinctive visual brand identity, elevate perception to premium status, and drive direct community patronage without relying on price discounting.',
    strategy: 'Conducted customer intercept surveys to uncover local dining triggers. Overhauled physical packaging aesthetics, developed a sensory-first short-form video series showcasing origin roasting, and deployed hyper-local Meta ad radius geotargeting.',
    execution: 'Created a cohesive dark-matte visual language, restructured Google Business profile optimization, and launched localized Instagram Reels highlighting chef specials and evening ambiance.',
    outcome: 'Stronger brand recognition in the immediate urban district, marked increase in organic mid-week table reservations, and notable shift from discounted delivery orders to premium in-venue dining.',
    learnings: 'High-margin hospitality brands win on emotional atmosphere and sensory storytelling rather than generic product discounting.',
    image: cafeImg,
    tags: ['Visual Identity', 'Hyper-Local Paid Ads', 'Short-Form Video', 'Hospitality Strategy'],
    featured: true
  },
  {
    id: 'tech-ai-education-funnel',
    title: 'Multi-Channel Lead Qualification & Enrollment Architecture',
    clientIndustry: 'Technology & AI Professional Education',
    category: 'performance',
    challenge: 'An emerging ed-tech program faced high visitor drop-off on static registration forms and received unqualified applicant inquiries that overloaded admissions staff.',
    objective: 'Filter prospective students by academic readiness and professional intent while lowering acquisition friction through conversational discovery.',
    strategy: 'Redesigned the admissions journey into a two-tiered qualification funnel: a high-speed WhatsApp automated assessment followed by an interactive program syllabus consultation.',
    execution: 'Engineered targeted Google Search campaigns targeting high-intent career transition keywords, combined with educational carousel ads on Meta clarifying career pathways.',
    outcome: 'Substantially higher applicant qualification rates, streamlined admissions turnaround, and improved cohort retention driven by transparent curriculum expectations.',
    learnings: 'In professional training, transparent curriculum roadmaps and frictionless conversational channels consistently outperform opaque landing pages.',
    image: analyticsImg,
    tags: ['Google Search', 'WhatsApp Funnels', 'Ad Copy Testing', 'EdTech Growth'],
    featured: true
  },
  {
    id: 'skincare-d2c-rebrand',
    title: 'Positioning & Content Engine for Organic Retention',
    clientIndustry: 'Clean Skincare & Personal Care',
    category: 'content',
    challenge: 'A botanical skincare label experienced low repurchase rates and struggled to differentiate against venture-backed competitors running massive ad spend.',
    objective: 'Transition customer focus from generic botanical ingredients to transparent clinical efficacy, building lasting loyalty and repeat order velocity.',
    strategy: 'Shifted content production from polished lifestyle stills to dermatology-informed video breakdowns, ingredient transparency guides, and post-purchase routine emails.',
    execution: 'Produced a 30-day educational content sprint, collaborated with micro-dermatology practitioners, and implemented automated customer onboarding sequences via WhatsApp and email.',
    outcome: 'Clearer brand distinction in a crowded retail category, measurable expansion in repeat purchase frequency, and reduced dependence on heavy top-of-funnel ad spend.',
    learnings: 'Authentic educational depth and customer routine support build sustainable brand equity faster than cosmetic promotional hype.',
    image: studioImg,
    tags: ['Content Strategy', 'Retention Systems', 'Brand Narrative', 'Direct-to-Consumer'],
    featured: true
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    quote: "Commercial Showcase helped us clarify our core message before we wasted money on unproven ads. They restructured our entire local acquisition approach with systematic research and disciplined execution.",
    author: "Hospitality Brand Director",
    role: "Director of Operations",
    organization: "Regional Cafe & Dining Group",
    category: 'client',
    impactHighlight: 'Clarified local brand positioning & stabilized customer footfall'
  },
  {
    id: 't-2',
    quote: "Most agencies propose cookie-cutter social posts. Commercial Showcase built an actual lead pipeline that separated genuine prospects from casual clickers before our sales team ever picked up the phone.",
    author: "EdTech Program Founder",
    role: "Managing Founder",
    organization: "Professional Upskilling Institute",
    category: 'client',
    impactHighlight: 'Built structured conversational enrollment funnels'
  },
  {
    id: 't-3',
    quote: "The curriculum didn't treat AI as a gimmick. We learned how to use LLMs and media models directly within campaign planning, ad copywriting, and reporting. It completely changed my daily workflow.",
    author: "Digital Marketing Graduate",
    role: "Performance Marketing Associate",
    organization: "Independent Consultant",
    category: 'learner',
    impactHighlight: 'Accelerated job readiness with real-world AI marketing workflows'
  },
  {
    id: 't-4',
    quote: "What stood out was their focus on business economics. They didn't brag about vanity impressions; they cared about whether leads were turning into real conversations and paying accounts.",
    author: "Commercial Real Estate Operator",
    role: "Marketing Head",
    organization: "Commercial Leasing Firm",
    category: 'client',
    impactHighlight: 'Replaced vanity metrics with qualified commercial inquiries'
  },
  {
    id: 't-5',
    quote: "The On-the-Job Training program felt like stepping straight into an agency war room. You don't just study theory; you analyze actual briefs, draft client reports, and iterate live campaigns.",
    author: "OJT Apprenticeship Alumni",
    role: "Social Media Strategist",
    organization: "Growth Media Collective",
    category: 'learner',
    impactHighlight: 'Gained practical agency floor experience & client briefing skills'
  }
];

export const ARTICLES: ArticleItem[] = [
  {
    id: 'strategy-before-calendar',
    category: 'MARKETING',
    title: 'Why Your Marketing Strategy Should Come Before Your Content Calendar',
    excerpt: 'Too many marketing teams lock themselves into publishing 5 posts a week without knowing what commercial needle they are trying to move.',
    readTime: '5 min read',
    date: 'Sep 2026',
    content: [
      'The modern marketing trap is activity mistaken for progress. Teams obsess over content calendars, trending audio, and posting frequency while ignoring foundational commercial questions: Who is our ideal buyer? What friction stops them from purchasing? Why should they choose our solution over incumbent alternatives?',
      'When you start with a calendar, you produce content to satisfy a schedule. When you start with strategy, you produce assets designed to dismantle specific customer objections, establish intellectual authority, and direct qualified attention toward a calibrated offer.',
      'Before producing your next 30 days of social graphics, audit your message-to-market match. One clear strategic campaign addressing genuine purchase hesitations consistently outperforms hundreds of generic informational posts.'
    ],
    keyTakeaways: [
      'Posting frequency cannot compensate for an undefined value proposition.',
      'Every content piece must solve an objection or highlight an unaddressed customer friction point.',
      'Align creative output directly with quantifiable pipeline objectives.'
    ]
  },
  {
    id: 'ai-changing-workflows',
    category: 'AI',
    title: 'How AI Is Changing Digital Marketing Workflows (Without Diluting Brand Voice)',
    excerpt: 'AI is not a replacement for human taste and strategic judgment; it is a multiplier for research, scenario testing, and creative velocity.',
    readTime: '6 min read',
    date: 'Sep 2026',
    content: [
      'The biggest mistake agencies make with Generative AI is delegating brand thinking to default language models. The result is recognizable across the web: sterile adjectives, repetitive phrasing, and generic stock visual aesthetics that erode trust.',
      'Sophisticated agencies leverage AI as an analytical leverage engine: synthesizing competitor reviews to identify market dissatisfaction, generating 20 distinct hook angles against specific buyer psychographics, and automating media tracking reports.',
      'Brand voice remains strictly human-governed. AI provides speed across testing matrices; human creative direction provides the emotional nuance, cultural context, and strategic resonance that compels action.'
    ],
    keyTakeaways: [
      'Treat AI as a cognitive amplifier for research, drafting, and testing velocity.',
      'Never allow unedited AI output to dictate foundational brand voice or positioning.',
      'Deploy AI where it accelerates customer insights and operational execution.'
    ]
  },
  {
    id: 'meta-vs-google-ads',
    category: 'PERFORMANCE',
    title: 'Meta Ads vs Google Ads: When Each Makes Commercial Sense',
    excerpt: 'Understanding demand generation versus demand capture is the single most important principle in paid media allocation.',
    readTime: '7 min read',
    date: 'Aug 2026',
    content: [
      'A frequent question from founders is: "Should we run Meta ads or Google ads?" The answer depends on where customer demand currently lives.',
      'Google Ads is a Demand Capture machine. When someone types "commercial interior designer near me" or "urgent enterprise CRM migration," they have already recognized their problem and are actively evaluating solutions. If high-intent search volume exists in your sector, Google is typically the fastest route to direct sales conversations.',
      'Meta Ads, by contrast, is a Demand Generation engine. Prospective buyers rarely wake up actively searching for an innovative new beverage or a novel leadership coaching framework. Meta allows you to interrupt relevant audiences with compelling creative that defines a problem they did not know they could solve.',
      'The highest-performing commercial systems coordinate both: Meta creates awareness and desire, while Google captures the resulting brand and categorical searches.'
    ],
    keyTakeaways: [
      'Google captures active, high-intent problem-solving searches.',
      'Meta generates demand by introducing compelling propositions to targeted segments.',
      'High-growth businesses integrate both to feed and harvest the buyer journey.'
    ]
  },
  {
    id: 'why-local-businesses-struggle',
    category: 'BRANDING',
    title: 'Why Most Local Businesses Struggle With Social Media',
    excerpt: 'Local marketing fails when businesses mimic global lifestyle brands instead of embedding themselves deeply into their physical community.',
    readTime: '4 min read',
    date: 'Aug 2026',
    content: [
      'Local restaurants, clinics, and professional practices often make the mistake of copying international corporate accounts. They post generic holiday greetings, inspirational quotes, and stock images that could belong to any business in any country.',
      'Local businesses possess an immense strategic advantage that global conglomerates cannot replicate: hyper-local proximity, familiar neighborhood faces, and immediate real-world community trust.',
      'Effective local social media focuses on behind-the-scenes craft, local partnerships, customer stories, and hyper-targeted geo-radius campaigns that encourage footfall within a 5-kilometer radius.'
    ],
    keyTakeaways: [
      'Avoid generic corporate imagery; emphasize local human faces and physical craft.',
      'Utilize radius-based geo-targeting on Meta to saturate your immediate trading zone.',
      'Build community alliances and feature local patrons rather than abstract concepts.'
    ]
  },
  {
    id: 'building-lead-generation-funnel',
    category: 'GROWTH',
    title: 'How To Build A High-Converting Lead Generation Funnel That Filters Low-Intent Traffic',
    excerpt: 'High lead volume is meaningless if your sales team spends 80% of their day disqualifying unviable inquiries.',
    readTime: '6 min read',
    date: 'Jul 2026',
    content: [
      'Many businesses celebrate receiving 500 leads per month, only to discover their sales reps closed zero accounts because the inquiries had no budget, no authority, or an unrealistic timeline.',
      'A high-conversion funnel must incorporate intentional friction. By asking two or three structured qualification questions (such as monthly marketing budget, business model, and immediate timeline) before scheduling a call, you respect both your time and the prospect’s.',
      'Additionally, integrating conversational channels like WhatsApp allows real-time interactive qualification while maintaining high completion rates.'
    ],
    keyTakeaways: [
      'Quality of lead pipeline always triumphs over raw contact volume.',
      'Incorporate respectful qualifying criteria to protect sales capacity.',
      'Use interactive conversational tools to nurture prospects before phone consultations.'
    ]
  },
  {
    id: 'small-business-ai-playbook',
    category: 'AI',
    title: 'How Small Businesses Can Use AI Without Losing Their Brand Soul',
    excerpt: 'A practical framework for adopting AI across market research, customer service, and ad variations while preserving authentic human connection.',
    readTime: '5 min read',
    date: 'Jul 2026',
    content: [
      'Small enterprises often fear that implementing AI tools will make their customer touchpoints feel cold and robotic. When implemented poorly, that fear is completely justified.',
      'The solution is to compartmentalize AI into internal operational leverage rather than customer-facing barriers. Use AI to categorize inbound customer inquiries, transcribe and summarize client meetings, draft multiple value propositions for testing, and analyze competitors.',
      'When customers interact with you, preserve authentic, warm human communication. AI gives you the time back to focus deeply on client relationships.'
    ],
    keyTakeaways: [
      'Deploy AI for back-office velocity, competitive audits, and asset drafting.',
      'Protect high-touch customer conversations with authentic human attention.',
      'Maintain an uncompromising editorial filter on all public-facing communication.'
    ]
  }
];

export const TEAM_ROLES: TeamRoleItem[] = [
  {
    role: 'Founder & Director',
    department: 'Executive Leadership & Strategy',
    responsibility: 'Overarching agency vision, strategic client architecture, and AI methodology development.',
    focus: 'Strategic Growth & Brand Positioning'
  },
  {
    role: 'Managing Director',
    department: 'Agency Operations & Governance',
    responsibility: 'Commercial relationships, resource allocation, and cross-functional project execution.',
    focus: 'Operational Excellence'
  },
  {
    role: 'Assistant Manager',
    department: 'Project Delivery & Client Success',
    responsibility: 'Sprint tracking, campaign timeline adherence, and direct client communications.',
    focus: 'Workflow Orchestration'
  },
  {
    role: 'Content Management',
    department: 'Creative & Editorial Production',
    responsibility: 'Content calendar management, short-form video scripts, and brand copy direction.',
    focus: 'Narrative & Organic Attention'
  },
  {
    role: 'Operations Lead',
    department: 'Internal Infrastructure & Tooling',
    responsibility: 'AI tooling integration, tech stack optimization, and agency workflow management.',
    focus: 'Process Automation'
  },
  {
    role: 'Human Resources',
    department: 'Talent & Education Programs',
    responsibility: 'Talent acquisition, internship onboarding, and learning program mentorship coordination.',
    focus: 'People & Culture'
  },
  {
    role: 'Reporting & Analytics',
    department: 'Data Intelligence',
    responsibility: 'Cross-platform attribution tracking, Power BI dashboards, and campaign reporting.',
    focus: 'Data-Led Decision Making'
  },
  {
    role: 'Sales & Customer Relationships',
    department: 'Growth & Client Partnerships',
    responsibility: 'Prospective client discovery, needs evaluation, and ongoing client partnership success.',
    focus: 'Strategic Partnerships'
  }
];

export const AGENCY_PRINCIPLES = [
  {
    number: '01',
    title: 'STRATEGY BEFORE EXECUTION',
    description: 'We do not touch a camera, open an ad manager, or design a graphic until the fundamental business problem, customer target, and unit economics are understood.'
  },
  {
    number: '02',
    title: 'AI AS A LEVER, NOT A GIMMICK',
    description: 'We reject generic AI clutter. We deploy artificial intelligence where it dramatically reduces research time, tests creative variations at scale, and sharpens strategic clarity.'
  },
  {
    number: '03',
    title: 'CREATIVE WITH PURPOSE',
    description: 'Aesthetic beauty without strategic intent is merely art. Our creatives are engineered to capture attention, dismantle friction, and guide viewers toward definitive action.'
  },
  {
    number: '04',
    title: 'DATA-LED DECISIONS',
    description: 'Opinions are tested; data is verified. We evaluate campaigns by qualified pipeline generation and return on investment rather than superficial vanity impressions.'
  },
  {
    number: '05',
    title: 'LONG-TERM BRAND THINKING',
    description: 'Tactical performance marketing works best when supported by an unshakeable brand reputation. We build assets that appreciate in commercial value over time.'
  }
];

export const WORK_PROCESS_STEPS = [
  {
    step: '01',
    name: 'DISCOVER',
    subtitle: 'Market & Objective Diagnosis',
    description: 'We thoroughly investigate your business model, customer segments, competitor positioning, and existing funnel bottlenecks.'
  },
  {
    step: '02',
    name: 'DEFINE',
    subtitle: 'Strategic Roadmap & Offer Formulation',
    description: 'We establish the distinct market position, calibrate compelling customer offers, and map the precise multi-channel distribution plan.'
  },
  {
    step: '03',
    name: 'BUILD',
    subtitle: 'High-Fidelity Creative & Systems Architecture',
    description: 'Our team crafts the brand visual assets, short-form video scripts, landing pages, CRM automations, and ad creative matrix.'
  },
  {
    step: '04',
    name: 'LAUNCH',
    subtitle: 'Multi-Channel Deployment',
    description: 'We deploy targeted paid campaigns, launch organic editorial schedules, activate WhatsApp flows, and initiate tracking pixels.'
  },
  {
    step: '05',
    name: 'OPTIMIZE',
    subtitle: 'Rigorous Testing & Continuous Scaling',
    description: 'We analyze real performance data, cull underperforming variations, reallocate budget toward winning channels, and scale verified systems.'
  }
];
