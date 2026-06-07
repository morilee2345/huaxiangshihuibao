import React, { useState, useEffect } from 'react';
import { Section, ImageFrame, TiltImageFrame } from '../components/UI';
import { Network } from 'lucide-react';
import { TestimonialsColumn } from '../components/ui/testimonials-columns-1';
import { motion } from 'motion/react';

const motifScores = [
  {
    text: "长袖舞动势极大，线条流畅，具有很高的视觉张力，转译潜力巨大。在动态推演中，其肢体语言可以完美映射为流畅的UI互动反馈。",
    image: "https://picsum.photos/seed/dance/200/200",
    name: "弄壶·长袖舞",
    role: "综合得分：4.65 / 5.0",
  },
  {
    text: "车马出行画面宏大，叙事性极强，透视关系明显，适合做运动推进转场。影像转化具备史诗感。",
    image: "https://picsum.photos/seed/horses/200/200",
    name: "车骑出行",
    role: "综合得分：4.45 / 5.0",
  },
  {
    text: "踏鼓动作协调，节奏感强烈，能够为数字影像赋予急促的律动感，视听转化度极高。",
    image: "https://picsum.photos/seed/drum/200/200",
    name: "踏鼓舞",
    role: "综合得分：4.30 / 5.0",
  },
  {
    text: "建鼓与排箫等器乐演奏，听觉的视觉化转换潜力高，是串联视听同步的核心模块。",
    image: "https://picsum.photos/seed/music/200/200",
    name: "鼓乐",
    role: "综合得分：4.20 / 5.0",
  },
  {
    text: "投壶作为汉代经典酒令游戏，具有极强的交互性，能够引导用户进行点击互动。",
    image: "https://picsum.photos/seed/game/200/200",
    name: "投壶",
    role: "综合得分：4.00 / 5.0",
  },
  {
    text: "六博棋局刻画细致，两人对弈的静止状态适合作为影像节奏的舒缓留白，形成动静互补。",
    image: "https://picsum.photos/seed/chess/200/200",
    name: "六博",
    role: "综合得分：3.70 / 5.0",
  },
  {
    text: "弋射图像中弓箭张力与飞鸟动态构成完美的画面对角线，视觉冲击力与叙事跨度绝佳。",
    image: "https://picsum.photos/seed/arrow/200/200",
    name: "弋射",
    role: "综合得分：4.50 / 5.0",
  },
  {
    text: "乐舞百戏场面繁荣，人物组合多样，文化信息的载量极大，适合在数字影像的最高潮群像展示。",
    image: "https://picsum.photos/seed/party/200/200",
    name: "乐舞百戏",
    role: "综合得分：4.40 / 5.0",
  },
  {
    text: "斗兽图像表现人与动物的搏击，展现出极强的力量感与原生生命力，是情绪共鸣的暗线支柱。",
    image: "https://picsum.photos/seed/beast/200/200",
    name: "斗兽",
    role: "综合得分：4.10 / 5.0",
  }
];

const firstColumn = motifScores.slice(0, 3);
const secondColumn = motifScores.slice(3, 6);
const thirdColumn = motifScores.slice(6, 9);


