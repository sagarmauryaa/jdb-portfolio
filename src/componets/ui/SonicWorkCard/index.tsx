'use client';
import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/utlis/cn";

// Global audio controller
let currentAudio: HTMLAudioElement | null = null;

export const SonicWorkCard = ({
  src, 
  grid = "",
  img = { desktop: "", mobile: "", alt: "" },
}: {
  src: string; 
  grid?: string;
  img: { common?: string; desktop?: string; mobile?: string; alt: string };
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Play/pause logic
  const handleToggle = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      if (currentAudio && currentAudio !== audioRef.current) {
        currentAudio.pause();
      }
      audioRef.current.play();
      setIsPlaying(true);
      currentAudio = audioRef.current;
    }
  };

  // Pause when out of view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && isPlaying && audioRef.current) {
          audioRef.current.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, [isPlaying]);

  // Pause if another card plays
  useEffect(() => {
    const onPause = () => setIsPlaying(false);
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener("pause", onPause);
    }
    return () => {
      if (audio) {
        audio.removeEventListener("pause", onPause);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn("block relative rounded-lg border overflow-hidden", grid)} 
    >
      <img
        className="object-cover absolute bottom-0 left-0 w-full h-full"
        src={img.desktop || img.common}
        alt={img.alt ?? ""}
        width={100}
        height={100}
      />
      <audio ref={audioRef} src={src} /> 
      <button
        className="absolute bottom-2 lg:bottom-4 left-2 lg:left-4 text-2xl lg:text-4xl leading-none cursor-pointer"
        type="button"
        onClick={handleToggle}>
        {isPlaying ? <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none"><path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10.5 30V6m15 24V6" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none"><path fill="#000" stroke="#000" strokeWidth="2" d="M26.96 16.406c2.05 1.142 2.057 2.58 0 3.87l-15.896 10.72c-1.997 1.067-3.353.437-3.496-1.869L7.501 6.69c-.045-2.125 1.705-2.725 3.372-1.706L26.96 16.406Z" /></svg>}
      </button>
    </div>
  );
};
