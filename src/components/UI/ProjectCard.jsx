import classes from "./ProjectCard.module.css";
import UIUXCalculatorThumbnail from "../../assets/images/govtechgif.gif";

export default function ProjectCard({ name, description, stack, images, link, trylink, mobileResponsive }) {
  return (
    <div className={classes.card}>
      {images.map((image) => (
        <img key={image} src={image} />
      ))}
      <h2>{name}</h2>
      {description.map((paragraph) => (
        <h3 key={paragraph}>{paragraph}</h3>
      ))}
      {link && <a href={link}>Read more →</a>}
      {trylink && <a href={trylink}>View live demo {mobileResponsive ? "[ Mobile/Desktop ]" : "[ Desktop ]"} →</a>}
      <p>{stack}</p>
    </div>
  );
}
