import React, { FC } from "react";
import styles from "../styles/Featured.module.scss";
import { Tea } from "../types/Tea";
import { FeaturedItem } from "./FeaturedItem";

interface IFeatured {
  items: Tea[];
}

export const Featured: FC<IFeatured> = ({ items }) => {
  return (
    <div id="featured" className={styles.featured}>
      <div className={styles.featured__header}>
        <h2>Tea of the month</h2>
        <h4>What&apos;s Steeping at the Tea Cozy?</h4>
      </div>
      <div className={styles.featured__items}>
        {items.map((item, i) => (
          <FeaturedItem key={i} title={item.title} src={item.src} />
        ))}
      </div>
    </div>
  );
};
