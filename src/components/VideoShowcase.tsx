"use client";

import { useRef, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaPlay,
  FaPause,
  FaVolumeMute,
  FaVolumeUp,
  FaExpand,
} from "react-icons/fa";

export default function VideoShowcase() {
  const videos = [
    { src: "/videos/wedding-film-1.mp4", title: "Ava & Daniel" },
    { src: "/videos/wedding-film-2.mp4", title: "Sara & Armin" },
    { src: "/videos/wedding-film-3.mp4", title: "Nika & Reza" },
  ];

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.pause();
    v.currentTime = 0;

    setPlaying(false);
    setProgress(0);
  }, [index]);

  useEffect(() => {
    if (!showControls) return;

    const timeout = setTimeout(() => {
      setShowControls(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [showControls]);

  const togglePlay = async () => {
    const v = videoRef.current;
    if (!v) return;

    try {
      if (v.paused) {
        await v.play();
        setPlaying(true);
      } else {
        v.pause();
        setPlaying(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;

    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const fullscreen = () => {
    const v = videoRef.current;
    if (!v) return;

    if (v.requestFullscreen) {
      v.requestFullscreen();
    }
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % videos.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const onTimeUpdate = () => {
    const v = videoRef.current;
    if (!v) return;

    setProgress(v.currentTime);
  };

  const onLoaded = () => {
    const v = videoRef.current;
    if (!v) return;

    setDuration(v.duration);
  };

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = videoRef.current;
    if (!v) return;

    const time = Number(e.target.value);

    v.currentTime = time;
    setProgress(time);
  };

  const handleMouseMove = () => {
    setShowControls(true);
  };

  return (
    <section
      dir="ltr"
      className="py-32 px-6 max-w-7xl mx-auto"
      onMouseMove={handleMouseMove}
    >
      <div className="text-center mb-10">
        <h2 className="text-5xl font-casko">Films</h2>
      </div>

      <div className="relative rounded-3xl overflow-hidden bg-black shadow-2xl">

        <AnimatePresence mode="wait">
          <motion.video
            key={index}
            ref={videoRef}
            src={videos[index].src}
            className="w-full h-[600px] md:h-[700px] object-cover cursor-pointer"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.6 }}
            muted={muted}
            playsInline
            onTimeUpdate={onTimeUpdate}
            onLoadedMetadata={onLoaded}
            onClick={togglePlay}
          />
        </AnimatePresence>

        <AnimatePresence>
          {showControls && (
            <motion.div
              className="absolute left-6 top-6 text-left"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <p className="font-casko text-2xl text-white">
                {videos[index].title}
              </p>

              <p className="text-white/60 text-xs tracking-[0.3em] uppercase mt-1">
                Wedding Film
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showControls && (
            <>
              <motion.button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-5xl bg-black/30 rounded-full p-2 hover:bg-white/20 transition"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                ‹
              </motion.button>

              <motion.button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-5xl bg-black/30 rounded-full p-2 hover:bg-white/20 transition"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                ›
              </motion.button>
            </>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showControls && (
            <motion.div
              className="absolute bottom-0 left-0 w-full p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <input
                type="range"
                min={0}
                max={duration || 0}
                value={progress}
                onChange={seek}
                className="w-full accent-white mb-4"
              />

              <div className="flex flex-row items-center justify-between">

                <div className="flex flex-row items-center gap-3">

                  <button
                    onClick={togglePlay}
                    className="p-3 rounded-full bg-black/40 backdrop-blur-md hover:bg-white/30 transition text-white text-xl"
                  >
                    {playing ? <FaPause /> : <FaPlay />}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="p-3 rounded-full bg-black/40 backdrop-blur-md hover:bg-white/30 transition text-white text-xl"
                  >
                    {muted ? <FaVolumeMute /> : <FaVolumeUp />}
                  </button>

                </div>

                <button
                  onClick={fullscreen}
                  className="p-3 rounded-full bg-black/40 backdrop-blur-md hover:bg-white/30 transition text-white text-xl"
                >
                  <FaExpand />
                </button>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}