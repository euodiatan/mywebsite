import classes from "./LinkButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";

const ICONS = {
  Email: faEnvelope,
  Linkedin: faSquareLinkedin,
};

export default function LinkButton({ label, href }) {
  const icon = ICONS[label];

  return (
    <div className={classes.button}>
      <a href={href}>
        <span>
          <FontAwesomeIcon
            icon={icon}
            style={{ color: "#ffffff", paddingRight: 5, paddingLeft: 10 }}
          />
        </span>
        {label}
      </a>
    </div>
  );
}
