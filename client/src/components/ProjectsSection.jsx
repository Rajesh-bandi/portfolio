import { ArrowRight, ExternalLink, Github, ChevronUp, Star, Code, ChevronDown, MoveRight, Filter, Sparkles, Award, Zap, Play, Eye, Calendar, Users, X, Shield, Server, Terminal, Lock, Cpu, Cloud, CheckCircle, RefreshCw } from "lucide-react";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "TunnelFlow",
    subtitle: "Custom Tunneling Platform & Relay Server",
    category: "Networking & Protocol",
    description: "Building a secure tunneling platform similar to ngrok that allows developers to expose locally running applications to the internet through a centralized relay server.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=500&fit=crop",
    tags: ["Java", "Spring Boot", "Maven", "WebSockets", "Networking"],
    demoUrl: "#",
    githubUrl: "https://github.com/Rajesh-bandi/TunnelFlow",
    featured: true,
    accentColor: "from-blue-500 via-indigo-500 to-purple-600",
    status: "Completed",
    highlights: [
      "Custom messaging protocol & modular architecture (Protocol, Client, Server) with multi-module Maven structure.",
      "Extensible message-processing framework using a handler registry to add protocol message types seamlessly."
    ]
  },
  {
    id: 2,
    title: "Secure Notes Application",
    subtitle: "Full-Stack Encrypted Notes & Role Authorization",
    category: "Full-Stack Security",
    description: "Developed a full-stack notes management application with React and Spring Boot, allowing authenticated users to create, update, retrieve, and manage personal notes through REST APIs.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=500&fit=crop",
    tags: ["Spring Boot", "Spring Security", "JWT", "React", "MySQL", "Spring Data JPA"],
    demoUrl: "#",
    githubUrl: "https://github.com/Rajesh-bandi",
    featured: true,
    accentColor: "from-emerald-500 via-teal-500 to-cyan-600",
    status: "Completed",
    highlights: [
      "Secured using Spring Security & JWT-based authentication for stateless authorization on protected endpoints.",
      "Layered backend architecture (Controller, Service, Repository) with Spring Data JPA, Hibernate, soft delete & clean API design."
    ]
  },
  {
    id: 3,
    title: "Wander — Cloud & CI/CD Pipeline",
    subtitle: "AWS ECS Fargate & Automated Deployment Pipeline",
    category: "DevOps & Cloud",
    description: "Designed and deployed containerized frontend and backend services on AWS ECS Fargate, exposing them through an Application Load Balancer with path-based routing.",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=500&fit=crop",
    tags: ["AWS ECS Fargate", "Docker", "GitHub Actions", "Amazon ECR", "ALB", "CloudWatch"],
    demoUrl: "#",
    githubUrl: "https://github.com/Rajesh-bandi",
    featured: true,
    accentColor: "from-amber-500 via-orange-500 to-red-600",
    status: "Deployed",
    highlights: [
      "Automated CI/CD pipeline with GitHub Actions building Docker images, pushing to ECR, and updating ECS task definitions on push.",
      "Configured CloudWatch logging, IAM roles, health checks, and environment variables to support reliable production deployments."
    ]
  }
];

const categoryColors = {
  "Networking & Protocol": "from-blue-500/20 to-purple-600/20 text-blue-500 border-blue-500/30",
  "Full-Stack Security": "from-emerald-500/20 to-teal-600/20 text-emerald-500 border-emerald-500/30",
  "DevOps & Cloud": "from-amber-500/20 to-orange-600/20 text-amber-500 border-amber-500/30"
};

