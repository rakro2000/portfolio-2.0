import styles from "./Document.module.scss";

function Document(props) {
  return (
    <main className={styles.document + " fadeIn " + props.docStyle}>
      {/* <h1 className={"display-1 " + props.h1Style}>{props.title}</h1> */}
      <div className={props.titleStyle}>{props.title}</div>
      <img className={props.imgStyles} src={props.imgSrc} alt={props.imgAlt} />

      <article className={styles.content}>
        <h2 className={"display-2 " + props.h2Style}>{props.articleTitle}</h2>
        {props.children}
      </article>
    </main>
  );
}
export default Document;