export default function Part3Data() {
  const [dAttr, setD] = useState(5.0);
  const [nAttr, setN] = useState(4.0);
  const [cAttr, setC] = useState(4.5);
  const [rAttr, setR] = useState(4.5);
  const [vAttr, setV] = useState(4.8);

  const finalScore = (0.25 * dAttr + 0.20 * nAttr + 0.20 * cAttr + 0.20 * rAttr + 0.15 * vAttr).toFixed(2);

  return (
    <>
      {/* Section 14: 表达指数模型 */}
      <Section id="model" tag="MATHEMATICAL INDEX MODEL" title="表达指数模型：从主观推演到量化评估" desc="为判定六大母题在数字影像化转译中的最优先序列与适应性，我们特构建了权重计算公式，并制作了以下交互式评价分析仪：">
         <div className="bg-bg-card border border-border-subtle rounded-[8px] p-[40px] mt-[30px]">
             <div className="font-title text-[26px] text-center text-text-main mb-[30px] tracking-[1px] border-b border-dashed border-border-subtle pb-[20px]">
                 综合表达指数：<span className="text-accent">E = 0.25 × D + 0.20 × N + 0.20 × C + 0.20 × R + 0.15 × V</span>
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[20px]">
                 {[
                    { label: '动态强度 (D)', val: dAttr, setFn: setD },
                    { label: '叙事跨度 (N)', val: nAttr, setFn: setN },
                    { label: '文化识别 (C)', val: cAttr, setFn: setC },
                    { label: '转译潜力 (R)', val: rAttr, setFn: setR },
                    { label: '视觉清晰 (V)', val: vAttr, setFn: setV },
                 ].map((item, idx) => (
                    <div key={idx} className="flex flex-col gap-[8px]">
                        <label className="text-[13px] text-text-sub flex justify-between">
                            <span>{item.label}</span> <strong>{item.val.toFixed(1)}</strong>
                        </label>
                        <input 
                            type="range" min="1" max="5" step="0.1" value={item.val} 
                            onChange={(e) => item.setFn(parseFloat(e.target.value))}
                            className="w-full accent-accent bg-bg-base h-[6px] rounded-[3px] outline-none"
                        />
                    </div>
                 ))}
             </div>
             
             <div className="col-span-full text-center mt-[30px] text-[18px] text-text-sub">
                 您当前的动态计算结果 (E)：
                 <span className="block font-title text-[48px] text-accent font-black">{finalScore}</span>
                 <span className="text-[11px] text-text-mute">（拖动上方滑动条，可实时测试各类设计评测因子）</span>
             </div>
         </div>
      </Section>

      {/* Section 14.5: 母题评价滚动面板 */}
      <Section id="motif-scoring" tag="MOTIF SCORING" title="各个母题得分详情与量化反馈" desc="以下是我们对各汉画像石核心母题基于表达指数模型的详细打分与定性反馈记录：">
        <div className="flex justify-center gap-[24px] mt-[40px] [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] h-[600px] overflow-hidden -mx-[8%] px-[8%] relative">
          <TestimonialsColumn testimonials={firstColumn} duration={25} />
          <TestimonialsColumn testimonials={secondColumn} duration={32} className="hidden md:block pt-[60px]" />
          <TestimonialsColumn testimonials={thirdColumn} duration={28} className="hidden lg:block pt-[20px]" />
        </div>
      </Section>

      {/* Section 15: 转译优先级排行 */}
      <Section id="priority" tag="CONVERT PRIORITY" title="母题转译综合优先系数分析排行" desc="通过多维指标测算和公式加权，得出的六大母题设计转化优先级排序如下。长袖舞与车骑出行因极高的动态张力与文化识别，居于头部。">
         <RankingChart />
      </Section>

      {/* Section 16: 论文研究结论 */}
      <Section id="conclusion" tag="THESIS CONCLUSION" title="论文研究结论：从静态石刻到数字资产">
         <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-[60px] items-center">
             <div>
                 <p>论文研究证实，南阳汉画像石的当代表达绝不仅是对图案轮廓做简单抠图重叠，而应该牢牢扣住其<strong>石面肌理、横向叙事、道具锚点、身体动势</strong>四项元语汇法则，从而升华为在数字化传播媒介中具有顽强复原力的数字视觉文化资产。</p>
                 <p className="mt-[15px]">这一学术结论直接指导、打通了后面的视频影像创作流。形成了一条高度闭环、前后咬合呼应的设计路径：<strong>长袖舞奠定核心情感视觉—车骑充当运动推进转场—鼓乐和踏鼓赋予急促声响律动—投壶与六博作情境互动留白。</strong></p>
             </div>
             <TiltImageFrame src="https://i.postimg.cc/jSSGL4Z0/Chat-GPT-Image-2026nian6yue7ri-22-53-57.png" alt="论文转译模型结论结构图" />
         </div>
      </Section>
    </>
  );
}

function RankingChart() {
    const [animated, setAnimated] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            const el = document.getElementById('priority');
            if (el) {
                const top = el.offsetTop;
                if (window.scrollY + window.innerHeight > top + 100) {
                    setAnimated(true);
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        // check init
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const items = [
        { title: '弄壶·长袖舞', percent: '93%', score: '4.65' },
        { title: '车骑出行/弋射', percent: '89%', score: '4.45' },
        { title: '踏鼓舞', percent: '86%', score: '4.30' },
        { title: '鼓乐', percent: '84%', score: '4.20' },
        { title: '投壶', percent: '80%', score: '4.00' },
        { title: '六博', percent: '74%', score: '3.70' },
    ];

    return (
        <div className="flex flex-col gap-[16px] mt-[30px]">
            {items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-[20px]">
                    <span className="w-[180px] font-title text-[15px] text-right">{item.title}</span>
                    <div className="grow h-[16px] bg-bg-card rounded-[8px] overflow-hidden border border-border-subtle">
                        <div 
                            className="h-full bg-gradient-to-r from-bg-card to-accent rounded-[8px] transition-all duration-1000 ease-in-out"
                            style={{ width: animated ? item.percent : '0%' }}
                        ></div>
                    </div>
                    <span className="w-[60px] font-title font-bold text-accent">{item.score}</span>
                </div>
            ))}
        </div>
    );
}
