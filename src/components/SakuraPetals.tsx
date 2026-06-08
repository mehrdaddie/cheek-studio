"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useMemo, useRef } from "react";
import * as THREE from "three";

type PetalData = {
  texture: string;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  speed: number;
  drift: number;
};

function Petal({ data }: { data: PetalData }) {
  const meshRef = useRef<THREE.Mesh>(null);

  const texture = useLoader(TextureLoader, data.texture);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    meshRef.current.position.y -= data.speed * delta;

    meshRef.current.position.x +=
      Math.sin(state.clock.elapsedTime * data.drift) * delta * 0.4;

    meshRef.current.rotation.x += delta * 0.4;
    meshRef.current.rotation.y += delta * 0.2;
    meshRef.current.rotation.z += delta * 0.6;

    if (meshRef.current.position.y < -15) {
      meshRef.current.position.y = 15;
      meshRef.current.position.x = (Math.random() - 0.5) * 30;
      meshRef.current.position.z = (Math.random() - 0.5) * 20;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={data.position}
      rotation={data.rotation}
      scale={data.scale}
    >
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial
        map={texture}
        transparent
        opacity={0.9}
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  );
}

function PetalField() {
  const petals = useMemo(() => {
    return Array.from({ length: 120 }, () => ({
      texture: `/petals/${Math.floor(Math.random() * 18) + 1}.png`,
      position: [
        (Math.random() - 0.5) * 30,
        Math.random() * 30,
        (Math.random() - 0.5) * 20,
      ] as [number, number, number],
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI,
      ] as [number, number, number],
      scale: Math.random() * 0.35 + 0.15,
      speed: Math.random() * 1.2 + 0.3,
      drift: Math.random() * 2 + 0.5,
    }));
  }, []);

  return (
    <>
      {petals.map((petal, index) => (
        <Petal key={index} data={petal} />
      ))}
    </>
  );
}

export default function SakuraPetals() {
  return (
    <div
      className="fixed inset-0 z-[1]"
      style={{ pointerEvents: "none" }}
    >
      <Canvas
        style={{
          pointerEvents: "none",
          display: "block",
        }}
        camera={{
          position: [0, 0, 10],
          fov: 55,
        }}
      >
        <ambientLight intensity={1.5} />
        <PetalField />
      </Canvas>
    </div>
  );
}