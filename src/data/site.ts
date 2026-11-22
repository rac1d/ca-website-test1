import {
  BookOpen,
  Receipt,
  TrendingUp,
  PiggyBank,
  Building2,
  Rocket,
  Briefcase,
  ShieldCheck,
  Target,
  Eye,
  Heart,
  Scale,
  Users,
  Award,
} from 'lucide-react';

export const company = {
  name: 'Apex Financial Advisors',
  shortName: 'Apex',
  tagline: 'Your Trusted Partner in Financial Excellence',
  intro:
    'Apex Financial Advisors is a Chartered Accountancy and financial consultancy firm serving individuals, professionals, and businesses across India. We combine deep regulatory expertise with a modern, personalised approach to help you stay compliant, optimise your taxes, and grow with confidence.',
  email: 'info@apexfinancial.in',
  phone: '+91 98765 43210',
  phoneTel: '+919876543210',
  address: 'Unit 402, Apex Towers, MG Road, Bengaluru, Karnataka 560001',
  hours: 'Mon – Sat, 9:30 AM – 6:30 PM',
  founded: 2009,
  social: {
    linkedin: '#',
    twitter: '#',
    facebook: '#',
  },
};

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Modules', to: '/modules' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];

export type Service = {
  id: string;
  icon: typeof BookOpen;
  title: string;
  short: string;
  full: string;
  points: string[];
};

export const services: Service[] = [
  {
    id: 'accounting-bookkeeping',
    icon: BookOpen,
    title: 'Accounting & Bookkeeping',
    short:
      'Accurate, timely books maintained end-to-end — from ledger entries to monthly reconciliation and financial statements.',
    full: 'Our accounting and bookkeeping service keeps your financial records accurate, organised, and always audit-ready. We handle ledger maintenance, bank reconciliation, accounts payable and receivable, and the preparation of monthly and annual financial statements so you always have a clear picture of where your business stands.',
    points: [
      'Day-to-day ledger and journal maintenance',
      'Monthly bank and credit card reconciliation',
      'Accounts payable & receivable tracking',
      'Monthly, quarterly, and annual financial statements',
    ],
  },
  {
    id: 'gst-compliance',
    icon: Receipt,
    title: 'GST Registration & Compliance',
    short:
      'End-to-end GST support — new registrations, timely return filing, reconciliation, and resolution of notices.',
    full: 'From new GST registration to ongoing monthly and annual return filing, we make sure your GST compliance is always on time and accurate. We handle input tax credit reconciliation, GSTR-1/3B filing, annual returns, and respond to any departmental notices on your behalf.',
    points: [
      'New GST registration & amendment support',
      'Monthly GSTR-1 & GSTR-3B filing',
      'Input tax credit reconciliation',
      'Annual return (GSTR-9) and notice responses',
    ],
  },
  {
    id: 'income-tax',
    icon: TrendingUp,
    title: 'Income Tax Filing & Advisory',
    short:
      'Personal and corporate income tax return filing, tax planning, and advisory to legally minimise your tax burden.',
    full: 'We prepare and file income tax returns for individuals, professionals, partnership firms, and companies — while proactively advising on tax planning strategies that are fully compliant and legally minimise your tax liability. From advance tax to refunds and scrutiny handling, we cover it all.',
    points: [
      'ITR filing for individuals, firms & companies',
      'Tax planning & advisory across the year',
      'Advance tax estimation and TDS compliance',
      'Refund tracking and scrutiny assessment support',
    ],
  },
  {
    id: 'auditing-assurance',
    icon: PiggyBank,
    title: 'Auditing & Assurance',
    short:
      'Statutory, internal, and tax audits carried out with rigour to give stakeholders confidence in your numbers.',
    full: 'Our auditing and assurance practice provides statutory audits, internal audits, tax audits, and concurrent reviews — conducted with independence, rigour, and a practical understanding of your business. We deliver clear, actionable reports that strengthen governance and satisfy regulatory requirements.',
    points: [
      'Statutory and company law audits',
      'Internal and management audits',
      'Tax audits under section 44AB',
      'Concurrent and stock audits',
    ],
  },
  {
    id: 'business-registration',
    icon: Building2,
    title: 'Business Registration',
    short:
      'From Pvt Ltd to LLP and proprietorship — we handle the entire registration and incorporation process.',
    full: 'Starting a new venture? We guide you through choosing the right business structure and handle the full incorporation process — whether a Private Limited Company, Limited Liability Partnership, partnership firm, or proprietorship — including all post-incorporation ROC filings.',
    points: [
      'Private Limited & OPC incorporation',
      'LLP and partnership firm registration',
      'Director KYC, DSC, and DIN support',
      'Post-incorporation ROC compliance',
    ],
  },
  {
    id: 'financial-consultancy',
    icon: Briefcase,
    title: 'Financial & Business Consultancy',
    short:
      'Strategic financial planning, cash flow management, project finance, and growth advisory tailored to your goals.',
    full: 'Beyond compliance, we act as your long-term financial partner — helping with strategic business planning, cash flow and working capital management, project finance arrangements, valuations, and growth advisory so you can make confident, informed decisions at every stage.',
    points: [
      'Strategic business & financial planning',
      'Cash flow and working capital advisory',
      'Project finance & loan documentation',
      'Business valuation and growth advisory',
    ],
  },
];

