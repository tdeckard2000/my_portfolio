import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [mobileHeaderOffset, setMobileHeaderOffset] = useState("0");
  const [desktopHeaderOffset, setDesktopHeaderOffset] = useState("0");
  useEffect(() => {
    const scroll = () => {
      const { pageYOffset } = window;
      setMobileHeaderOffset(pageYOffset / 3 + "px");
      setDesktopHeaderOffset(pageYOffset / 2.6 + "px");
    };
    document.addEventListener("scroll", scroll);
    () => document.removeEventListener("scroll", scroll);
  }, []);

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
            <img
              style={{ bottom: desktopHeaderOffset }}
              className={styles.headshotFaded}
              src="/me_faded_side.jpg"
              alt=""
            />
            <img
              style={{ top: mobileHeaderOffset }}
              className={styles.headshot}
              src="/me_faded_bottom.jpg"
              alt=""
            />
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
        <div className={styles.body}>
          <div
            className={styles.navContainerDesktop}>
            <span>Contact</span>
            <span>Web</span>
            <span>Electronics</span>
            <span className={styles.buttonModeling}>Modeling</span>
            <span>Video</span>
            <span>More</span>
          </div>
          <div className={styles.contactSection}>Contact Me</div>
        </div>
      </main>
    </>
  );
}
