import windchillImg from "@/assets/images/windchill-bom.jpg";
import mroImg from "@/assets/images/hero-header.png";
import cloudPlmImg from "@/assets/images/cloud-plm.jpg";
import aiImg from "@/assets/images/ai-powered.jpg";

export interface ProjectData {
   id: number;
   title: string;
   description: string;
   image: string;
   category: string;
   borderColor: string;
   bgColor: string;
   hoverBorderColor: string;
   buttonColor: string;
   buttonHoverColor: string;
}

export const REAL_PROJECTS_DATA: ProjectData[] = [
   {
      id: 1,
      title: "Windchill BOM Configuration",
      description: "Build a multi-level BOM system with view-based BOMs and configurable parts.",
      image: windchillImg,
      category: "PLM Windchill",
      borderColor: "border-purple-200",
      bgColor: "bg-purple-500",
      hoverBorderColor: "hover:border-purple-400",
      buttonColor: "bg-purple-600",
      buttonHoverColor: "hover:bg-purple-700"
   },
   {
      id: 2,
      title: "Teamcenter MRO Configuration",
      description: "Configure BOM structure for MRO with alternates, substitutes, and lifecycle links.",
      image: mroImg,
      category: "Siemens Teamcenter",
      borderColor: "border-green-200",
      bgColor: "bg-green-500",
      hoverBorderColor: "hover:border-green-400",
      buttonColor: "bg-green-600",
      buttonHoverColor: "hover:bg-green-700"
   },
   {
      id: 3,
      title: "Cloud PLM Architecture",
      description: "Design and deploy scalable PLM infra (Windchill/Teamcenter) using EC2, S3, RDS, Load Balancer.",
      image: cloudPlmImg,
      category: "Cloud Solutions",
      borderColor: "border-orange-200",
      bgColor: "bg-orange-500",
      hoverBorderColor: "hover:border-orange-400",
      buttonColor: "bg-orange-600",
      buttonHoverColor: "hover:bg-orange-700"
   },
   {
      id: 4,
      title: "AI-Powered Predictive Maintenance",
      description: "Build ML models to predict machine failure based on sensor data.",
      image: aiImg,
      category: "AI/ML",
      borderColor: "border-blue-200",
      bgColor: "bg-blue-500",
      hoverBorderColor: "hover:border-blue-400",
      buttonColor: "bg-blue-600",
      buttonHoverColor: "hover:bg-blue-700"
   }
];

export const REAL_PROJECTS_CONTENT = {
   title: {
      main: "Real",
      highlight1: "Projects",
      connector: ", Real",
      highlight2: "Impact"
   },
   subtitle: "Create portfolio-ready projects that impress recruiters and showcase your skills",
   buttonText: "See All Projects",
   buttonLink: "/projects",
   cardButtonText: "View More Projects"
};

export interface FeatureData {
   id: number;
   title: string;
   description: string;
   icon: string;
   bgColor: string;
}

export const WHY_STANDS_OUT_DATA: FeatureData[] = [
   {
      id: 1,
      title: "Real<br />World Projects",
      description: "Build portfolio-ready projects solving actual industry challenges",
      icon: "mdi:projector-screen",
      bgColor: "bg-purple-500"
   },
   {
      id: 2,
      title: "Resume &<br />LinkedIn Makeover",
      description: "Craft a profile that gets noticed by top recruiters",
      icon: "mdi:file-document-edit",
      bgColor: "bg-green-500"
   },
   {
      id: 3,
      title: "1:1<br />Career Mentorship",
      description: "Personalized guidance to accelerate your career",
      icon: "mdi:message-processing",
      bgColor: "bg-orange-500"
   },
   {
      id: 4,
      title: "Placement<br />& Interview Prep",
      description: "Mock interviews, job referrals, and placement support",
      icon: "mdi:account-multiple",
      bgColor: "bg-pink-500"
   }
];

export const WHY_STANDS_OUT_CONTENT = {
   title: {
      main: "Why",
      highlight: "TEKNIKOZ",
      suffix: "E-Learning Stands Out"
   },
   subtitle: "We don't just teach concepts - we prepare you for real-world success",
   buttonText: "Download Brochure"
};