export type ModuleItem = {
  id: number;
  title: string;
  desc: string;
  category: string;
  youtubeId: string | null;
};

export function hasYouTubeId(youtubeId: string | null): youtubeId is string {
  return youtubeId !== null && /^[\w-]{11}$/.test(youtubeId);
}

export const modules: ModuleItem[] = [
  {
    id: 1,
    title: 'What Is Immunotherapy? A New Hope Against Cancer | Dr. Ankit Patel & Nikhil Madrasi | P2',
    desc: 'Dr. Ankit Patel discusses immunotherapy, how it differs from conventional cancer treatments, and how oncologists assess who may benefit.',
    category: 'Cancer care',
    youtubeId: '_pCGjI2R8cU',
  },
  {
    id: 2,
    title: 'How Is Nirmal Preparing for 10k Marathon 2026? | Dr. Saumya Choraria & Nikhil Madrasi | P1',
    desc: 'Saumya Choraria discusses how Nirmal is organising its 2026 10K event in Surat and encouraging community participation.',
    category: 'Sport & community',
    youtubeId: '8jCMi3z1vv8',
  },
  {
    id: 3,
    title: 'Why Are Heart Diseases Rising in Young People? | Dr. Kushal Choraria & Nikhil Madrasi | P1',
    desc: 'Dr. Kushal Choraria discusses cardiovascular risk in younger people, the role of obesity, and how clinicians choose medication.',
    category: 'Heart health',
    youtubeId: '9lQtFmkHa_k',
  },
  {
    id: 4,
    title: 'Is Cancer Still a Death Sentence? | Dr. Ankit Patel & Nikhil Madrasi | P1',
    desc: 'Dr. Ankit Patel discusses how advances in medical science and treatment have changed cancer care.',
    category: 'Cancer care',
    youtubeId: 'sp1NBJ5ILI8',
  },
  {
    id: 5,
    title: 'Is Popularity Temporary? The Power of Focus & Future of Wealth | P4',
    desc: 'Hardik Nayak discusses focus, long-term wealth creation, and how emerging technologies such as data centres are changing business.',
    category: 'Wealth & technology',
    youtubeId: 'TeEiN_9aj1k',
  },
  {
    id: 6,
    title: 'What Can German Culture Teach Us About Discipline? | Keyur Soni & Nikhil Madrasi | P1',
    desc: 'Keyur Soni shares his experience learning German in India and discusses what German culture can teach about punctuality and time management.',
    category: 'Language & culture',
    youtubeId: 'hPy5oiz-SqI',
  },
];

