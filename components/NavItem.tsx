import React, { FC } from "react";
import styles from "../styles/Nav.module.scss";

interface INavItem {
  item: string;
}

function getID(item: string) {
  return "#" + item.split(" ")[0].toLowerCase();
}

export const NavItem: FC<INavItem> = ({ item }) => {
  return (
    <li className={styles.nav__items__item}>
      <a href={getID(item)}>{item}</a>
    </li>
  );
};
