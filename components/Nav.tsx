import React, { FC } from "react";
import Image from "next/image";
import styles from "../styles/Nav.module.scss";

interface INav {
  items: string[];
}

export const Nav: FC<INav> = ({ items }) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__logo}>
        <Image
          width={"264"}
          height={"84"}
          layout="intrinsic"
          src="/images/logo.webp"
          alt="logo"
        />
      </div>

      <ul className={styles.nav__items}>
        {items.map((item, i) => (
          <li key={i} className={styles.nav__items__item}>
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};