export type TeamMember = {
  name: string;
  role: string;
  initials: string;
  bio: string;
};

export const team: TeamMember[] = [
  {
    name: 'Rajesh Menon',
    role: 'Founder & Managing Partner, FCA',
    initials: 'RM',
    bio: 'A Fellow Chartered Accountant with over 20 years of experience in taxation, audit, and advisory for SMEs and listed entities.',
  },
  {
    name: 'Anita Sharma',
    role: 'Partner — Direct Tax & Advisory, CA',
    initials: 'AS',
    bio: 'Specialises in income tax, international tax, and transfer pricing, with 14 years of experience advising growing businesses.',
  },
  {
    name: 'Vikram Patel',
    role: 'Partner — GST & Indirect Tax, CA',
    initials: 'VP',
    bio: 'Leads our GST practice, handling registration, return filing, litigation, and advisory for clients across multiple states.',
  },
  {
    name: 'Sneha Iyer',
    role: 'Senior Manager — Audit & Assurance, CA',
    initials: 'SI',
    bio: 'Oversees statutory and internal audits with a focus on process improvement and strong internal controls.',
  },
];

export const coreValues = [
  {
    icon: ShieldCheck,
    title: 'Integrity',
    desc: 'We uphold the highest ethical standards and treat every client matter with complete confidentiality and honesty.',
  },
  {
    icon: Scale,
    title: 'Accuracy',
    desc: 'Precision is non-negotiable. Every number we report is checked, reconciled, and backed by verifiable records.',
  },
  {
    icon: Heart,
    title: 'Client-First',
    desc: 'We listen first and advise second. Our recommendations always serve your long-term goals, not our convenience.',
  },
  {
    icon: Award,
    title: 'Excellence',
    desc: 'We invest in continuous learning so our advice reflects the latest law, regulation, and industry best practice.',
  },
];

export const missionVision = {
  mission:
    'To deliver trustworthy, timely, and insightful financial and compliance services that empower individuals and businesses to make confident decisions and grow sustainably.',
  vision:
    'To be the most relied-upon Chartered Accountancy firm in India — known for integrity, technical excellence, and a genuinely personal approach to every client relationship.',
};

export const stats = [
  { icon: Users, value: 500, prefix: '', suffix: '+', label: 'Clients served' },
  { icon: Award, value: 15, prefix: '', suffix: '+', label: 'Years of practice' },
  { icon: ShieldCheck, value: 1200, prefix: '', suffix: '+', label: 'Returns filed' },
  { icon: Target, value: 98, prefix: '', suffix: '%', label: 'Client retention' },
];

export const testimonials = [
  {
    quote:
      'Apex handled our GST migration and ongoing filings flawlessly. We have not missed a single deadline since we onboarded them two years ago.',
    author: 'Karthik Reddy',
    role: 'Director, Reddy Textiles Pvt Ltd',
  },
  {
    quote:
      'Their tax planning advice saved my company a significant amount legally and transparently. They explain everything in plain language.',
    author: 'Meera Krishnan',
    role: 'Founder, Krishnan Consulting LLP',
  },
  {
    quote:
      'From incorporation to our first statutory audit, the Apex team has been responsive, thorough, and genuinely invested in our growth.',
    author: 'Arjun Nair',
    role: 'CEO, Nair Tech Solutions',
  },
  {
    quote:
      'Professional, punctual, and patient. They made the entire income tax filing process stress-free for my family and me.',
    author: 'Lakshmi Venkat',
    role: 'Individual client, Bengaluru',
  },
];

export const clientLogos = [
  'Reddy Textiles',
  'Krishnan Consulting',
  'Nair Tech Solutions',
  'Coastal Exports',
  'Vidya Retail',
  'Sumitra Foods',
  'BluePeak Logistics',
  'Sterling Pharma',
];
