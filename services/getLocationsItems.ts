import { Location } from "../types/Location";

export function getLocationsItems(): Location[] {
    return [
        {
          name: "Downtown",
          address: "384 West 4th St.",
          apartment: "Suite 108",
          city: "Portland, Main"
        },
        {
          name: "East Bayside",
          address: "3433 Phisherman's Avenue",
          apartment: "(Northwest Corner)",
          city: "Portland, Main"
        },
        {
          name: "Oakdale",
          address: "515 Crescent Avenue",
          apartment: "Second Floor",
          city: "Portland, Main"
        },
      ]
}