// Creative Interactive Simulators
const TunnelFlowSimulator = () => {
  const [port, setPort] = useState("8080");
  const [isConnected, setIsConnected] = useState(false);
  const [activeTab, setActiveTab] = useState("traffic");

  return (
    <div className="space-y-4 text-left font-sans">
      <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-3">
          <div className="flex items-center gap-2">
            <Server className="h-4 w-4 text-blue-400" />
            <span className="font-bold text-zinc-200">TunnelFlow Control Plane v1.0</span>
          </div>
          <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${isConnected ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-zinc-800 text-zinc-400'}`}>
            {isConnected ? "ACTIVE TUNNEL" : "DISCONNECTED"}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 items-center mb-4">
          <span className="text-zinc-400 whitespace-nowrap text-[11px]">Select Target Port:</span>
          {["8080", "3000", "5000"].map((p) => (
            <button
              key={p}
              onClick={() => !isConnected && setPort(p)}
              disabled={isConnected}
              className={`px-2.5 py-1 rounded text-[11px] font-mono border transition-all ${
                port === p
                  ? "bg-blue-500/20 text-blue-400 border-blue-500/50 font-bold"
                  : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-700"
              }`}
            >
              :{p}
            </button>
          ))}
          <button
            onClick={() => setIsConnected(!isConnected)}
            className={`w-full sm:w-auto px-4 py-1.5 rounded font-semibold transition-all flex items-center justify-center gap-2 ${
              isConnected
                ? "bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30"
                : "bg-blue-600 text-white hover:bg-blue-500 shadow-md shadow-blue-500/20"
            }`}
          >
            {isConnected ? (
              <>
                <X size={14} /> Close Relay
              </>
            ) : (
              <>
                <Zap size={14} /> Expose to Web
              </>
            )}
          </button>
        </div>

        {isConnected ? (
          <div className="space-y-3">
            <div className="p-3 bg-blue-950/40 border border-blue-800/50 rounded-lg text-blue-300 flex items-center justify-between">
              <div className="flex items-center gap-2 truncate">
                <GlobeIcon className="h-4 w-4 flex-shrink-0 text-blue-400" />
                <span className="truncate font-semibold">https://rajesh-tunnelflow.dev/app-{port}</span>
              </div>
              <span className="text-[10px] bg-blue-500/20 px-2 py-0.5 rounded text-blue-300">PROXY READY</span>
            </div>

            <div className="flex border-b border-zinc-800 text-zinc-400 mb-2">
              <button
                onClick={() => setActiveTab("traffic")}
                className={`px-3 py-1 text-[11px] border-b-2 font-medium transition-colors ${activeTab === 'traffic' ? 'border-blue-400 text-blue-400' : 'border-transparent hover:text-zinc-200'}`}
              >
                Live Traffic Relay Log
              </button>
              <button
                onClick={() => setActiveTab("protocol")}
                className={`px-3 py-1 text-[11px] border-b-2 font-medium transition-colors ${activeTab === 'protocol' ? 'border-blue-400 text-blue-400' : 'border-transparent hover:text-zinc-200'}`}
              >
                Custom Binary Protocol Frame
              </button>
            </div>

            {activeTab === "traffic" ? (
              <div className="space-y-1 text-[11px] bg-black/60 p-2.5 rounded border border-zinc-800/80 font-mono text-zinc-300 h-28 overflow-y-auto">
                <div className="text-emerald-400">[CONNECTED] WebSocket relay tunnel established to relay-node-ap-south-1</div>
                <div className="text-zinc-400">[0.04s] GET /api/v1/health -&gt; localhost:{port} (200 OK - 8ms)</div>
                <div className="text-zinc-400">[0.82s] POST /api/v1/data -&gt; localhost:{port} (201 Created - 14ms)</div>
                <div className="text-blue-400">[1.45s] GET /static/main.css -&gt; localhost:{port} (304 Not Modified)</div>
              </div>
            ) : (
              <div className="bg-black/60 p-2.5 rounded border border-zinc-800/80 text-[11px] font-mono text-zinc-300">
                <span className="text-purple-400">// Handler Registry Protocol Message Frame</span>
                <pre className="mt-1 text-zinc-400 font-mono text-[10px] leading-tight">
{`{
  "header": { "magic": "0x544E", "type": "DATA_FRAME", "streamId": 104 },
  "payload": { "targetPort": ${port}, "headers": { "Host": "tunnelflow.dev" } }
}`}
                </pre>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-6 text-zinc-500 text-xs italic">
            Click "Expose to Web" to simulate custom WebSockets protocol relaying local port {port}.
          </div>
        )}
      </div>
    </div>
  );
};

const GlobeIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
);

const SecureNotesSimulator = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [notes, setNotes] = useState([
    { id: 1, title: "System Architecture Notes", content: "Spring Security JWT Filter Chain", deleted: false },
    { id: 2, title: "Database Credentials", content: "MySQL JPA Hibernate Config", deleted: false }
  ]);

  const toggleDelete = (id) => {
    setNotes(notes.map(n => n.id === id ? { ...n, deleted: !n.deleted } : n));
  };

  return (
    <div className="space-y-4 text-left font-sans">
      <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 text-xs">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-3">
          <div className="flex items-center gap-2">
            <Lock className="h-4 w-4 text-emerald-400" />
            <span className="font-bold text-zinc-200">Spring Security JWT & JPA Soft-Delete Sandbox</span>
          </div>
          <button
            onClick={() => setIsAuth(!isAuth)}
            className={`px-3 py-1 rounded text-[11px] font-semibold transition-all ${
              isAuth
                ? "bg-emerald-500 text-zinc-950 hover:bg-emerald-400 shadow-sm"
                : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
            }`}
          >
            {isAuth ? "Authenticated (JWT Active)" : "Simulate Login"}
          </button>
        </div>

        {isAuth ? (
          <div className="space-y-3">
            <div className="bg-zinc-900/90 p-2.5 rounded border border-emerald-800/40 text-[11px] font-mono text-zinc-300">
              <span className="text-emerald-400 font-semibold">Decoded JWT Bearer Token Claims:</span>
              <div className="text-[10px] text-zinc-400 mt-1 truncate">
                Header: {"{\"alg\":\"HS256\",\"typ\":\"JWT\"}"} | Sub: "rajesh_bandi" | Role: "ROLE_USER"
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center text-zinc-400 font-medium text-[11px]">
                <span>User Notes List (Spring Data JPA Layer)</span>
                <span className="text-[10px] text-zinc-500">Click icon to Soft-Delete</span>
              </div>
              {notes.map(note => (
                <div
                  key={note.id}
                  className={`p-2.5 rounded-lg border flex items-center justify-between transition-all ${
                    note.deleted
                      ? "bg-zinc-950 border-red-900/40 opacity-50 line-through"
                      : "bg-zinc-900/60 border-zinc-800"
                  }`}
                >
                  <div>
                    <div className="font-semibold text-zinc-200">{note.title}</div>
                    <div className="text-[10px] text-zinc-400">{note.content}</div>
                  </div>
                  <button
                    onClick={() => toggleDelete(note.id)}
                    className={`px-2 py-1 rounded text-[10px] font-mono transition-colors ${
                      note.deleted
                        ? "bg-amber-500/20 text-amber-300 hover:bg-amber-500/30"
                        : "bg-red-500/20 text-red-400 hover:bg-red-500/30"
                    }`}
                  >
                    {note.deleted ? "Restore (Soft Deleted)" : "Soft Delete"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-6 text-zinc-500 text-xs italic">
            HTTP 401 Unauthorized. Click "Simulate Login" to generate stateless JWT token and access REST endpoint.
          </div>
        )}
      </div>
    </div>
  );
};

const WanderCloudSimulator = () => {
  const [step, setStep] = useState(0);
  const [isDeploying, setIsDeploying] = useState(false);

  const steps = [
    { title: "Git Push to Main", desc: "Developer pushes code update to GitHub repository" },
    { title: "GitHub Actions Workflow", desc: "Triggers build matrix & compiles Docker container images" },
    { title: "Amazon ECR Repository", desc: "Pushes tagged image to AWS Container Registry" },
    { title: "AWS ECS Fargate Task", desc: "Rolling update on serverless container cluster" },
    { title: "Application Load Balancer", desc: "ALB path routing (/api -> Backend, / -> Frontend)" }
  ];

  const handleDeploy = () => {
    setIsDeploying(true);
    setStep(0);
    const interval = setInterval(() => {
      setStep(prev => {
        if (prev >= steps.length - 1) {
          clearInterval(interval);
          setIsDeploying(false);
          return prev;
        }
        return prev + 1;
      });
    }, 900);
  };

  return (
    <div className="space-y-4 text-left font-sans">
      <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 text-xs">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-3">
          <div className="flex items-center gap-2">
            <Cloud className="h-4 w-4 text-amber-400" />
            <span className="font-bold text-zinc-200">AWS ECS Fargate & GitHub Actions Pipeline Visualizer</span>
          </div>
          <button
            onClick={handleDeploy}
            disabled={isDeploying}
            className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 rounded font-semibold transition-all disabled:opacity-50 flex items-center gap-1.5 text-[11px]"
          >
            {isDeploying ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Play className="h-3.5 w-3.5" />}
            {isDeploying ? "Running CI/CD..." : "Trigger Deployment Pipeline"}
          </button>
        </div>

        <div className="space-y-2">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className={`p-2.5 rounded-lg border transition-all flex items-center gap-3 ${
                idx === step && isDeploying
                  ? "bg-amber-500/10 border-amber-500/50 text-amber-300"
                  : idx <= step
                  ? "bg-zinc-900/80 border-emerald-800/40 text-zinc-200"
                  : "bg-zinc-950 border-zinc-800/60 text-zinc-600"
              }`}
            >
              <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                idx <= step ? "bg-emerald-500 text-zinc-950" : "bg-zinc-800 text-zinc-500"
              }`}>
                {idx <= step ? "✓" : idx + 1}
              </div>
              <div className="flex-1">
                <div className="font-semibold text-xs">{s.title}</div>
                <div className="text-[10px] text-zinc-400">{s.desc}</div>
              </div>
              {idx === step && isDeploying && (
                <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded animate-pulse">EXECUTING</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);

  const ProjectHighlights = ({ highlights }) => (
    <div className="space-y-2">
      {highlights.map((highlight, index) => (
        <div key={index} className="flex items-start gap-2 text-sm">
          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
          <span className="text-muted-foreground text-xs sm:text-sm">{highlight}</span>
        </div>
      ))}
    </div>
  );

  return (
    <section 
      id="projects" 
      className="relative min-h-screen py-20 md:py-32 overflow-hidden z-10"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Sparkles className="h-4 w-4" />
            Featured Software & Cloud Engineering Projects
          </motion.div>

          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Rajesh Bandi
            <span className="block text-primary">Projects & Case Studies</span>
          </motion.h2>

          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Full-stack systems, custom networking relay protocols, and automated AWS CI/CD pipelines. Click on any project to try an interactive simulator.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="relative bg-background border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 h-full flex flex-col hover:border-primary/50">
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md border ${categoryColors[project.category]}`}>
                      {project.category}
                    </span>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
                      {project.status}
                    </span>
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>
                    <p className="text-xs text-gray-300 truncate">{project.subtitle}</p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-muted-foreground text-xs sm:text-sm mb-4 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="mb-4">
                    <div className="text-xs font-semibold text-foreground mb-2 flex items-center gap-1">
                      <Zap className="h-3.5 w-3.5 text-primary" /> Key Contributions:
                    </div>
                    <ProjectHighlights highlights={project.highlights} />
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2.5 py-0.5 rounded-md bg-primary/10 text-primary text-[11px] font-medium border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-border mt-auto">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-md shadow-primary/20"
                    >
                      <Sparkles size={16} /> Interactive Demo
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold border border-border text-foreground hover:border-primary hover:bg-primary/5 transition-all"
                    >
                      <Github size={16} /> Code
                    </a>
                  </div>
                </div>

                {/* Accent Bottom Line */}
                <div className={`h-1 bg-gradient-to-r ${project.accentColor}`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative bg-background border border-border rounded-2xl overflow-hidden shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border bg-card">
                <div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <h3 className="text-xl font-bold text-foreground">{selectedProject.title}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">{selectedProject.subtitle}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body with Simulator */}
              <div className="p-6 overflow-y-auto flex-1 space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Project Architecture & Overview</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="bg-primary/5 p-4 rounded-xl border border-primary/20 space-y-2">
                  <h4 className="text-xs font-semibold text-primary uppercase tracking-wider">Technical Accomplishments</h4>
                  <ul className="space-y-1.5">
                    {selectedProject.highlights.map((h, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                        <CheckCircle className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Render the specific Simulator */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Zap className="h-4 w-4 text-amber-500" /> Interactive Feature Simulator
                  </h4>
                  {selectedProject.id === 1 && <TunnelFlowSimulator />}
                  {selectedProject.id === 2 && <SecureNotesSimulator />}
                  {selectedProject.id === 3 && <WanderCloudSimulator />}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-border bg-card flex justify-between items-center">
                <div className="flex flex-wrap gap-1">
                  {selectedProject.tags.slice(0, 4).map((t, idx) => (
                    <span key={idx} className="text-[10px] px-2 py-0.5 bg-muted text-muted-foreground rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-xl text-xs font-semibold hover:bg-primary/90 transition-all flex items-center gap-2"
                >
                  <Github size={14} /> View Repository on GitHub
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};