export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  iconName: string;
  featuredImage?: string;
}

export interface SkillItem {
  name: string;
  category: "SEO & Discovery" | "Content & Strategy" | "Social & Analytics";
  description: string;
  tags: string[];
}

export interface ToolItem {
  name: string;
  category: string;
  learningFocus: string;
  badge: "Active Learning" | "Exploration" | "Tool of Interest";
}

export interface CaseStudyItem {
  id: string;
  title: string;
  client: string;
  industry: string;
  location: string;
  tags: string[];
  description: string;
  metrics: string;
  linkText: string;
  accentColor: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  deliverable: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  target: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface AgencyData {
  agency: {
    name: string;
    brandTag: string;
    tagline: string;
    description: string;
    phone: string;
    whatsapp: string;
    email: string;
    hrEmail: string;
    headOffice: {
      title: string;
      address: string;
      mapsUrl: string;
    };
    branchOffice: {
      title: string;
      address: string;
      mapsUrl: string;
    };
    socials: {
      facebook: string;
      instagram: string;
      linkedin: string;
      twitter: string;
    };
  };
  stats: Array<{
    number: string;
    label: string;
    sublabel?: string;
  }>;
  hero: {
    badge: string;
    headline: string;
    headlineAccent: string;
    supportingText: string;
    primaryCta: {
      text: string;
      whatsappPrefill: string;
    };
    secondaryCta: {
      text: string;
      href: string;
    };
    trustBadges: Array<{
      title: string;
      actionText: string;
      actionUrl?: string;
      isExternal?: boolean;
    }>;
  };
  whatWeDo: {
    badge: string;
    heading: string;
    description: string;
    bullets: string[];
    ctaText: string;
  };
  services: ServiceItem[];
  caseStudies: CaseStudyItem[];
  whyChoose: {
    badge: string;
    heading: string;
    context: string[];
    reasonsTitle: string;
    reasonsSubtitle: string;
    bullets: string[];
  };
  process: {
    badge: string;
    heading: string;
    description: string;
    steps: ProcessStep[];
  };
  pricingPlans: PricingPlan[];
  faqs: FaqItem[];
  districts: string[];
}

export const progbizData: AgencyData = {
  agency: {
    name: "AVA",
    brandTag: "AVA Digital Marketing",
    tagline: "We get your business found, chosen, and contacted across Kerala.",
    description:
      "We're AVA, a premier digital marketing agency based in Alappuzha, Kerala, working with businesses across all 14 districts. We run SEO, Google and Meta ads, social media, and websites as one plan, measured by calls, enquiries, and real sales.",
    phone: "",
    whatsapp: "",
    email: "",
    hrEmail: "",
    headOffice: {
      title: "Head Office (Alappuzha HQ)",
      address: "Alappuzha, Kerala, India",
      mapsUrl: "#",
    },
    branchOffice: {
      title: "Statewide Operations",
      address: "All 14 Districts of Kerala",
      mapsUrl: "#",
    },
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  stats: [
    { number: "70+", label: "Expert Team Members", sublabel: "In-house specialists" },
    { number: "9+", label: "Years of Experience", sublabel: "Kerala & South India" },
    { number: "450+", label: "Projects Delivered", sublabel: "Proven track record" },
    { number: "100+", label: "Trusted Clients", sublabel: "Across all 14 districts" },
  ],
  hero: {
    badge: "AVA • Alappuzha-Based Digital Marketing Agency in Kerala",
    headline: "A Client Came to Us at ₹4 Crore.",
    headlineAccent: "Today They're at ₹40 Crore.",
    supportingText:
      "We're AVA, a full-funnel digital marketing agency based in Alappuzha, Kerala, partnering with businesses across all 14 districts. We run SEO, Google and Meta ads, social media, and websites as one connected plan, measured strictly by calls, enquiries, and sales.",
    primaryCta: {
      text: "Get Free Growth Plan",
      whatsappPrefill: "Hi AVA, I would like a free growth plan for my business.",
    },
    secondaryCta: {
      text: "Explore Kerala Case Studies",
      href: "#projects",
    },
    trustBadges: [
      {
        title: "Google Certified Partner",
        actionText: "Certified Agency",
        actionUrl: "#",
        isExternal: false,
      },
      {
        title: "4.8 ☆ Top Rated",
        actionText: "Client Reviews",
        actionUrl: "#",
        isExternal: false,
      },
      {
        title: "Based in Alappuzha",
        actionText: "Kerala Statewide",
        isExternal: false,
      },
    ],
  },
  whatWeDo: {
    badge: "What We Do for Kerala Businesses",
    heading: "What We Do for Kerala Businesses",
    description:
      "We get you found, chosen, and contacted. Every service below feeds one clear goal: more qualified calls, WhatsApp enquiries, and revenue.",
    bullets: [
      "Get found on Google and Google Maps when local buyers search",
      "Reach the right audience on Instagram, Facebook, and YouTube",
      "Run Google, ChatGPT and Meta ads that are tracked to leads, not just clicks",
      "Turn visitors into enquiries with fast, mobile-first websites",
      "Report every month in plain language: calls, leads, sales, and spend",
    ],
    ctaText: "Get Your Custom Plan",
  },
  services: [
    {
      id: "360-marketing",
      number: "01",
      title: "360° Marketing",
      shortDescription:
        "As a Lead Generation Agency in Kerala, we handle SEO, paid ads, and branding under one roof to attract the right audience, generate qualified leads, and turn marketing efforts into measurable growth.",
      fullDescription:
        "An end-to-end synchronized growth engine combining organic search dominance, precision-targeted Meta & Google ads, social media management, and CRM lead capture.",
      deliverables: [
        "Unified multi-channel roadmap",
        "Lead capture & CRM automation",
        "Conversion rate optimization",
        "Transparent monthly ROI reporting",
      ],
      iconName: "Compass",
      featuredImage: "/images/growth-dashboard.jpg",
    },
    {
      id: "performance-marketing",
      number: "02",
      title: "Performance Marketing",
      shortDescription:
        "High-ROI paid advertising across Google Search, Display, YouTube, Meta (Instagram & Facebook), and WhatsApp. Every single rupee is tracked to incoming calls and verified customer enquiries.",
      fullDescription:
        "We engineer high-converting paid campaigns that bypass vanity impressions to deliver verified enquiries, appointment bookings, and immediate online sales.",
      deliverables: [
        "Google Search & Maps Ads",
        "Instagram & Facebook Lead Ads",
        "Click-to-WhatsApp direct ads",
        "Pixel & Server-Side Conversion API tracking",
      ],
      iconName: "TrendingUp",
    },
    {
      id: "marketing-campaign",
      number: "03",
      title: "Marketing Campaign",
      shortDescription:
        "Omnichannel seasonal, festive (Onam, Vishu, Eid, Christmas), and product launch campaigns designed specifically for Kerala's regional shopping seasons and consumer behavior.",
      fullDescription:
        "Kerala consumers buy during key cultural moments. We create high-impact, coordinated multi-channel campaigns that dominate timelines and capture high-intent buyers.",
      deliverables: [
        "Seasonal campaign calendar",
        "Malayalam & English ad creatives",
        "Influencer & regional outreach",
        "Live campaign performance optimization",
      ],
      iconName: "Megaphone",
    },
    {
      id: "branding",
      number: "04",
      title: "Branding",
      shortDescription:
        "Build a brand that earns instant attention and lasting trust. We craft visual identities, brand guidelines, packaging, and digital creative assets that position you ahead of local competitors.",
      fullDescription:
        "Your brand is why customers pick you over a cheaper alternative. We build memorable visual languages, logo identities, and digital collateral that inspire confidence.",
      deliverables: [
        "Logo & Brand Identity System",
        "Visual style guides & color palettes",
        "Social media kit & graphic templates",
        "Packaging & promotional collateral",
      ],
      iconName: "Sparkles",
    },
    {
      id: "web-development",
      number: "05",
      title: "Website Design and Development",
      shortDescription:
        "Fast, mobile-first websites and modern e-commerce stores designed to turn everyday visitors into phone calls and WhatsApp enquiries in seconds.",
      fullDescription:
        "Most Kerala shoppers browse on mobile networks. We build lightning-fast, SEO-optimized, mobile-responsive Next.js websites engineered for maximum conversion.",
      deliverables: [
        "Mobile-first responsive architecture",
        "WhatsApp & click-to-call integrations",
        "Fast Core Web Vitals performance",
        "Built-in Google Analytics & conversion tracking",
      ],
      iconName: "Layout",
    },
    {
      id: "seo-kerala",
      number: "06",
      title: "Search Engine Optimisation (SEO)",
      shortDescription:
        "Dominate local Google search and Google Maps across Kannur, Kozhikode, Kochi, and your specific target towns. Get discovered right when customers need your service.",
      fullDescription:
        "When people search 'near me' or for services in Kerala, we ensure your business ranks in the top 3 Google Maps pack and top organic results.",
      deliverables: [
        "Google Business Profile optimization",
        "Local citation building across Kerala",
        "High-intent keyword ranking strategy",
        "Technical audit & speed optimization",
      ],
      iconName: "Search",
    },
  ],
  caseStudies: [
    {
      id: "b-perfume",
      title: "Going From 0 to 100 Daily Orders in 3 Months",
      client: "B Perfume",
      industry: "Fashion & Fragrance",
      location: "Malappuram",
      tags: ["SEO", "Google Ads", "SMM"],
      description:
        "A leading Kerala fragrance brand known for its quality and wide range of fragrances. Our digital marketing team helped them reach more people online and grow their customer base across social, search, and paid channels.",
      metrics: "0 to 100+ daily online orders within 90 days",
      linkText: "Explore The Project",
      accentColor: "border-lime-500",
    },
    {
      id: "lulu-sarees",
      title: "3 Months of Making a Great Brand More Visible",
      client: "LuLu Sarees",
      industry: "Retail & Fashion",
      location: "Kannur",
      tags: ["Digital Marketing", "Local Footfall", "Instagram SMM"],
      description:
        "A well-known retail saree brand with a beautiful collection for every occasion. Our marketing strategy helped them show up stronger online and reach more local customers, turning daily social activity into real store footfall and sales.",
      metrics: "+140% in-store footfall & daily bridal enquiries",
      linkText: "Explore The Project",
      accentColor: "border-emerald-500",
    },
    {
      id: "geps-solar",
      title: "From ₹4 Crore to ₹40 Crore, Three Years, One Team That Knew Exactly What We Needed",
      client: "GEPS Solar",
      industry: "Power & Energy",
      location: "Kannur",
      tags: ["SEO", "SMM", "Google Ads"],
      description:
        "A leading solar installation company based in Kerala. After years of running traditional paper ads, they partnered with our digital marketing specialists to build a robust digital presence and scaled revenue tenfold in three years.",
      metrics: "10x Revenue Scale (₹4 Cr to ₹40 Cr)",
      linkText: "Explore The Project",
      accentColor: "border-amber-500",
    },
  ],
  whyChoose: {
    badge: "Why Choose",
    heading: "Why businesses in Kerala need digital marketing",
    context: [
      "Most people in Kerala look at their phone before they buy. They search on Google, read reviews, and check Instagram pages. If your business is not there, they pick someone else.",
      "Local shops, clinics, hotels, and schools all fight for the same customers. Digital marketing helps you stand out in your own town and reach people at the right time.",
    ],
    reasonsTitle: "Why Choose AVA",
    reasonsSubtitle: "A digital marketing agency in Kerala that keeps things simple, transparent, and honest.",
    bullets: [
      "We know the local market and how people here search",
      "We explain everything in plain words",
      "We focus on calls, leads, and sales",
      "You own your ad accounts, pages and data. Always.",
      "If you ever leave, your ad accounts and pages stay with you",
      "We share clear reports every month",
    ],
  },
  process: {
    badge: "Our Working Process",
    heading: "How We Work",
    description:
      "We study, plan, execute, and review your marketing every month, so your business keeps improving instead of standing still.",
    steps: [
      {
        number: "01",
        title: "Audit",
        description:
          "We review your website, Google Business Profile, ad accounts, and competitors in your area, and show you where enquiries are being lost.",
        deliverable: "Comprehensive Kerala Market & Funnel Gap Analysis",
      },
      {
        number: "02",
        title: "Plan",
        description:
          "You get a written plan with channels, budget split, and the numbers we'll be measured on, before any spend starts.",
        deliverable: "Custom Channel Strategy & Budget Blueprint",
      },
      {
        number: "03",
        title: "Set up tracking & launch",
        description:
          "We fix tracking first, so enquiries from calls, forms, and WhatsApp can be traced to the channel that produced them.",
        deliverable: "End-to-End Analytics & WhatsApp Conversion Tracking",
      },
      {
        number: "04",
        title: "Run and improve",
        description:
          "We monitor results daily, test ad creatives, optimize keyword rankings, and send monthly plain-language reports on sales and spend.",
        deliverable: "Continuous Optimization & Monthly Transparent Review",
      },
    ],
  },
  pricingPlans: [
    {
      id: "starter",
      name: "Starter",
      target: "For small businesses & local shops",
      description: "Getting online properly for the first time with high local search visibility.",
      features: [
        "Google Business Profile setup & optimisation",
        "Local Google Maps pack visibility",
        "Basic on-page SEO for high-intent keywords",
        "1 social media platform managed (Instagram/FB)",
        "Monthly performance report in plain language",
        "Best for: Clinics, local retail shops, neighborhood services",
      ],
      highlighted: false,
    },
    {
      id: "growth",
      name: "Growth",
      badge: "Most Popular in Kerala",
      target: "For businesses ready to scale visibility & leads",
      description: "Our comprehensive growth package connecting search, paid ads, and social media.",
      features: [
        "Everything in Starter plan, plus:",
        "Full SEO (technical + content + local district rank)",
        "2–3 social platforms managed with monthly content calendar",
        "Paid ad campaigns on Google Search & Meta",
        "Click-to-WhatsApp direct lead campaigns",
        "Monthly strategy review call with your account manager",
        "Best for: Growing retail brands, real estate, education institutes",
      ],
      highlighted: true,
    },
    {
      id: "scale",
      name: "Scale",
      badge: "Full-Funnel Solution",
      target: "For businesses ready for statewide & national dominance",
      description: "Turn your business into a category leader with coordinated full-funnel digital dominance.",
      features: [
        "Everything in Growth plan, plus:",
        "Full custom website development or high-converting redesign",
        "Advanced performance marketing across Google, Meta & WhatsApp",
        "Dedicated senior account strategist & creative team",
        "Bi-weekly reporting and agile ad optimization cycles",
        "Custom CRM and automated lead distribution",
        "Best for: Established brands, multi-location chains, manufacturers",
      ],
      highlighted: false,
    },
  ],
  faqs: [
    {
      question: "Do you work with businesses across all districts of Kerala?",
      answer:
        "Yes. We work with businesses in every district of Kerala, across India, and abroad. Planning, approvals, and reporting happen online, so distance doesn't slow anything down.",
    },
    {
      question: "Do you work with small businesses?",
      answer:
        "Yes. We work with local shops, clinics, and startups as well as established brands. Our Starter plan is built specifically for businesses getting online properly for the first time.",
    },
    {
      question: "Which industries have you worked with?",
      answer:
        "Solar and energy, education, fashion and retail, fragrance and e-commerce, bakery and food, technology retail and repair, healthcare, and real estate. You can see real case studies from these industries on this page.",
    },
    {
      question: "Do you set up and manage Google Business Profiles?",
      answer:
        "Yes. We set up, verify, and optimise your Google Business Profile so you appear on Google Maps and in local search when buyers search nearby, and we help you build a steady flow of genuine customer reviews.",
    },
    {
      question: "Do you run WhatsApp and social media ads?",
      answer:
        "Yes. We run Google, Meta, and click-to-WhatsApp campaigns so customers can reach you in one tap. Every campaign is tracked, and budget moves to whatever is producing the highest quality enquiries.",
    },
    {
      question: "Who owns the ad accounts and data?",
      answer:
        "You do. Your Google Ads, Meta, and analytics accounts stay in your business's name, and we work in them with your permission. If you ever leave, everything stays with you.",
    },
    {
      question: "How will I know if the marketing is working?",
      answer:
        "You'll see it in your own numbers. Every month you get a plain-language report on calls, enquiries, website visits, and spend, followed by a review call on what changes next.",
    },
    {
      question: "Can you build or fix my website too?",
      answer:
        "Yes. Our in-house technology team builds fast, mobile-first websites and online stores, so your marketing and your website are planned together to maximize conversion.",
    },
    {
      question: "What if we've tried an agency before and it didn't work?",
      answer:
        "We hear this often. Usually the cause was unclear reporting or activity without a clear goal. Start with a free growth plan: we'll show you what we'd do differently for your business before you pay anything.",
    },
    {
      question: "Is AVA a digital marketing company or an agency in Kerala?",
      answer:
        "Both. AVA is a full-service digital marketing agency in Kerala. We handle SEO, ads, social media, websites, and content under one roof, so you get everything you need from one coordinated team.",
    },
  ],
  districts: [
    "Alappuzha",
    "Ernakulam (Kochi)",
    "Kottayam",
    "Kollam",
    "Thiruvananthapuram",
    "Thrissur",
    "Kozhikode",
    "Kannur",
    "Malappuram",
    "Palakkad",
    "Pathanamthitta",
    "Idukki",
    "Wayanad",
    "Kasaragod",
  ],
};

// Backward compatibility alias for any existing code imports
export const portfolioData = {
  personal: {
    name: progbizData.agency.name,
    role: "Digital Marketing Agency in Kerala",
    tagline: progbizData.agency.tagline,
    location: "Alappuzha, Kerala, India",
    bio: progbizData.agency.description,
    email: progbizData.agency.email,
    profileImage: "/images/growth-dashboard.jpg",
    socialLinks: progbizData.agency.socials,
  },
  navigation: [
    { name: "Services", href: "#services" },
    { name: "What We Do", href: "#what-we-do" },
    { name: "Case Studies", href: "#projects" },
    { name: "Why Us", href: "#why-choose" },
    { name: "Process", href: "#process" },
    { name: "Plans", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ],
  hero: {
    badge: progbizData.hero.badge,
    headline: progbizData.hero.headline,
    headlineAccent: progbizData.hero.headlineAccent,
    supportingText: progbizData.hero.supportingText,
    primaryCta: {
      text: progbizData.hero.primaryCta.text,
      href: "#contact",
    },
    secondaryCta: {
      text: progbizData.hero.secondaryCta.text,
      href: progbizData.hero.secondaryCta.href,
    },
    highlights: progbizData.stats.map((s) => ({
      title: s.number,
      subtitle: s.label,
    })),
  },
  services: progbizData.services.map((s) => ({
    id: s.id,
    title: s.title,
    shortDescription: s.shortDescription,
    iconName: s.iconName,
    focusAreas: s.deliverables,
  })),
  about: {
    badge: progbizData.whyChoose.badge,
    title: progbizData.whyChoose.heading,
    intro: progbizData.whyChoose.context[0],
    paragraphs: progbizData.whyChoose.context,
    pillars: progbizData.whyChoose.bullets.map((b) => ({
      title: b,
      description: "Clear, measurable, and reliable execution.",
      icon: "ShieldCheck",
    })),
    ctaText: "Talk to Us",
  },
  skills: [
    {
      name: "Search Engine Optimisation",
      category: "SEO & Discovery",
      description: "Local Kerala SEO, Google Maps rankings, and technical keyword optimization.",
      tags: ["Local SEO", "Google Maps", "Audit", "Keywords"],
    },
    {
      name: "Performance Advertising",
      category: "Social & Analytics",
      description: "Google Ads and Meta campaigns tracked to revenue and lead generation.",
      tags: ["Google Ads", "Meta Ads", "WhatsApp Ads", "ROAS"],
    },
    {
      name: "Creative Brand Strategy",
      category: "Content & Strategy",
      description: "Multi-channel campaign planning and brand identities tailored for Kerala.",
      tags: ["Branding", "Content Strategy", "Video Production", "Copywriting"],
    },
  ] as SkillItem[],
  tools: [
    {
      name: "Google Ads & Analytics 4",
      category: "Analytics & Tracking",
      learningFocus: "Conversion tracking, ROAS optimization, and audience remarketing.",
      badge: "Active Learning",
    },
    {
      name: "Meta Ads Manager",
      category: "Paid Social",
      learningFocus: "Click-to-WhatsApp direct campaigns and localized lead generation.",
      badge: "Active Learning",
    },
    {
      name: "Google Search Console",
      category: "Organic Search",
      learningFocus: "Indexation, search queries, and local ranking optimization.",
      badge: "Exploration",
    },
  ] as ToolItem[],
  contact: {
    badge: "Free Growth Plan",
    title: "Book a call and see how you can grow with AVA!",
    subtitle:
      "Talk directly to our Kerala marketing strategists. Get a free audit and clear growth roadmap.",
    emailAddress: "",
    responsePromise: "Usually responds within 1 hour on WhatsApp or email",
  },
};
