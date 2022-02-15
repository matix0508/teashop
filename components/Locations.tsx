import React, { FC } from "react";
import { Location } from "../types/Location";
import { LocationsItem } from "./LocationsItem";
import styles from "../styles/Locations.module.scss";

interface ILocations {
  items: Location[];
}

export const Locations: FC<ILocations> = ({ items }) => {
  return (
    <div className={styles.locations}>
      <h2>Locations</h2>
      <div className={styles.locations__items}>
        {items.map((item, i) => (
          <LocationsItem key={i} item={item} />
        ))}
      </div>
    </div>
  );
};
