import classes from './SkillCard.module.css';

export default function SkillCard({skillName, imageHref}){
    return(
        <div className={classes.card}>
            <img src={imageHref}/>
            <h3>{skillName}</h3>
        </div>
    );
}