export interface CourseData {
   id: number;
   title: string;
   subtitle: string;
   description: string;
   icon: string;
   bgColor: string;
   borderColor: string;
   hoverBorderColor: string;
   buttonColor: string;
   buttonHoverColor: string;
   category: string;
   learningAreas: string[];
}

export const COURSES_SECTION_DATA: CourseData[] = [
   {
      id: 1,
      title: "PLM Windchill Mastery Track",
      subtitle: "From Basics to Enterprise Architect",
      description: "End-to-end mastery of Windchill PLM for Configuration Management, BOM, Change Processes, and ECAD/MCAD integration – aligned with global deployment scenarios.",
      icon: "mdi:cog",
      bgColor: "bg-purple-500",
      borderColor: "border-purple-200",
      hoverBorderColor: "hover:border-purple-400",
      buttonColor: "bg-purple-600",
      buttonHoverColor: "hover:bg-purple-700",
      category: "PLM Windchill",
      learningAreas: [
         "Windchill Architecture & Lifecycle Management",
         "EBOM/MBOM & Change Management (CR/CN)",
         "ECAD/MCAD Integration (Creo, SolidWorks, Altium)",
         "Info Engine, REST APIs & Enterprise Integration"
      ]
   },
   {
      id: 2,
      title: "Siemens Teamcenter Masterclass",
      subtitle: "Deploying Digital Threads",
      description: "Train engineers, consultants, and architects on BOM, MRO, workflow automation, and deployment strategies across industries.",
      icon: "mdi:cube",
      bgColor: "bg-green-500",
      borderColor: "border-green-200",
      hoverBorderColor: "hover:border-green-400",
      buttonColor: "bg-green-600",
      buttonHoverColor: "hover:bg-green-700",
      category: "Siemens Teamcenter",
      learningAreas: [
         "Teamcenter Architecture & Data Management",
         "Advanced BOM & Variant Configuration",
         "BMIDE Customization & Active Workspace",
         "Multi-site Deployment & ERP Integration"
      ]
   },
   {
      id: 3,
      title: "Cloud Solutions for PLM & Engineering",
      subtitle: "AWS / Azure DevOps",
      description: "Cloud-first design for PLM hosting, DevOps pipelines, and infrastructure automation for Windchill/Teamcenter.",
      icon: "mdi:cloud",
      bgColor: "bg-orange-500",
      borderColor: "border-orange-200",
      hoverBorderColor: "hover:border-orange-400",
      buttonColor: "bg-orange-600",
      buttonHoverColor: "hover:bg-orange-700",
      category: "Cloud Solutions",
      learningAreas: [
         "AWS & Azure Infrastructure Essentials",
         "CI/CD Pipelines & Terraform Automation",
         "High Availability & Disaster Recovery",
         "Hybrid Cloud PLM Migration Strategies"
      ]
   },
   {
      id: 4,
      title: "AI/ML for Engineers",
      subtitle: "Applied Intelligence for Industry 4.0",
      description: "Upskill engineering & PLM professionals with practical AI/ML to automate, optimize, and innovate engineering workflows.",
      icon: "mdi:robot",
      bgColor: "bg-blue-500",
      borderColor: "border-blue-200",
      hoverBorderColor: "hover:border-blue-400",
      buttonColor: "bg-blue-600",
      buttonHoverColor: "hover:bg-blue-700",
      category: "AI/ML",
      learningAreas: [
         "Python Essentials & ML Fundamentals",
         "ChatGPT & LangChain Integration",
         "Predictive Maintenance & Defect Detection",
         "AI-Powered PLM Decision Dashboards"
      ]
   }
];

export const COURSES_SECTION_CONTENT = {
   title: {
      main: "Master",
      highlight: "Industry-Leading",
      suffix: "Skills with",
      highlight2: "Hands-On Courses"
   },
   subtitle: "Transform your career with our comprehensive, project-based learning approach",
   learningAreasLabel: "Key Learning Areas:",
   buttonText: "Explore Full Curriculum",
   bottomSection: {
      title: "100% Project-Based Learning with Certification",
      icon: "mdi:certificate"
   }
};

