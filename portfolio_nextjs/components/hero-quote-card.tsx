"use client";

import React, { useRef, useState } from "react";
import { LayoutGroup, motion } from "motion/react";
import TextRotate, { type TextRotateRef } from "@/components/ui/text-rotate";

export interface HeroQuote {
  quote: string;
  author: string;
  role: string;
}

export const defaultHeroQuotes: HeroQuote[] = [
  {
    quote:
      "If you have an idea but don't know how to make it happen, just reach out to Andre. He will literally bring your idea to life, beyond expectation. Truly amazing working on several projects with him.",
    author: "Wildan Lazuardi",
    role: "Senior Graphic Designer | Content Creator",
  },
  {
    quote:
      "Andre consistently bridges complex data models and high-level business strategy seamlessly. His predictive frameworks accelerated our decision-making by 3x.",
    author: "Briana Patton",
    role: "Operations Manager | Fintech Systems",
  },
  {
    quote:
      "Working with Andre was transformational for our product intelligence. Sharp, relentless, and turns messy transactional data into executive clarity.",
    author: "Omar Raza",
    role: "Founder & CEO | Enterprise AI",
  },
  {
    quote:
      "His ability to craft intuitive AI workflows and automated pipelines saved our engineering and analytics teams hundreds of hours every quarter.",
    author: "Aliza Khan",
    role: "Lead Business Analyst | Systems Architect",
  },
];

export function HeroQuoteCard({
  quotes = defaultHeroQuotes,
  rotationInterval = 5000,
}: {
  quotes?: HeroQuote[];
  rotationInterval?: number;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const authorRef = useRef<TextRotateRef>(null);

  const colors = ["#F4E8DC", "#E8EDF2", "#EAE5F5", "#E5F3ED"];

  const handleNext = (nextIndex: number) => {
    setActiveIndex(nextIndex);
    authorRef.current?.jumpTo(nextIndex);
  };

  return (
    <div className="mt-1 w-full border-t border-[#eee] pt-4 text-right">
      <LayoutGroup>
        <div className="min-h-[76px] sm:min-h-[64px] flex flex-col justify-end">
          <TextRotate
            texts={quotes.map((q) => `"${q.quote}"`)}
            staggerFrom="first"
            staggerDuration={0.012}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={rotationInterval}
            splitBy="words"
            onNext={handleNext}
            mainClassName="text-right justify-end text-[14.5px] font-normal leading-[1.65] text-[#3e433e] md:text-[15px]"
          />
        </div>

        <div className="flex w-full items-center justify-end gap-3.5 mt-3">
          <motion.div
            className="h-2 w-2 rounded-full bg-[#1d3557]"
            layout
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            title="Rotating testimonial"
          />

          <div className="flex flex-col gap-0.5 text-right">
            <div className="text-[13.5px] font-bold leading-tight text-[#111] flex justify-end">
              <TextRotate
                ref={authorRef}
                texts={quotes.map((q) => q.author)}
                auto={false}
                staggerFrom="first"
                staggerDuration={0.02}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ type: "spring", damping: 25, stiffness: 350 }}
                splitBy="characters"
                mainClassName="justify-end font-bold text-[13.5px] text-[#111]"
              />
            </div>
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-[12px] font-medium leading-tight text-[#767a76]"
            >
              {quotes[activeIndex].role}
            </motion.div>
          </div>

          <div className="h-[28px] w-px shrink-0 bg-[#e2e2e2]" />

          {/* Collaborator Avatars with active indicator */}
          <div className="flex items-center" aria-label="Endorsed by collaborators">
            {colors.map((color, idx) => {
              const isActive = idx === activeIndex % colors.length;
              return (
                <div
                  key={color}
                  className={`${
                    idx === 0 ? "ml-0" : "-ml-[9px]"
                  } relative h-8 w-8 shrink-0 overflow-hidden rounded-full border-[2.5px] border-white bg-[#e8e8e8] shadow-[0_2px_6px_rgba(0,0,0,0.1)] transition-all duration-300 ${
                    isActive ? "scale-110 z-10 ring-2 ring-[#1d3557]/40" : "opacity-80"
                  }`}
                >
                  <svg viewBox="0 0 36 36" fill="none" className="h-full w-full">
                    <rect width="36" height="36" rx="18" fill={color} />
                    <circle cx="18" cy="15" r="7" fill={idx === 3 ? "#1E272E" : "#4A3E3D"} />
                    <circle cx="18" cy="16" r="5.5" fill={idx === 1 ? "#E0A97E" : "#F8CBA6"} />
                    <circle cx="15.5" cy="16" r="1" fill="#222" />
                    <circle cx="20.5" cy="16" r="1" fill="#222" />
                    <path d="M16 19q2 1.5 4 0" stroke="#B85D43" strokeWidth="1" strokeLinecap="round" />
                    <path
                      d="M8 34c0-5 4.5-8 10-8s10 3 10 8"
                      fill={["#2C3E50", "#34495E", "#6C5CE7", "#16A085"][idx]}
                    />
                  </svg>
                </div>
              );
            })}
          </div>
        </div>
      </LayoutGroup>
    </div>
  );
}

export default HeroQuoteCard;
