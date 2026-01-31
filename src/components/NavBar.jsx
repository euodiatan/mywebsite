import { useState } from "react";
import classes from "./NavBar.module.css";


export default function Navbar({ categories }) {
  const categoryLength = categories.length;
  const [activeCategory, setActiveCategory] = useState("home");

  return (
    <nav className={classes.navbar}>
      {categories.map((category) => {
        const lastIndex = categories.findIndex((cat) => cat === category);

        return (
          <span key={category}>
            <a className={activeCategory === category ? classes.active : ""} href={`#${category}`}>{category}</a>
              {lastIndex !== categoryLength - 1 && <span> / </span>}
          </span>
        );
      })}
    </nav>
  );
}