// Testimonial images
import testimonial1 from "@/assets/images/boy-testimonial.png";
import testimonial2 from "@/assets/images/girl-testimonial.png";

export interface TestimonialData {
   id: number;
   name: string;
   image: string;
   role: string;
   testimonial: string;
   category: string;
}

export const TESTIMONIALS_SECTION_DATA: TestimonialData[] = [
   // PLM Windchill Testimonials
   {
      id: 1,
      name: "Arjun M.",
      image: testimonial1,
      role: "PLM Analyst at Tata Motors",
      testimonial: "The Windchill course gave me end-to-end clarity on configuration, ECAD/MCAD integration, and BOM workflows. I implemented a live CR/CN workflow at my workplace.",
      category: "PLM Windchill"
   },
   {
      id: 2,
      name: "Shruti R.",
      image: testimonial2,
      role: "Consultant at Capgemini",
      testimonial: "Thanks to TEKNIKOZ, I cracked a Lead Windchill Consultant role. The hands-on ECAD integration project was a game-changer.",
      category: "PLM Windchill"
   },
   // Siemens Teamcenter Testimonials
   {
      id: 3,
      name: "Deepali S.",
      image: testimonial1,
      role: "Engineering Systems Manager, Airbus",
      testimonial: "From Advanced BOM to MRO configuration, this was the most practical Teamcenter course I've taken.",
      category: "Siemens Teamcenter"
   },
   {
      id: 4,
      name: "Gokul M.",
      image: testimonial2,
      role: "Teamcenter Admin, Mahindra & Mahindra",
      testimonial: "BMIDE customization never made sense until I did this course. I now manage data model changes independently.",
      category: "Siemens Teamcenter"
   },
   // Cloud Solutions Testimonials
   {
      id: 5,
      name: "Mohammed I.",
      image: testimonial1,
      role: "DevOps Engineer at Siemens Energy",
      testimonial: "I never imagined setting up Windchill on AWS would be this straightforward. Terraform modules made it click.",
      category: "Cloud Solutions"
   },
   {
      id: 6,
      name: "Ritika G.",
      image: testimonial2,
      role: "Cloud Infra Lead, Infosys",
      testimonial: "The Cloud PLM Architecture project helped me design a secure AWS-VPC setup for PLM rollout.",
      category: "Cloud Solutions"
   },
   // AI/ML for Engineers Testimonials
   {
      id: 7,
      name: "Ashish V.",
      image: testimonial1,
      role: "Data Scientist at Honeywell",
      testimonial: "I used the AI Predictive Maintenance project to build my portfolio and land a role in IIoT product engineering.",
      category: "AI/ML"
   },
   {
      id: 8,
      name: "Renu P.",
      image: testimonial2,
      role: "Engineering Analyst, Bosch",
      testimonial: "Finally a course that explains Industry 4.0 + ML with hands-on use cases – and no Python overkill!",
      category: "AI/ML"
   }
];

export const TESTIMONIALS_SECTION_CONTENT = {
   title: {
      highlight: "Hear from",
      suffix: "Our Champions"
   },
   subtitle: "Success stories from professionals who transformed their careers",
   autoSlideInterval: 5000
};

export interface LearningPathData {
   id: number;
   title: string;
   description: string;
   icon: string;
   bgColor: string;
   borderColor: string;
   hoverBorderColor: string;
   buttonColor: string;
   buttonHoverColor: string;
   features: string[];
   path: string;
}

