import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { webDevelopmentProjects, electronicProjects, modelingProjects, videoProjects } from "@/data/project_data";

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
      [
        element?.querySelector("#blockWebDev") as HTMLDivElement,
        element?.querySelector("#blockWebDevTitle") as HTMLDivElement
      ],
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

  useEffect(() => {
    const element = ref.current;
    console.log(element);
    gsap.fromTo(
      [
        element?.querySelector("#blockElectronics") as HTMLDivElement,
        element?.querySelector("#blockElectronicsTitle") as HTMLDivElement
      ],
      {
        opacity: 0,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element?.querySelector("#blockElectronics"),
          start: "top 90%",
          end: 'top 20%',
          scrub: true,
        },
      }
    );
  }, []);

  useEffect(() => {
    const element = ref.current;
    console.log(element);
    gsap.fromTo(
      [
        element?.querySelector("#blockModeling") as HTMLDivElement,
        element?.querySelector("#blockModelingTitle") as HTMLDivElement
      ],
      {
        opacity: 0,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element?.querySelector("#blockModeling"),
          start: "top 90%",
          end: 'top 20%',
          scrub: true,
        },
      }
    );
  }, []);

  useEffect(() => {
    const element = ref.current;
    console.log(element);
    gsap.fromTo(
      [
        element?.querySelector("#blockVideo") as HTMLDivElement,
        element?.querySelector("#blockVideoTitle") as HTMLDivElement
      ],
      {
        opacity: 0,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element?.querySelector("#blockVideo"),
          start: "top 90%",
          end: 'top 20%',
          scrub: true,
        },
      }
    );
  }, []);

  useEffect(() => {
    const element = ref.current;
    console.log(element);
    gsap.fromTo(
      [
        element?.querySelector("#blockResume") as HTMLDivElement,
        element?.querySelector("#blockResumeTitle") as HTMLDivElement
      ],
      {
        opacity: 0,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element?.querySelector("#blockResume"),
          start: "top 90%",
          end: 'top 20%',
          scrub: true,
        },
      }
    );
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
            <a style={{ textDecoration: 'none' }} href="#blockWebDevTitle"><span>Web</span></a>
            <a style={{ textDecoration: 'none' }} href="#blockElectronicsTitle"><span>Electronics</span></a>
            <a style={{ textDecoration: 'none' }} href="#blockModelingTitle"><span>3D Modeling</span></a>
            <a style={{ textDecoration: 'none' }} href="#blockVideoTitle"><span>Video</span></a>
            <a style={{ textDecoration: 'none' }} href="#blockResumeTitle"><span>Resume</span></a>
          </div>
          <div className={styles.blockTitle} id="blockWebDevTitle">Web Development</div>
          <div id="blockWebDev">
            {webDevelopmentProjects.map((project) =>
              <Fragment key={project.title}>
                <div className={styles.blockContainer}>
                  <div className={styles.blockImageContainer}>
                    <img className={styles.blockImage} style={project.imageAdjustments} src={project.image} alt="" />
                  </div>
                  <div className={styles.blockRightColumn}>
                    <div style={{ fontSize: '24px', margin: '30px 0' }}>{project.title}</div>
                    <p>{project.description}</p>
                  </div>
                </div>
              </Fragment>
            )}
          </div>
          <div className={styles.blockDivider}></div>
          <div className={styles.blockTitle} id="blockElectronicsTitle">Electronics</div>
          <div id="blockElectronics">
            {electronicProjects.map((project) =>
              <Fragment key={project.title}>
                <div className={styles.blockContainer}>
                  <div className={styles.blockImageContainer}>
                    <img className={styles.blockImage} style={project.imageAdjustments} src={project.image} alt="" />
                  </div>
                  <div className={styles.blockRightColumn}>
                    <div style={{ fontSize: '24px', margin: '30px 0' }}>{project.title}</div>
                    <p>{project.description}</p>
                  </div>
                </div>
              </Fragment>
            )}
          </div>
          <div className={styles.blockDivider}></div>
          <div className={styles.blockTitle} id="blockModelingTitle">3D Modeling</div>
          <div id="blockModeling">
            {modelingProjects.map((project) =>
              <Fragment key={project.title}>
                <div className={styles.blockContainer}>
                  <div className={styles.blockImageContainer}>
                    <img className={styles.blockImage} style={project.imageAdjustments} src={project.image} alt="" />
                  </div>
                  <div className={styles.blockRightColumn}>
                    <div style={{ fontSize: '24px', margin: '30px 0' }}>{project.title}</div>
                    <p>{project.description}</p>
                  </div>
                </div>
              </Fragment>
            )}
          </div>
          <div className={styles.blockDivider}></div>
          <div className={styles.blockTitle} id="blockVideoTitle">Video</div>
          <div id="blockVideo">
            {videoProjects.map((project) =>
              <Fragment key={project.title}>
                <div className={styles.blockContainer}>
                  <div className={styles.blockImageContainer}>
                    <img className={styles.blockImage} style={project.imageAdjustments} src={project.image} alt="" />
                  </div>
                  <div className={styles.blockRightColumn}>
                    <div style={{ fontSize: '24px', margin: '30px 0' }}>{project.title}</div>
                    <p>{project.description}</p>
                  </div>
                </div>
              </Fragment>
            )}
          </div>
          <div className={styles.blockDivider}></div>
          <div className={styles.blockTitle} id="blockResumeTitle">Resume</div>
          <div id="blockResume">
            <div className={styles.contactSection}>
              <h1>Trent Deckard</h1>
              <div>
                <h3>Contact</h3>
                <a href="tel:+8123605563">812-360-5563</a>
                <a href="mailto: tredeckard@gmail.com">tredeckard@gmail.com</a>
              </div>
              <div>
                <h3>Social Media</h3>
                <div className={styles.socialLinks}>
                  <a href="http://linkedin.com/in/trentdeckard" target="_blank">LinkedIn <img src="icon_new_window.svg" className={styles.iconNewWindow} /></a>
                  <a href="https://github.com/tdeckard2000" target="_blank">GitHub <img src="icon_new_window.svg" className={styles.iconNewWindow} /></a>
                  <a href="http://youtube.com/interestingted" target="_blank">YouTube <img src="icon_new_window.svg" className={styles.iconNewWindow}/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}