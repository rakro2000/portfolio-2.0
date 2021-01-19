import styles from "./Footer.module.scss";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright © {year} Rachel Vo</p>
    </footer>
  );
}

export default Footer;
