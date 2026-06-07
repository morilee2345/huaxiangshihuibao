'use client';

import {
  useEffect,
  useRef,
  useState,
  ReactNode,
  TouchEvent,
  WheelEvent,
} from 'react';
import { motion } from 'motion/react';
import MuxPlayer from '@mux/mux-player-react';
import { Play, Pause, Maximize } from 'lucide-react';

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc?: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

const getMuxPlaybackId = (url: string) => {
  try {
    const parts = url.split('/');
    return parts[parts.length - 1].split('?')[0];
  } catch (e) {
    return url;
  }
};

const ScrollExpandMedia = ({
  mediaType = 'video',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
}: ScrollExpandMediaProps) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState<boolean>(false);
  const [touchStartY, setTouchStartY] = useState<number>(0);
  const [isMobileState, setIsMobileState] = useState<boolean>(false);
  
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const videoContainerRef = useRef<HTMLDivElement | null>(null);
  const muxPlayerRef = useRef<any>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (mediaType !== 'video') return;

    if (mediaSrc.includes('mux.com')) {
      if (muxPlayerRef.current) {
        if (isPlaying) {
          muxPlayerRef.current.pause();
        } else {
          muxPlayerRef.current.play();
        }
        setIsPlaying(!isPlaying);
      }
    } else if (!mediaSrc.includes('youtube.com')) {
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause();
        } else {
          videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
      }
    }
  };

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoContainerRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoContainerRef.current.requestFullscreen();
      }
    }
  };

  useEffect(() => {
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
  }, [mediaType]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Only do the interception if the section is visible in the viewport
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
      
      if (!isVisible) return;
      
      // If we're at the top of the element roughly
      const isAtTop = rect.top > -10 && rect.top < 100;

      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= rect.top + window.scrollY + 10) {
        setMediaFullyExpanded(false);
        // e.preventDefault();
      } else if (!mediaFullyExpanded && isAtTop) {
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.0009;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartY || !sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
      if (!isVisible) return;
      const isAtTop = rect.top > -10 && rect.top < 100;

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= rect.top + window.scrollY + 10) {
        setMediaFullyExpanded(false);
      } else if (!mediaFullyExpanded && isAtTop) {
        if(e.cancelable) e.preventDefault();
        const scrollFactor = deltaY < 0 ? 0.008 : 0.005; 
        const scrollDelta = deltaY * scrollFactor;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }

        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = (): void => {
      setTouchStartY(0);
    };

    const handleScroll = (): void => {
      // We don't want to enforce always top for inline sections
    };

    const sectionElement = sectionRef.current;
    
    // @ts-ignore
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll as EventListener);
    // @ts-ignore
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    // @ts-ignore
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd as EventListener);

    return () => {
      // @ts-ignore
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll as EventListener);
      // @ts-ignore
      window.removeEventListener('touchstart', handleTouchStart);
      // @ts-ignore
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd as EventListener);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY]);

  useEffect(() => {
    const checkIfMobile = (): void => {
      setIsMobileState(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const mediaWidth = isMobileState ? 320 + scrollProgress * 650 : 400 + scrollProgress * 1250;
  const mediaHeight = isMobileState ? 220 + scrollProgress * 200 : 250 + scrollProgress * 600;

  return (
    <div
      ref={sectionRef}
      className='transition-colors duration-700 ease-in-out overflow-x-hidden'
    >
      <section className='relative flex flex-col items-center justify-start min-h-screen'>
        <div className='relative w-full flex flex-col items-center min-h-screen'>
          <motion.div
            className='absolute inset-0 z-0 h-full'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 - scrollProgress }}
            transition={{ duration: 0.1 }}
          >
            {bgImageSrc && (
              <>
                <img
                  src={bgImageSrc}
                  alt='Background'
                  className='w-full h-full object-cover object-center'
                />
                <div className='absolute inset-0 bg-black/10' />
              </>
            )}
          </motion.div>

          <div className='container mx-auto flex flex-col items-center justify-start relative z-10'>
            <div className='flex flex-col items-center justify-center w-full min-h-screen relative py-[120px]'>
              
               {/* Elegant Header Text */}
               <div
                  className="absolute top-[12%] md:top-[16%] left-0 w-full flex flex-col items-center justify-center z-10 pointer-events-none px-4"
                  style={{
                    opacity: Math.max(1 - scrollProgress * 2.5, 0),
                    transform: `translateY(-${scrollProgress * 50}px)`
                  }}
                >
                  <motion.h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-text-main font-title tracking-widest drop-shadow-xl mb-4 text-center">
                    {title}
                  </motion.h2>
                  {date && (
                    <motion.p className="text-lg md:text-2xl text-accent uppercase tracking-[0.4em] font-mono mt-2">
                      {date}
                    </motion.p>
                  )}
                </div>

              <div
                ref={videoContainerRef}
                className={`absolute z-20 top-[52%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-none rounded-2xl overflow-hidden ${mediaFullyExpanded ? 'group' : ''}`}
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: document.fullscreenElement ? '100vw' : '95vw',
                  maxHeight: document.fullscreenElement ? '100vh' : '85vh',
                  boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
                }}
              >
                {mediaType === 'video' ? (
                  mediaSrc.includes('youtube.com') ? (
                    <div className='relative w-full h-full pointer-events-none'>
                      <iframe
                        width='100%'
                        height='100%'
                        src={
                          mediaSrc.includes('embed')
                            ? mediaSrc +
                              (mediaSrc.includes('?') ? '&' : '?') +
                              'autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1'
                            : mediaSrc.replace('watch?v=', 'embed/') +
                              '?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playlist=' +
                              mediaSrc.split('v=')[1]
                        }
                        className='w-full h-full rounded-xl'
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                      />
                      <div
                        className='absolute inset-0 z-10'
                        style={{ pointerEvents: 'none' }}
                      ></div>
                    </div>
                  ) : mediaSrc.includes('mux.com') ? (
                     <div className='relative w-full h-full bg-black'>
                       <MuxPlayer
                         ref={muxPlayerRef}
                         playbackId={getMuxPlaybackId(mediaSrc)}
                         poster={posterSrc}
                         autoPlay="any"
                         loop
                         muted
                         className='w-full h-full object-cover rounded-xl'
                         style={{ width: '100%', height: '100%', objectFit: 'cover', '--media-object-fit': 'cover' } as React.CSSProperties}
                       />
                     </div>
                  ) : (
                    <div className='relative w-full h-full pointer-events-none'>
                      <video
                        ref={videoRef}
                        src={mediaSrc}
                        poster={posterSrc}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload='auto'
                        className='w-full h-full object-cover rounded-xl'
                        controls={false}
                        disablePictureInPicture
                        disableRemotePlayback
                      />
                      <div
                        className='absolute inset-0 z-10'
                        style={{ pointerEvents: 'none' }}
                      ></div>
                    </div>
                  )
                ) : (
                  <div className='relative w-full h-full'>
                    <img
                      src={mediaSrc}
                      alt={title || 'Media content'}
                      className='w-full h-full object-cover rounded-xl'
                    />

                    <motion.div
                      className='absolute inset-0 bg-black/50 rounded-xl pointer-events-none'
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: 0.7 - scrollProgress * 0.3 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                )}
                
                {mediaType === 'video' && mediaFullyExpanded && (
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center rounded-xl pointer-events-auto">
                    <div className="flex items-center gap-6">
                      <button 
                        onClick={togglePlay}
                        className="w-16 h-16 rounded-full bg-black/50 text-white backdrop-blur-md flex items-center justify-center hover:bg-accent hover:text-black transition-colors border border-white/20"
                      >
                        {isPlaying ? <Pause className="w-6 h-6 ml-0.5" fill="currentColor" /> : <Play className="w-6 h-6 ml-1" fill="currentColor" />}
                      </button>
                      <button 
                        onClick={toggleFullscreen}
                        className="w-12 h-12 rounded-full bg-black/50 text-white backdrop-blur-md flex items-center justify-center hover:bg-accent hover:text-black transition-colors border border-white/20"
                      >
                        <Maximize className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                )}
                
                {mediaType === 'video' && !mediaFullyExpanded && (
                   <motion.div
                      className='absolute inset-0 bg-black/30 rounded-xl pointer-events-none'
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                      transition={{ duration: 0.2 }}
                    />
                )}
              </div>

               {/* Scroll To Expand Hint */}
               <div
                  className="absolute bottom-[5%] md:bottom-[8%] left-0 w-full flex flex-col items-center justify-center z-10 pointer-events-none"
                  style={{
                    opacity: Math.max(1 - scrollProgress * 4, 0),
                    transform: `translateY(${scrollProgress * 50}px)`
                  }}
                >
                  {scrollToExpand && (
                    <p className="text-text-sub font-medium text-xs md:text-sm uppercase tracking-[0.3em] mb-4">
                      {scrollToExpand}
                    </p>
                  )}
                  {scrollToExpand && (
                    <div className="w-[1px] h-12 md:h-16 bg-gradient-to-b from-accent to-transparent opacity-80"></div>
                  )}
                </div>
            </div>

            <motion.section
              className='flex flex-col w-full'
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.7 }}
            >
              {children}
            </motion.section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandMedia;
