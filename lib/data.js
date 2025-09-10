export const SITE = {
  name: "MyTechAcademy",
  tagline: "Frontend, Backend, and Full‑Stack the right way",
  ctaText: "Apply Now",
  phone: "+91 94395 15208",
  email: "psibananda221@gmail.com",
  address: "Bengaluru & Bhubaneswar — Online & Offline Cohorts",
  whatsapp: "https://wa.me/919439515208"
}

export const COURSES = [
  {
    id: "frontend",
    title: "Frontend Development",
    duration: "12 weeks",
    mode: "Online / Weekend Classroom",
    stack: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Redux", "Testing"],
    outcomes: [
      "Build production‑ready React apps",
      "Master component patterns and performance",
      "Interview prep + portfolio projects"
    ],
    priceINR: "₹24,999"
  },
  {
    id: "backend",
    title: "Backend Development",
    duration: "12 weeks",
    mode: "Online / Weekend Classroom",
    stack: ["Node.js", "Express", "MongoDB", "Auth (JWT/SSO)", "Docker", "CI/CD"],
    outcomes: [
      "Design REST APIs with auth & RBAC",
      "Logging, testing, deployment",
      "Scalable patterns and tradeoffs"
    ],
    priceINR: "₹24,999"
  },
  {
    id: "fullstack",
    title: "Full‑Stack (MERN)",
    duration: "16 weeks",
    mode: "Online / Weekend Classroom",
    stack: ["React", "Node", "Express", "MongoDB", "TypeScript", "Azure DevOps"],
    outcomes: [
      "End‑to‑end project from idea to prod",
      "System design for web engineers",
      "Interview bootcamp with mocks"
    ],
    priceINR: "₹34,999"
  }
]

export const INSTRUCTORS = [
  {
    name: "Sibananda Panda",
    role: "Senior Frontend Engineer • Mentor",
    bio: "9+ years building React/TypeScript apps at scale; mentoring 15+ devs into 10LPA+ roles.",
    avatar: "/logo.svg",
    socials: [{label: "LinkedIn", href: "https://linkedin.com"}]
  },
  {
    name: "Guest Mentors",
    role: "Backend & DevOps",
    bio: "Leaders from industry covering auth, CI/CD, micro‑services, and cloud fundamentals.",
    avatar: "/logo.svg",
    socials: []
  }
]

export const SCHEDULE = [
  {week: "Week 1", topic: "Foundations, tooling, mindset"},
  {week: "Week 2", topic: "Core concepts with drills"},
  {week: "Week 3", topic: "Projects, testing, reviews"},
  {week: "Week 4", topic: "Deployments & interviews"}
]

export const FAQ = [
  {q: "Who is this for?", a: "Beginners to working devs who want industry‑grade skills and interviews."},
  {q: "Do you offer placements?", a: "We help with referrals, mock interviews, and resumes. No fake guarantees."},
  {q: "Live or recorded?", a: "Live sessions with recordings and lifetime Q&A community."}
]
