import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/HouseMouseVr.module.css";
import Unity, { UnityContent } from "react-unity-webgl";

export default function HouseMouseVr() {
  const [unityContent, setUnityContent] = useState<any>(null);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    console.log("** startRef: ", ref)
    const unityContent = new UnityContent(
      "HouseMouseVr/Build/HouseMouseForWeb.json",
      "HouseMouseVr/Build/UnityLoader.js"
      );
      setUnityContent(unityContent);
  }, []);

  const hideModal = () => {
    const element = ref.current;
    const modal = element?.querySelector("#instructionsModal") as HTMLDivElement;
    console.log("** element: ", element)
    modal.style.visibility = "hidden";
    console.log("** hit")
  }

  return (
    <>
      <Head>
        <title>House Mouse VR | Unity WebGL Player</title>
        <meta name="description" content="All about Trent's attempts to make interesting things."/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main ref={ref} className={styles.page}>
        <div className={styles.instructionsModal} id="instructionsModal">
          <h1>House Mouse VR (Jennifers Debug Version)</h1>
          <div style={{margin: '20px 0'}}>
            <div>Collect all of the cheese!</div>
            <div>This game is not complete, but all 50 cheeses are collectable.</div>
          </div>
          <div style={{textAlign: 'left', margin: '20px auto', width: 'fit-content'}}>
            <div><span style={{fontWeight: 'bold'}}>Move:</span> Arrow Keys or W, A, S, D</div>
            <div><span style={{fontWeight: 'bold'}}> Run:</span> Hold Shift</div>
            <div><span style={{fontWeight: 'bold'}}> Look:</span> Mouse</div>
          </div>
          <div onClick={hideModal} className={styles.okButton}>OK</div>
        </div>
        {unityContent && (
          <div className={styles.gameContainer}>
            <Unity unityContent={unityContent} />
          </div>
        )}
      </main>
    </>
  );
}
