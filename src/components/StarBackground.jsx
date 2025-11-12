import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  // Generate random stars when the component mounts
  useEffect(() => {
    const generateStars = () => {
      const numberOfStars = Math.floor(
        (window.innerWidth * window.innerHeight) / 10000
      );
      const newStars = [];

      for (let i = 0; i < numberOfStars; i++) {
        newStars.push({
          id: i,
          size: Math.random() * 3 + 1, // 1–4px
          x: Math.random() * 100, // %
          y: Math.random() * 100, // %
          opacity: Math.random() * 0.5 + 0.5, // 0.5–1
          animationDuration: Math.random() * 4 + 2, // 2–6s
        });
      }
      setStars(newStars);
    };

    const generateMeteors = () => {
      const numberOfMeteors = 4;
      const newMeteors = [];

      for (let i = 0; i < numberOfMeteors; i++) {
        newMeteors.push({
          id: i,
          size: Math.random() * 2 + 1, // 1–4px
          x: Math.random() * 100, // %
          y: Math.random() * 20, // %
          delay: Math.random() * 15, // 0.5–1
          animationDuration: Math.random() * 3 + 3, // 2–6s
        });
      }
      setMeteors(newMeteors);
    };

    // Generate when component mounts
    generateStars();
    generateMeteors();

    // Regenerate stars on resize
    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: `${meteor.size * 50}px`,
            height: `${meteor.size * 2}px`,
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            animationDelay: meteor.delay,
            animationDuration: `${meteor.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );
};
