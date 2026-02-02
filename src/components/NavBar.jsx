import { useState, useEffect } from "react";
import classes from "./NavBar.module.css";

export default function Navbar({ categories }) {
  const [activeCategory, setActiveCategory] = useState("home");

  useEffect(() => {
    const sections = categories
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "-40% 0px -40% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [categories]);

  return (
    <nav className={classes.navbar}>
      {categories.map((category, index) => (
        <span key={category}>
          <a
            href={`#${category}`}
            className={activeCategory === category ? classes.active : ""}
          >
            {category}
          </a>
          {index !== categories.length - 1 && <span> / </span>}
        </span>
      ))}
    </nav>
  );
}
