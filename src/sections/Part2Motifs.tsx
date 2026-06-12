import React from 'react';
import { Section, ImageFrame } from '../components/UI';
import { Image } from 'lucide-react';

export default function Part2Motifs() {
  return (
    <Section id="motifs-detail" tag="VISUAL GALLERY OF MOTIFS" title="画像石母题学术图说与设计预演" desc="本模块为每一个母题预留了数字化转译的设计草稿与文物对比框。您可以后期上传设计图并作展示对照。">
        {/* 长袖舞 */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-[60px] items-center mb-[80px] border-t border-border-subtle pt-[40px]">
            <div>
                <h3 className="font-title text-[26px] mb-[20px]"><span className="text-accent">01.</span> 弄壶·长袖舞：曲线引视，壶体稳定</h3>
                <p><strong>母题解构：</strong>长袖舞是汉代标志性乐舞，在数字化转译时，不应只是干瘪描摹轮廓，而应该将“旋转的柔美抛袖曲线”和“厚重平底壶体”作为视觉中的动、静对比。袖子运动形成的轨迹路径，既可演化为视频中的运动转场，也可以作为光影流光的载体。</p>
            </div>
            <ImageFrame 
               icon={Image} 
               src="https://i.postimg.cc/MHMBrVpf/1.png"
               hoverSrc="https://i.postimg.cc/T1LbHg3n/1a.png"
               title="【长袖舞】拓片与静帧设计预留" 
               desc="建议上传：长袖舞的人物拓片剪影，搭配其提取出的弧线矢量图。 [长袖舞数字化转译图]" 
               className="cursor-pointer"
            />
        </div>

        {/* 踏鼓舞 */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-[60px] items-center mb-[80px]">
            <ImageFrame 
               icon={Image} 
               src="https://i.postimg.cc/CMrVVtw2/2.png"
               hoverSrc="https://i.postimg.cc/NGCwwVQZ/han-hua-xiang-shi28.png"
               title="【踏鼓舞】动作重构图预留" 
               desc="建议上传：舞者足尖触碰大鼓一瞬间的动作特写设计图。 [踏鼓舞动作重构图]" 
               className="order-2 lg:order-1 cursor-pointer" 
            />
            <div className="order-1 lg:order-2">
                <h3 className="font-title text-[26px] mb-[20px]"><span className="text-accent">02.</span> 踏鼓舞：鼓面触地，激活声律</h3>
                <p><strong>母题解构：</strong>踏鼓舞的关键动作节点在于“脚步与鼓面的接触物理反馈”。在影像中应重点刻画：腾空起步（积攒动能）—落脚击鼓（重音瞬间）—力量震颤传递。设计时可通过足部涟漪特效与大鼓微震，创造视听通感的冲击力。</p>
            </div>
        </div>

        {/* 鼓乐 */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-[60px] items-center mb-[80px]">
            <div>
                <h3 className="font-title text-[26px] mb-[20px]"><span className="text-accent">03.</span> 鼓乐：鼓面建构起听觉场域</h3>
                <p><strong>母题解构：</strong>鼓乐画面展现出宏大乐舞百戏的多层乐人架构。建鼓、鼗鼓在中心组织声音空间。转译的核心任务是将这些静态分布的鼓面和击打姿势，赋予声波纹样、光环震荡效果，构建声学秩序。</p>
            </div>
            <ImageFrame 
               icon={Image} 
               src="https://i.postimg.cc/3rmbtcdV/3.png"
               hoverSrc="https://i.postimg.cc/254NnSRB/han-hua-xiang-shi7.png"
               title="【鼓乐】声纹粒子轨迹草图预留" 
               desc="建议上传：带有同心圆环或粒子流动效果的建鼓音波特效图。 [鼓乐声纹特效图]" 
               className="cursor-pointer"
            />
        </div>

        {/* 投壶 */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-[60px] items-center mb-[80px]">
            <ImageFrame 
               icon={Image} 
               src="https://i.postimg.cc/pTpy2jn2/4.png"
               hoverSrc="https://i.postimg.cc/254NnSRB/han-hua-xiang-shi7.png"
               title="【投壶】抛物运动轨迹图预留" 
               desc="建议上传：连贯飞行的箭矢抛物线轨迹，壶口处发光的视觉效果。 [投壶轨迹设计图]" 
               className="order-2 lg:order-1 cursor-pointer" 
            />
            <div className="order-1 lg:order-2">
                <h3 className="font-title text-[26px] mb-[20px]"><span className="text-accent">04.</span> 投壶：手、箭、壶，极致张力抛弧</h3>
                <p><strong>母题解构：</strong>投壶是经典的宴乐礼制競技，其动作张力集中在箭矢飞离手指、划过空中的短暂抛物线以及顺利入壶的节点。通过数字化放慢该过程并绘制高亮轨迹，能够将转瞬即逝的动作延展成富有东方优雅美感的博弈镜头。</p>
            </div>
        </div>

        {/* 六博 */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-[60px] items-center mb-[80px]">
            <div>
                <h3 className="font-title text-[26px] mb-[20px]"><span className="text-accent">05.</span> 六博：对坐凝视，棋局心理风暴</h3>
                <p><strong>母题解构：</strong>六博体现的是高度的智力斗争。对坐双方、中央纵横交错的棋盘、举棋未定的手势以及人物间微妙的眼部视线拉扯，构成紧密的力场。转译中需要用特写镜头、棋盘线条的自发光和深沉空旷的背景，展示高智性的汉代文化品格。</p>
            </div>
            <ImageFrame 
               icon={Image} 
               src="https://i.postimg.cc/9QXgVYFp/5.png"
               hoverSrc="https://i.postimg.cc/SNp8GZMK/han-hua-xiang-shi19.png"
               title="【六博】视线拉扯透视图预留" 
               desc="建议上传：以棋盘为第一视角发散而出的对弈线刻线索。 [六博心理视线分析图]" 
               className="cursor-pointer"
            />
        </div>

        {/* 车骑 */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-[60px] items-center">
            <ImageFrame 
               icon={Image} 
               src="https://i.postimg.cc/jdL5PP8f/6.png"
               hoverSrc="https://i.postimg.cc/PJcd2V6r/han-hua-xiang-shi10.png"
               title="【车骑出行】横向滚动流线设计图" 
               desc="建议上传：长卷式马车横移轨迹，并带有速度虚线和风化的飞鸟剪影。 [车骑出行运动图]" 
               className="order-2 lg:order-1 cursor-pointer" 
            />
            <div className="order-1 lg:order-2">
                <h3 className="font-title text-[26px] mb-[20px]"><span className="text-accent">06.</span> 车骑出行/弋射：横向冲击，时空切片</h3>
                <p><strong>母题解构：</strong>奔驰的车舆、飞扬的马蹄与远方拉弓射猎的剪影交织。该场景天然具有横向拉伸的物理特性。适合承担数字视频的大转场。利用镜头的推拉和车轮旋转产生的视差深度，呈现史诗般的汉代出游图景。</p>
            </div>
        </div>
    </Section>
  );
}
