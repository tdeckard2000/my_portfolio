import Head from "next/head";
import React, { useEffect } from "react";
import styles from "@/styles/HouseMouseVr.module.css";
import Unity, { UnityContent } from "react-unity-webgl";

export default function HouseMouseVr() {
  const unityContent = new UnityContent(
    "HouseMouseVr/Build/HouseMouseForWeb.json",
    "HouseMouseVr/Build/UnityLoader.js"
  );

  if (typeof window !== "undefined") {
    console.log("You are on the browser,You are good to go");
  } else {
    console.log("You are on the server,Cannot execute");
  }

  return (
    <>
      <Head>
        <title>House Mouse VR | Unity WebGL Player</title>
        <meta
          name="description"
          content="All about Trent's attempts to make interesting things."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.page}>
        <h1>House Mouse VR</h1>

        <div className={styles.gameContainer}>
          <Unity unityContent={unityContent} />
        </div>

        <p>The game will be here</p>
        <div className={styles.instructions}>
          <p>
            Collect all of the cheese! This game is not complete, but is
            playable. You can collect 30 cheeses.
          </p>
          <div className={styles.keys}>
            <img
              style={{ height: "100px", margin: "20px" }}
              src="wasd_keys.jpg"
              alt=""
            />
            <img
              style={{ height: "50px", margin: "20px" }}
              src="shift_key.jpg"
              alt=""
            />
          </div>
        </div>
      </main>
    </>
  );
}
