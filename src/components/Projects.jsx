import classes from "./Projects.module.css";
import ProjectCard from "./UI/ProjectCard";

export default function Projects() {
  return (
    <section className={classes.container} id="projects">
      <h2>My Projects</h2>
      <div className={classes.projectContainer}>
        <ProjectCard name="testname" description="test description" stack="JS React CSS"/>
        <ProjectCard name="testname" description="test description" stack="JS React CSS"/>
        <ProjectCard name="testname" description="test description" stack="JS React CSS"/>
      </div>
    </section>
  );
}
