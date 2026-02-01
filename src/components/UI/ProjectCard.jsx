import classes from './ProjectCard.module.css';
import UIUXCalculatorThumbnail from '../../assets/images/govtechgif.gif';

export default function ProjectCard({name, description, stack, images}){
    return (
      
        <div className={classes.card}>
            {images.map((image)=> (
                <img src={image}/>
            ))}
            <h2>{name}</h2>
            <h3>{description}</h3>
            <p>{stack}</p>
        </div>
    );
}