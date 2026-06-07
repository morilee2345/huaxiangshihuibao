import React from 'react';

export default function Footer() {
  return (
    <footer className="relative z-10 mt-20 w-full overflow-hidden pt-16 pb-8 border-t border-border-subtle bg-bg-base/50 backdrop-blur-md">
      <div className="pointer-events-none absolute top-0 left-1/2 z-0 h-full w-full -translate-x-1/2 select-none">
        <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-accent/10 blur-3xl"></div>
        <div className="absolute right-1/4 -bottom-24 h-80 w-80 rounded-full bg-accent/10 blur-3xl"></div>
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 rounded-2xl px-6 py-10 md:flex-row md:items-start md:justify-between md:gap-12 border border-border-subtle bg-bg-card/50 backdrop-blur-xl shadow-2xl">
        <div className="flex flex-col items-center md:items-start">
          <a href="#" className="mb-4 flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-accent/80 to-accent text-2xl font-extrabold text-[#111] shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </span>
            <span className="text-xl font-semibold tracking-tight text-text-main">
              汉画像石数字化转译
            </span>
          </a>
          <p className="text-text-sub mb-6 max-w-xs text-center text-sm md:text-left leading-relaxed">
            南阳汉画像石图像语汇的数字化转译与视频创作汇报，探索传统文化在现代数字影像中的创新表达。
          </p>
          <div className="mt-2 flex gap-6 text-text-sub">
             <div className="flex items-center gap-2">
                <span className="text-sm font-medium">汇报人：</span>
                <span className="text-accent text-sm tracking-widest font-semibold">谢东东</span>
             </div>
             <div className="flex items-center gap-2">
                <span className="text-sm font-medium">学号：</span>
                <span className="text-accent text-sm font-mono tracking-wider">202533109014</span>
             </div>
          </div>
        </div>
        <nav className="flex w-full flex-col gap-9 text-center md:w-auto md:flex-row md:justify-end md:text-left mt-4 md:mt-0">
          <div>
            <div className="mb-3 text-xs font-semibold tracking-widest text-accent uppercase">
              研究概述
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#cover" className="text-text-sub hover:text-accent transition-colors text-sm">
                  论文核心内容
                </a>
              </li>
              <li>
                <a href="#video-flow" className="text-text-sub hover:text-accent transition-colors text-sm">
                  视频制作流程
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-3 text-xs font-semibold tracking-widest text-accent uppercase">
              量化分析
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#motif-scoring" className="text-text-sub hover:text-accent transition-colors text-sm">
                  母题得分详情
                </a>
              </li>
              <li>
                <a href="#priority" className="text-text-sub hover:text-accent transition-colors text-sm">
                  转译优先级榜
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-3 text-xs font-semibold tracking-widest text-accent uppercase">
              成果展示
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-text-sub hover:text-accent transition-colors text-sm">
                  学术答辩视频
                </a>
              </li>
              <li>
                <a href="#" className="text-text-sub hover:text-accent transition-colors text-sm">
                  附录参考资料
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="text-text-mute relative z-10 mt-10 text-center text-xs">
        <span>&copy; {new Date().getFullYear()} 谢东东. 各项汇报成果将持续更新完善.</span>
      </div>
    </footer>
  );
}
