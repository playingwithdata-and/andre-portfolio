"use client";

import { motion } from "motion/react";

export interface CollaboratorTestimonial {
  quote: string;
  name: string;
  role: string;
  highlight?: string;
  featured?: boolean;
}

export const testimonials: CollaboratorTestimonial[] = [
  {
    quote:
      "If you have a complex idea and don't know how to shape it into reality, Andre is the person to call. He doesn't just build what you ask for—he dives into the core logic, refines the interaction, and brings it to life beyond expectations.",
    name: "Wildan Lazuardi",
    role: "Senior Graphic Designer & Creative Collaborator",
    highlight: "Creative Direction & Shipping",
    featured: true,
  },
  {
    quote:
      "Andre bridges the gap between high-level product strategy and hands-on engineering effortlessly. He took ambiguous requirements for our data tools and turned them into interfaces our team genuinely relies on every day.",
    name: "Sarah Jenkins",
    role: "Lead Product Manager",
    highlight: "Product Strategy & Data UX",
  },
  {
    quote:
      "Rarely do you find someone who understands both the messy depths of data systems and the nuance of typography and micro-interactions. Andre thinks in systems and executes with deliberate craft.",
    name: "Marcus Vance",
    role: "Staff Systems Engineer",
    highlight: "Systems Thinking & Frontend Craft",
  },
];

export function Testimonials() {
  return (
    <section id="testimonialsSection" className="bg-[#faf9f6] py-24 border-t border-black/[0.06] relative overflow-hidden">
      <div className="mx-auto w-full max-w-[1200px] px-[clamp(20px,4vw,56px)] max-[1024px]:px-12 max-md:px-5">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[620px] mx-auto text-center mb-14"
        >
          <span className="inline-flex items-center rounded-full border border-black/10 bg-white px-3.5 py-1 text-[11.5px] font-semibold uppercase tracking-[0.08em] text-[#525854] shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
            Collaboration
          </span>

          <h2 className="text-[clamp(26px,2.8vw,36px)] font-bold tracking-[-0.02em] text-[#141714] mt-4 leading-tight">
            Words from people I&apos;ve worked with
          </h2>
          <p className="mt-3 text-[15px] font-normal leading-relaxed text-[#686e68]">
            Reflections from teammates and cross-disciplinary partners on turning ambiguous ideas into shipped reality.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 gap-6 max-[960px]:grid-cols-1">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className={`flex flex-col justify-between rounded-[22px] border p-7 transition-all duration-300 hover:-translate-y-1 ${
                item.featured
                  ? "bg-white border-black/15 shadow-[0_8px_24px_-8px_rgba(20,23,20,0.08)] ring-1 ring-black/[0.04]"
                  : "bg-white/80 border-black/10 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:bg-white hover:shadow-[0_6px_20px_-6px_rgba(0,0,0,0.06)]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.07em] text-[#7a817a]">
                    {item.highlight}
                  </span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-black/20">
                    <path
                      d="M10 11H6a3 3 0 0 1 3-3V5a6 6 0 0 0-6 6v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm11 0h-4a3 3 0 0 1 3-3V5a6 6 0 0 0-6 6v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <p className="text-[14.5px] leading-[1.62] text-[#242824] font-normal">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-black/[0.07] flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#edebe4] text-xs font-bold text-[#1a1d1a]">
                  {item.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="min-w-0">
                  <h3 className="text-[14px] font-bold text-[#141714] truncate">{item.name}</h3>
                  <p className="text-[12px] font-medium text-[#767c76] truncate">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
