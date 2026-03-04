'use client';

import { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import { Mail, Code2 } from "lucide-react";
import { MouseProvider } from "@/components/3d/MouseContext";
import SoullessModel from "@/components/3d/SoullessModel";
import { Particles } from "@/components/ui/Particles";
import { useIsMobile } from "@/hooks/useIsMobile";

type HeroProps = {
  scrollToSection: (id: string) => void;
};

export default function Hero({ scrollToSection }: HeroProps) {

  const isMobile = useIsMobile();

  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const [displayText, setDisplayText] = useState("");
  const fullText = "Full Stack Developer";

  useEffect(() => {

    let index = 0;

    const timer = setInterval(() => {

      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }

    }, 100);

    return () => clearInterval(timer);

  }, []);

  return (
    <MouseProvider>

      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
        onMouseMove={(e) => {

          if (isMobile) return;

          const rect = e.currentTarget.getBoundingClientRect();

          setMouse({
            x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
            y: -((e.clientY - rect.top) / rect.height) * 2 + 1
          });

        }}
      >

        {/* Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `
      linear-gradient(to bottom, rgba(2,6,23,0.7), rgba(2,6,23,0.95)),
      url('/space-bg.jpg')` }}
        >
          <Particles />
        </div>


        {/* 3D Model (desktop only) */}
        {!isMobile && (
          <div className="absolute inset-0 w-full h-full flex justify-end items-center pointer-events-none">

            <div className="w-1/2 h-full">

              <Suspense fallback={null}>
                <SoullessModel mouse={mouse} />
              </Suspense>

            </div>

          </div>
        )}


        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

          <div className="grid lg:grid-cols-2 gap-12 items-center">


            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >

              <h2 className="text-cyan-400 text-lg md:text-xl mb-4 font-medium tracking-wider uppercase">
                Olá, eu sou
              </h2>


              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Caique Vilhegas
              </h1>


              {/* Typing */}
              <div className="h-12 md:h-16 lg:h-20 flex items-center justify-center lg:justify-start">

                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-slate-400 border-r-4 border-cyan-400 pr-2 animate-pulse">
                  {displayText}
                </span>

              </div>


              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >

                <button
                  onClick={() => scrollToSection("contato")}
                  className="px-6 py-3 md:px-8 md:py-4 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold rounded-full transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  <Mail className="w-4 h-4 md:w-5 md:h-5" />
                  Entre em Contato
                </button>


                <button
                  onClick={() => scrollToSection("projetos")}
                  className="px-6 py-3 md:px-8 md:py-4 border-2 border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 font-bold rounded-full transition-all flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  <Code2 className="w-4 h-4 md:w-5 md:h-5" />
                  Ver Projetos
                </button>

              </motion.div>

            </motion.div>


            {/* space for model */}
            <div className="hidden lg:block" />

          </div>

        </div>


        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10"
        >

          <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center pt-2">

            <div className="w-1.5 h-3 bg-cyan-400 rounded-full" />

          </div>

        </motion.div>

      </section>

    </MouseProvider>
  );
}