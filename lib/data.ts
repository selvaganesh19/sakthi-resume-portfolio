// Centralized data for the portfolio

export const profile = {
  name: "SAKTHIVEL V",
  role: "AIML Engineer & Cloud Practitioner",
  summary: "I seek challenging opportunities where I can fully use my skills for the success of the organization.",
  location: "Krishnagiri, Tamil Nadu, India",
  address: "64/9, Munusamy Street, Old Pet, Krishnagiri - 635002",
  phone: "9445088054",
  email: "sakthivelvenkat2619@gmail.com",
  languages: [
    { name: "Tamil", proficiency: "R/W/S" },
    { name: "English", proficiency: "R/W/S" },
    { name: "German (basic)", proficiency: "R/W" },
  ],
  interests: ["Stock market", "Video games", "Travel"],
  links: [
    { label: "GitHub", href: "https://github.com/sakthi-28" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sakthivel-v-124558342?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ],
}

export const experience = [
  {
    title: "Quality Checker",
    company: "Fleetguard",
    period: "July 2022 – Dec 2022",
    bullets: [
      "Performed quality checks to ensure compliance with standards.",
      "Collaborated with cross-functional teams for continuous improvement.",
    ],
  },
  {
    title: "AIML Engineer",
    company: "Self / Projects",
    period: "2024 – Present",
    bullets: [
      "Applied deep learning for battery state-of-health estimation and optimization.",
      "Built data pipelines and evaluation loops to improve model performance.",
    ],
  },
  {
    title: "Cloud Practitioner",
    company: "Self / Training",
    period: "2023 – 2024",
    bullets: [
      "Configured foundational AWS services and automated IaC-based setups.",
      "Implemented secure networking and basic monitoring/backup workflows.",
    ],
  },
]

export const education = [
  {
    school: "RC Fathima Boys High School",
    credential: "SSLC",
    year: "2017",
    score: "77%",
  },
  {
    school: "Govt Boys High School",
    credential: "HSC",
    year: "2019",
    score: "50%",
  },
  {
    school: "Govt Polytechnic College",
    credential: "Diploma in Mechanical",
    year: "2022",
    score: "79.89%",
  },
]

export const skills = ["AWS Cloud", "C Programming", "SQL", "Networking"]

export const certifications = ["One Credit - AWS", "One Credit - Blockchain"]

export const projects = [
  {
    title: "Net Banking System",
    tags: ["Web", "Banking", "Security"],
    description:
      "Online banking system enabling checking balances, fund transfers, bill payments, and statements. Focused on secure, convenient anytime access.",
  },
  {
    title: "Audience Monitoring & Identity Protection",
    tags: ["Analytics", "Privacy", "Security"],
    description:
      "Tracks and analyzes user behavior to personalize content while safeguarding privacy using encryption and anonymization. Balances UX, trust, and compliance.",
  },
  {
    title: "EV Battery Management System using Deep Learning",
    tags: ["AI", "Battery", "Deep Learning"],
    description:
      "Deep learning–driven EV battery management system focusing on state-of-health estimation and optimization.",
    url: "https://github.com/selvaganesh19/EV-Battery-Management-System-using-Deep-Learning",
  },
]