export const LEARNING_PATHS_DATA: LearningPathData[] = [
   {
      id: 1,
      title: "Freshers",
      description: "Kickstart your career with in-demand PLM and AI skills",
      icon: "mdi:school",
      bgColor: "bg-purple-500",
      borderColor: "border-purple-200",
      hoverBorderColor: "hover:border-purple-400",
      buttonColor: "bg-purple-600",
      buttonHoverColor: "hover:bg-purple-700",
      features: [
         "Zero to hero training",
         "Industry-ready projects",
         "Career guidance",
         "Placement support"
      ],
      path: "/learning-paths/freshers"
   },
   {
      id: 2,
      title: "Professionals",
      description: "Upskill to lead digital transformation in engineering",
      icon: "mdi:briefcase-check",
      bgColor: "bg-green-500",
      borderColor: "border-green-200",
      hoverBorderColor: "hover:border-green-400",
      buttonColor: "bg-green-600",
      buttonHoverColor: "hover:bg-green-700",
      features: [
         "Advanced skill development",
         "Leadership preparation",
         "Industry connections",
         "Career advancement"
      ],
      path: "/learning-paths/professionals"
   },
   {
      id: 3,
      title: "Enterprises",
      description: "Train your team for Industry 4.0 success",
      icon: "mdi:office-building",
      bgColor: "bg-orange-500",
      borderColor: "border-orange-200",
      hoverBorderColor: "hover:border-orange-400",
      buttonColor: "bg-orange-600",
      buttonHoverColor: "hover:bg-orange-700",
      features: [
         "Team training programs",
         "Customized curriculum",
         "On-site training",
         "Corporate discounts"
      ],
      path: "/learning-paths/enterprises"
   }
];

export const LEARNING_PATHS_CONTENT = {
   title: {
      main: "Choose Your",
      highlight: "Learning Path"
   },
   subtitle: "Tailored programs designed for every career stage and goal",
   buttonText: "Learn More",
   ctaButton: {
      text: "Find Your Path",
      icon: "mdi:rocket-launch"
   }
};

// Hero Section images
import heroImage from "@/assets/images/hero-header.png";

export interface HeroStatData {
   id: number;
   icon: string;
   text: string;
   highlight: string;
   bgGradient: string;
}

export interface HeroBadgeData {
   id: number;
   title: string;
   subtitle: string;
   bgGradient: string;
   position: string;
}

export const HERO_SECTION_STATS: HeroStatData[] = [
   {
      id: 1,
      icon: "mdi:account-group",
      text: "Students Trained",
      highlight: "15,000+",
      bgGradient: "from-blue-500 to-blue-600"
   },
   {
      id: 2,
      icon: "mdi:chart-line",
      text: "Success Rate",
      highlight: "95%",
      bgGradient: "from-green-500 to-green-600"
   },
   {
      id: 3,
      icon: "mdi:certificate",
      text: "Industry-Recognized Certifications",
      highlight: "",
      bgGradient: "from-purple-500 to-purple-600"
   }
];

export const HERO_SECTION_BADGES: HeroBadgeData[] = [
   {
      id: 1,
      title: "Live Project",
      subtitle: "Windchill BOM Config",
      bgGradient: "from-pink-500 to-pink-600",
      position: "top-right"
   },
   {
      id: 2,
      title: "AI Certification",
      subtitle: "Industry Ready",
      bgGradient: "from-green-500 to-green-600",
      position: "bottom-left"
   }
];

export const HERO_SECTION_CONTENT = {
   title: {
      prefix: "BECOME A",
      highlight: "PLM & AI CHAMPION",
      suffix: "WITH REAL PROJECT EXPOSURE"
   },
   subtitle: [
      "Learn from Industry Veterans. Get Certified.",
      "Master Real-World Tools. Transform Your Career."
   ],
   heroImage: {
      src: heroImage,
      alt: "PLM & AI Champion"
   },
   ctaButtons: [
      {
         text: "Start Learning Now",
         icon: "mdi:play-circle",
         link: "/enroll",
         type: "primary"
      },
      {
         text: "Download Brochure",
         icon: "mdi:file-download",
         action: "brochure",
         type: "secondary"
      }
   ]
};

export interface CTAButtonData {
   id: number;
   text: string;
   icon: string;
   bgClass: string;
   hoverClass: string;
   action: string;
}

