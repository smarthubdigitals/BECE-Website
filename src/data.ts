import { Project, SkillGroup, Service, Testimonial } from './types';

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'Business Flyer Design',
    category: 'Graphic Design',
    description: 'Vibrant and eye-catching promotional flyer designed to increase event attendance and brand awareness.',
    image: '/src/assets/images/portfolio_flyer_1783591947268.jpg',
    tools: ['Canva', 'Figma', 'Adobe Photoshop'],
    longDescription: 'Designed a premium quality double-sided business flyer for a local retail shop\'s grand opening. Structured with a clean visual grid, high contrast typography, and strategic Call-to-Actions (CTAs) to drive local foot traffic. Optimized for high-resolution print and rapid social media sharing via WhatsApp and Instagram.',
    clientType: 'Local Retail Small Business',
    impact: 'Boosted grand opening attendance by 35% with over 200 physical flyer distributions and wide social shares.',
    completedDate: 'May 2026'
  },
  {
    id: 'proj-2',
    title: 'School Presentation Design',
    category: 'Content Creation',
    description: 'A comprehensive, beautifully designed slideshow on digital literacy and student productivity.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    tools: ['Microsoft PowerPoint', 'Google Slides', 'Canva'],
    longDescription: 'Created an engaging, interactive 15-slide presentation for a high school workshop on basic ICT skills, digital hygiene, and keyboard productivity. Leveraged clean data visualization, storytelling techniques, and modern corporate slides to keep young minds attentive.',
    clientType: 'Community Junior High School',
    impact: 'Presented to over 150 students, receiving positive feedback from teachers for readability and student focus.',
    completedDate: 'June 2026'
  },
  {
    id: 'proj-3',
    title: 'Social Media Campaign Graphics',
    category: 'Graphic Design',
    description: 'Cohesive social media posts and stories designed to boost engagement and promote organic growth.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80',
    tools: ['Figma', 'Canva', 'CapCut'],
    longDescription: 'Developed a 9-grid Instagram and Facebook template kit for a church youth group\'s annual conference. Focused on youthful aesthetics, bold typography, and bright neon color accents, ensuring consistency in brand identity across all announcement channels.',
    clientType: 'Church Youth Fellowship',
    impact: 'Increased page views by 45% and generated 80+ organic social media shares for the annual youth event.',
    completedDate: 'April 2026'
  },
  {
    id: 'proj-4',
    title: 'One-Page Business Website',
    category: 'Website Design',
    description: 'A responsive, modern, and mobile-friendly portfolio/service page designed to attract clients.',
    image: '/src/assets/images/portfolio_website_1783591958001.jpg',
    tools: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    longDescription: 'Coded a high-conversion, responsive one-page landing page for an NGO\'s youth skills training campaign. Features structured layout, smooth scroll navigation, interactive Q&A elements, and a clean contact intake form to securely capture lead queries.',
    clientType: 'Ghanaian Youth Empowerment NGO',
    impact: 'Achieved a 100% Lighthouse accessibility score, leading to 50+ workshop sign-ups in its first month.',
    completedDate: 'June 2026'
  },
  {
    id: 'proj-5',
    title: 'Promotional Video Project',
    category: 'Video Editing',
    description: 'Dynamic short-form promotional video tailored for social media reels and advertisements.',
    image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=800&q=80',
    tools: ['CapCut', 'Canva', 'AI Audio Tools'],
    longDescription: 'Scripted, structured, and edited a 60-second social media reel showcasing a local tech training hub\'s computer classes. Features snappy cuts, kinetic text overlays, background music integration, and professional color grading optimized for TikTok, Instagram Reels, and YouTube Shorts.',
    clientType: 'Local Digital Skills Academy',
    impact: 'Generated over 4,500 organic views on TikTok, resulting in 18 direct student enrollment inquiries.',
    completedDate: 'July 2026'
  },
  {
    id: 'proj-6',
    title: 'AI-Assisted Content Project',
    category: 'Content Creation',
    description: 'Engaging and SEO-friendly copy, blog drafts, and brochures generated with strategic AI prompts.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    tools: ['ChatGPT', 'Gemini AI', 'Google Docs', 'Canva'],
    longDescription: 'Researched and drafted a comprehensive series of blog posts and social media briefs about digital literacy for small business owners in Ghana. Leveraged AI to outline and refine professional copy, while manually injecting local flavor and examples to maximize audience connection.',
    clientType: 'SME Tech Consultant Blog',
    impact: 'Ranked page 1 on Google for regional search queries, increasing monthly blog traffic by 25%.',
    completedDate: 'June 2026'
  }
];

