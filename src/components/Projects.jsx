import classes from "./Projects.module.css";
import ProjectCard from "./UI/ProjectCard";

const PROJECTS = [
  {
    name: "GovTech Singapore – Web Emissions Prototype",
    description:
      "During my time in GovTech, I developed a full-stack web prototype to analyse carbon emissions and identify optimisation opportunities (media, code, files) for reducing the carbon footprint of government websites.",
    stack: "React · Express · DynamoDB · AWS",
    images: ["/src/assets/images/govtechgif.gif"],
  },
  {
    name: "Kunyah Cafe - Mobile Ordering Interface",
    description: 
        "For my university's Final Year Project, I designed and developed a self-ordering mobile interface for an F&B establishment employing people with disabilities.",
    stack: "React · Node.js · PostgreSQL · AWS",
    images: ["/src/assets/images/kunyahmobilegif.gif"],
  },

];

export default function Projects() {
  return (
    <section className={classes.container} id="projects">
      <h2>My Projects</h2>
      <div className={classes.projectContainer}>
        {PROJECTS.map((project)=> (
          <ProjectCard
            name={project.name}
            description={project.description}
            stack={project.stack}
            images={project.images}
          />
        ))}
      </div>
    </section>
  );
}
