import React from "react";
import { motion } from "motion/react";
import { Star } from "lucide-react";

export interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-8 rounded-[16px] border border-border-subtle shadow-lg shadow-black/10 bg-bg-card max-w-[320px] w-full flex flex-col justify-between" key={i}>
                  <div className="text-[13px] text-text-sub leading-[1.6]">{text}</div>
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-border-subtle/50">
                    <div className="flex items-center gap-3">
                      <img
                        width={40}
                        height={40}
                        src={image}
                        alt={name}
                        className="h-10 w-10 rounded-full object-cover border border-border-subtle"
                      />
                      <div className="flex flex-col">
                        <div className="font-medium tracking-tight text-[14px] text-text-main">{name}</div>
                        <div className="flex items-center gap-1 text-[12px] opacity-80 tracking-tight text-accent mt-[2px]">
                          <Star className="w-3 h-3 fill-accent text-accent" />
                          {role.replace("综合得分：", "")}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
