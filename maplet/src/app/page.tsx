"use client"
// import Image from "next/image";
import styles from "./page.module.css";
import Map from "./components/Map";
import Gallery from "./components/Gallery";
import DragMap from "./components/DragMap";


export default function Home() {
  return (
    <main className={styles.main}>
          <Gallery />
          <Map />
    </main>
  );
}
