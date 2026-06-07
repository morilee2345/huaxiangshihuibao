import React, { useState, useEffect } from 'react';
import { Paintbrush, ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';
import { GlowCard } from './spotlight-card';

export function Header({ theme, toggleTheme }: { theme: string, toggleTheme: () => void }) {
   return (
     <header className="fixed top-0 left-0 w-full px-8 h-16 flex justify-between items-center bg-black/50 data-[theme=light]:bg-white/80 backdrop-blur-md border-b border-border-subtle z-[1000] transition-colors duration-300">
        <div className="flex items-center gap-6">
           <span className="w-8 h-8 bg-text-main flex items-center justify-center rounded-sm font-bold text-bg-base text-xl">S</span>
           <h1 className="font-title text-sm tracking-tight font-medium text-text-sub">南阳汉画像石数字化转译汇报</h1>
        </div>
        <div className="flex items-center gap-4">
            <button onClick={toggleTheme} className="bg-transparent border border-border-subtle text-text-main py-1 px-3 cursor-pointer rounded-full text-[10px] uppercase font-bold tracking-widest flex items-center gap-2 transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-[0_0_10px_var(--color-accent-glow)]">
               <Paintbrush className="w-4 h-4" />
               <span>{theme === 'light' ? '黑拓风格 (漆黑质)' : '白拓风格 (朱砂印)'}</span>
            </button>
        </div>
     </header>
   );
}

export function Tracker() {
  const [sections, setSections] = useState<{ id: string; name: string }[]>([]);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const els = document.querySelectorAll('.scroll-section');
    const secData = Array.from(els).map(el => {
       const titleEl = el.querySelector('.section-title') || el.querySelector('.cover-title');
       const name = titleEl ? titleEl.textContent || '' : '开始';
       const shortName = name.split('：')[0].split('【')[0].substring(0, 12);
       return { id: el.id, name: shortName };
    });
    setSections(secData);

    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      let newActive = 0;
      Array.from(els).forEach((sec, idx) => {
         const top = (sec as HTMLElement).offsetTop;
         const height = (sec as HTMLElement).offsetHeight;
         if (scrollPos >= top && scrollPos < top + height) {
             newActive = idx;
         }
      });
      setActiveIdx(newActive);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="academic-tracker fixed right-8 top-1/2 -translate-y-1/2 z-[900] flex flex-col gap-4 p-4 border border-border-subtle rounded-3xl backdrop-blur-md shadow-2xl bg-bg-card">
       {sections.map((s, i) => (
         <div
            key={s.id}
            className={`w-2 h-2 rounded-full cursor-pointer relative transition-all duration-300 group ${i === activeIdx ? 'bg-accent scale-[1.3] shadow-[0_0_8px_var(--color-accent)]' : 'bg-text-mute hover:bg-accent hover:scale-[1.3] hover:shadow-[0_0_8px_var(--color-accent)]'}`}
            onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' })}
         >
            <span className="absolute right-[25px] top-1/2 -translate-y-1/2 bg-bg-card text-text-main text-[11px] py-1 px-[10px] rounded border border-border-subtle whitespace-nowrap opacity-0 pointer-events-none transition-opacity duration-200 group-hover:opacity-100">
                {i + 1}. {s.name}
            </span>
         </div>
       ))}
    </div>
  );
}

export function BackToTop() {
   const [visible, setVisible] = useState(false);
   useEffect(() => {
      const onScroll = () => setVisible(window.scrollY > 500);
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
   }, []);
   return (
      <div
         onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
         className={`fixed bottom-[30px] left-[40px] bg-bg-card border border-border-subtle text-text-main w-[44px] h-[44px] rounded-full flex justify-center items-center cursor-pointer z-[1000] transition-all duration-300 ${visible ? 'opacity-100 visible' : 'opacity-0 invisible'} hover:text-accent hover:border-accent hover:shadow-[0_0_10px_var(--color-accent-glow)]`}
      >
         <ArrowUp className="w-5 h-5" />
      </div>
   );
}

