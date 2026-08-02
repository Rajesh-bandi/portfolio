import {
  ArrowUp,
  Linkedin,
  Github,
  Mail,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/bandi-rajesh-5b401829a/", label: "LinkedIn" },
    { icon: <Github size={18} />, href: "https://github.com/Rajesh-bandi", label: "GitHub" },
  ];

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Work", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const contactInfo = [
    { icon: <Mail size={16} />, text: "bandirajesh209@gmail.com", href: "mailto:bandirajesh209@gmail.com" },
    { icon: <Phone size={16} />, text: "+91 9063939969", href: "tel:+919063939969" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <footer className="px-6 py-12 mt-20 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Dark-mode-aware glass card using CSS var --card */}
        <motion.div
          className="backdrop-blur-xl bg-card/80 rounded-2xl p-8 border border-border/60 shadow-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">

            {/* Branding */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">RAJESH BANDI</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                B.Tech CS Student @ SRKR Engineering College (CGPA 9.0/10) specializing in Spring Boot &amp; Cloud Engineering.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    whileHover={{ y: -2, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.div variants={itemVariants}>
              <h4 className="text-foreground font-semibold mb-4 text-sm uppercase tracking-wider">Navigation</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div variants={itemVariants}>
              <h4 className="text-foreground font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
              <ul className="space-y-3">
                {contactInfo.map((info, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start space-x-3 text-sm"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-primary mt-0.5">{info.icon}</span>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        {info.text}
                      </a>
                    ) : (
                      <span className="text-muted-foreground">{info.text}</span>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="text-foreground font-semibold text-sm uppercase tracking-wider">Education &amp; Status</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                B.Tech CSE (2023 – 2027)<br />
                SRKR Engineering College<br />
                <span className="font-semibold text-primary">CGPA: 9.0 / 10</span>
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-500 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Open to Internships
              </div>
            </motion.div>
          </div>

          {/* Bottom bar */}
          <motion.div
            className="mt-10 pt-6 border-t border-border/50 flex flex-col items-center text-xs text-muted-foreground space-y-4 sm:space-y-0 sm:flex-row sm:justify-between"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span>© {currentYear} Rajesh Bandi. All rights reserved.</span>
            <div className="flex items-center space-x-4">
              <span className="text-muted-foreground/60">Built with React &amp; Spring Boot</span>
              <motion.a
                href="#hero"
                aria-label="Back to top"
                className="p-2 rounded-full bg-primary text-primary-foreground hover:shadow-[0_0_12px_rgba(139,92,246,0.5)] transition-all duration-300"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowUp size={14} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};