import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
// import { ScrollTrigger } from "../../node_modules/gsap/ScrollTrigger";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef<HTMLDivElement>(null);
  const [yPosition, setYPosition] = useState(0);

  useEffect(() => {
    const scroll = () => {
      const { pageYOffset } = window;
      setYPosition(pageYOffset);
    };
    document.addEventListener("scroll", scroll);
    () => document.removeEventListener("scroll", scroll);
  }, []);

  useEffect(() => {
    const element = ref.current;
    console.log(element);
    gsap.fromTo(
      element?.querySelector("#blockWebDev") as HTMLDivElement,
      {
        opacity: 0,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element?.querySelector(".titleBottom"),
          start: "top top",
          end: "bottom center",
          scrub: true,
        },
      }
    );
  }, []);

  const webDevelopmentProjects = [
    {
      title: 'Ted Counter',
      image: 'https://raw.githubusercontent.com/tdeckard2000/TedCounter/master/IMG_0726.jpg',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      pageLink: ''
    },
    {
      title: 'Meter Wiring Guide',
      image: 'https://raw.githubusercontent.com/tdeckard2000/TedCounter/master/IMG_0726.jpg',
      description: '',
      pageLink: ''
    },
    {
      title: 'Yolo Logan',
      image: 'https://raw.githubusercontent.com/tdeckard2000/TedCounter/master/IMG_0726.jpg',
      description: '',
      pageLink: ''
    }
  ]

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
      <main ref={ref} className={styles.allPage}>
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
          <div className={styles.navContainerDesktop}
            style={{ bottom: yPosition / 4 + "px" }}>
            <span>Web</span>
            <span>Electronics</span>
            <span>Modeling</span>
            <span>Video</span>
            <span>Random</span>
            <span>Contact</span>
          </div>
          <div className={styles.blockWebDev} id="blockWebDev">
            <div className={styles.blockTitle}>Web Development</div>
            {webDevelopmentProjects.map((project) =>
              <Fragment key={project.title}>
                <div className={styles.blockContainer}>
                  <div>
                    <img className={styles.blockImage} src={project.image} alt="" />
                  </div>
                  <div className={styles.blockRightColumn}>
                    <p>{project.title}</p>
                    <div>{project.description}</div>
                  </div>
                </div>
              </Fragment>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

/* <div className={styles.contactSection}>
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
          </div> */