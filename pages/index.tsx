import type { NextPage } from "next";
import Head from "next/head";
import { Contact } from "../components/Contact";
import { Featured } from "../components/Featured";
import { Locations } from "../components/Locations";
import { Mission } from "../components/Mission";
import { Nav } from "../components/Nav";
import { getLocationsItems } from "../services/getLocationsItems";
import { getTeaKinds } from "../services/getTeaKinds";

const Home: NextPage = () => {
  const navItems = ["Mission", "Featured Tea", "Locations"];
  const teaKinds = getTeaKinds();
  const locationsItems = getLocationsItems();

  return (
    <>
      <Head>
        <title>The Cozy</title>
      </Head>
      <Nav items={navItems} />
      <main>
        <Mission />
        <Featured items={teaKinds} />
        <Locations items={locationsItems} />
        <Contact />
      </main>
    </>
  );
};

export default Home;
