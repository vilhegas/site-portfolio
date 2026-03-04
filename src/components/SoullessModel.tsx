'use client';

import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment} from '@react-three/drei';
import * as THREE from 'three';

interface ModelProps {
  mouse: { x: number; y: number };
}

// Componente do modelo que segue o mouse
function Model({ mouse }: ModelProps) {
  const pivot = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/models/soulless.glb');
  
  useFrame(() => {
    if (pivot.current) {
      pivot.current.rotation.y = THREE.MathUtils.lerp(
        pivot.current.rotation.y,
        mouse.x * 1,
        1
      );
      pivot.current.rotation.x = THREE.MathUtils.lerp(
        pivot.current.rotation.x,
        -mouse.y * 1,
        1
      );
    }
  });

  return (
    <group ref={pivot}>
      <group position={[0, -0.5, 0]}>
        <primitive 
          object={scene} 
          scale={0.003}
          rotation={[0, -0.5, 0]}
        />
      </group>
    </group>
  );
}

// Fallback enquanto carrega
function LoadingFallback() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#06b6d4" wireframe />
    </mesh>
  );
}

// Componente principal que recebe mouse
export default function SoullessModel({ mouse }: ModelProps) {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <spotLight 
          position={[10, 10, 10]} 
          angle={0.15} 
          penumbra={1} 
          intensity={2}
          color="#06b6d4"
        />
        <spotLight 
          position={[-10, 5, 5]} 
          angle={0.3} 
          penumbra={0.5} 
          intensity={1.5}
          color="#3b82f6"
        />
        <pointLight position={[0, -10, 0]} intensity={0.5} color="#22d3ee" />
        
        <Suspense fallback={<LoadingFallback />}>
          <Model mouse={mouse} />
          <Environment preset="city" />
        </Suspense>
        
      </Canvas>
    </div>
  );
}