import type { NextPage } from "next";
import Head from "next/head";
import { Featured } from "../components/Featured";
import { Mission } from "../components/Mission";
import { Nav } from "../components/Nav";
import { Tea } from "../types/Tea";

const Home: NextPage = () => {
  const navItems = ["Mission", "Featured Tea", "Locations"];
  const teaKinds: Tea[] = [
    {
      title: "Fall Berry Blitz Tea",
      src: "/images/img-berryblitz.webp"
    },
    {
      title: "Spiced Rum Tea",
      src: "/images/img-spiced-rum.jpg"
    },
    {
      title: "Seasonal Donuts",
      src: "/images/img-donut.jpg"
    },
    {
      title: "Myrtle Ave Tea",
      src: "/images/img-myrtle-ave.webp"
    },
    {
      title: "Bedford Bizarre Tea",
      src: "/images/img-bedford-bizarre.jpg"
    }

  ]

  return (
    <>
      <Head>
        <title>The Cozy</title>
      </Head>
      <Nav items={navItems} />
      <main>
        <Mission />
        <Featured items={teaKinds}/>
      </main>
    </>
  );
};

export default Home;
