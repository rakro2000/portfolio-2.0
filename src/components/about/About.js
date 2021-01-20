import styles from "./About.module.scss";

import { useMediaQuery } from "react-responsive";

import Document from "../document/Document";
import Profile from "../../images/profile-pic.webp";

function About() {
  const isSmallestScreen = useMediaQuery({ query: "(max-width: 340px)" });
  return (
    <Document
      title={
        <h1 className={isSmallestScreen ? "display-2 " : "display-1 "}>
          About me
        </h1>
      }
      titleStyle={{ marginLeft: "49px" }}
      articleTitle="Hi,"
      imgSrc={Profile}
      imgAlt="Rachel Vo profile pic"
      imgStyles={styles.blackWhite}
      docStyle={styles.aboutPage}
    >
      <p>
        I'm Rachel Vo. Born and raised in Ho Chi Minh City, Vietnam. Lived in
        Switzerland, Singapore and Australia. <br />
        Living in Copenhagen, Denmark since 2016.
      </p>
      <br />
      <h2 className="display-4">In short, </h2>
      <p>
        A multimedia design student at Copenhagen School of Design and
        Technology. Passionate about making beautiful and user-friendly digital
        solutions.
      </p>
      <br />
      <p>
        Specialized in Front-end Design. Experienced in team collaborations,
        user interface development and interdisciplinary designwork processes.
      </p>
      <br />
      <p>Tech stack: HTML, CSS, JS, SASS, GreenSock, React.js</p>
      <br />
      <h2 className="display-4">Personally I ...</h2>
      <ul>
        <li>can speak Vietnamese, English and Danish.</li>
        <li>love to sit in lotus position anywhere I can.</li>
      </ul>
    </Document>
  );
}
export default About;