export const CTA_SECTION_BUTTONS: CTAButtonData[] = [
   {
      id: 1,
      text: "Start Learning Now",
      icon: "mdi:rocket-launch",
      bgClass: "bg-white text-gray-900",
      hoverClass: "hover:bg-yellow-400 hover:text-gray-900",
      action: "contact"
   },
   {
      id: 2,
      text: "Book Free Consultation",
      icon: "mdi:calendar-check",
      bgClass: "bg-gray-900/80 backdrop-blur-sm text-white",
      hoverClass: "hover:bg-gray-800",
      action: "contact"
   }
];

export const CTA_SECTION_CONTENT = {
   enrollment: {
      title: "September Batch",
      subtitle: "Now Enrolling",
      seatsLeft: "Only 50 Seats Left!",
      limitedTime: "Limited Time"
   },
   title: {
      main: "Ready to Transform Your",
      highlight: "Career?"
   },
   subtitle: "Join TEKNIKOZ E-Learning today and unlock your potential with world-class mentorship and hands-on learning",
   statistics: [
      { value: "15K+", label: "Students", color: "text-yellow-400" },
      { value: "95%", label: "Placed", color: "text-green-400" },
      { value: "4.8", label: "Rating", color: "text-yellow-400", icon: "mdi:star" }
   ]
};

// Footer Section Data
export interface SocialLinkData {
   id: number;
   name: string;
   url: string;
   icon: string;
   hoverColor: string;
   ariaLabel: string;
}

export interface FooterLinkData {
   id: number;
   title: string;
   url: string;
}

export interface FooterSectionData {
   id: number;
   title: string;
   links: FooterLinkData[];
}

export interface ContactInfoData {
   id: number;
   type: 'address' | 'email';
   icon: string;
   content: string;
   href?: string;
}

export const FOOTER_SOCIAL_LINKS: SocialLinkData[] = [
   {
      id: 1,
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/teknikoz",
      icon: "mdi:linkedin",
      hoverColor: "hover:text-blue-600",
      ariaLabel: "LinkedIn"
   },
   {
      id: 2,
      name: "Facebook",
      url: "https://www.facebook.com/people/Teknikoz/100083293054761",
      icon: "mdi:facebook",
      hoverColor: "hover:text-blue-400",
      ariaLabel: "Facebook"
   },
   {
      id: 3,
      name: "Twitter",
      url: "https://www.x.com/Teknikoz1",
      icon: "mdi:twitter",
      hoverColor: "hover:text-blue-400",
      ariaLabel: "Twitter"
   },
   {
      id: 4,
      name: "Instagram",
      url: "https://www.instagram.com/teknikoz",
      icon: "mdi:instagram",
      hoverColor: "hover:text-pink-400",
      ariaLabel: "Instagram"
   }
];

export const FOOTER_QUICK_LINKS: FooterLinkData[] = [
   {
      id: 1,
      title: "About Us",
      url: "#"
   },
   {
      id: 2,
      title: "Courses",
      url: "/courses"
   },
   {
      id: 3,
      title: "Testimonials",
      url: "/testimonials"
   },
   {
      id: 4,
      title: "Contact",
      url: "/contact"
   }
];

export const FOOTER_LEGAL_LINKS: FooterLinkData[] = [
   {
      id: 1,
      title: "Privacy Policy",
      url: "/legal/privacy"
   },
   {
      id: 2,
      title: "Terms of Service",
      url: "/legal/terms"
   },
   {
      id: 3,
      title: "Cookie Policy",
      url: "/legal/cookies"
   },
   {
      id: 4,
      title: "Refund Policy",
      url: "/legal/refund"
   }
];

export const FOOTER_CONTACT_INFO: ContactInfoData[] = [
   {
      id: 1,
      type: 'address',
      icon: "mdi:map-marker",
      content: "Rainmakers Workspace, 213, 2nd Floor, Ramanashree Arcade, 18 MG Road, Bengaluru-560001 India"
   },
   {
      id: 2,
      type: 'email',
      icon: "mdi:email",
      content: "info@teknikoz.com",
      href: "mailto:info@teknikoz.com"
   }
];

