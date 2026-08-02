import { useEffect, useState, useRef } from "react";
import {
  Home,
  User,
  Code,
  Briefcase,
  Mail,
  BookOpen,
  Lightbulb,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Contact", href: "#contact", icon: Mail },
];

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className={cn(
        "p-2 rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-md",
        theme === "dark" 
          ? "text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" 
          : "text-yellow-500 hover:bg-yellow-50",
        "border border-gray-200 dark:border-gray-700 shadow-sm",
        "flex items-center justify-center transition-all duration-300"
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      aria-label="Toggle theme"
    >
      <Lightbulb 
        className={cn(
          "w-5 h-5 transition-all duration-300",
          theme === "light" && "fill-yellow-500"
        )} 
      />
    </motion.button>
  );
};

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("#hero");
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollYRef.current && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollYRef.current = currentScrollY;

      const sections = navItems.map((item) => item.href);
      const scrollPosition = currentScrollY + 100;

      for (const section of sections) {
        const element = document.querySelector(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Right Buttons */}
      <motion.div
        className="fixed top-4 right-4 z-50 flex gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Theme Toggle */}
        <ThemeToggle />
      </motion.div>

      {/* Bottom Navbar */}
      <motion.div
        className={cn(
          "fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50",
          "transition-transform duration-300 ease-in-out",
          showNavbar ? "translate-y-0" : "translate-y-full"
        )}
        style={{ willChange: "transform" }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-center bg-white/60 dark:bg-black/60 backdrop-blur-xl rounded-full shadow-2xl p-2 border border-white/30 dark:border-white/10 ring-1 ring-primary/10">
          <div className="flex space-x-1 items-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "p-2 rounded-full transition-all duration-200 flex flex-col items-center relative",
                  activeSection === item.href
                    ? "bg-primary text-white shadow-[0_0_12px_rgba(139,92,246,0.5)]"
                    : "text-gray-600 hover:text-primary hover:bg-primary/10 dark:text-gray-300 dark:hover:text-primary"
                )}
                aria-label={item.name}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-xs mt-1 hidden md:block">{item.name}</span>
                {activeSection === item.href && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white opacity-80" />
                )}
              </a>
            ))}
            <div className="flex items-center px-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
