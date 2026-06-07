import React from 'react';
import { Section, ImageFrame, AcademicCard } from '../components/UI';
import { Image, GraduationCap, Code, Lightbulb } from 'lucide-react';

export default function Part4Video() {
  return (
    <>
      {/* Section 17: 视频结构总览 */}
      <Section id="video-structure" tag="VIDEO PRODUCTION PIPELINE" title="【视频实操部分】成片脉络结构全案" desc="我们将论文的研究成果赋能于实操视频，成片设计在逻辑上对应各个母题层级，确保视听的高学术水准与审美连贯性：" className="bg-black/20">
         <div className="flex flex-col gap-[20px] relative mt-[40px] video-timeline-wrap">
             {[
               { title: '开场引入篇 (Intro)', desc: '利用黑白极度渐变，模拟风化剥落的深色石胎，微弱噪点逐渐汇聚成光晕，引领观众沉浸入汉代的神秘虚无时空。' },
               { title: '长袖乐舞核心章 (Core Dance)', desc: '长袖舞者登场。以其灵动飘扬的长袖运动抛物线轨迹，拉开整个数字化演练的视觉序幕。' },
               { title: '车骑长轴横向推进 (Chariot Speed)', desc: '马车奔驰、弋射飞鸟。镜头从局部拉伸到横轴摇镜，马蹄和车辐构成强烈的线速度转场。' },
               { title: '踏鼓百戏狂欢潮 (Rhythm Strike)', desc: '踏鼓与击建鼓的人交替重叠。每一次重踏和槌击，都有强烈的光影音符与波纹反馈，达到视频视听体验的极点。' },
               { title: '六博静博终曲 (Quiet Epilogue)', desc: '狂欢散去，转入幽暗平静。六博对弈者安静登场。在视线的极致凝视与手指起落的克制下，伴随着逐渐归于深邃的黑白颗粒背景，片尾致谢落幕。' },
             ].map((item, idx) => (
               <div key={idx} className="flex gap-[30px] relative pl-[50px]">
                   <div className="absolute left-[11px] top-[8px] w-[20px] h-[20px] bg-bg-base border-[2px] border-accent rounded-full z-10"></div>
                   <div className="bg-bg-card border border-border-subtle p-[24px] rounded shrink grow">
                       <h4 className="font-title text-[18px] mb-[5px] text-text-main">{item.title}</h4>
                       <p className="text-[14px] text-text-sub">{item.desc}</p>
                   </div>
               </div>
             ))}
         </div>
      </Section>

      {/* Section 18: 流程一 */}
      <Section id="step-one" tag="WORKFLOW STEP 01" title="流程一：前期调研、拓片数据清洗及获取">
         <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-[60px] items-center">
             <div>
                 <p><strong>严谨的学术求证：</strong>视频方案杜绝空泛的主观想象。我们通过大量阅读地方馆藏图像学报告、对南阳汉画馆和公开学术资料中所展示的大量乐舞、百戏拓片进行细节分类归拢。</p>
                 <p className="mt-[15px]"><strong>信息提取重点：</strong>精细提炼图像边缘，剔除杂乱的无规则物理脏痕，精准把握古朴人物的肢体躯干重心点、手、箭、壶口、车轮中心等的坐标，以便后续动作骨骼绑定时使用。</p>
             </div>
             <ImageFrame icon={Image} title="原始拓片文献搜集与标注分析图" desc="建议上传：在文献照片上进行红色动作向量、几何道具标注的分析解析图。 [调研标记图]" />
         </div>
      </Section>

      {/* Section 19: 流程二 */}
      <Section id="step-two" tag="WORKFLOW STEP 02" title="流程二：剪影化人物造型的骨架设计确定">
         <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-[60px] items-center">
             <ImageFrame icon={Image} title="人物骨骼绑定与剪影提取图" desc="建议上传：黑色平面化人物，配以二维关节控制点（2D Joint Points）的三维骨架示意。 [人物形象设计图]" className="order-2 md:order-1" />
             <div className="order-1 md:order-2">
                 <p>为了保持汉代石刻最核心的平面化、剪影式视觉本源，我们绝不采用复杂的三维精细写实雕刻，而是在提取轮廓后，将人物造型设计为极富古意与风骨的<strong>平面黑色高反差剪影</strong>。</p>
                 <p className="mt-[15px]"><strong>运动节点重构：</strong>虽然外在造型保持平面，但核心的动作结构点是完备的。针对长袖、鼓击、投掷动作，建立平面控制关节，使剪影动作流畅、准确，同时不失古拙厚重的力度美感。</p>
             </div>
         </div>
      </Section>

      {/* Section 20: 流程三 */}
      <Section id="step-three" tag="WORKFLOW STEP 03" title="流程三：确定黑白渐变与斑驳颗粒背景">
         <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-[60px] items-center">
             <div>
                 <p><strong>拒绝无菌的现代渐变：</strong>视频背景风格一律采用黑白多层线性与径向渐变。在此基础上，加入特制的磨损噪点与流动的微粒滤镜，模拟经历漫长岁月风化浸润的石质纹路。</p>
                 <p className="mt-[15px]"><strong>主客关系突出：</strong>这种设计并不需要刻画出具体拼接的墙面石砖缝隙。虚化而厚重斑驳的背景能够像母体一样将剪影角色与自发光的线条衬托得更加生动，同时也突出了时空的深度感。</p>
             </div>
             <ImageFrame icon={Image} title="斑驳风化视频背景原画样例" desc="建议上传：一张黑白重度颗粒渐变，带有风化斑驳效果的高清底图原画。 [风化背景图]" />
         </div>
      </Section>

      {/* Section 21: 流程四 */}
      <Section id="step-four" tag="WORKFLOW STEP 04" title="流程四：汉族传统舞蹈复刻与简化重构">
         <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-[60px] items-center">
             <ImageFrame icon={Image} title="舞蹈演员动作动捕或复刻过程照片" desc="建议上传：舞蹈演员身披水袖在排练室复现汉舞动作的对比分镜图。 [舞蹈复刻分镜图]" className="order-2 md:order-1" />
             <div className="order-1 md:order-2">
                 <p><strong>非遗重现与转化：</strong>为了使动作生动感人，我们参照汉族长袖舞、踏鼓百戏等经典民间舞蹈，记录专业舞蹈演员的甩袖、跨步、转腰动作，并分析重心转移弧度。</p>
                 <p className="mt-[15px]"><strong>古迹契合度修正：</strong>采集到的舞蹈动作必须根据拓片中人物夸张、扁平的姿势特征进行修正和“边缘刀削化”限制，从而让现代舞蹈自然而妥帖地在汉砖剪影上“活”过来。</p>
             </div>
         </div>
      </Section>

      {/* Section 22: 流程五 */}
      <Section id="step-five" tag="WORKFLOW STEP 05" title="流程五：动态转译与极简镜头动画轨迹设计">
         <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-[60px] items-center">
             <div>
                 <p>镜头运动一律遵循汉画像石独特的平面化、横幅推移特性。杜绝滥用多维环绕的广角镜头，更多采用<strong>经典横向平移（Side Scrolling Scroll）、叠化残影（Dissolve and Echo Trails）与高精度的局部推近。</strong></p>
                 <ul className="mt-[15px] list-square pl-[20px] text-text-sub text-[14px]">
                     <li>长袖舞：使用金色自发光的曲线，跟随袖摆的划过拉伸，勾勒运动流线。</li>
                     <li>踏鼓/鼓乐：在踩踏和击鼓槌落点的精确帧，触发能量光晕爆发特效。</li>
                     <li>六博：摄像机缓慢、沉重地从远景推向棋盘，刻画对视的沉默压迫力。</li>
                 </ul>
             </div>
             <ImageFrame icon={Image} title="动态转译与特效运动分镜草图" desc="建议上传：带有金砂运动线条、时空穿梭感的视频分镜剪辑板。 [视频分镜剪辑图]" />
         </div>
      </Section>

      {/* Section 23: 总结与展望 */}
      <Section id="summary" tag="SUMMARY & PROSPECTS" title="总结与反思：传统非遗数字化的新生命" className="text-center">
         <p className="text-[18px] text-text-sub max-w-[800px] mb-[50px] mx-auto">
             本次创作打通了论文图像学、美学研究到多媒体视觉动画制作的双向通道。我们没有止步于刻板的还原，而是尝试以现代眼光构建传统符号与多媒体科技交互的可行未来路径。
         </p>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
             <AcademicCard icon={GraduationCap} title="理论基础" desc="以完备的南阳汉画像石文献资料与六大母题表达指数评估为学术依托。" titleClass="justify-center" />
             <AcademicCard icon={Code} title="技术落地" desc="采用风化背景和黑色剪影角色，成功完成了石刻与东方数字影像质感的转译。" titleClass="justify-center" />
             <AcademicCard icon={Lightbulb} title="交互拓展" desc="未来计划将投壶与六博母题拓展为基于物理交互的数字沉浸展演方案。" titleClass="justify-center" />
         </div>

         <p className="font-title text-[24px] text-accent mt-[60px] font-semibold">
             “千载金石，数字新生”
         </p>
      </Section>
    </>
  );
}
