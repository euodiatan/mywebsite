import classes from "./Home.module.css";
import { useState, useEffect } from "react";
import ProfileImage from "../assets/images/my_photo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowPointer } from "@fortawesome/free-solid-svg-icons";
import LinkButton from "./UI/LinkButton";

export default function Home() {
  const fullText = "Web Developer";
  const [displayedText, setDisplayedText] = useState("W");
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      index++;
      setDisplayedText((prev) => prev + fullText[index]);

      if (index === fullText.length - 1) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={classes.section} id="home">
      <div className={classes.container}>
        <div className={classes.description}>
          <div className={classes.imageFrame}>
            <img src={ProfileImage} alt="My Profile Picture" />
          </div>
          <div>
            <h2>Euodia Tan</h2>
            <h3 className={classes.h3}>
              <span>
                <FontAwesomeIcon
                  icon={faArrowPointer}
                  style={{ color: "#ffffff", paddingRight: 5 }}
                />
              </span>
              {displayedText}
              <span className={classes.cursor}>|</span>
            </h3>
          </div>
        </div>
        <div className={classes.buttonsRow}>
          <LinkButton label="Email" href="mailto:euodia.tan.1999@gmail.com" />
          <LinkButton
            label="Linkedin"
            href="https://www.linkedin.com/in/euodia-t-460b1a173/"
          />
        </div>
      </div>
    </section>
  );
}
