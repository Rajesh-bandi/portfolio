import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();
    const handleResize = () => generateStars();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const count = Math.floor((window.innerWidth * window.innerHeight) / 8000);
    setStars(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        size: Math.random() * 2.5 + 0.5,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.7 + 0.2,
        duration: Math.random() * 5 + 2,
        delay: Math.random() * 4,
        color: Math.random() > 0.8 ? "#a78bfa" : Math.random() > 0.6 ? "#38bdf8" : "#ffffff",
      }))
    );
  };

  const generateMeteors = () => {
    setMeteors(
      Array.from({ length: 8 }, (_, i) => ({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 30,
        delay: Math.random() * 20,
        duration: Math.random() * 4 + 3,
      }))
    );
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 dark:opacity-100 opacity-0 transition-opacity duration-700">
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            backgroundColor: star.color,
            boxShadow: `0 0 ${star.size * 3}px ${star.size}px ${star.color}55`,
            animationDuration: star.duration + "s",
            animationDelay: star.delay + "s",
          }}
        />
      ))}

      {/* Nebula patches */}
      <div
        className="absolute rounded-full"
        style={{
          width: "600px",
          height: "600px",
          left: "10%",
          top: "5%",
          background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: "500px",
          height: "500px",
          right: "5%",
          bottom: "10%",
          background: "radial-gradient(circle, rgba(56,189,248,0.05) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: "400px",
          height: "400px",
          left: "50%",
          top: "60%",
          background: "radial-gradient(circle, rgba(236,72,153,0.04) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Meteors */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor absolute"
          style={{
            width: meteor.size * 60 + "px",
            height: meteor.size * 1.5 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay + "s",
            animationDuration: meteor.duration + "s",
          }}
        />
      ))}
    </div>
  );
};
