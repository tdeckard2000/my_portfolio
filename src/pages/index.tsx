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
      title: 'Meter Wiring Guide',
      image: 'https://raw.githubusercontent.com/tdeckard2000/wiringGuide/main/images/Example.png',
      imageAdjustments: {objectPosition: "-5px -48px", width: '532px'},
      description: '',
      pageLink: ''
    },
    {
      title: 'Yolo Logan!',
      image: 'https://raw.githubusercontent.com/tdeckard2000/YoloLogan/master/images/example.png',
      imageAdjustments: {objectPosition: "-54px 10px", width: '379px'},
      description: '',
      pageLink: ''
    },
    {
      title: 'Ted Counter',
      image: 'https://raw.githubusercontent.com/tdeckard2000/TedCounter/master/IMG_0729.jpg',
      imageAdjustments: {objectPosition: "-4px -44px", width: '356px'},
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      pageLink: ''
    },
    {
      title: 'Support Ticket Dashboard',
      image: 'https://raw.githubusercontent.com/tdeckard2000/Support-Ticket-Dashboard/master/images/example.png',
      imageAdjustments: {objectPosition: "-17px -3px", width: '537px'},
      description: '',
      pageLink: ''
    },
    {
      title: 'Rate-A-Coworker 2.0',
      image: 'https://media.istockphoto.com/id/1303510161/photo/abstract-empty-room.jpg?s=612x612&w=0&k=20&c=tfKPp0pwOyXNvuRZwWryADl9jdtEFltX2Cc-C2qFfY8=',
      imageAdjustments: {objectPosition: "-27px 1px", width: '330px'},
      description: '',
      pageLink: ''
    },
    {
      title: 'Fancy To-Do List',
      image: 'https://media.istockphoto.com/id/1303510161/photo/abstract-empty-room.jpg?s=612x612&w=0&k=20&c=tfKPp0pwOyXNvuRZwWryADl9jdtEFltX2Cc-C2qFfY8=',
      imageAdjustments: {objectPosition: "-27px 1px", width: '330px'},
      description: '',
      pageLink: ''
    },
    {
      title: 'Simon Says Game',
      image: 'https://media.istockphoto.com/id/1303510161/photo/abstract-empty-room.jpg?s=612x612&w=0&k=20&c=tfKPp0pwOyXNvuRZwWryADl9jdtEFltX2Cc-C2qFfY8=',
      imageAdjustments: {objectPosition: "-27px 1px", width: '330px'},
      description: '',
      pageLink: ''
    },
    {
      title: 'Portfolio Site',
      image: 'https://media.istockphoto.com/id/1303510161/photo/abstract-empty-room.jpg?s=612x612&w=0&k=20&c=tfKPp0pwOyXNvuRZwWryADl9jdtEFltX2Cc-C2qFfY8=',
      imageAdjustments: {objectPosition: "-27px 1px", width: '330px'},
      description: "You're looking at it. Just a confirmation that I did indeed make this.",
      pageLink: ''
    }
  ];

  const electronicProjects = [
    {
      title: 'Rex',
      image: 'rex.GIF',
      imageAdjustments: {objectPosition: "-52px -3px", width: '400px'},
      description: '',
      pageLink: ''
    },
    {
      title: 'Knock to Unlock',
      image: 'https://raw.githubusercontent.com/tdeckard2000/door_knock_unlock_arduino/main/images/IMG_7573.jpeg',
      imageAdjustments: {objectPosition: "-33px 1px", width: '309px'},
      description: '',
      pageLink: ''
    },
    {
      title: 'Cat Fan Deterrent',
      image: 'https://raw.githubusercontent.com/tdeckard2000/cat_fan_deterrent/main/Images/6.jpg',
      imageAdjustments: {objectPosition: "-33px 1px", width: '309px'},
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
            <span>Contact</span>
          </div>
          <div className={styles.blockWebDev} id="blockWebDev">
            <div className={styles.blockTitle}>Web Development</div>
            {webDevelopmentProjects.map((project) =>
              <Fragment key={project.title}>
                <div className={styles.blockContainer}>
                  <div className={styles.blockImageContainer}>
                    <img className={styles.blockImage} style={project.imageAdjustments} src={project.image} alt="" />
                  </div>
                  <div className={styles.blockRightColumn}>
                    <div style={{fontSize: '24px', margin: '30px 0'}}>{project.title}</div>
                    <p>{project.description}</p>
                  </div>
                </div>
              </Fragment>
            )}
          </div>
          <div className={styles.blockWebDev} id="blockElectronics">
            <div className={styles.blockTitle}>Electronics</div>
            {electronicProjects.map((project) =>
              <Fragment key={project.title}>
                <div className={styles.blockContainer}>
                  <div className={styles.blockImageContainer}>
                    <img className={styles.blockImage} style={project.imageAdjustments} src={project.image} alt="" />
                  </div>
                  <div className={styles.blockRightColumn}>
                    <div style={{fontSize: '24px', margin: '30px 0'}}>{project.title}</div>
                    <p>{project.description}</p>
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