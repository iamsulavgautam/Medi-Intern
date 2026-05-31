import React, { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

interface GalleryVideoCardProps {
  src: string;
  className?: string;
  aspect?: "video" | "portrait";
}

const GalleryVideoCard: React.FC<GalleryVideoCardProps> = ({
  src,
  className = "",
  aspect = "video",
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  const isPortrait = aspect === "portrait";

  return (
    <div
      className={`group relative overflow-hidden bg-black ${
        isPortrait
          ? "aspect-[9/16] rounded-2xl shadow-2xl shadow-black/50 ring-1 ring-white/25"
          : "aspect-video rounded-xl shadow-lg ring-1 ring-white/20"
      } ${className}`}
    >
      <video
        ref={videoRef}
        src={src}
        className="absolute inset-0 h-full w-full object-cover"
        muted
        loop
        playsInline
        preload="metadata"
        onEnded={() => setPlaying(false)}
      />
      <div
        className="absolute inset-0 flex items-center justify-center cursor-pointer bg-gradient-to-t from-black/30 via-transparent to-black/10"
        onClick={togglePlay}
        aria-label={playing ? "Pause video" : "Play video"}
      >
        <div
          className={`rounded-full bg-white/20 backdrop-blur-sm border border-white/40 transition-all duration-300 ${
            isPortrait ? "p-2.5" : "p-3"
          } ${playing ? "opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100" : "opacity-100"}`}
        >
          {playing ? (
            <Pause className={`text-white ${isPortrait ? "h-5 w-5" : "h-6 w-6"}`} />
          ) : (
            <Play className={`text-white fill-white ${isPortrait ? "h-5 w-5" : "h-6 w-6"}`} />
          )}
        </div>
      </div>
      <button
        type="button"
        className="absolute bottom-2 right-2 p-1.5 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm transition-colors"
        onClick={toggleMute}
        aria-label={muted ? "Unmute video" : "Mute video"}
      >
        {muted ? (
          <VolumeX className="h-3.5 w-3.5 text-white" />
        ) : (
          <Volume2 className="h-3.5 w-3.5 text-white" />
        )}
      </button>
    </div>
  );
};

export default GalleryVideoCard;
