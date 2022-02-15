import React, { FC } from "react";
import { Location } from "../types/Location";

interface ILocationsItem {
  item: Location;
}

export const LocationsItem: FC<ILocationsItem> = ({ item }) => {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>{item.address}</p>
      <p>{item.apartment}</p>
      <p>{item.city}</p>
    </div>
  );
};
