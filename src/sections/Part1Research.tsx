import React from 'react';
import { Section, AcademicCard, ImageFrame } from '../components/UI';
import { BookOpen, Film, CalendarDays, Circle, ChevronRight, Cuboid, MoveHorizontal, Anchor, Activity, Image } from 'lucide-react';
import { motion } from 'motion/react';

export default function Part1Research() {
  return (
    <>
      {/* Section 1: 封面 */}
      <section id="cover" className="scroll-section min-h-screen flex flex-col justify-center items-start relative px-[8%] pt-[140px] pb-[80px] border-b border-border-subtle overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[200vh] -z-[1] pointer-events-none opacity-30">
           <iframe 
              src="https://cdn.21st.dev/muhammadnadeemmn9485134/background-paper-shaders/default/bundle.1755685936907.html?theme=light"
              className="w-full h-full border-none block"
              title="Cover Paper Shader"
           />
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, ease: "easeOut" }}
           className="relative z-10 w-full max-w-7xl mx-auto"
        >
          <div className="font-title text-text-mute text-[10px] tracking-widest uppercase mb-6 font-bold border border-border-subtle px-3 py-1 rounded-full bg-bg-card inline-block">DIGITAL TRANSLATION & VIDEO CREATION</div>
          <h2 className="cover-title font-title text-5xl md:text-[90px] font-extrabold tracking-tighter leading-[1.1] mb-2 max-w-[1200px] text-text-main drop-shadow-lg">
            南阳汉画像石图像语汇<br/>
            <span className="text-text-sub font-light block mt-4 text-3xl md:text-5xl tracking-normal">的数字化转译与视频创作汇报</span>
          </h2>
          <p className="font-title text-accent tracking-[0.3em] text-[11px] md:text-sm uppercase mb-12 opacity-80 mt-6 font-medium">Digital Translation and Video Creation of Nanyang Han Portrait Stone Visual Vocabulary</p>
          
          <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-end justify-between w-full mb-[20px] lg:mb-[50px] pr-0 lg:pr-8">
             <p className="text-[17px] md:text-[20px] text-text-sub max-w-[850px] leading-[1.8]">
               本次汇报围绕两个部分展开：第一部分是关于南阳汉画像石论文内容的梳理，重点分析南阳汉画像石中的乐舞、博戏与车骑母题；第二部分是关于汉画像石视频作品的制作流程，说明如何从画像石拓片、人物形象、背景风格和舞蹈动作中提取视觉元素，并将其转化为动态影像。
             </p>
             <div className="flex flex-col gap-2 lg:text-right border-l-2 lg:border-l-0 lg:border-r-2 border-accent pl-4 lg:pl-0 lg:pr-4 mt-4 lg:mt-0 py-1">
                <p className="text-[13px] text-text-main font-semibold tracking-[0.2em] font-title">汇报人：谢东东</p>
                <p className="text-[13px] text-text-mute font-mono tracking-widest">学号：202533109014</p>
                <p className="text-[13px] text-text-sub font-semibold tracking-[0.2em] font-title">指导老师：徐慧</p>
             </div>
          </div>
          <div className="flex flex-wrap gap-[40px] font-title text-[15px] text-text-mute border-t border-border-subtle pt-[30px] w-full mt-4">
            <span className="flex items-center gap-2"><BookOpen className="w-4 h-4" /> 第一部分：论文研究内容</span>
            <span className="flex items-center gap-2"><Film className="w-4 h-4" /> 第二部分：视频制作流程</span>
            <span className="flex items-center gap-2"><CalendarDays className="w-4 h-4" /> 学术答辩 · 成果展示</span>
          </div>
        </motion.div>
      </section>

      {/* Section 2: 汇报目录 */}
      <Section id="catalog" tag="CATALOGUE OF REPORT" title="汇报目录与大纲展线" desc="通过理论逻辑推演与影像创作实践，多维度呈现汉画像石的数字化赋能过程。">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] mt-[40px]">
           <div className="border-l border-border-subtle pl-[25px]">
              <h3 className="font-title text-[18px] font-semibold mb-[20px] text-text-main tracking-tight">第一部分：论文研究内容</h3>
              <ul className="flex flex-col gap-[12px] list-none">
                  {['研究背景：汉画像石的图像价值', '研究对象：六类核心母题识读', '研究逻辑：从图像识读到数字转译', '图像语言特征：四个设计要素', '表达指数模型：公式算法与优先级', '论文结论：数字视觉资产转化'].map((t, i) => (
                     <li key={i} className="text-[15px] text-text-sub flex items-center gap-[10px]">
                        <Circle className="w-3 h-3 text-accent fill-accent" /> {t}
                     </li>
                  ))}
              </ul>
           </div>
           <div className="border-l border-border-subtle pl-[25px]">
              <h3 className="font-title text-[18px] font-semibold mb-[20px] text-text-main tracking-tight">第二部分：视频制作流程</h3>
              <ul className="flex flex-col gap-[12px] list-none">
                  {['流程一：前期调研与拓片获取', '流程二：人物剪影形象提炼', '流程三：黑白渐变与斑驳背景确定', '流程四：汉代舞蹈动作复刻重构', '流程五：动态转译与镜头轨迹设计', '总结与反思：非遗的再生'].map((t, i) => (
                     <li key={i} className="text-[15px] text-text-sub flex items-center gap-[10px]">
                        <Circle className="w-3 h-3 text-accent fill-accent" /> {t}
                     </li>
                  ))}
              </ul>
           </div>
        </div>
      </Section>

      {/* Section 3: 研究背景 */}
      <Section id="background" tag="RESEARCH BACKGROUND" title="研究背景：汉画像石的图像价值">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-[60px] items-center">
            <div>
                <p><strong>石刻选择与分类：</strong>本次画像石主要采用的是麒麟岗的画像石，主要包括生活类、百戏类、神话类三个类别。作为汉代墓葬、祠堂等空间中的重要图像载体，它不仅是一种装饰图像，也承载着叙事、礼仪、身份表达和审美功能。</p>
                <p className="mt-[15px]"><strong>南阳汉画像石地域特征：</strong>它的题材广泛，构图饱满，线刻有力，人物造型多以剪影化、平面化方式呈现。对于当代视觉设计来说，南阳汉画像石不仅是极其珍贵的历史图像资料，也可以成为数字动画、影像设计和文创转译的重要视觉资源。</p>
            </div>
            <ImageFrame icon={Image} src="https://i.postimg.cc/9X6wQ4ft/Chat-GPT-Image-2026nian6yue7ri-21-58-36.png" title="画像石历史拓片参考图" desc="建议上传：南阳独山或汉画馆珍藏的经典乐舞车骑画像石拓片，突显石质风化剥蚀感。 [南阳汉画像石拓片图片]" enableZoom={true} />
        </div>
      </Section>

      {/* Section 4: 研究对象与材料 */}
      <Section id="objects" tag="RESEARCH OBJECTS" title="研究对象：六类核心画幅母题" desc="原始拓片提供了最真实可靠的文物图像依据，而现代数字化静帧再设计则是当代数字化转译的视觉呈现结果。我们选取了最具代表性的六个主题：">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] mt-[30px]">
            <AcademicCard num="01." title="鼓乐" desc="击鼓乐人队列，还原汉代宴乐和打击乐器组合中神圣的声响空间秩序。" />
            <AcademicCard num="02." title="弄壶·长袖舞" desc="以柔美的长袖飘动和稳定的铜壶重心形成具有张力的旋转构图，最适宜作为视觉主核。" />
            <AcademicCard num="03." title="踏鼓舞" desc="舞者在鼓面上跳跃腾挪，将肢体重心和声音节奏融合在脚步落地的接触点上。" />
            <AcademicCard num="04." title="投壶" desc="展现持矢投接的瞬间，手、箭、壶口构成富有礼仪感与张力的运动轨迹。" />
            <AcademicCard num="05." title="车骑出行/弋射" desc="车马奔驰、张弓弋射，具有极强的横向拉伸推进感、速度感，常用作宏大叙事或转场。" />
            <AcademicCard num="06." title="六博" desc="局中对弈、手势推敲、眼神拉扯。属于低动能静态母题，侧重表现智性的空间博弈。" />
        </div>
      </Section>

      {/* Section 5: 研究逻辑 */}
      <Section id="logic" tag="METHODOLOGY LOGIC" title="研究逻辑：从图像识读到数字转译" desc="数字化转译绝非简单的轮廓描红与抠图复刻。必须通过解构与重组，建立静态二维石刻向多维数字时空映射的转换管道：">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-[15px] mt-[40px] flex-wrap">
           {[
             { num: '01', title: '图像语境理解', desc: '剖析汉画像石背后的汉代礼仪规范、民俗与哲学思想。' },
             { num: '02', title: '母题精细识读', desc: '解构画面中人物姿态、道具比例、空间主从关系。' },
             { num: '03', title: '视觉符号提取', desc: '提炼具有高识别度的核心视觉要素、正负剪影轮廓。' },
             { num: '04', title: '运动路径拆解', desc: '基于动力学推导重力下落点、袖带风动弧线、速度残影。' },
             { num: '05', title: '现代视觉输出', desc: '转译为数字动画、静帧海报、流媒体影像及数字化展陈。' },
           ].map((step, idx) => (
              <React.Fragment key={idx}>
                 <div className="flex-1 min-w-[180px] bg-bg-card border border-border-subtle p-[24px] rounded text-center relative w-full lg:w-auto">
                    <div className="font-title text-[28px] text-accent mb-[10px] font-black">{step.num}</div>
                    <h4 className="font-title text-[16px] mb-[8px]">{step.title}</h4>
                    <p className="text-[12px] text-text-sub">{step.desc}</p>
                 </div>
                 {idx < 4 && <div className="text-[20px] text-text-mute my-[10px] lg:my-0 mx-auto lg:mx-0 transform rotate-90 lg:rotate-0"><ChevronRight /></div>}
              </React.Fragment>
           ))}
        </div>
      </Section>

      {/* Section 6: 图像语言特征 */}
      <Section id="features" tag="VISUAL CHARACTERISTICS" title="南阳汉画像石的四大图像语言特征">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] mt-[30px]">
            <AcademicCard icon={Cuboid} title="石面肌理" desc="石面本身的凿刻波折、凹凸纹路，拓片中保留的噪点、磨损、风化和黑白正负形关系。这是画像石的“历史生命皮肤”，为转译提供独特的历史厚重感。" />
            <AcademicCard icon={MoveHorizontal} title="横向叙事" desc="画像石常呈横向带状分布，人物、事件依横幅轴线推移，类似于中式手卷的“散点透视”与时间序列化阅读方式，具有流畅的运动引导力。" />
            <AcademicCard icon={Anchor} title="道具锚点" desc="大鼓、铜壶、羽矢、飞鸟、独轮车、六博棋盘。这些标志性道具能够打破单纯人物剪影的扁平化局限，在构图中起到视觉定位、暗示互动类型的重要锚定作用。" />
            <AcademicCard icon={Activity} title="身体动势" desc="人物的夸张倾斜度、手部和脚部的大幅拉伸、随风而起的裙摆和衣袖。这种失衡性、动态瞬间的定格，是转化为现代帧动画和动作轨迹的核心密码。" />
         </div>
      </Section>

      {/* Section 7: 表达层级规划 */}
      <Section id="hierarchy" tag="MOTIF HIERARCHY" title="六类母题的数字化表达层级规划" desc="六类母题在视频内容和转译转化中的权重和功能定位各有不同。通过清晰的层级区分，我们能够更高效、富有逻辑地构建视频作品的情感曲线与节奏分布。">
         <div className="flex flex-col gap-[15px] max-w-[800px] my-[40px] mx-auto w-full">
            <div className="flex items-stretch border border-border-subtle rounded overflow-hidden transition-all duration-300 hover:border-accent hover:scale-[1.02] border-l-[6px] !border-l-accent">
               <div className="w-[25%] bg-bg-card font-title text-[16px] font-semibold p-[20px] text-center border-r border-border-subtle flex items-center justify-center">动态核心母题</div>
               <div className="w-[75%] p-[20px_30px] text-[14px]">
                  <strong>包含母题：</strong>弄壶·长袖舞、踏鼓舞、鼓乐。<br/>
                  <strong>功能：</strong>作为视频的视觉与情感支柱。聚焦身体动势、强烈的声音节奏以及乐舞百戏的狂欢情绪释放。
               </div>
            </div>
            <div className="flex items-stretch border border-border-subtle rounded overflow-hidden transition-all duration-300 hover:border-accent hover:scale-[1.02] border-l-[6px] !border-l-text-sub">
               <div className="w-[25%] bg-bg-card font-title text-[16px] font-semibold p-[20px] text-center border-r border-border-subtle flex items-center justify-center">叙事推进母题</div>
               <div className="w-[75%] p-[20px_30px] text-[14px]">
                  <strong>包含母题：</strong>车骑出行 / 弋射。<br/>
                  <strong>功能：</strong>担当段落之间的连接与转场轴。利用横向滚动、位移拉近以及箭矢穿透形成的视线引流，让视频产生空间的变幻和速度感。
               </div>
            </div>
            <div className="flex items-stretch border border-border-subtle rounded overflow-hidden transition-all duration-300 hover:border-accent hover:scale-[1.02] border-l-[6px] !border-l-text-mute">
               <div className="w-[25%] bg-bg-card font-title text-[16px] font-semibold p-[20px] text-center border-r border-border-subtle flex items-center justify-center">情节节点母题</div>
               <div className="w-[75%] p-[20px_30px] text-[14px]">
                  <strong>包含母题：</strong>投壶 / 六博。<br/>
                  <strong>功能：</strong>担当视频的动静调节点和心流节点。利用静态构图、目光聚焦和手指细节刻画，使节奏在高歌狂舞中沉静下来，彰显汉代仪制与竞技博弈张力。
               </div>
            </div>
         </div>
      </Section>
    </>
  );
}
