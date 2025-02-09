"use client";

import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import ScrollManager from "@/components-3d/ScrollManager";
import Experience from "@/components-3d/Experience";
import Interface from "@/components-3d/Interface";
import { useState } from "react";
import { RingLoader } from "react-spinners";
import Navbar from "@/components-3d/Navbar";
export default function Home() {
  const [section, setSection] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingOverlay />}

     
        <Canvas
          shadows
          camera={{ position: [0, 0, 5], fov: 30 }}
          onCreated={() => setIsLoading(false)}
        >
          <ScrollControls pages={2} damping={0.3}>
            <ScrollManager section={section} setSection={setSection} />
            <Scroll>
              <Experience section={section} setSection={setSection} />
            </Scroll>
            <Scroll html>
              <Interface />
            </Scroll>
          </ScrollControls>
        </Canvas>

      {/* <TechStack /> */}
    </>
  );
}

const LoadingOverlay = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <RingLoader color="blue" size={100} />
      <p className="text-2xl font-bold ml-4">Loading 3D experience...</p>
    </div>
  );
};
