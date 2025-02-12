import { Environment, Sky, ContactShadows } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { Desk } from "./Desk";
import { AmbientLight, Mesh } from "three";
// import { useControls } from "leva";
import { motion } from "framer-motion-3d";
import { useThree } from "@react-three/fiber";
import { Stool } from "./Stool";
import { useEffect, useState } from "react";
import { Husky } from "./Husky";

export const Experience = (props) => {
  const { section } = props;
  const { viewport } = useThree();
  const [characterAnimation, setCharacterAnimation] = useState("Typing");

  useEffect(() => {
    section === 0 ? null : setCharacterAnimation("Falling");
    setTimeout(() => {
      setCharacterAnimation(section === 0 ? "Typing" : "Standing");
    }, 700);
  }, [section]);

  return (
    <>
      <motion.group
        animate={"" + section}
        variants={{
          0: {
            opacity: 1,
          },
          1: {
            y: -viewport.height,
            opacity: 0,
          },
        }}
        transition={{ duration: 1 }}
      >
        <Avatar
          animation={characterAnimation}
          position={[0, -0.8, 0]}
          rotation-z={0.5}
        />
      </motion.group>
      <Sky />
      <Environment preset="sunset" />
      <group position-y={-1}>
        <ContactShadows
          opacity={0.42}
          scale={10}
          blur={1}
          far={10}
          position={[0, 0.1, 0]}
          resolution={256}
          color="#000000"
        />
        {/* <Desk /> */}
        <Stool />
        <Husky />
        {/* <group name="characterSpot">
          <mesh scale={5} rotation-x={-Math.PI * 0.5} position-y={-0.001}>
            <planeGeometry />
            <meshStandardMaterial color={'white'} />
        </mesh>
        </group> */}
      </group>

      {/* <ambientLight intensity={1} /> */}
      <motion.group
        position={[0, -1.5, -10]}
        animate={{
          z: section == 1 ? 0 : -10,
          y: section == 1 ? -viewport.height - 1 : -1,
          x: section == 1 ? 0.7 : 0,
          opacity: section == 1 ? 1 : 0,
        }}
        transition={{ duration: 1 }}
      >
        <directionalLight position={[-5, 3, 5]} intensity={0.5} />
      </motion.group>
    </>
  );
};

export default Experience;
