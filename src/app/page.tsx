"use client";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";
import { Html, Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import ScrollManager from "@/components-3d/ScrollManager";
import Experience from "@/components-3d/Experience";
import Interface from "@/components-3d/Interface";
import { useState } from "react";
import { RingLoader } from "react-spinners";
export default function Home() {
  const [section, setSection] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <div style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999
        }}>
          <RingLoader color="blue" size={100} />
          <p className="text-2xl font-bold ml-4">Loading 3D experience...</p>
        </div>
      )}

      <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
        <Canvas
          shadows
          camera={{ position: [0, 0, 5], fov: 30 }}
          style={{ top: 0, left: 0, width: '100%', height: '100%', scrollbarWidth: 'none' }}
          onCreated={() => setIsLoading(false)}
        >
          <color attach="background" args={["#ececec"]} />
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
      </div>

      {/* <TechStack /> */}
    </>
  );
}
