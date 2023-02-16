import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const [mobileHeaderOffset, setMobileHeaderOffset] = useState("0");
  // const [desktopHeaderOffset, setDesktopHeaderOffset] = useState("0");
  const [yPosition, setYPosition] = useState(0);
  useEffect(() => {
    const scroll = () => {
      const { pageYOffset } = window;
      setYPosition(pageYOffset);
      // setMobileHeaderOffset(pageYOffset / 3 + "px");
      // setDesktopHeaderOffset(pageYOffset / 2.6 + "px");
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
              style={{ bottom: yPosition / 2.6 + "px" }}
              className={styles.headshotFaded}
              src="/me_faded_side.jpg"
              alt=""
            />
            <img
              style={{ top: yPosition / 3 + "px" }}
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
            className={styles.navContainerDesktop}
            style={{ bottom: yPosition / 4 + "px" }}
          >
            <span>Web</span>
            <span>Electronics</span>
            <span className={styles.buttonModeling}>Modeling</span>
            <span>Video</span>
            <span>Random</span>
            <span className={styles.buttonContact}>Contact</span>
          </div>
          {/* <div className={styles.contactSection}>
            <h1>Trent Deckard</h1>
            <div>
              <h3>Contact</h3>
              <a href="tel:+8123605563">812.360.5563</a>
              <a href="mailto: tredeckard@gmail.com">tredeckard@gmail.com</a>
            </div>
            <div>
              <h3>Social Media</h3>
              <a href="http://linkedin.com/in/trentdeckard">LinkedIn</a>
              <a href="https://github.com/tdeckard2000">GitHub</a>
              <a href="http://youtube.com/interestingted">YouTube</a>
            </div>
          </div> */}
        </div>
      </main>
    </>
  );
}
