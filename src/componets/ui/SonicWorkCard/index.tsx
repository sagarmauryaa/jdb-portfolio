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
      onClick={handleToggle}
      style={{ cursor: "pointer" }}
    >
      <img
        className="object-cover absolute bottom-0 left-0 w-full h-full"
        src={img.desktop || img.common}
        alt={img.alt ?? ""}
        width={100}
        height={100}
      />
      <audio ref={audioRef} src={src} />
      <div className="absolute top-2 left-2 z-10">
        {isPlaying ? (
          <span>⏸️ Pause</span>
        ) : (
          <span>▶️ Play</span>
        )}
      </div>
      {(name || category) && (
        <div
          className="absolute bottom-0 left-0 w-full h-fit flex flex-col justify-end min-h-20 md:min-h-32 gap-0 md:gap-1 p-4 text-white"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.6) 20%, rgba(0,0,0,0) 100%)",
          }}
        >
          <p className="font-staatliches text-2xl md:text-4xl m-0 p-0 leading-none">
            {name}
          </p>
          <p className="text-sm md:text-xl m-0 p-0 leading-none ">
            {category}
          </p>
        </div>
      )}
    </div>
  );
};
