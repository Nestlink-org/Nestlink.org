import React, { useState, useEffect } from "react";
import TypingEffect from "./TypingEffect";
import BuildingSVG from "./BuildingSVG"; // New SVG component
import Logo from "./Logo";


const LoadingScreen = ({ onComplete }) => {
  const [typingComplete, setTypingComplete] = useState(false);
  const [progress, setProgress] = useState(0);

  // Progress logic (starts when typing finishes)


  return (
    <div className="flex flex-col gap-2 items-center justify-center min-h-screen main-center">
      {/* animated svg */}
      <BuildingSVG progress={progress} />

      {/* <img src="/NL.png" width={300} height={2} /> */}
      <Logo />

      {/* <div className="lg:text-3xl sm:text-[10px] font-extrabold bg-gradient-to-r from-white via-blue-300 to-blue-500 text-transparent bg-clip-text text-center">
        <TypingEffect
          text="A moment while we set everything ready for you..."
          onTypingComplete={() => setTypingComplete(true)}
        />
        <span className="animate-blink text-blue-500">|</span>
      </div> */}


    </div >
  );
};

export default LoadingScreen;
