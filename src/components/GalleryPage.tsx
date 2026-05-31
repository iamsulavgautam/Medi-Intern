import React, { useMemo, useState, useRef } from "react";
import { X, ZoomIn, Images, Play, Pause, Volume2, VolumeX } from "lucide-react";

interface GalleryPageProps {
  setCurrentPage?: (page: string) => void;
}

const videos = [
  {
    src: "/gallery/video.mp4",
    title: "Adventure Programme",
    desc: "Explore Nepal's breathtaking landscapes and outdoor adventures",
  },
  {
    src: "/gallery/video%202.mp4",
    title: "Adventure Programme",
    desc: "Thrilling activities and unforgettable experiences in Nepal",
  },
  {
    src: "/gallery/video%203.mp4",
    title: "Adventure Programme",
    desc: "Trekking, rafting, and discovering the spirit of Nepal",
  },
];

const VideoCard: React.FC<{ src: string; title: string; desc: string }> = ({
  src,
  title,
  desc,
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

  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-xl border border-white/20 bg-black">
      <video
        ref={videoRef}
        src={src}
        className="w-full aspect-video object-cover"
        muted
        loop
        playsInline
        preload="metadata"
        onEnded={() => setPlaying(false)}
      />
      {/* Overlay controls */}
      <div
        className="absolute inset-0 flex flex-col justify-between cursor-pointer"
        onClick={togglePlay}
      >
        {/* Top gradient */}
        <div className="h-16 bg-gradient-to-b from-black/50 to-transparent" />

        {/* Centre play button */}
        <div className="flex items-center justify-center">
          <div
            className={`rounded-full bg-white/20 backdrop-blur-sm border border-white/40 p-4 transition-opacity duration-300 ${
              playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"
            }`}
          >
            {playing ? (
              <Pause className="h-8 w-8 text-white" />
            ) : (
              <Play className="h-8 w-8 text-white fill-white" />
            )}
          </div>
        </div>

        {/* Bottom gradient + labels */}
        <div className="h-24 bg-gradient-to-t from-black/70 to-transparent flex items-end px-4 pb-3">
          <div className="flex-1">
            <p className="text-white font-semibold text-sm leading-tight">{title}</p>
            <p className="text-white/70 text-xs mt-0.5">{desc}</p>
          </div>
          <button
            className="ml-2 p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            onClick={toggleMute}
            aria-label={muted ? "Unmute" : "Mute"}
          >
            {muted ? (
              <VolumeX className="h-4 w-4 text-white" />
            ) : (
              <Volume2 className="h-4 w-4 text-white" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const GalleryPage: React.FC<GalleryPageProps> = () => {
  const allImages = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => `/gallery/${i + 1}.jpeg`);
  }, []);

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // SEO Structured Data for Gallery
  const galleryStructuredData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Medical Internship Gallery - Medical Exchange Nepal",
    "description": "Explore our gallery showcasing medical internship experiences, hospital rotations, community health camps, and cultural immersion in Nepal. See real moments from our medical exchange programs.",
    "url": "https://medicalexchangenepal.com/gallery",
    "provider": {
      "@type": "Organization",
      "name": "Medical Exchange Nepal"
    },
    "image": allImages.map((src, index) => ({
      "@type": "ImageObject",
      "url": `https://medicalexchangenepal.com${src}`,
      "name": `Medical Internship Gallery Image ${index + 1}`,
      "description": "Medical internship experience in Nepal"
    }))
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(galleryStructuredData)
        }}
      />

      {/* Animated Background Elements - matching theme */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-400/20 to-emerald-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <section className="relative pt-24 pb-16 overflow-hidden" aria-label="Medical Internship Gallery">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700"></div>
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Images className="h-12 w-12 text-white" />
              <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent leading-tight">
                Gallery
              </h1>
            </div>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
              Moments from hospital rotations, community health camps, cultural
              immersion, and life in Nepal.
            </p>
          </div>
        </div>
      </section>

      {/* ── Real Activities Videos ── */}
      <section className="relative py-14" aria-label="Real Activities Videos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-3">
              Real Footage
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-2">
              Activities in Action
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm">
              Watch genuine moments from our interns — inside hospitals, at
              community camps, and out exploring Nepal.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((v) => (
              <VideoCard key={v.src} {...v} />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-slate-200" />
      </div>

      {/* Masonry-like Grid */}
      <section className="relative py-16" aria-label="Medical Internship Photo Gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]"></div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {allImages.map((src, index) => (
              <div key={index} className="mb-4 break-inside-avoid">
                <div className="group relative overflow-hidden rounded-xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
                  <img
                    src={src}
                    alt={`Medical Internship in Nepal - Gallery Image ${index + 1} - Hospital rotations, community health, and cultural experiences`}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    onClick={() => setLightboxIndex(index)}
                  />
                  <button
                    className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-colors"
                    onClick={() => setLightboxIndex(index)}
                    aria-label={`Open Medical Internship Gallery Image ${index + 1}`}
                  >
                    <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(null);
            }}
            aria-label="Close Medical Internship Gallery Image"
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={allImages[lightboxIndex]}
            alt={`Medical Internship in Nepal - Expanded Gallery Image ${lightboxIndex + 1} - Medical training and cultural experiences`}
            className="max-h-[85vh] max-w-[95vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
