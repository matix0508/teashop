import React, { FC } from "react";
import styles from "../styles/Featured.module.scss";

export const Featured:FC = ({children}) => {
  return (
    <div id="featured" className={styles.featured}>
      <div className={styles.featured__header}>
        <h2>Tea of the month</h2>
        <h4>What&apos;s Steeping at the Tea Cozy?</h4>
      </div>
      <div className={styles.featured__items}>
          {children}
      </div>
    </div>
  );
};
