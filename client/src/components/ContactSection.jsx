import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Github,
  ExternalLink,
  Sparkles,
  MessageSquare
} from "lucide-react";
import { motion } from "framer-motion";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 relative bg-background overflow-hidden grid-bg z-10">
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            Let's Connect
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
            Open to software development opportunities, backend projects, and technical collaborations. Reach out directly via email or phone!
          </p>
        </div>

        {/* Contact Details Grid */}
        <div className="bg-card border border-border rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-xl space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email Card */}
            <motion.a
              href="mailto:bandirajesh209@gmail.com"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="p-6 rounded-2xl bg-primary/5 border border-primary/20 hover:border-primary/50 transition-all flex flex-col items-center text-center group"
            >
              <div className="p-4 rounded-2xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="text-sm text-muted-foreground font-medium mb-1">Email</h3>
              <p className="text-sm font-semibold text-foreground break-all group-hover:text-primary transition-colors">
                bandirajesh209@gmail.com
              </p>
              <span className="text-xs text-primary font-medium mt-3 inline-flex items-center gap-1">
                Send Email <ExternalLink size={12} />
              </span>
            </motion.a>

            {/* Phone Card */}
            <motion.a
              href="tel:+919063939969"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="p-6 rounded-2xl bg-primary/5 border border-primary/20 hover:border-primary/50 transition-all flex flex-col items-center text-center group"
            >
              <div className="p-4 rounded-2xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="text-sm text-muted-foreground font-medium mb-1">Phone</h3>
              <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                +91 9063939969
              </p>
              <span className="text-xs text-primary font-medium mt-3 inline-flex items-center gap-1">
                Call / WhatsApp <ExternalLink size={12} />
              </span>
            </motion.a>

            {/* Location Card */}
            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 flex flex-col items-center text-center">
              <div className="p-4 rounded-2xl bg-primary/10 text-primary mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-sm text-muted-foreground font-medium mb-1">Location</h3>
              <p className="text-sm font-semibold text-foreground">
                Andhra Pradesh, India
              </p>
              <span className="text-xs text-muted-foreground mt-3">
                SRKR Engineering College
              </span>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="pt-6 border-t border-border text-center">
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Connect On Social Platforms</h4>
            <div className="flex justify-center gap-4">
              <motion.a
                href="https://www.linkedin.com/in/bandi-rajesh-5b401829a/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-xl bg-background border border-border text-foreground hover:border-primary hover:text-primary font-medium text-sm flex items-center gap-2 transition-all shadow-sm"
              >
                <Linkedin size={18} className="text-blue-500" />
                <span>LinkedIn Profile</span>
              </motion.a>

              <motion.a
                href="https://github.com/Rajesh-bandi"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-xl bg-background border border-border text-foreground hover:border-primary hover:text-primary font-medium text-sm flex items-center gap-2 transition-all shadow-sm"
              >
                <Github size={18} />
                <span>GitHub Repositories</span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};