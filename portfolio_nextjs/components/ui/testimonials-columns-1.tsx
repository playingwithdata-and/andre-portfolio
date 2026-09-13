"use client";
import React from "react";
import { motion } from "motion/react";

export interface TestimonialItem {
  text: string;
  image: string;
  name: string;
  role: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: TestimonialItem[];
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
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div
                  className="p-8 sm:p-10 rounded-3xl border border-black/10 bg-white shadow-lg shadow-black/[0.04] max-w-xs w-full transition-all duration-300 hover:border-black/20 hover:shadow-xl hover:shadow-black/[0.08]"
                  key={i}
                >
                  <div className="text-[14.5px] leading-relaxed text-[#2a2f2a]">{text}</div>
                  <div className="flex items-center gap-3 mt-5">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover shrink-0 border border-black/5"
                    />
                    <div className="flex flex-col">
                      <div className="font-semibold tracking-tight text-[14px] leading-5 text-[#111]">{name}</div>
                      <div className="leading-5 opacity-65 tracking-tight text-xs text-[#555]">{role}</div>
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