export const FOOTER_CONTENT = {
   logo: {
      src: "/assets/images/footer-logo.svg",
      alt: "TEKNIKOZ E-Learning"
   },
   description: "Empowering professionals with industry-leading PLM and AI skills through hands-on, mentor-led courses.",
   sections: {
      quickLinks: "Quick Links",
      legal: "Legal",
      contact: "Get In Touch"
   },
   copyright: {
      text: "TEKNIKOZ E-Learning. All Rights Reserved."
   },
   bottomLinks: [
      {
         id: 1,
         title: "Terms of Service",
         url: "/legal/terms"
      },
      {
         id: 2,
         title: "Privacy Policy",
         url: "/legal/privacy"
      }
   ]
};

// Header Section Data
export interface HeaderNavLinkData {
   id: number;
   title: string;
   url: string;
   icon?: string;
}

export interface HeaderUserDropdownLinkData {
   id: number;
   title: string;
   url: string;
   icon: string;
   type: 'link' | 'button';
}

export interface HeaderMobileNavSectionData {
   id: number;
   title: string;
   links: HeaderNavLinkData[];
}

export const HEADER_NAV_LINKS: HeaderNavLinkData[] = [
   {
      id: 1,
      title: "Courses",
      url: "/courses"
   },
   {
      id: 2,
      title: "Learning Paths",
      url: "/learning-paths"
   },
   {
      id: 3,
      title: "Testimonials",
      url: "/testimonials"
   }
];

export const HEADER_USER_DROPDOWN_LINKS: HeaderUserDropdownLinkData[] = [
   {
      id: 1,
      title: "Dashboard",
      url: "/dashboard",
      icon: "mdi:view-dashboard",
      type: 'link'
   },
   {
      id: 2,
      title: "Course Catalog",
      url: "/course-catalog",
      icon: "mdi:book-open-variant",
      type: 'link'
   },
   {
      id: 3,
      title: "Profile",
      url: "/profile",
      icon: "mdi:account",
      type: 'link'
   },
   {
      id: 4,
      title: "Contact",
      url: "/contact",
      icon: "mdi:email",
      type: 'link'
   },
   {
      id: 5,
      title: "Brochure",
      url: "/brochure",
      icon: "mdi:file-document",
      type: 'link'
   },
   {
      id: 6,
      title: "Logout",
      url: "#",
      icon: "mdi:logout",
      type: 'button'
   }
];

export const HEADER_MOBILE_NAV_LINKS: HeaderNavLinkData[] = [
   {
      id: 1,
      title: "Courses",
      url: "/courses",
      icon: "mdi:school"
   },
   {
      id: 2,
      title: "Learning Paths",
      url: "/learning-paths",
      icon: "mdi:map-marker-path"
   },
   {
      id: 3,
      title: "Testimonials",
      url: "/testimonials",
      icon: "mdi:star"
   }
];

export const HEADER_MOBILE_AUTH_LINKS: HeaderNavLinkData[] = [
   {
      id: 1,
      title: "Login",
      url: "/login",
      icon: "mdi:login"
   }
   // {
   //    id: 2,
   //    title: "Sign Up",
   //    url: "/signup",
   //    icon: "mdi:account-plus"
   // }
];

export const HEADER_MOBILE_USER_LINKS: HeaderNavLinkData[] = [
   {
      id: 1,
      title: "Dashboard",
      url: "/dashboard",
      icon: "mdi:view-dashboard"
   },
   {
      id: 2,
      title: "Course Catalog",
      url: "/course-catalog",
      icon: "mdi:book-open-variant"
   },
   {
      id: 3,
      title: "Profile",
      url: "/profile",
      icon: "mdi:account"
   },
   {
      id: 4,
      title: "Brochure",
      url: "/brochure",
      icon: "mdi:file-document"
   }
];

export const HEADER_CONTENT = {
   logo: {
      src: "/assets/images/header-logo.svg",
      alt: "Teknikoz E-Learning Logo",
      homeUrl: "/"
   },
   buttons: {
      signIn: "Login",
      signUp: "Sign Up",
      enrollNow: "Enroll Now"
   },
   mobileMenu: {
      sections: {
         navigate: "NAVIGATE",
         account: "ACCOUNT"
      },
      logout: {
         title: "Logout",
         icon: "mdi:logout"
      }
   }
};
