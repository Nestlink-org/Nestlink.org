"use client";
import React, { useState, useEffect } from "react";

const TypingEffect = ({
  texts = [],             // array of texts to loop through
  typingDelay = 20,      // typing speed
  deletingDelay = 50,     // deleting speed
  pauseDelay = 1000,      // pause after typing a text
  loop = true,            // whether to loop texts
  onTypingComplete = null // callback (for LoadingScreen)
}) => {
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (!texts.length || finished) return;

    const fullText = texts[textIndex];
    let timeout;

    if (isDeleting) {
      // Deleting
      timeout = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      }, deletingDelay);
    } else {
      // Typing
      timeout = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }, typingDelay);
    }

    // When typing is complete
    if (!isDeleting && currentText === fullText) {
      if (!loop && textIndex === texts.length - 1) {
        // ✅ Only run once, stop here
        setFinished(true);
        if (onTypingComplete) onTypingComplete();
      } else {
        timeout = setTimeout(() => setIsDeleting(true), pauseDelay);
      }
    }

    // When deleting is complete
    if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [
    currentText,
    isDeleting,
    textIndex,
    texts,
    typingDelay,
    deletingDelay,
    pauseDelay,
    loop,
    finished,
    onTypingComplete
  ]);

  return (
    <span>
      {currentText}
      <span className="animate-pulse text-blue-300 ml-1">|</span>
    </span>
  );
};

export default TypingEffect;
