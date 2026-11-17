import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Lightformer, RoundedBox, ContactShadows } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const PINK = "#f58fb0", RED = "#ef3d6b", SKY = "#86d3f5", BUTTER = "#fbe59a", MINT = "#a8e6c8";

function Rainbow() {
  const g = useRef<THREE.Group>(null);
  useFrame((s) => {
    if (!g.current) return;
    g.current.rotation.y = THREE.MathUtils.lerp(g.current.rotation.y, s.pointer.x * 0.35, 0.05);
    g.current.rotation.x = THREE.MathUtils.lerp(g.current.rotation.x, -s.pointer.y * 0.15, 0.05);
  });
  const arcs = [PINK, RED, SKY, BUTTER];
  return (
    <group ref={g} position={[0, -1.6, -1.5]} scale={0.62}>
      {arcs.map((c, i) => (
        <mesh key={c} castShadow>
          <torusGeometry args={[2.6 - i * 0.42, 0.2, 16, 64, Math.PI]} />
          <meshPhysicalMaterial color={c} roughness={0.35} clearcoat={1} clearcoatRoughness={0.25} />
        </mesh>
      ))}
    </group>
  );
}

function Toy({ position, color, kind, speed = 1 }: { position: [number, number, number]; color: string; kind: "ball" | "block" | "star" | "ring"; speed?: number }) {
  const m = useRef<THREE.Mesh>(null);
  useFrame((_, d) => { if (m.current) { m.current.rotation.x += d * 0.4 * speed; m.current.rotation.y += d * 0.6 * speed; } });
  const mat = <meshPhysicalMaterial color={color} roughness={0.3} clearcoat={1} clearcoatRoughness={0.2} />;
  return (
    <Float speed={2 * speed} rotationIntensity={0.6} floatIntensity={1.4}>
      {kind === "block" ? (
        <RoundedBox ref={m} args={[0.7, 0.7, 0.7]} radius={0.14} smoothness={4} position={position}>{mat}</RoundedBox>
      ) : (
        <mesh ref={m} position={position}>
          {kind === "ball" && <sphereGeometry args={[0.38, 24, 24]} />}
          {kind === "ring" && <torusGeometry args={[0.32, 0.13, 24, 48]} />}
          {kind === "star" && <octahedronGeometry args={[0.38, 0]} />}
          {mat}
        </mesh>
      )}
    </Float>
  );
}

export default function HeroScene() {
  return (
    <Canvas dpr={[1, 1.25]} camera={{ position: [0, 0.3, 7], fov: 40 }} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 6, 5]} intensity={1.4} castShadow />
      <Rainbow />
      <Toy position={[-3.2, 1.4, 0]} color={RED} kind="block" />
      <Toy position={[3.1, 1.7, -0.5]} color={SKY} kind="ball" speed={1.2} />
      <Toy position={[-2.4, -1.9, 1]} color={BUTTER} kind="star" speed={0.8} />
      <Toy position={[2.7, -1.5, 1]} color={PINK} kind="ring" speed={1.1} />
      <Toy position={[0.2, 2.3, -1.5]} color={MINT} kind="ball" speed={0.7} />
      <Toy position={[-4.1, -0.3, -1.5]} color={SKY} kind="ring" speed={0.9} />
      <Toy position={[4.2, 0.2, -1.2]} color={BUTTER} kind="block" speed={0.6} />
      <ContactShadows position={[0, -1.3, 0]} opacity={0.25} scale={12} blur={2.6} far={3} />
      <Environment resolution={64}>
        <Lightformer intensity={2} position={[0, 5, 0]} scale={[10, 10, 1]} />
        <Lightformer intensity={1.2} color="#ffd6e4" position={[-5, 1, -1]} rotation-y={Math.PI / 2} scale={[20, 1, 1]} />
        <Lightformer intensity={1.2} color="#cdeefe" position={[5, 1, 1]} rotation-y={-Math.PI / 2} scale={[20, 1, 1]} />
      </Environment>
    </Canvas>
  );
}
