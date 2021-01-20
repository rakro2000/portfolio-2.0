import styles from "./BurgerMenu.module.scss";

import React, { useState, useRef } from "react";
import menuItems from "../routes/menu-list.json";
import { Link, useLocation } from "react-router-dom";

function BurgerMenu() {
  const location = useLocation();
  const bar1 = useRef(null);
  const bar2 = useRef(null);
  const bar3 = useRef(null);
  const bars = useRef(null);

  const [open, setOpen] = useState(false);
  const toggleOpenMenu = () => {
    setOpen(!open);
    animateBars();
  };
  const closeMenu = () => {
    setOpen(!open);
    animateBars();
  };

  const animateBars = () => {
    console.log(!open); //true
    if (!open) {
      //transform burgermenu icon
      bar1.current.style.transform = "rotate(135deg) translate(5px, -6px)";
      bar2.current.style.opacity = "0";
      bar2.current.style.left = "-60px";
      bar3.current.style.transform = "rotate(-135deg) translate(3px, 4px)";
    } else {
      //remove transformation
      bar1.current.style.transform = "unset";
      bar2.current.style.opacity = "unset";
      bar2.current.style.left = "unset";
      bar3.current.style.transform = "unset";
    }
  };

  // Wrapper component for all items
  const MenuList = ({ children, open }) => {
    const content = open && <>{children}</>;
    return content;
  };

  return (
    <nav>
      <button
        ref={bars}
        className={
          styles.bars + " btn rounded label " + (open ? "pressed" : "default")
        }
        onClick={toggleOpenMenu}
      >
        <span ref={bar1} className={styles.bar}></span>
        <span ref={bar2} className={styles.bar}></span>
        <span ref={bar3} className={styles.bar}></span>
      </button>

      <MenuList open={open}>
        <div className={styles.menuList + (open && " slideLeft")}>
          <ul>
            {open &&
              menuItems.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    children={item.name}
                    onClick={closeMenu}
                    style={{
                      color: item.path === location.pathname && "#ebe6df",
                    }}
                  />
                </li>
              ))}

            {location && location.pathname !== "/" ? (
              <li>
                <Link
                  to="/"
                  children="⌞Back to home"
                  className="secondary"
                  style={{ textTransform: "unset" }}
                />
              </li>
            ) : (
              <h5 className={"display-5 "}>Rachel Vo's portfolio</h5>
            )}
          </ul>
        </div>
      </MenuList>
    </nav>
  );
}

export default BurgerMenu;
