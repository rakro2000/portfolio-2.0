import styles from "./Contact.module.scss";

import React, { useState } from "react";

import { ReactSVG } from "react-svg";
import MailIcon from "../../assets/envelope-solid.svg";
import LinkedInIcon from "../../assets/linkedin-brands.svg";
import GitHubIcon from "../../assets/github-brands.svg";

function Contact() {
  const [toEmail, setToEmail] = useState(false);
  const [toLinkedIn, setToLinkedIn] = useState(false);
  const [toGithub, setToGithub] = useState(false);

  const clickEmail = () => {
    setToEmail(!toEmail);
  };
  const clickLinkedIn = () => {
    setToLinkedIn(!toLinkedIn);
  };
  const clickGithub = () => {
    setToGithub(!toGithub);
  };

  return (
    <main className={styles.contactPage + " fadeIn"}>
      <section className={styles.colLeft}>
        <h1 className={"display-2"}>Thank you for visiting my portfolio!</h1>
      </section>

      <section className={styles.colRight}>
        <article>
          <h2 className="display-4" style={{ textAlign: "left" }}>
            If you have any queries, please send an email by clicking here
          </h2>
          <ul>
            <li>
              <a
                href="mailto:rachelhd.vo@gmail.com"
                className={
                  styles.contactLinks +
                  " btn rounded label" +
                  (toEmail ? " pressed " : " default ")
                }
                style={{ color: toEmail && "#989898" }}
                onClick={clickEmail}
              >
                <ReactSVG
                  src={MailIcon}
                  className={styles.icon}
                  afterInjection={(error, svg) => {
                    if (error) {
                      console.error(error);
                      return;
                    }
                  }}
                />
                Email
              </a>
            </li>
          </ul>
        </article>

        <article>
          <h2 className="display-4" style={{ textAlign: "left" }}>
            Social media and platforms:
          </h2>
          <ul className={styles.soMeList}>
            <li>
              <a
                href="https://www.linkedin.com/in/rachel-v-1805ab166/"
                className={
                  styles.contactLinks +
                  " btn rounded label" +
                  (toLinkedIn ? " pressed " : " default ")
                }
                style={{ color: toLinkedIn && "#989898" }}
                onClick={clickLinkedIn}
              >
                <ReactSVG src={LinkedInIcon} className={styles.icon} />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/rachelhdvo0727"
                className={
                  styles.contactLinks +
                  " btn rounded label" +
                  (toGithub ? " pressed " : " default ")
                }
                onClick={clickGithub}
                style={{ color: toGithub && "#989898" }}
              >
                <ReactSVG src={GitHubIcon} className={styles.icon} />
                Github
              </a>
            </li>
          </ul>
        </article>
      </section>
    </main>
  );
}
export default Contact;
