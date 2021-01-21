import styles from "../header/Header.module.scss";

import menuItems from "../routes/menu-list.json";
import { useMediaQuery } from "react-responsive";
import { Link, useHistory, useLocation } from "react-router-dom";

import { ReactSVG } from "react-svg";
import VoLogo from "../../assets/vo-logo-copy.svg";
import BurgerMenu from "../burgermenu/BurgerMenu";

function Header() {
  const isBigScreen = useMediaQuery({ query: "(min-width: 991.98px)" });
  const history = useHistory();
  const location = useLocation(); // to get current url in browser window

  return (
    <header>
      {/* Show side logo on other pages, not on landing page */}
      {location && location.pathname !== "/" ? (
        <ReactSVG
          src={VoLogo}
          className={styles.logoWrapper}
          afterInjection={(error, svg) => {
            if (error) {
              console.error(error);
              return;
            }
          }}
          onClick={() => {
            history.push("/");
          }}
        />
      ) : (
        <div></div>
      )}

      {!isBigScreen && <BurgerMenu />}
      {isBigScreen && (
        <ul>
          {menuItems.map((item, i) => (
            <li key={i}>
              <Link
                key={i}
                to={item.path}
                children={item.name}
                className={
                  "btn rounded label " +
                  (location.pathname === item.path ? "pressed " : "default ")
                }
                style={{
                  color: location.pathname === item.path && "#989898",
                }}
              />
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export default Header;
