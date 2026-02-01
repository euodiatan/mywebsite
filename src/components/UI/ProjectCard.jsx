import classes from './ProjectCard.module.css';

export default function ProjectCard({name, description, stack}){
    return (
        <div className={classes.card}>
            <h2>{name}</h2>
            <h3>{description}</h3>
            <p>{stack}</p>
        </div>
    );
}