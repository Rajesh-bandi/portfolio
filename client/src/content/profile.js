// ─────────────────────────────────────────────────────────────────────────────
// Single source of truth for every word and number on the site.
// Components render this; they never hardcode personal data.
// ─────────────────────────────────────────────────────────────────────────────

export const identity = {
  name: "Rajesh Bandi",
  portrait: "/portrait.jpg",
  portraitCutout: "/portrait-cutout.png",
  avatar: "/avatar.jpg",
  role: "Backend & Cloud Engineer",
  tagline: "I build the server side — Spring Boot systems, containerized deployments, and the AWS pipelines that ship them.",
  location: "Bhimavaram, India",
  college: "SRKR Engineering College",
  graduation: "2027",
  cgpa: "9.0",
  email: "bandirajesh209@gmail.com",
  phone: "+91 9063939969",
  github: "https://github.com/Rajesh-bandi",
  linkedin: "https://www.linkedin.com/in/bandi-rajesh-5b401829a/",
  resume: "/myresume.pdf",
  available: true,
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

// Numbered hero facts — restrained, verifiable, no sparkle icons.
export const heroFacts = [
  { value: "9.0", label: "CGPA / 10" },
  { value: "250+", label: "DSA problems" },
  { value: "3", label: "Cloud & AI certs" },
  { value: "2027", label: "Graduating" },
];

// Hero terminal — an honest slice of the Wander deploy pipeline, typed live.
// Pure content: HeroSection.jsx does the typing.
export const heroTerminal = {
  title: "rajesh@ecs — deploy",
  lines: [
    { kind: "cmd", text: "./deploy.sh --prod" },
    { kind: "out", text: "[docker] image built — 148 MB" },
    { kind: "out", text: "[ecr] push complete — 3 layers cached" },
    { kind: "out", text: "[ecs] rolling update · task rev 42" },
    { kind: "out", text: "[alb] health checks passing 2/2" },
    { kind: "ok", text: "✓ deploy complete — 41s total" },
    { kind: "cmd", text: "curl -s localhost:8080/health" },
    { kind: "out", text: '{"status":"ok"}' },
  ],
};

// Certifications — featured first in the About section.
export const certifications = [
  {
    name: "Kubernetes",
    issuer: "Escbash Labs",
    issued: "Sep 2026",
    credentialId: "ESC-K8S-0B757E61F9",
    url: "https://escbash.com",
  },
  {
    name: "AI Fundamentals",
    issuer: "Escbash Labs",
    issued: "Sep 2026",
    credentialId: "ESC-AI-1839F3666A",
    url: "https://escbash.com",
  },
  {
    name: "RAG — Retrieval-Augmented Generation",
    issuer: "Escbash Labs",
    issued: "2026",
    credentialId: null,
    url: "https://escbash.com",
  },
];

export const about = {
  heading: "About",
  title: "Final-year CS student who'd rather ship a backend than decorate one.",
  paragraphs: [
    "I'm a final-year CSE student at SRKR Engineering College with a 9.0 CGPA, certified in Kubernetes, AI Fundamentals, and RAG through Escbash Labs. Most of my time goes into the parts of a product users never see: authentication flows, websocket relays, container builds, deploy pipelines.",
    "My work so far spans a custom tunneling protocol in Java, a JWT-secured full-stack notes app, and an AWS deployment pipeline that builds and ships Docker images on every push. I like systems where correctness is measurable — and I document what I build well enough that the next person can run it.",
  ],
  timeline: [
    {
      period: "2023 — 2027",
      title: "B.Tech, Computer Science",
      detail: "SRKR Engineering College · CGPA 9.0/10 · final year",
    },
    {
      period: "2026",
      title: "Escbash Labs certifications",
      detail: "Kubernetes · AI Fundamentals · RAG",
    },
    {
      period: "2026",
      title: "Backend & cloud focus",
      detail: "TunnelFlow relay, Secure Notes, Wander AWS pipeline",
    },
  ],
  strengths: [
    "Spring Boot · Spring Security · Hibernate · Data JPA",
    "Kubernetes · Docker · AWS",
    "Linux · GitHub Actions CI/CD",
    "REST API design & JWT auth",
    "WebSockets & custom binary protocols",
    "RAG pipelines · AI fundamentals",
  ],
};

export const skills = [
  // name / level / category — icons come from src/assets/icons
  { name: "Java", level: 90, category: "languages", icon: "java" },
  { name: "SQL", level: 85, category: "languages", icon: "sql" },
  { name: "JavaScript", level: 80, category: "languages", icon: "javascript" },
  { name: "Spring Boot", level: 90, category: "backend", icon: "java" },
  { name: "Spring Security", level: 82, category: "backend", icon: "java" },
  { name: "REST APIs", level: 88, category: "backend", icon: "express" },
  { name: "WebSockets", level: 80, category: "backend", icon: "graphql" },
  { name: "React.js", level: 82, category: "frontend", icon: "react" },
  { name: "HTML & CSS", level: 85, category: "frontend", icon: "html" },
  { name: "Docker", level: 85, category: "cloud", icon: "docker" },
  { name: "Kubernetes", level: 80, category: "cloud", icon: "docker" },
  { name: "AWS", level: 80, category: "cloud", icon: "firebase" },
  { name: "Linux", level: 82, category: "cloud", icon: "github" },
  { name: "GitHub Actions", level: 82, category: "cloud", icon: "github" },
  { name: "MySQL", level: 85, category: "cloud", icon: "mysql" },
  { name: "Git", level: 90, category: "cloud", icon: "git" },
];

export const skillCategories = [
  { id: "all", label: "All" },
  { id: "languages", label: "Languages" },
  { id: "backend", label: "Backend" },
  { id: "frontend", label: "Frontend" },
  { id: "cloud", label: "Cloud & DevOps" },
];

export const projects = [
  {
    id: "tunnelflow",
    title: "TunnelFlow",
    subtitle: "Custom tunneling platform & relay server",
    year: "2025",
    description:
      "A ngrok-style platform that exposes locally running apps to the internet through a centralized relay. Built on a custom binary messaging protocol with a handler registry, structured as a multi-module Maven project split into protocol, client, and server.",
    tags: ["Java", "Spring Boot", "WebSockets", "Maven", "Networking"],
    github: "https://github.com/Rajesh-bandi/TunnelFlow",
    accent: "#5B8DEF",
    status: "In development",
    highlights: [
      "Custom binary protocol with typed message frames and stream IDs",
      "Handler registry makes adding protocol message types a one-file change",
      "Multi-module Maven build: protocol / client / server",
    ],
  },
  {
    id: "secure-notes",
    title: "Secure Notes",
    subtitle: "Full-stack encrypted notes with role authorization",
    year: "2025",
    description:
      "A React + Spring Boot notes app where authenticated users manage personal notes through REST APIs. Spring Security with JWT gives stateless authorization; the data layer is a clean Controller → Service → Repository flow on Spring Data JPA with soft delete.",
    tags: ["Spring Boot", "Spring Security", "JWT", "React", "MySQL", "JPA"],
    github: "https://github.com/Rajesh-bandi",
    accent: "#4ADE80",
    status: "Completed",
    highlights: [
      "JWT filter chain for stateless, role-based endpoint protection",
      "Soft delete implemented at the repository layer, auditable and reversible",
      "Layered architecture with clean separation of API and persistence",
    ],
  },
  {
    id: "wander-cloud",
    title: "Wander — Cloud Pipeline",
    subtitle: "AWS ECS Fargate & automated CI/CD",
    year: "2025",
    description:
      "Containerized frontend and backend services deployed on AWS ECS Fargate behind an Application Load Balancer with path-based routing. GitHub Actions builds Docker images, pushes them to ECR, and updates ECS task definitions on every push to main.",
    tags: ["AWS ECS", "Docker", "GitHub Actions", "ECR", "ALB", "CloudWatch"],
    github: "https://github.com/Rajesh-bandi",
    accent: "#F59E0B",
    status: "Deployed",
    highlights: [
      "Push-to-deploy pipeline: build → ECR → ECS rolling update",
      "ALB path-based routing between frontend and backend services",
      "CloudWatch logs, IAM roles, and container health checks configured",
    ],
  },
];

export const contact = {
  heading: "Contact",
  title: "Open to internships and backend projects.",
  blurb:
    "If you're hiring for backend, platform, or cloud-adjacent roles — or want to build something — email is the fastest way to reach me.",
};
