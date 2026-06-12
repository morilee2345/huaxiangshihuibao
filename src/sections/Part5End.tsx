import React from 'react';
import { ContainerScroll } from '../components/ui/container-scroll-animation';
import ScrollExpandMedia from '../components/ui/scroll-expansion-hero';

export default function Part5End() {
  return (
    <section id="end" className="w-full">
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc="https://player.mux.com/lYl85wqkNX2qdS01AXaieMfVocvXXmsat7pfdLqxjLy8"
        posterSrc="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1280&auto=format&fit=crop"
        title="视觉转译成果展示"
        date="数字造境"
        scrollToExpand="向下滑动以展开沉浸影像"
        textBlend
      >
        <div className="w-full flex justify-center py-20 pb-[200px]">
           <button className="px-8 py-4 bg-accent/20 border border-accent text-accent rounded-full tracking-widest text-sm hover:bg-accent hover:text-black transition-colors font-medium">
             观看完整高清版本
           </button>
        </div>
      </ScrollExpandMedia>

      <div className="bg-transparent relative z-10 w-full overflow-hidden mt-[-100px]">
        <div className="flex flex-col">
          <ContainerScroll
            titleComponent={
              <>
                <h1 className="text-4xl font-semibold text-text-main mb-8">
                  以上是本次汇报的全部内容 <br />
                  <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-accent">
                    感谢您的观看
                  </span>
                </h1>
              </>
            }
          >
            <div className="w-full h-full flex flex-col items-center justify-center bg-bg-card relative overflow-hidden bg-gradient-to-br from-bg-card to-black">
               {/* Some soft glow in the background */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none"></div>
               <h2 className="text-[6rem] md:text-[10rem] font-bold tracking-widest text-text-main relative z-10 drop-shadow-2xl">
                 谢谢！
               </h2>
               <p className="text-text-sub text-lg md:text-2xl mt-4 relative z-10 tracking-[0.5em] uppercase font-mono">
                 THANK YOU
               </p>
            </div>
          </ContainerScroll>
        </div>
      </div>
    </section>
  );
}
