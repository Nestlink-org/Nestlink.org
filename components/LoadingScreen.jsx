import React, { useState, useEffect } from "react";
import TypingEffect from "./TypingEffect";
import BuildingSVG from "./BuildingSVG"; // New SVG component
import Logo from "./Logo";


const LoadingScreen = ({ onComplete }) => {
  const [typingComplete, setTypingComplete] = useState(false);
  const [progress, setProgress] = useState(0);

  // Progress logic (starts when typing finishes)
  useEffect(() => {
    if (typingComplete) {
      const interval = setInterval(() => {
        setProgress((old) => {
          const next = old + 2;
          if (next >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              onComplete();
            }, 500);
          }
          return next;
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [typingComplete, onComplete]);

  return (
    <div className="flex flex-col gap-2 items-center justify-center min-h-screen bg-black">
      {/* animated svg */}
      <BuildingSVG progress={progress} />

      {/* <img src="/NL.png" width={300} height={2} /> */}
      <Logo />

      <div className="lg:text-3xl sm:text-[10px] font-extrabold bg-gradient-to-r from-white via-blue-300 to-blue-500 text-transparent bg-clip-text text-center">
        <TypingEffect
          text="A moment while we set everything ready for you..."
          onTypingComplete={() => setTypingComplete(true)}
        />
        <span className="animate-blink text-blue-500">|</span>
      </div>

      {/* progress bar */}

      <div className="mt-4">
        {[
          "bg-blue-100", "bg-blue-200", "bg-blue-300", "bg-blue-400",
          "bg-blue-500", "bg-blue-600", "bg-blue-700", "bg-blue-800"
        ].map((color, i) => (
          <div
            key={i}
            className={`absolute w-3 h-3 rounded-full ${color} shadow-[0_0_10px] animate-circle${i + 1}`}
          ></div>
        ))}
      </div>


    </div >
  );
};

export default LoadingScreen;
