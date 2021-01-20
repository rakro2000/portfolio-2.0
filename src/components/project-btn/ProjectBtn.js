import styles from "./ProjectBtn.module.scss";
import { useMediaQuery } from "react-responsive";

function ProjectBtn(props) {
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });

  const containerStyle = {
    height: "243px",
    width: "250px",
    display: "grid",
    gridTemplateRows: "75% 25%",
    gap: "2px",
    cursor: "pointer",
    userSelect: "none",
    margin: isMobile ? "0 0 2rem 0" : "unset",
  };

  return (
    <button
      style={containerStyle}
      className={"btn default rounded label " + props.className}
      onClick={props.onClick}
    >
      <figure className={styles.frame}>
        <img src={props.projectImg} alt={props.altText} />
      </figure>
      <h2 className={"display-5 " + styles.projectName}>{props.projectName}</h2>
    </button>
  );
}

export default ProjectBtn;
