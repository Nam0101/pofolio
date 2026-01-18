"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface TypewriterEffectProps {
  words: string[];
  className?: string;
  cursorClassName?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
  loop?: boolean;
}

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
  typingSpeed = 80,
  deletingSpeed = 50,
  delayBetweenWords = 2000,
  loop = true,
}: TypewriterEffectProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const currentWord = words[currentWordIndex];

  useEffect(() => {
    if (isPaused) return;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          // Finished typing, pause then delete
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            if (loop || currentWordIndex < words.length - 1) {
              setIsDeleting(true);
            }
          }, delayBetweenWords);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, isPaused, currentWord, words, currentWordIndex, typingSpeed, deletingSpeed, delayBetweenWords, loop]);

  return (
    <span className={cn("relative", className)}>
      <span className="relative">
        {currentText}
        <motion.span
          className={cn(
            "inline-block w-[3px] h-[1em] bg-current ml-1 align-middle",
            cursorClassName
          )}
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </span>
    </span>
  );
};

// Smooth character-by-character reveal with stagger
interface SmoothTypewriterProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  onComplete?: () => void;
}

export const SmoothTypewriter = ({
  text,
  className,
  delay = 0,
  speed = 0.03,
  onComplete,
}: SmoothTypewriterProps) => {
  const [isComplete, setIsComplete] = useState(false);

  const characters = text.split("");

  return (
    <motion.span
      className={cn("relative", className)}
      initial="hidden"
      animate="visible"
      onAnimationComplete={() => {
        setIsComplete(true);
        onComplete?.();
      }}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                delay: delay + index * speed,
                duration: 0.1,
                ease: "easeOut",
              },
            },
          }}
        >
          {char}
        </motion.span>
      ))}
      {!isComplete && (
        <motion.span
          className="inline-block w-[3px] h-[1em] bg-current ml-0.5 align-middle"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        />
      )}
    </motion.span>
  );
};

// Multi-line typewriter with role cycling
interface RoleTypewriterProps {
  roles: string[];
  className?: string;
  prefix?: string;
  prefixClassName?: string;
}

export const RoleTypewriter = ({
  roles,
  className,
  prefix,
  prefixClassName,
}: RoleTypewriterProps) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  const currentRole = roles[currentRoleIndex];

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    switch (phase) {
      case "typing":
        if (displayText.length < currentRole.length) {
          timeout = setTimeout(() => {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          }, 60 + Math.random() * 40);
        } else {
          timeout = setTimeout(() => setPhase("pausing"), 100);
        }
        break;

      case "pausing":
        timeout = setTimeout(() => setPhase("deleting"), 2500);
        break;

      case "deleting":
        if (displayText.length > 0) {
          timeout = setTimeout(() => {
            setDisplayText(displayText.slice(0, -1));
          }, 30);
        } else {
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setPhase("typing");
        }
        break;
    }

    return () => clearTimeout(timeout);
  }, [displayText, phase, currentRole, roles.length]);

  return (
    <span className={className}>
      {prefix && <span className={prefixClassName}>{prefix}</span>}
      <span className="relative">
        <AnimatePresence mode="wait">
          <motion.span
            key={displayText}
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            {displayText}
          </motion.span>
        </AnimatePresence>
        <motion.span
          className="inline-block w-[3px] h-[0.9em] bg-gradient-to-b from-blue-600 to-purple-600 ml-1 align-middle rounded-full"
          animate={{
            opacity: [1, 0],
            scaleY: [1, 0.8],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </span>
    </span>
  );
};

// Glitch typewriter effect
interface GlitchTypewriterProps {
  text: string;
  className?: string;
  glitchChars?: string;
}

export const GlitchTypewriter = ({
  text,
  className,
  glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?",
}: GlitchTypewriterProps) => {
  const [displayText, setDisplayText] = useState("");
  const [glitchIndex, setGlitchIndex] = useState(-1);

  useEffect(() => {
    let charIndex = 0;
    let glitchCount = 0;
    const maxGlitches = 3;

    const interval = setInterval(() => {
      if (charIndex >= text.length) {
        clearInterval(interval);
        return;
      }

      if (glitchCount < maxGlitches) {
        // Show glitch character
        const randomChar = glitchChars[Math.floor(Math.random() * glitchChars.length)];
        setDisplayText(text.slice(0, charIndex) + randomChar);
        setGlitchIndex(charIndex);
        glitchCount++;
      } else {
        // Show real character and move to next
        setDisplayText(text.slice(0, charIndex + 1));
        setGlitchIndex(-1);
        charIndex++;
        glitchCount = 0;
      }
    }, 25);

    return () => clearInterval(interval);
  }, [text, glitchChars]);

  return (
    <span className={className}>
      {displayText.split("").map((char, i) => (
        <motion.span
          key={i}
          className={cn(
            i === glitchIndex && "text-blue-500"
          )}
          animate={i === glitchIndex ? {
            x: [0, -2, 2, 0],
            opacity: [1, 0.5, 1],
          } : {}}
          transition={{ duration: 0.05 }}
        >
          {char}
        </motion.span>
      ))}
      <motion.span
        className="inline-block w-[3px] h-[1em] bg-blue-500 ml-0.5"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.4, repeat: Infinity }}
      />
    </span>
  );
};