export const skillGroups: SkillGroup[] = [
  {
    category: 'Graphic Design',
    description: 'Creating high-impact visual communications that attract and engage local audiences.',
    items: ['Flyers', 'Social Media Posts', 'Logos', 'Posters', 'Certificates'],
    iconName: 'Palette'
  },
  {
    category: 'Content Creation',
    description: 'Drafting high-quality professional text, blog articles, and visual assets.',
    items: ['AI-Assisted Content Writing', 'Social Media Content', 'Promotional Materials', 'Content Planning'],
    iconName: 'PenTool'
  },
  {
    category: 'Website Design',
    description: 'Building blazing-fast, mobile-friendly landing pages and modern single-screen sites.',
    items: ['AI-Powered One-Page Websites', 'Landing Pages', 'Portfolio Websites', 'Small Business Websites'],
    iconName: 'Globe'
  },
  {
    category: 'Video Creation & Editing',
    description: 'Assembling dynamic short-form videos optimized for modern attention spans.',
    items: ['Promotional Videos', 'Social Media Reels', 'Short Educational Videos', 'Basic Video Editing'],
    iconName: 'Video'
  }
];

export const additionalSkills: string[] = [
  'Microsoft Word',
  'Microsoft PowerPoint',
  'Microsoft Excel',
  'Typing Skills',
  'Basic Internet Skills',
  'Email Communication',
  'Google Drive',
  'Artificial Intelligence Tools',
  'Digital Productivity Tools',
  'Monetization Basics'
];

export const services: Service[] = [
  {
    id: 'srv-1',
    title: 'Graphic Design Services',
    description: 'Design professional flyers, logos, social media posts, and promotional materials.',
    features: [
      'High-resolution print-ready designs',
      'Fully editable Canva or Figma source files',
      'Optimized layouts for digital sharing (WhatsApp, Instagram)',
      'Up to 3 design revisions included'
    ],
    iconName: 'Palette',
    priceEstimate: 'Custom Package'
  },
  {
    id: 'srv-2',
    title: 'Website Design Services',
    description: 'Build modern, mobile-friendly websites for individuals and small businesses.',
    features: [
      'Mobile-first responsive layout',
      'Integrated Contact Forms & Maps',
      'SEO optimized structure for fast loading',
      'Basic domain and hosting setup guidance'
    ],
    iconName: 'Globe',
    priceEstimate: 'Custom Package'
  },
  {
    id: 'srv-3',
    title: 'Content Creation Services',
    description: 'Create engaging content and promotional materials using AI and digital tools.',
    features: [
      'SEO-friendly blog articles & posts',
      'Monthly social media content calendars',
      'Professional flyer text & copy editing',
      'Strategic AI Prompting tailored to your brand'
    ],
    iconName: 'PenTool',
    priceEstimate: 'Custom Package'
  },
  {
    id: 'srv-4',
    title: 'Video Editing Services',
    description: 'Produce short promotional and educational videos for businesses and content creators.',
    features: [
      'Dynamic cuts & transitions',
      'Kinetic text captions & overlays',
      'Background audio & copyright-free soundtrack',
      'Optimized format for Reels, TikTok, and YouTube Shorts'
    ],
    iconName: 'Video',
    priceEstimate: 'Custom Package'
  }
];

export const whyWorkWithMe = [
  {
    id: 'why-1',
    title: 'Creative Solutions',
    description: 'Delivering fresh, innovative visual designs tailored to your unique brand voice.',
    iconName: 'Sparkles',
    stat: 'Creative'
  },
  {
    id: 'why-2',
    title: 'Fast Learner',
    description: 'Constantly upgrading my ICT and digital skill set to offer the latest cutting-edge solutions.',
    iconName: 'Zap',
    stat: 'Agile'
  },
  {
    id: 'why-3',
    title: 'Attention to Detail',
    description: 'Pristine alignment, rich color harmony, and error-free copy across all deliverables.',
    iconName: 'Eye',
    stat: 'Pragmatic'
  },
  {
    id: 'why-4',
    title: 'Passion for Technology',
    description: 'Harnessing the power of modern computers, apps, and AI to optimize productivity.',
    iconName: 'Cpu',
    stat: 'Tech-First'
  },
  {
    id: 'why-5',
    title: 'Client-Focused Approach',
    description: 'Listening to your goals and revising work until it perfectly exceeds your expectations.',
    iconName: 'Heart',
    stat: 'Friendly'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    quote: "Abdul is exceptionally talented and dedicated. He designed high-quality flyers for our school's ICT seminar and did an amazing job with the presentation slides. Highly recommended for any school or business!",
    author: 'Mr. Ebenezer Mensah',
    role: 'ICT Coordinator & Head Teacher',
    organization: 'Greater Accra Academy',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'test-2',
    quote: "I needed a single-page website to launch my fashion brand, and Abdul delivered a fast, gorgeous, mobile-responsive page. His understanding of digital tools and modern design is beyond his years.",
    author: 'Maame Serwaah',
    role: 'Creative Director',
    organization: 'Serwaah Couture Ghana',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'test-3',
    quote: "Abdul Waheed helped us script and edit professional reels to promote our youth library initiative. His energy, responsiveness, and clean edits made him a pleasure to work with!",
    author: 'Rev. Frank Osei',
    role: 'Project Lead',
    organization: 'Hope for Youth Foundation',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
  }
];
