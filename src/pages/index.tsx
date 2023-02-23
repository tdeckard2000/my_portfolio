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
  const [currentFlippedBlock, setCurrentFlippedBlock] = useState<null | string>(null);
  const [currentMobileDescription, setCurrentMobileDescription] = useState<null | string>(null);

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
    const target = element?.querySelector("#" + elementId) as HTMLElement;
    target.style.visibility = "visible";
  }

  const hideById = (elementId: string) => {
    const element = ref.current;
    const target = element?.querySelector("#" + elementId) as HTMLDivElement;
    target.style.visibility = "hidden";
  }

  const flipBlock = (blockId: string) => {
    const element = ref.current;
    if (currentFlippedBlock) {
      const target = element?.querySelector("#" + currentFlippedBlock);
      target?.classList.remove(styles.blockIsFlipped);
      setCurrentFlippedBlock(null);
    }
    const newBlockClicked = blockId !== currentFlippedBlock;
    if (newBlockClicked) {
      element?.querySelector("#" + blockId)?.classList.add(styles.blockIsFlipped);
      setCurrentFlippedBlock(blockId);
    }
  }

  const toggleMobileDescription = (descriptionId: string) => {
    const element = ref.current;
    if (currentMobileDescription) {
      //hide description
      element?.querySelector("#" + currentMobileDescription)?.classList.add(styles.noWrap);
      setCurrentMobileDescription(null);
    }
    const newDescriptionClicked = descriptionId !== currentMobileDescription;
    if (newDescriptionClicked) {
      //show description
      const target = element?.querySelector("#" + descriptionId);
      target?.classList.remove(styles.noWrap);
      setCurrentMobileDescription(descriptionId);
    }
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
          trigger: element?.querySelector(".titleTop"),
          start: "top top",
          end: "350",
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

  useEffect(() => {
    const element = ref.current;
    gsap.to(
      [
        element?.querySelector("#mobileDirections") as HTMLDivElement,
      ],
      {
        opacity: 0,
        y: 20,
        scrollTrigger: {
          trigger: element?.querySelector("#mobileDirections"),
          start: "top 50%",
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

          <div id="mobileDirections" className={styles.mobileDirections}>
            <div>Tap Image or Description to learn more</div>
            <img className={styles.mobileDirectionsArrow} src="arrow_down.svg" alt="" />
          </div>

          <div className={styles.navContainerDesktop}
            style={{ bottom: yPosition / 4 + "px" }}>
            <a style={{ textDecoration: 'none' }} href="#blockWebDevTitle"><span>Web</span></a>
            <a style={{ textDecoration: 'none' }} href="#blockElectronicsTitle"><span>Electronics</span></a>
            <a style={{ textDecoration: 'none' }} href="#blockModelingTitle"><span>3D Modeling</span></a>
            <a style={{ textDecoration: 'none' }} href="#blockVideoTitle"><span>Video</span></a>
            <a style={{ textDecoration: 'none' }} href="#blockResumeTitle"><span>Resume</span></a>
          </div>


          {/* ----- Web Development ----- */}
          <div className={styles.blockTitle} id="blockWebDevTitle">Web Development</div>
          <div id="blockWebDev">
            { webDevelopmentProjects.map((project, index) =>
              <Fragment key={project.title}>
                <div style={{perspective: '1000px'}}>
                  <div onClick={() => flipBlock('web' + index)} id={"web" + index} className={styles.blockContainer}>
                    <div className={styles.blockFront}>
                      <div className={styles.blockImageContainer}>
                        <img className={styles.blockImage} style={project.imageAdjustments} src={project.image} alt="" />
                      </div>
                      <div className={styles.blockRightColumn}>
                        <div style={{ fontSize: '20px', margin: '20px 0' }}>{project.title}</div>
                        <p className={styles.blockDescription}>{project.description}</p>
                      </div>
                    </div>
                    <div className={styles.blockBack}>
                      { project.links?.map((link) => 
                        <a className={styles.blockBackButton} target="_blank" rel="noreferrer" style={{color: 'black', textDecoration: 'none'}} href={link.url} >{link.name}</a>
                      )}
                      <div style={{color: 'white', display: project.links?.length ? 'none' : 'initial'}}>Sorry, no content yet.</div>
                    </div>
                  </div>
                </div>
                <div className={styles.mobileProjectTitle}>{project.title}</div>
                <div onClick={() => toggleMobileDescription("webD" + index)} id={"webD" + index} 
                className={styles.mobileProjectDescription + ' ' + styles.noWrap}>{project.description}</div>
              </Fragment>
            )}
          </div>
          <div className={styles.blockDivider}></div>

          {/* ----- Electronics ----- */}
          <div className={styles.blockTitle} id="blockElectronicsTitle">Electronics</div>
          <div id="blockElectronics">
            { electronicProjects.map((project, index) =>
              <Fragment key={project.title}>
                  <div style={{perspective: '1000px'}}>
                    <div onClick={() => flipBlock('electronics' + index)} id={"electronics" + index} className={styles.blockContainer}>
                      <div className={styles.blockFront}>
                        <div className={styles.blockImageContainer}>
                          <img className={styles.blockImage} style={project.imageAdjustments} src={project.image} alt="" />
                        </div>
                        <div className={styles.blockRightColumn}>
                          <div style={{ fontSize: '20px', margin: '20px 0' }}>{project.title}</div>
                          <p className={styles.blockDescription}>{project.description}</p>
                        </div>
                      </div>
                    <div className={styles.blockBack}>
                      { project.links?.map((link) => 
                        <a className={styles.blockBackButton} target="_blank" rel="noreferrer" style={{color: 'black', textDecoration: 'none'}} href={link.url} >{link.name}</a>
                      )}
                      <div style={{color: 'white', display: project.links?.length ? 'none' : 'initial'}}>Sorry, no content yet.</div>
                    </div>
                  </div>
                </div>
                <div className={styles.mobileProjectTitle}>{project.title}</div>
                <div onClick={() => toggleMobileDescription("electronicsD" + index)} id={"electronicsD" + index} 
                className={styles.mobileProjectDescription + ' ' + styles.noWrap}>{project.description}</div>
              </Fragment>
            )}
          </div>
          <div className={styles.blockDivider}></div>

          {/* ----- 3D Modeling ----- */}
          <div className={styles.blockTitle} id="blockModelingTitle">3D Modeling</div>
          <div id="blockModeling">
            { modelingProjects.map((project, index) =>
              <Fragment key={project.title}>
                <div style={{perspective: '1000px'}}>
                  <div onClick={() => flipBlock('modeling' + index)} id={"modeling" + index} className={styles.blockContainer}>
                    <div className={styles.blockFront}>
                      <div className={styles.blockImageContainer}>
                        <img className={styles.blockImage} style={project.imageAdjustments} src={project.image} alt="" />
                      </div>
                      <div className={styles.blockRightColumn}>
                        <div style={{ fontSize: '20px', margin: '20px 0' }}>{project.title}</div>
                        <p className={styles.blockDescription}>{project.description}</p>
                      </div>
                    </div>
                  <div className={styles.blockBack}>
                    { project.links?.map((link) => 
                      <a className={styles.blockBackButton} target="_blank" rel="noreferrer" style={{color: 'black', textDecoration: 'none'}} href={link.url} >{link.name}</a>
                    )}
                    <div style={{color: 'white', display: project.links?.length ? 'none' : 'initial'}}>Sorry, no content yet.</div>
                  </div>
                </div>
              </div>
              <div className={styles.mobileProjectTitle}>{project.title}</div>
              <div onClick={() => toggleMobileDescription("modelingD" + index)} id={"modelingD" + index} 
              className={styles.mobileProjectDescription + ' ' + styles.noWrap}>{project.description}</div>
             </Fragment>
            )}
          </div>
          <div className={styles.blockDivider}></div>

          {/* ----- Video Production ----- */}
          <div className={styles.blockTitle} id="blockVideoTitle">Video Production</div>
          <div id="blockVideo">
            {videoProjects.map((project, index) =>
                <Fragment key={project.title}>
                <div style={{perspective: '1000px'}}>
                  <div onClick={() => flipBlock('video' + index)} id={"video" + index} className={styles.blockContainer}>
                    <div className={styles.blockFront}>
                      <div className={styles.blockImageContainer}>
                        <img className={styles.blockImage} style={project.imageAdjustments} src={project.image} alt="" />
                      </div>
                      <div className={styles.blockRightColumn}>
                        <div style={{ fontSize: '20px', margin: '20px 0' }}>{project.title}</div>
                        <p className={styles.blockDescription}>{project.description}</p>
                      </div>
                    </div>
                  <div className={styles.blockBack}>
                    { project.links?.map((link) => 
                      <a className={styles.blockBackButton} target="_blank" rel="noreferrer" style={{color: 'black', textDecoration: 'none'}} href={link.url} >{link.name}</a>
                    )}
                    <div style={{color: 'white', display: project.links?.length ? 'none' : 'initial'}}>Sorry, no content yet.</div>
                  </div>
                </div>
              </div>
              <div className={styles.mobileProjectTitle}>{project.title}</div>
              <div onClick={() => toggleMobileDescription("videoD" + index)} id={"videoD" + index} 
              className={styles.mobileProjectDescription + ' ' + styles.noWrap}>{project.description}</div>
            </Fragment>
            )}
          </div>
          <div className={styles.blockDivider}></div>
          
          {/* ----- Resume ----- */}
          <div className={styles.blockTitle} id="blockResumeTitle">Resume</div>
          <div id="blockResume">
            <div className={styles.contactSection}>
              <h1 className={styles.linkHover} style={{ left: '13px', position: 'relative' }} onClick={() => { onCopy("Hi Trent Deckard. Let's set up an interview! 💞") }}>Trent Deckard <img src="icon_copy.svg" className={styles.iconNewWindow} style={{ marginBottom: '6px' }} /></h1>
              {/* <p>Columbus Ohio</p> */}
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
                <a style={{ color: 'black', display: 'flex', flexDirection: 'column', textDecoration: 'none' }} href="https://drive.google.com/file/d/1YJUh9MUZ_fn7WPUhIQ7Ci_YgUb8jJ2tG/view?usp=sharing">
                  <img onMouseEnter={() => showById("webResumeIcon")} onMouseLeave={() => hideById("webResumeIcon")} className={styles.resumeImage} src="Web_Resume.png" alt="My Web Developer Resume" />
                  <img className={styles.resumeOpenIcon} id="webResumeIcon" src="icon_new_window.svg" alt="" />
                  <div className={styles.resumeTitle}>Web Developer Resume</div>
                </a>
                <a style={{ color: 'black', display: 'flex', flexDirection: 'column', textDecoration: 'none' }} href="https://drive.google.com/file/d/1qWKBHRZ8XyuMDWyUp2CDw88csEZPZUqP/view?usp=share_link">
                  <img onMouseEnter={() => showById("fullResumeIcon")} onMouseLeave={() => hideById("fullResumeIcon")} className={styles.resumeImage} src="Full_Resume.png" alt="My Full Resume" />
                  <img className={styles.resumeOpenIcon} id="fullResumeIcon" src="icon_new_window.svg" alt="" />
                  <div className={styles.resumeTitle}>All Inclusive Resume</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}