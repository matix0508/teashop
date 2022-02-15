import React, { FC } from "react";
import { Location } from "../types/Location";
import { LocationsItem } from "./LocationsItem";

interface ILocations {
  items: Location[];
}

export const Locations: FC<ILocations> = ({ items }) => {
  return (<>
  {items.map((item, i) => (<LocationsItem key={i} item={item} />))}
  </>);
};
