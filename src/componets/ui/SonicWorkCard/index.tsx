'use client';
import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/utlis/cn";

// Global audio controller
let currentAudio: HTMLAudioElement | null = null;

export const SonicWorkCard = ({
  src,
  name = "",
  category = "",
  grid = "",
  img = { desktop: "", mobile: "", alt: "" },
}: {
  src: string;
  category?: string;
  name?: string;
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
        className="absolute bottom-2 lg:bottom-4 left-2 lg:left-4 text-2xl lg:text-4xl font-staatliches leading-none cursor-pointer"
        type="button"
        onClick={handleToggle}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};
