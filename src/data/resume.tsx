import { Icons } from "@/components/common/icons";
import { CodeIcon, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Saudat Imam",
  initials: "SI",
  url: "https://voidbyujjwal.vercel.app", // you can replace with her live portfolio later
  location: "Nigeria",
  locationLink: "https://www.google.com/maps/place/Nigeria",
  description:
    "Program and Product Management Professional driving education innovation, digital literacy, and gender inclusion through technology.",
  summary:
    "I'm a results-driven Program and Product Management Professional with hands-on experience in designing and implementing educational and technology-focused initiatives. I’m passionate about leveraging education, gender equality, and technology to drive social change, empower youth and women, and enhance access to digital literacy opportunities. [CHECK RESUME HERE...](#)",
  avatarUrl: "/assets/profile.png",

  skills: [
    "Program Design & Implementation",
    "Project Planning & Delivery",
    "Monitoring & Evaluation",
    "Workshop Facilitation",
    "Stakeholder Engagement",
    "Community Partnership",
    "Leadership & Team Management",
    "Capacity Building",
    "Process Improvement",
    "ClickUp",
    "Trello",
    "Google Workspace",
    "MS Office Suite",
    "Figma",
    "Canva",
    "Excel",
    "Google Analytics",
    "ChatGPT",
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/#work", icon: Icons.briefcase, label: "Experience" },
    { href: "/#skills", icon: Icons.skills, label: "Skills" },
    { href: "/#projects", icon: CodeIcon, label: "Projects" },
  ],

  contact: {
    email: "bintwahab03@gmail.com",
    tel: "+2347066848135",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/saudat-imam",
        icon: Icons.linkedin,
        navbar: true,
      },
      Email: {
        name: "Email",
        url: "mailto:bintwahab03@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Studio3Launchpad",
      href: "https://studio3launchpad.com",
      badges: [],
      location: "Remote",
      title: "Program Associate",
      logoUrl: "/assets/company/studio3.png",
      start: "March 2025",
      end: "Present",
      description:
        "Supported the design and implementation of EdTech programs focused on digital skills and career development for students and young professionals. Facilitated workshops for 300+ learners, strengthening engagement through interactive program design. Improved organizational reach by 35% via creative digital campaigns.",
    },
    {
      company: "NGO Planner (Studio3Launchpad Innovation Project)",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Program Manager",
      logoUrl: "/assets/company/ngo-planner.png",
      start: "August 2025",
      end: "October 2025",
      description:
        "Designed and managed NGO Planner — a digital content management and storytelling tool for nonprofit organizations. Led product research, MVP roadmap, and measurable success metrics to improve NGO storytelling and visibility across Africa.",
    },
    {
      company: "ReGive (Studio3Launchpad Hackathon)",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Hackathon Team Lead",
      logoUrl: "/assets/company/regive.png",
      start: "July 2025",
      end: "July 2025",
      description:
        "Led an 11-member multidisciplinary team during a two-week hackathon to conceptualize ReGive — a platform for safe community reuse of items. Delivered personas, PRD, and success metrics showcasing sustainability and trust as project pillars.",
    },
    {
      company: "Tech Empowerment Series (TES)",
      href: "#",
      badges: [],
      location: "Nigeria",
      title: "Program Manager",
      logoUrl: "/assets/company/tes.png",
      start: "March 2025",
      end: "March 2025",
      description:
        "Managed a 3-day digital literacy and responsible technology workshop for 200+ students. Designed training modules, assessments, and evaluation reports. Partnered with Hadis Foundation, Luminate, and Offa Grammar School to promote digital inclusion.",
    },
  ],

  education: [
    {
      school: "University of Ilorin, Nigeria",
      href: "https://unilorin.edu.ng",
      degree: "Bachelor of Education (B.Ed.) – Counselling Education",
      logoUrl: "/assets/education_icons/unilorin.png",
      start: "2015",
      end: "2019",
    },
  ],

  projects: [
    {
      title: "NGO Planner",
      href: "#",
      dates: "August – October 2025",
      active: true,
      description:
        "A digital storytelling and content management tool for nonprofits. Designed and managed from concept to MVP to help NGOs enhance storytelling quality and campaign visibility.",
      technologies: [
        "Program Management",
        "UX Research",
        "Storytelling",
        "MVP Design",
      ],
      links: [
        {
          type: "Case Study",
          href: "#",
          icon: <Icons.globe className='size-3' />,
        },
      ],
      image: "/assets/projects/ngo-planner.png",
    },
    {
      title: "Tech Empowerment Series (TES)",
      href: "#",
      dates: "March 2025",
      active: true,
      description:
        "A 3-day digital literacy and responsible technology workshop for over 200 students, promoting online safety and inclusion.",
      technologies: ["Training", "Digital Literacy", "Community Impact"],
      links: [
        {
          type: "Report",
          href: "#",
          icon: <Icons.globe className='size-3' />,
        },
      ],
      image: "/assets/projects/tes.png",
    },
    {
      title: "ReGive (Hackathon Project)",
      href: "#",
      dates: "July 2025",
      active: true,
      description:
        "A circular economy platform that enables safe community reuse of items, promoting sustainability and trust in peer-to-peer giving.",
      technologies: ["Hackathon", "Design Thinking", "Sustainability"],
      links: [
        {
          type: "Prototype",
          href: "#",
          icon: <Icons.globe className='size-3' />,
        },
      ],
      image: "/assets/projects/regive.png",
    },
  ],
} as const;
