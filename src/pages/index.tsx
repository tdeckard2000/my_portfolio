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

  const onCopy = (value: string) => {
    const element = ref.current;
    const notificationCopy = element?.querySelector("#notificationCopy") as HTMLDivElement;
    notificationCopy?.classList.remove(styles.modalHide);
    navigator.clipboard.writeText(value);
    setTimeout(() => {
      notificationCopy.classList.add(styles.modalHide)
    }, 1000)
  }

  const showById = (elementId: string) => {
    const element = ref.current;
    const target = element?.querySelector("#"+elementId) as HTMLElement;
    console.log("target: ", target)
  }

  const hideById = (elementId: string) => {
    const element = ref.current;
    const target = element?.querySelector("#"+elementId) as HTMLElement;
    console.log("end: ", target)
  }

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
        <div className={styles.notificationCopy + ' ' + styles.modalHide} id="notificationCopy">
          Copied
        </div>
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
              <h1 className={styles.linkHover} style={{ left: '13px', position: 'relative' }} onClick={() => { onCopy("Hi Trent Deckard. Let's set up an interview! 🪤") }}>Trent Deckard <img src="icon_copy.svg" className={styles.iconNewWindow} style={{ marginBottom: '6px' }} /></h1>
              <div className={styles.socialLinks}>
                <h3>Contact</h3>
                <div className={styles.contactLinks}>
                  <div className={styles.linkHover} onClick={() => { onCopy("812-360-5563") }}>812-360-5563 <img src="icon_copy.svg" className={styles.iconNewWindow} /></div>
                  <div className={styles.linkHover} onClick={() => { onCopy("tredeckard@gmail.com") }}>tredeckard@gmail.com <img src="icon_copy.svg" className={styles.iconNewWindow} /></div>
                </div>
              </div>
              <div>
                <h3>Social Media</h3>
                <div className={styles.socialLinks}>
                  <a className={styles.linkHover} href="http://linkedin.com/in/trentdeckard" target="_blank" rel="noreferrer">LinkedIn <img src="icon_new_window.svg" className={styles.iconNewWindow} /></a>
                  <a className={styles.linkHover} href="https://github.com/tdeckard2000" target="_blank" rel="noreferrer">GitHub <img src="icon_new_window.svg" className={styles.iconNewWindow} /></a>
                  <a className={styles.linkHover} href="http://youtube.com/interestingted" target="_blank" rel="noreferrer">YouTube <img src="icon_new_window.svg" className={styles.iconNewWindow} /></a>
                </div>
              </div>
            </div>
            <div className={styles.resumeSection}>
              <div className={styles.resumeContainer}>
                <div>
                  <img className={styles.resumeImage} src="Web_Resume.png" alt="My Web Developer Resume" />
                  <img className={styles.resumeOpenIcon} src="icon_new_window.svg" alt="" />
                  <div className={styles.resumeTitle}>Web Developer Resume</div>
                </div>
                <div>
                  <img onMouseEnter={() => showById("fullResumeIcon")} onMouseLeave={() => hideById("fullResumeIcon")} className={styles.resumeImage} src="Full_Resume.png" alt="My Full Resume" />
                  <img className={styles.resumeOpenIcon} id="fullResumeIcon" src="icon_new_window.svg" alt="" />
                  <div className={styles.resumeTitle}>All Inclusive Resume</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}