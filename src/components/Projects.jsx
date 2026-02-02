import classes from "./Projects.module.css";
import ProjectCard from "./UI/ProjectCard";

const PROJECTS = [
  {
    name: "GovTech Singapore – Web Emissions Prototype",
    description: [
      "I researched and developed a full-stack web prototype to analyse carbon emissions and identify optimisation opportunities for reducing the carbon footprint of government websites. ",
      "This was enhanced and adopted by the GovTech team, and later presented as a solution at the {build} Hackathon 2025, with endorsement from the Minister of State (MOH & MDDI).",
    ],
    stack: "React · Express · DynamoDB · AWS",
    images: ["/src/assets/images/govtechgif.gif"],
    link: "https://build.tech.gov.sg/projects/eco-mode",
  },
  {
    name: "Kunyah Cafe - Mobile Ordering Interface",
    description: [
      "For my university's Final Year Project, I designed and developed a self-ordering mobile interface for an F&B establishment employing people with physical disabilities, minimising manual customer interaction and allowing staff to focus on food preparation.",
    ],
    stack: "React · Node.js · PostgreSQL · AWS",
    images: ["/src/assets/images/kunyahmobilegif.gif"],
    link: "",
  },
  {
    name: "Kunyah Cafe - Corporate Website Prototype",
    description:["For my university's Final Year Project, I prototyped a corporate website for a F&B establishment that hires employees with disabilities."],
    stack: "Figma · Canva",
    images: ["/src/assets/images/kunyahwebsite.png"],
    link: "",
  },
  {
    name: "Internet-of-Things: Patient Wearable Heart Rate Monitor Dashboard",
    description:["For a Cloud Management & Engineering module, I developed a mock doctor's dashboard to monitor the status of patients wearing heart rate monitoring devices."],
    stack: "HTML · CSS · Chart.JS · AWS S3, Sagemaker, Glue",
    images: ["/src/assets/images/heatmap2.jpg"],
    link: "",
  },
   {
    name: "Asteroid Website Tracker",
    description:["I designed and developed a website that calls NASA's open database to retrieve asteroid information. It allows users to input a data range and get a list of potentially hazardous asteroids that are flying near Earth."],
    stack: "CSS · EJS",
    images: ["/src/assets/images/asteroid-tracker.png"],
    trylink: "https://asteroid-tracker-yixg.onrender.com/",
    mobile: false
  },
  {
    name: "Book Notes Website",
    description:["I designed and developed a website that allows you to record important notes and information about books that you have read. It automatically retrieves book covers with valid ISBN."],
    stack: "CSS · EJS · PostgreSQL ",
    images: ["/src/assets/images/book-notes-bigger.png", "/src/assets/images/book-notes3.png"],
    trylink: "https://booknotes-kx6w.onrender.com/",
    mobile: false
  },
  {
    name: "Blog Website",
    description:["I designed and developed a website that allows you to create, edit and delete blog posts."],
    stack: "HTML · CSS · EJS",
    images: ["/src/assets/images/blog-bigger.png"],
    trylink: "https://blog-website-2gbl.onrender.com/",
    mobile: false
  },
  {
    name: "Peer to Peer Bank Transaction Mobile App",
    description:["I designed a P2P bank transaction mobile application for users that want an easy and reliable way to send money, that will inform them of the process at every step of the user journey."],
    stack: "Figma · Canva",
    images: ["/src/assets/images/bank8.png"],
  },

];

export default function Projects() {
  return (
    <section className={classes.container} id="projects">
      <h2>My Projects</h2>
      <div className={classes.projectContainer}>
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            description={project.description}
            stack={project.stack}
            images={project.images}
            link={project.link}
            trylink={project.trylink}
            mobileResponsive={project.mobile}
          />
        ))}
      </div>
    </section>
  );
}
