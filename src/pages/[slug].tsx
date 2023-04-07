import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import NavBar from "~/components/NavBar";
import SideModal from "~/components/SideModal";

import { api } from "~/utils/api";
import ProductCard from "~/components/ProductCard";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="CRM Furniture" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Delicious+Handrawn&family=Titillium+Web:wght@200&display=swap" rel="stylesheet"></link>
      </Head>
      <main className="font-titillium-web text-3xl" style={{ "height": "1000px" }}>

        <NavBar></NavBar>
        <div className="p-5 grid grid-cols-4 gap-4">
          123
        </div>
      </main>
    </>
  );
};

export default Home;
