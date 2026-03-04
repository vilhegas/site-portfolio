'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface MouseContextType {
  mouse: { x: number; y: number };
  setMouse: (mouse: { x: number; y: number }) => void;
}

const MouseContext = createContext<MouseContextType>({
  mouse: { x: 0, y: 0 },
  setMouse: () => {},
});

export function MouseProvider({ children }: { children: ReactNode }) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  
  return (
    <MouseContext.Provider value={{ mouse, setMouse }}>
      {children}
    </MouseContext.Provider>
  );
}

export function useMouse() {
  return useContext(MouseContext);
}