'use client';

import { useEffect, useState } from 'react';

export function Particles() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  
  // Gera valores aleatórios apenas uma vez no mount
  const particles = [...Array(20)].map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
    height: 20 + Math.random() * 30
  }));
  
  return (
    <>
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute w-[2px] bg-gradient-to-b from-cyan-400 to-transparent opacity-80"
          style={{
            left: `${p.left}%`,
            top: '-50px',
            height: `${p.height}px`,
            boxShadow: '0 0 6px rgba(6,182,212,0.8)',
            animation: `fall ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`
          }}
        />
      ))}
    </>
  );
}