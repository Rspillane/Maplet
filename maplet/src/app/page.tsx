"use client"
// import Image from "next/image";
import styles from "./page.module.css";
import Map from "./components/Map";
import Gallery from "./components/Gallery";


export default function Home() {
  return (
    <main className={styles.main}>
          <Gallery />
          <Map />
    </main>
  );
}
