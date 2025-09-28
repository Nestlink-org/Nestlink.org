"use client";
import React, { useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Sparkles } from "@react-three/drei";
import { motion } from "framer-motion";
import TypingEffect from "./TypingEffect";
import Logo from "./Logo";

// Bright Stars Component
const BrightStars = () => {
  return (
    <>
      {/* Base starfield */}
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={6}
        fade
        speed={0.5}
      />

      {/* Additional bright stars layer */}
      <Stars
        radius={80}
        depth={30}
        count={1000}
        factor={8}
        fade
        speed={0.3}
      />

      {/* Sparkles for extra brightness */}
      <Sparkles
        count={200}
        scale={50}
        size={4}
        speed={0.4}
        opacity={1}
        color="#ffffff"
      />
    </>
  );
};

// Floating Space Object
const SpaceObject = ({ position, scale }) => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.008;
      meshRef.current.rotation.y += 0.012;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <octahedronGeometry args={[1, 0]} />
      <meshBasicMaterial
        color="#ffffff"
        transparent
        opacity={0.6}
      />
    </mesh>
  );
};

const LoadingScreen = ({ onComplete }) => {
  const [typingComplete, setTypingComplete] = useState(false);
  const [progress, setProgress] = useState(0);
  const [rotationSpeed, setRotationSpeed] = useState(10);

  useEffect(() => {
    if (typingComplete) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => onComplete?.(), 500);
            return 100;
          }
          return prev + 2;
        });
      }, 60);
      return () => clearInterval(interval);
    }
  }, [typingComplete, onComplete]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRotationSpeed(1.2);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen bg-black">
      {/* Enhanced 3D Scene with Bright Stars */}
      <Canvas>
        {/* Bright starfield */}
        <BrightStars />

        {/* Enhanced lighting for brightness */}
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-10, -10, 10]} intensity={0.8} color="#a5b4fc" />
        <pointLight position={[0, 0, 15]} intensity={0.5} color="#c7d2fe" />

        {/* Space objects */}
        <SpaceObject position={[4, 2, 0]} scale={[0.4, 0.4, 0.4]} />
        <SpaceObject position={[-3, -2, 3]} scale={[0.3, 0.3, 0.3]} />
        <SpaceObject position={[2, 3, -2]} scale={[0.25, 0.25, 0.25]} />
        <SpaceObject position={[-5, 1, 1]} scale={[0.2, 0.2, 0.2]} />

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={rotationSpeed}
          enablePan={false}
        />
      </Canvas>

      {/* UI Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 text-center z-10">
        {/* Logo with glow effect */}
        <motion.div
          className="relative"
          animate={{
            scale: [1, 1.15, 1],
            y: [0, -8, 0],
            rotateZ: [0, 1, -1, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut"
          }}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-blue-400/20 blur-2xl rounded-full scale-125" />
          <Logo />
        </motion.div>

        {/* Typing text with glow */}
        <div className="relative">
          <div className="text-2xl font-bold text-white drop-shadow-[0_0_10px_rgba(96,165,250,0.5)]">
            <TypingEffect
              text="Entering cosmic space..."
              onTypingComplete={() => setTypingComplete(true)}
            />
            <span className="animate-pulse text-blue-300 ml-1">|</span>
          </div>
        </div>

        {/* Progress section */}
        {typingComplete && (
          <motion.div
            className="w-80 space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Progress bar with glow */}
            <div className="relative">
              <div className="h-3 bg-gray-900/80 rounded-full overflow-hidden border border-blue-500/30">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 relative"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse" />
                </motion.div>
              </div>
              {/* Outer glow */}
              <div className="absolute inset-0 bg-blue-400/10 blur-md -z-10" />
            </div>

            {/* Percentage with glow */}
            <div className="text-blue-200 font-semibold text-lg drop-shadow-[0_0_8px_rgba(96,165,250,0.6)]">
              {progress}%
            </div>
          </motion.div>
        )}

        {/* Hint text */}
        <motion.div
          className="text-blue-300/70 text-sm font-light mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          Drag to navigate the cosmos
        </motion.div>
      </div>

      {/* Additional CSS for extra brightness */}
      <style jsx>{`
        .relative {
          position: relative;
        }
        canvas {
          filter: brightness(1.2) contrast(1.1);
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;