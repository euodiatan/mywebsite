import classes from "./Skills.module.css";
import SkillCard from "./UI/SkillCard";
import HTMLGraphic from "../assets/images/HTML.png";
import CSSGraphic from "../assets/images/CSS.png";
import JSGraphic from "../assets/images/JS.png";
import ReactGraphic from "../assets/images/React.png";
import SQLGraphic from "../assets/images/SQL.png";
import NextGraphic from "../assets/images/Next.png";
import FigmaGraphic from "../assets/images/Figma.png";
import CanvaGraphic from "../assets/images/Canva.png";

export default function Skills() {
  const SKILLS = [
    { name: "HTML", image: HTMLGraphic },
    { name: "CSS", image: CSSGraphic },
    { name: "Javascript", image: JSGraphic },
    { name: "React", image: ReactGraphic },
    { name: "Next.js", image: NextGraphic },
    { name: "PostgreSQL", image: SQLGraphic },
    { name: "Figma", image: FigmaGraphic },
    { name: "Canva", image: CanvaGraphic },
  ];
  return (
    <section id="skills" className={classes.container}>
      <h2 className={classes.heading}>My Skills</h2>
      <div className={classes.skillContainer}>
        {SKILLS.map((skill)=> (
            <SkillCard imageHref={skill.image} skillName={skill.name} />
        ))}
      </div>
    </section>
  );
}
