import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Trent Endeavors</title>
        <meta
          name="description"
          content="All about Trent's attempts to make interesting things."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.headerContainer}>
          <div className={styles.headshotContainer}>
            <img className={styles.headshotFaded} src="/me_arms_out_faded.jpg" alt="" />
            <img className={styles.headshot} src="/me_faded_bottom.jpg" alt="" />
          </div>
          <div className={styles.titleContainer}>
            <h4 className={styles.titleTop}>Trent</h4>
            <h4 className={styles.titleBottom}>Endeavors</h4>
            <div>
            <p className={styles.titleParagraph}>
              A not-so comprehensive list of my Web Dev, Electronic, 3D
              Modeling, iOS Native, and Video projects.
            </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
