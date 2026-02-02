import classes from "./LinkButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const ICONS = {
  Email: faEnvelope,
  Resume: faDownload,
  Linkedin: faSquareLinkedin,
};

export default function LinkButton({ label, href }) {
  const icon = ICONS[label];

  const isDownloadable = label === 'Resume';

  return (
      <a href={href} className={classes.button} download={isDownloadable}>
        <span>
          <FontAwesomeIcon
            icon={icon}
            style={{ color: "#ffffff", paddingRight: 5, paddingLeft: 10 }}
          />
        </span>
        {label}
      </a>
  );
}