export function Section({ id, tag, title, desc, children, className = "" }: any) {
    return (
        <section id={id} className={`scroll-section px-[8%] py-24 min-h-screen border-b border-border-subtle flex flex-col justify-center relative overflow-hidden ${className}`}>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full flex justify-center flex-col max-w-7xl mx-auto"
            >
                {title && <h2 className="section-title font-title text-4xl lg:text-5xl font-bold tracking-tight mb-3 leading-tight text-text-main">{title}</h2>}
                {tag && <div className="font-title text-accent text-sm lg:text-base tracking-[0.2em] uppercase mb-8 font-medium opacity-80">{tag}</div>}
                {desc && <p className="text-base text-text-sub max-w-[800px] mb-12 font-medium">{desc}</p>}
                <div className="relative z-10 w-full">
                   {children}
                </div>
            </motion.div>
        </section>
    );
}

export function ImageFrame({ title, desc, icon: Icon, src, hoverSrc, alt, className = "" }: any) {
   return (
     <GlowCard customSize={true} glowColor="green" className={`flex flex-col justify-center items-center h-[340px] rounded-2xl bg-bg-card transition-all duration-300 hover:border-accent shadow-xl group overflow-hidden relative ${className}`}>
        {src ? (
          <>
            {hoverSrc && <img src={hoverSrc} alt={`${alt || title} - Revealed`} className="absolute inset-0 w-full h-full object-cover z-0" />}
            <img src={src} alt={alt || title} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${hoverSrc ? 'z-10 group-hover:opacity-0' : 'z-0'}`} />
          </>
        ) : (
          <>
            {Icon && <Icon className="w-[44px] h-[44px] text-text-mute mb-[15px] transition-transform duration-500 group-hover:scale-110 relative z-10" />}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="font-title text-sm tracking-tight font-semibold text-text-main mb-2 z-10 relative">{title}</div>
            <div className="text-xs text-text-sub max-w-[80%] text-center z-10 relative leading-relaxed">{desc}</div>
          </>
        )}
     </GlowCard>
   );
}

export function AcademicCard({ num, title, icon: Icon, desc, className = "", titleClass = "" }: any) {
   return (
     <div className={`bg-bg-card border border-border-subtle p-[30px] rounded-xl relative transition-all duration-300 hover:-translate-y-1 hover:border-accent shadow-lg group overflow-hidden ${className}`}>
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent-glow rounded-full blur-[80px] pointer-events-none opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
        <h3 className={`font-title text-[22px] mb-[15px] flex items-center gap-2.5 ${titleClass}`}>
           {num && <span className="text-accent">{num}</span>}
           {Icon && <Icon className="w-5 h-5" />}
           {title}
        </h3>
        <p className="text-[14px] leading-[1.8]">{desc}</p>
     </div>
   );
}

export function TiltImageFrame({ src, alt, className = "" }: any) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Max rotation 10 degrees
      const ry = ((x - centerX) / centerX) * 8;
      const rx = ((y - centerY) / centerY) * -8;
      
      setRotateX(rx);
      setRotateY(ry);
  };

  const handleMouseLeave = () => {
      setRotateX(0);
      setRotateY(0);
  };

  return (
      <div 
          className={`w-full h-full min-h-[340px] flex items-center justify-center relative ${className}`}
          style={{ perspective: "1000px" }}
      >
          <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              animate={{ rotateX, rotateY }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-full h-[340px] rounded-2xl overflow-hidden relative shadow-2xl border border-border-subtle cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
          >
              <img src={src} alt={alt} className="w-full h-full object-cover" />
              
              {/* Noise overlay to simulate stone texture that catches light dynamically */}
              <div className="absolute inset-0 z-10 pointer-events-none opacity-40 mix-blend-overlay" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              }}></div>
              
              {/* Dynamic lighting based on tilt */}
              <motion.div 
                  className="absolute inset-0 pointer-events-none mix-blend-screen z-20"
                  animate={{
                      background: `radial-gradient(circle at ${50 + rotateY * 5}% ${50 - rotateX * 5}%, rgba(255,255,255,0.15) 0%, transparent 70%)`
                  }}
              />
          </motion.div>
      </div>
  );
}
