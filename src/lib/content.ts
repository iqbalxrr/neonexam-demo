export type NavItem = {
  label: string;
  href: string;
};

export type Category = {
  icon: string;
  name: string;
  status: string;
};

export type Feature = {
  title: string;
  accent: string;
  description: string;
  bullets: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type PricingPlan = {
  name: string;
  monthly: number;
  yearly: number;
  description: string;
  features: string[];
};

export type BlogPost = {
  date: string;
  title: string;
  excerpt: string;
};

export type ExamItem = {
  title: string;
  subject: string;
  level: string;
  duration: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "FAQ", href: "/faq" },
  { label: "Pricing", href: "/pricing" },
  { label: "Exams", href: "/exams" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const categories: Category[] = [
  { icon: "🏛️", name: "Govt Job", status: "8 Exam Running" },
  { icon: "🏦", name: "Bank Job", status: "6 Exam Running" },
  { icon: "🛡️", name: "Defense Job", status: "5 Exam Running" },
  { icon: "🎓", name: "University Admission", status: "4 Exam Running" },
  { icon: "🏢", name: "Private Job", status: "7 Exam Running" },
  { icon: "🧠", name: "Skill Development", status: "9 Exam Running" },
  { icon: "📝", name: "Mock Test", status: "18 Exam Running" },
  { icon: "📊", name: "Aptitude Test", status: "11 Exam Running" },
];

export const features: Feature[] = [
  {
    title: "AI Exam",
    accent: "Question Generator",
    description:
      "Create high-quality exam questions instantly. Upload notes or enter a topic, then get structured questions in seconds.",
    bullets: [
      "Generate MCQ, short, and descriptive formats",
      "Set Easy / Medium / Hard difficulty",
      "Support topic-wise and chapter-wise generation",
      "Export and reuse generated question banks",
    ],
  },
  {
    title: "AI Online",
    accent: "Exam Builder",
    description:
      "Build full online exams with timing, marks, randomization, and anti-cheat rules in a guided workflow.",
    bullets: [
      "Auto-generate complete tests in one click",
      "Shuffle questions and answer options",
      "Set negative marking and custom pass mark",
      "Mobile-friendly student exam interface",
    ],
  },
  {
    title: "AI Result",
    accent: "Analytics & Publishing",
    description:
      "Evaluate and publish results quickly with rich analytics, detailed reports, and downloadable summaries.",
    bullets: [
      "Instant result generation",
      "Detailed student and class analytics",
      "PDF / CSV / Excel export options",
      "One-click result publish with secure links",
    ],
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "How does the AI Exam Generator work?",
    answer:
      "Enter your subject, topic, and difficulty level. The system produces structured questions and exam sets instantly using AI-assisted templates.",
  },
  {
    question: "Can I customize the AI-generated questions?",
    answer:
      "Yes. You can edit wording, marks, answer keys, and ordering before publishing the final exam.",
  },
  {
    question: "Do I need teaching experience to use it?",
    answer:
      "No. The platform is designed for both educators and non-technical users with guided setup screens.",
  },
  {
    question: "Which subjects does the AI support?",
    answer:
      "It supports common academic, aptitude, recruitment, and certification subjects with customizable topic categories.",
  },
  {
    question: "Can I save or reuse my generated exams?",
    answer:
      "Yes. Saved exam templates can be cloned, edited, and scheduled again at any time.",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Basic",
    monthly: 19,
    yearly: 190,
    description: "Perfect for beginners who need essential exam setup tools.",
    features: [
      "10 Exam Access",
      "No Daily Limits",
      "Lifetime Data Availability",
      "Completion Certificate",
      "Progress Tracking",
    ],
  },
  {
    name: "Pro",
    monthly: 49,
    yearly: 490,
    description: "Designed for growing teams with advanced analytics.",
    features: [
      "30 Exam Access",
      "Priority AI Generation",
      "Lifetime Data Availability",
      "Advanced Completion Certificate",
      "Student Cohort Insights",
    ],
  },
  {
    name: "Enterprise",
    monthly: 99,
    yearly: 990,
    description: "For organizations managing large-scale assessments.",
    features: [
      "60 Exam Access",
      "Unlimited Team Seats",
      "Dedicated Success Support",
      "Custom Branding",
      "Advanced Security Controls",
    ],
  },
];

export const processSteps = [
  {
    title: "Select an Exam",
    text: "Choose an exam category or create a custom assessment in minutes.",
    action: "Get Started",
  },
  {
    title: "Start the Test",
    text: "Use webcam checks, timers, and smooth onboarding for candidates.",
    action: "Start Exam",
  },
  {
    title: "Get Exam Logs",
    text: "Track activity, question-level performance, and completion status.",
    action: "View Results",
  },
  {
    title: "Download Certificate",
    text: "Issue completion certificates with verified scores instantly.",
    action: "Download",
  },
];

export const stats = [
  { label: "Exams Created", value: "45,000+" },
  { label: "Active Students", value: "12,000+" },
  { label: "Expert Instructors", value: "150+" },
  { label: "Success Rate", value: "98%" },
];

export const testimonials = [
  {
    author: "Alicia W.",
    role: "Academic Coordinator",
    quote:
      "Exam creation that once took days is now done in under an hour with better quality.",
  },
  {
    author: "Md. Rahman",
    role: "Training Manager",
    quote:
      "The AI suggestions are accurate and the analytics helped us improve pass rates quickly.",
  },
  {
    author: "Carla D.",
    role: "HR Operations",
    quote:
      "The interface is clean, and candidate tracking made hiring assessments much easier.",
  },
  {
    author: "Nabil S.",
    role: "Exam Cell Lead",
    quote:
      "From question generation to certificate download, the full process feels streamlined.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    date: "04 Dec 2025",
    title: "A Complete Guide to Building a Secure Online Examination Environment",
    excerpt: "Best practices for exam setup, anti-cheat checks, and result integrity.",
  },
  {
    date: "03 Dec 2025",
    title: "How to Improve Exam Integrity with Smart Monitoring Tools",
    excerpt: "Use AI-powered logs and review signals to detect risky behaviors.",
  },
  {
    date: "02 Dec 2025",
    title: "The Future of Exam Creation: AI-Generated Questions Explained",
    excerpt: "Modern question generation reduces manual effort while improving quality.",
  },
  {
    date: "01 Dec 2025",
    title: "Why Institutions Are Shifting to AI-Powered Assessment",
    excerpt: "Key reasons schools and training centers are adopting digital workflows.",
  },
  {
    date: "30 Nov 2025",
    title: "Top Benefits of Using Automated Proctoring for Online Exams",
    excerpt: "Understand where proctoring helps and how to use it responsibly.",
  },
  {
    date: "29 Nov 2025",
    title: "How AI Is Transforming Modern Exam Management System",
    excerpt: "A practical view of smarter paper creation, scheduling, and reporting.",
  },
];

export const examItems: ExamItem[] = [
  {
    title: "Civil Service Preparation Test",
    subject: "General Studies",
    level: "Advanced",
    duration: "90 mins",
  },
  {
    title: "Bank Recruitment Mock Exam",
    subject: "Quantitative Aptitude",
    level: "Intermediate",
    duration: "60 mins",
  },
  {
    title: "University Admission Model Test",
    subject: "Science",
    level: "Intermediate",
    duration: "120 mins",
  },
  {
    title: "Corporate Skill Evaluation",
    subject: "Communication",
    level: "Beginner",
    duration: "45 mins",
  },
  {
    title: "Defense Intelligence Screening",
    subject: "Reasoning",
    level: "Advanced",
    duration: "75 mins",
  },
  {
    title: "Aptitude Readiness Challenge",
    subject: "Mixed",
    level: "Intermediate",
    duration: "50 mins",
  },
];
