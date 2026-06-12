import React from 'react';
import { ContainerScroll } from '../components/ui/container-scroll-animation';
import ScrollExpandMedia from '../components/ui/scroll-expansion-hero';
import { Palette, Layers, Sparkles } from 'lucide-react';

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
        <div className="w-full flex justify-center py-20">
          <button className="px-8 py-4 bg-accent/20 border border-accent text-accent rounded-full tracking-widest text-sm hover:bg-accent hover:text-black transition-colors font-medium">
            观看完整高清版本
          </button>
        </div>
      </ScrollExpandMedia>

      {/* Permanently visible Design Statement Section */}
      <div className="w-full py-20 bg-black/40 border-t border-b border-border-subtle">
        <div className="max-w-5xl mx-auto px-6">
          <div className="w-full border border-border-subtle bg-bg-card/50 backdrop-blur-md rounded-2xl p-8 md:p-12 relative overflow-hidden text-left">
             <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] pointer-events-none"></div>
             
             <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-border-subtle pb-6 mb-8 gap-4">
                <div>
                   <span className="text-accent text-xs font-mono tracking-widest uppercase block mb-1">DESIGN STATEMENT</span>
                   <h3 className="font-title text-2xl md:text-3xl font-semibold text-text-main tracking-tight">南阳汉画像石视频创作设计说明</h3>
                </div>
                <div className="text-xs text-text-mute font-mono border border-border-subtle px-3 py-1.5 rounded-md self-start md:self-auto bg-black/20">
                   学术汇报视频案全案说明
                </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col gap-3">
                   <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center border border-accent/20">
                      <Palette className="w-5 h-5 text-accent" />
                   </div>
                   <h4 className="font-title text-[18px] font-semibold text-text-main">一、石刻色彩与古拙肌理</h4>
                   <p className="text-text-sub text-[13px] leading-relaxed">
                      视频整体承袭南阳汉画中著名的<strong>“麒麟岗石雕”风格</strong>。设计上避免无菌、现代的纯黑纯白，而是融入重度颗粒、磨损噪点与时空尘埃感的斑驳底纹，完美还原两千年石刻在经历风霜剥蚀后的温润墨韵和沧桑肌理。
                   </p>
                </div>

                <div className="flex flex-col gap-3">
                   <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center border border-accent/20">
                      <Layers className="w-5 h-5 text-accent" />
                   </div>
                   <h4 className="font-title text-[18px] font-semibold text-text-main">二、剪影形态与刀削骨架</h4>
                   <p className="text-text-sub text-[13px] leading-relaxed">
                      角色均采用高反差、硬挺干脆的<strong>块面黑色剪影</strong>，延续汉代拓片古拙甚至由于受石刻刀法限制而产生的“骨架几何化”美感。通过非遗舞蹈及多源素材动作解构，使平面人物兼具古典张力与现代感。
                   </p>
                </div>

                <div className="flex flex-col gap-3">
                   <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center border border-accent/20">
                      <Sparkles className="w-5 h-5 text-accent" />
                   </div>
                   <h4 className="font-title text-[18px] font-semibold text-text-main">三、多维造境与自发光线</h4>
                   <p className="text-text-sub text-[13px] leading-relaxed">
                      引入现代影视包装的<strong>微粒流光、自发光轨迹线条</strong>作为汉乐、神话、车舆和抛物线的数字化转化载体。古典金石韵律与现代发光视效完美咬合，打造出气韵生动、从静态石刻完美蝶变为流动资产的视觉奇观。
                   </p>
                </div>
             </div>

             <div className="mt-10 pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between text-[11px] text-text-mute font-mono gap-4">
                <span className="tracking-widest">南阳汉画像石图像语汇数字化转译研究课题</span>
                <span className="text-accent hover:underline cursor-default font-semibold tracking-wider">学术、艺术与数字多媒体影像的交叉探索</span>
             </div>
          </div>
        </div>
      </div>

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
