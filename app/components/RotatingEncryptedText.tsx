"use client";

import { useEffect, useState, useRef } from "react";

interface RotatingEncryptedTextProps {
  words: string[];
  className?: string;
  cycleDelayMs?: number;
  revealDelayMs?: number;
}

export default function RotatingEncryptedText({
  words,
  className = "",
  cycleDelayMs = 3000,
  revealDelayMs = 400,
}: RotatingEncryptedTextProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState<string[]>([]);
  const [revealedCount, setRevealedCount] = useState(0);
  const [isRevealing, setIsRevealing] = useState(false);
  
  const wordsRef = useRef(words);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const revealIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const flipIntervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[];:,.<>/?";
  
  // Update ref when words change
  useEffect(() => {
    wordsRef.current = words;
  }, [words]);

  // Initialize display text when word changes
  useEffect(() => {
    const currentWord = wordsRef.current[currentWordIndex];
    if (!currentWord) return;

    // Reset state
    setRevealedCount(0);
    setIsRevealing(true);
    
    // Initialize with random characters
    const initialText = Array(currentWord.length)
      .fill("")
      .map(() => charset[Math.floor(Math.random() * charset.length)]);
    setDisplayText(initialText);

    // Clear any existing intervals
    if (revealIntervalRef.current) {
      clearInterval(revealIntervalRef.current);
    }
    if (flipIntervalRef.current) {
      clearInterval(flipIntervalRef.current);
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Start flipping random characters for unrevealed positions
    flipIntervalRef.current = setInterval(() => {
      setDisplayText((prev) => {
        const next = [...prev];
        for (let i = revealedCount; i < currentWord.length; i++) {
          next[i] = charset[Math.floor(Math.random() * charset.length)];
        }
        return next;
      });
    }, 50); // Fast flip for encrypted characters

    // Start revealing characters one by one
    revealIntervalRef.current = setInterval(() => {
      setRevealedCount((prev) => {
        const newCount = prev + 1;
        const currentWord = wordsRef.current[currentWordIndex];
        
        if (newCount <= currentWord.length) {
          // Update display text with revealed character
          setDisplayText((display) => {
            const next = [...display];
            if (newCount - 1 < currentWord.length) {
              next[newCount - 1] = currentWord[newCount - 1];
            }
            return next;
          });
        }
        
        // When all characters are revealed, stop revealing
        if (newCount >= currentWord.length) {
          setIsRevealing(false);
          if (revealIntervalRef.current) {
            clearInterval(revealIntervalRef.current);
          }
          if (flipIntervalRef.current) {
            clearInterval(flipIntervalRef.current);
          }
        }
        
        return newCount;
      });
    }, revealDelayMs);

    // After reveal completes + stay time, move to next word
    const revealDuration = currentWord.length * revealDelayMs;
    const totalDelay = revealDuration + cycleDelayMs;
    
    timeoutRef.current = setTimeout(() => {
      setCurrentWordIndex((prev) => (prev + 1) % wordsRef.current.length);
    }, totalDelay);

    return () => {
      if (revealIntervalRef.current) {
        clearInterval(revealIntervalRef.current);
      }
      if (flipIntervalRef.current) {
        clearInterval(flipIntervalRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentWordIndex, cycleDelayMs, revealDelayMs]);

  const currentWord = wordsRef.current[currentWordIndex] || "";

  return (
    <span className={className}>
      {displayText.map((char, index) => (
        <span key={index}>
          {char}
        </span>
      ))}
    </span>
  );
}
