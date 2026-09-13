"use client";

import { startTransition, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Testimonials } from "@/components/testimonials";

const projects = [
  {
    title: "Digital Receipt",
    tagline: "A receipt for where your day actually went.",
    tags: "Creative Product Experiment · Natural Language · Interaction",
    image: "/assets/images/projects/digital-receipt/mockup_laptop_card.png",
    imageClass: "object-center",
    href: "/project/digital-receipt",
    featuredBadge: "Flagship Experiment",
  },
  {
    title: "AERFORM",
    tagline: "An interactive performance footwear experience built around movement and product discovery.",
    tags: "Product Design · Interaction · Commerce",
    image: "/assets/images/project_aerform.png",
    imageClass: "object-top",
    href: "/project/aerform",
  },
  {
    title: "NOMAD",
    tagline: "A cinematic digital experience for discovering highly curated luxury travel.",
    tags: "Art Direction · Web Experience · Editorial",
    image: "/assets/images/project_nomad.png",
    imageClass: "object-left",
    href: "/project/nomad",
  },
];

const positioningTags = [
  "Product Thinking",
  "AI + Data",
  "Creative Technology",
];

const brandLogos = [
  { src: "/assets/images/brands/brand_logo_1.svg", width: 110, ratio: "aspect-[5.5/1]" },
  { src: "/assets/images/brands/brand_logo_2.svg", width: 151, ratio: "aspect-[7.55/1]" },
  { src: "/assets/images/brands/brand_logo_3.svg", width: 111, ratio: "aspect-[5.55/1]" },
  { src: "/assets/images/brands/brand_logo_4.svg", width: 111, ratio: "aspect-[5.55/1]" },
  { src: "/assets/images/brands/brand_logo_5.svg", width: 108, ratio: "aspect-[5.4/1]" },
];

const explorations = [
  {
    meta: "FINANCIAL AI · 2025",
    title: "Financial Statement Parser",
    desc: "Turns raw financial statements into structured metrics and KPI calculations.",
    video: "https://framerusercontent.com/assets/DpFgGdWDa4LMSjmkQLbOLdRlSPc.mp4",
  },
  {
    meta: "SENTIMENT ANALYTICS · 2024",
    title: "Sentiment Analytics",
    desc: "Transforms live customer sentiment into interpretable demand patterns.",
    video: "https://framerusercontent.com/assets/x4zEIZZrjqhnF9FaRf9mUAV7sY.mp4",
  },
  {
    meta: "SCENARIO PLANNING · 2025",
    title: "Monte Carlo Forecasting",
    desc: "Explores uncertain business outcomes through probabilistic simulation.",
    video: "https://framerusercontent.com/assets/hzj1RKuWn8OnsEIjIKODqjKq8.mp4",
  },
  {
    meta: "KNOWLEDGE SYSTEMS · 2024",
    title: "Knowledge Graph",
    desc: "Organizes internal knowledge for semantic discovery and retrieval.",
    video: "https://framerusercontent.com/assets/hTumns34t2TIzzQO9MdIujY1qQ.mp4",
  },
  {
    meta: "AI DATA WRANGLER · 2024",
    title: "Anomaly Detection",
    desc: "Surfaces unusual transaction behavior across large-scale datasets.",
    video: "https://framerusercontent.com/assets/Il4zsDPjzScLpPj78Nr1t4QuDI.mp4",
  },
];

const capabilityGroups = [
  {
    pillar: "THINK",
    focus: "Product strategy · systems · business",
    details:
      "Framing ambiguous opportunities, evaluating economic and user trade-offs, and establishing structural logic before writing code.",
    color: "#2a9d8f",
  },
  {
    pillar: "BUILD",
    focus: "AI · data · prototyping",
    details:
      "Working directly with models, data pipelines, and code to test hypotheses rapidly and build tangible, working software.",
    color: "#e76f51",
  },
  {
    pillar: "SHAPE",
    focus: "Interaction · art direction · storytelling",
    details:
      "Designing deliberate spatial hierarchy, typographic restraint, and kinetic micro-interactions that make tools feel human.",
    color: "#1d3557",
  },
];

function ArrowUpRight({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -40px 0px", threshold: 0.08 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        visible ? "translate-y-0 opacity-100" : "translate-y-[18px] opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function EyesWidget() {
  const [pupil, setPupil] = useState({ x: 0, y: 0 });
  const [blinking, setBlinking] = useState(false);
  const socketRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      const rect = socketRef.current?.getBoundingClientRect();
      if (!rect) return;
      const deltaX = event.clientX - (rect.left + rect.width / 2);
      const deltaY = event.clientY - (rect.top + rect.height / 2);
      const angle = Math.atan2(deltaY, deltaX);
      const distance = Math.min(Math.hypot(deltaX, deltaY) / 12, 5.5);
      setPupil({ x: Math.cos(angle) * distance, y: Math.sin(angle) * distance });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const blink = () => {
      setBlinking(true);
      window.setTimeout(() => setBlinking(false), 250);
    };
    const interval = window.setInterval(blink, 4200);
    return () => window.clearInterval(interval);
  }, []);

  const socketClass =
    "relative flex h-[22px] w-4 items-center justify-center overflow-hidden rounded-full bg-white shadow-[inset_0_1px_2px_rgba(24,41,4,0.1)] transition-transform duration-[250ms]";

  return (
    <button
      type="button"
      title="Pupils follow your cursor!"
      onClick={() => {
        setBlinking(true);
        window.setTimeout(() => setBlinking(false), 250);
      }}
      className="flex h-10 w-[72px] items-center justify-center gap-[7px] rounded-[40px] border border-black/5 bg-[#f2f1ec] px-[9px] shadow-[inset_0_1px_3px_rgba(24,41,4,0.08),0_2px_8px_rgba(24,41,4,0.04)] transition-transform duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-[1.06]"
    >
      {[0, 1].map((eye) => (
        <span key={eye} ref={eye === 0 ? socketRef : undefined} className={`${socketClass} ${blinking ? "scale-y-[0.1]" : "scale-y-100"}`}>
          <span
            className="absolute h-[7.5px] w-[7.5px] rounded-full bg-[#1a1d1a] transition-transform duration-[40ms] ease-out"
            style={{ transform: `translate(${pupil.x.toFixed(2)}px, ${pupil.y.toFixed(2)}px)` }}
          />
        </span>
      ))}
    </button>
  );
}

function FlowMarqueeCarousel() {
  const slides = projects;
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [paused, setPaused] = useState(false);
  const [slideHeight, setSlideHeight] = useState(340);
  const gap = 16;
  const speed = 0.75;
  const loopHeight = slides.length * (slideHeight + gap);
  const marqueeSlides = useMemo(() => [...slides, ...slides, ...slides, ...slides], [slides]);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const updateSize = () => {
      const w = node.getBoundingClientRect().width;
      if (w > 0) {
        setSlideHeight(Math.round(w * (228 / 303)));
      }
    };
    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (paused || loopHeight === 0) return;

    let frameId = 0;
    let lastTime = performance.now();

    const tick = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      startTransition(() => {
        setOffset((value) => {
          const next = value + speed * (delta / 16);
          return next % loopHeight;
        });
      });

      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [loopHeight, paused]);

  return (
    <div
      id="projectCarousel"
      className="flex w-full min-w-0 max-w-full flex-col"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="mb-2.5 flex items-center justify-between px-1">
        <span className="text-[11.5px] font-bold uppercase tracking-[0.1em] text-[#767c76]">
          Selected Work Preview
        </span>
        <span className="text-[11.5px] font-medium text-[#949a94]">
          Hover to pause
        </span>
      </div>
      <div
        ref={containerRef}
        className="relative h-[clamp(420px,38vw,535px)] w-full min-w-0 overflow-hidden rounded-[clamp(20px,2vw,28px)] [mask-image:linear-gradient(to_bottom,transparent_0%,black_3%,black_97%,transparent_100%)] max-md:h-[360px]"
      >
        <div id="carouselTrack" className="absolute inset-0 will-change-transform">
          {marqueeSlides.map((slide, index) => {
            const itemTop = index * (slideHeight + gap) - offset;
            const isDigitalReceipt = slide.title.includes("Digital Receipt");
            return (
              <a
                key={`${slide.title}-${index}`}
                href={slide.href !== "#" ? slide.href : "#workSection"}
                data-index={index % slides.length}
                aria-label={`View ${slide.title}`}
                className="carousel-slide group absolute left-0 top-0 block w-full will-change-transform"
                style={{ height: slideHeight, transform: `translate3d(0, ${itemTop}px, 0)` }}
              >
                <div className={`relative h-full w-full overflow-hidden rounded-[clamp(14px,1.5vw,18px)] border bg-white transition-all duration-300 group-hover:scale-[1.015] ${
                  isDigitalReceipt 
                    ? "border-black/15 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.18),0_3px_8px_rgba(0,0,0,0.06)]"
                    : "border-black/[0.08] shadow-[0_10px_28px_-10px_rgba(0,0,0,0.12),0_2px_6px_rgba(0,0,0,0.04)]"
                }`}>
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className={`h-full w-full object-cover ${slide.imageClass ?? "object-top"}`}
                  />
                  <div className="absolute left-3.5 top-3.5 inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.06em] text-[#1a1d1a] shadow-[0_2px_8px_rgba(0,0,0,0.08)] backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#182904]" />
                    Case Study
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function BrandTicker() {
  const repeated = useMemo(() => [...brandLogos, ...brandLogos, ...brandLogos, ...brandLogos], []);

  return (
    <div className="flex w-full cursor-default flex-col items-center justify-center gap-3.5 overflow-hidden py-[clamp(20px,2.8vw,36px)] text-xs border-y border-black/[0.05]">
      <p className="m-0 text-center text-[12px] font-semibold uppercase tracking-[0.1em] text-[#767c76]">
        Worked with teams across
      </p>
      <div className="relative h-7 w-full overflow-hidden [mask-image:linear-gradient(90deg,rgba(0,0,0,0)_0%,rgb(0,0,0)_8%,rgb(0,0,0)_92%,rgba(0,0,0,0)_100%)]">
        <ul className="flex w-max animate-ticker items-center gap-14 pr-14 hover:[animation-play-state:paused]">
          {repeated.map((logo, index) => (
            <li key={`${logo.src}-${index}`} className="flex h-5 shrink-0 items-center">
              <figure className={`${logo.ratio} m-0 flex h-5 w-auto items-center p-0 opacity-60 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0`}>
                <img decoding="auto" width={logo.width} height={20} src={logo.src} alt={`Brand Logo ${(index % brandLogos.length) + 1}`} className="block h-5 w-auto object-contain object-center" />
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  const [activeNav, setActiveNav] = useState("work");
  const [listView, setListView] = useState(false);
  const [copied, setCopied] = useState(false);
  const [headerStyle, setHeaderStyle] = useState({ opacity: 1, y: 0, visible: true });
  const email = "andre.analytics@gmail.com";

  useEffect(() => {
    const onScroll = () => {
      const progress = Math.min(Math.max(window.scrollY, 0), 120) / 120;
      setHeaderStyle({
        opacity: Math.max(0, 1 - progress),
        y: -progress * 24,
        visible: progress < 1,
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (target: "top" | "work" | "systems" | "about" | "testimonials" | "contact") => {
    const id =
      target === "work"
        ? "workSection"
        : target === "systems"
        ? "systemsSection"
        : target === "about"
        ? "aboutSection"
        : target === "testimonials"
        ? "testimonialsSection"
        : target === "contact"
        ? "contactSection"
        : "";
    const node = id ? document.getElementById(id) : null;
    if (node) node.scrollIntoView({ behavior: "smooth", block: "start" });
    if (target === "top") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  };

  return (
    <>
      {/* 1. COMPACT FLOATING NAVIGATION */}
      <header
        className={`pointer-events-auto fixed left-0 top-0 z-[1000] w-full py-[18px] transition-all duration-150 max-md:py-3 ${headerStyle.visible ? "visible" : "invisible"}`}
        style={{ opacity: headerStyle.opacity, transform: `translateY(${headerStyle.y}px)` }}
      >
        <div className="w-full px-[clamp(20px,3.5vw,48px)]">
          <nav className="relative flex w-full items-center justify-between" aria-label="Main Navigation">
            <button
              type="button"
              onClick={() => scrollTo("top")}
              aria-label="Home"
              className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-xl bg-[#f6f5ed] text-xl font-bold text-[#1a1d1a] shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-150 hover:scale-105 hover:bg-[#ede8d8] max-md:h-[38px] max-md:w-[38px] max-md:rounded-[10px] max-md:text-lg"
            >
              A
            </button>

            <div className="absolute left-1/2 flex h-[42px] -translate-x-1/2 items-center gap-1 rounded-full border border-white/60 bg-white/90 p-1 shadow-[0_4px_16px_rgba(24,41,4,0.05)] backdrop-blur-[14px] max-md:h-[38px] max-md:p-[3px]">
              {[
                { label: "Work", target: "work" },
                { label: "Systems", target: "systems" },
                { label: "About", target: "about" },
                { label: "Reviews", target: "testimonials" },
              ].map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => {
                    setActiveNav(item.label.toLowerCase());
                    scrollTo(item.target as "top" | "work" | "systems" | "about" | "testimonials" | "contact");
                  }}
                  className={`inline-flex h-[34px] select-none items-center justify-center rounded-full px-3.5 text-sm font-medium transition-all duration-150 max-md:h-8 max-md:px-2.5 max-md:text-[12.5px] ${
                    activeNav === item.label.toLowerCase()
                      ? "bg-white font-semibold text-[#1a1d1a] shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
                      : "text-[#525854] hover:bg-white/50 hover:text-[#1a1d1a]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex shrink-0 items-center gap-2.5 max-[860px]:hidden">
              {["Linkedin", "Resume"].map((label) => (
                <a
                  key={label}
                  href={label === "Linkedin" ? "https://linkedin.com" : "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-[#1a1d1a] shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-150 hover:-translate-y-px hover:shadow-[0_4px_16px_-2px_rgba(0,0,0,0.06)]"
                >
                  {label}
                  <ArrowUpRight />
                </a>
              ))}
            </div>

            <button
              type="button"
              aria-label="Contact"
              onClick={() => scrollTo("contact")}
              className="hidden h-[42px] w-[42px] items-center justify-center rounded-full bg-[#f6f5ed] text-[#1a1d1a] shadow-[0_1px_3px_rgba(0,0,0,0.04)] max-[860px]:flex max-md:h-[38px] max-md:w-[38px]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </button>
          </nav>
        </div>
      </header>

      <main>
        {/* 2. HERO SECTION — CLEAN IDENTITY & POSITIONING */}
        <section className="relative w-full pb-[clamp(45px,5vw,75px)] pt-[clamp(85px,9vw,115px)] max-md:pb-[45px] max-md:pt-[80px]">
          <div className="mx-auto w-full max-w-[1200px] px-[clamp(20px,4vw,56px)] max-[1024px]:px-12 max-md:px-5">
            <Reveal>
              <div className="grid w-full grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] items-start gap-[clamp(28px,4vw,56px)] max-[960px]:gap-7 max-md:grid-cols-1 max-md:gap-8">
                {/* Visual Carousel Column */}
                <div className="min-w-0 max-w-full pt-1 max-md:order-2 max-md:pt-0">
                  <FlowMarqueeCarousel />
                </div>

                {/* Identity & Positioning Column */}
                <div className="ml-auto flex w-full max-w-[600px] flex-col items-end justify-center gap-[clamp(16px,2vw,22px)] text-right max-md:order-1 max-md:max-w-full">
                  <div className="flex w-full flex-wrap items-center justify-end gap-3.5">
                    <EyesWidget />
                    <h1 className="m-0 text-[clamp(32px,3.2vw,44px)] font-bold leading-none tracking-[-0.025em] text-[#111] max-md:text-[28px]">
                      Andre Afrillian
                    </h1>
                    <div className="h-[68px] w-[68px] shrink-0 overflow-hidden rounded-[20px] bg-gradient-to-br from-[#e76f51] to-[#f4a261] p-[2.5px] shadow-[0_8px_20px_-4px_rgba(231,111,81,0.28),0_2px_6px_rgba(0,0,0,0.06)] transition-transform duration-300 hover:scale-[1.04] hover:-rotate-1 md:h-[76px] md:w-[76px] md:rounded-[22px]">
                      <img src="/assets/images/avatar.png" alt="Andre Afrillian" width={76} height={76} className="h-full w-full rounded-[18px] object-cover md:rounded-[20px]" />
                    </div>
                  </div>

                  {/* Main Headline */}
                  <h2 className="m-0 w-full text-right text-[clamp(22px,2.2vw,30px)] font-semibold leading-[1.38] tracking-[-0.015em] text-[#141714] max-md:text-[20px] max-md:leading-[1.4]">
                    Product-minded technologist turning complex ideas into useful digital experiences.
                  </h2>

                  {/* Supporting Paragraph */}
                  <p className="m-0 w-full text-right text-[15px] font-normal leading-[1.65] text-[#525854] max-md:text-[14.5px]">
                    I combine product thinking, systems, data, AI, and interaction to turn ambiguous problems into clear, thoughtful products.
                  </p>

                  {/* Positioning Tags */}
                  <div className="flex w-full flex-wrap items-center justify-end gap-2 pt-1">
                    {positioningTags.map((tag) => (
                      <span key={tag} className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-[#faf9f6] px-3.5 py-1.5 text-[13px] font-medium text-[#404540] shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-all duration-150 hover:-translate-y-px hover:border-black/20 hover:bg-white hover:text-[#1a1d1a]">
                        <svg width="7" height="7" viewBox="0 0 24 24" fill="currentColor" className="text-[#888]">
                          <circle cx="12" cy="12" r="6" />
                        </svg>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Primary and Secondary CTAs (Testimonial removed from Hero) */}
                  <div className="mt-2 flex w-full flex-wrap items-center justify-end gap-3 max-md:flex-col">
                    <button
                      type="button"
                      onClick={() => scrollTo("work")}
                      className="inline-flex items-center gap-2 rounded-full border border-[#111] bg-[#111] px-5 py-2.5 text-[14px] font-semibold text-white shadow-[0_4px_14px_rgba(0,0,0,0.16)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2a2a2a] hover:shadow-[0_8px_22px_rgba(0,0,0,0.22)] max-md:w-full max-md:justify-center"
                    >
                      Explore My Work ↓
                    </button>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[#dcdcd8] bg-white px-5 py-2.5 text-[14px] font-semibold text-[#111] shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#111] hover:bg-[#f7f7f7] max-md:w-full max-md:justify-center"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      Download CV ↗
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 3. WORKED WITH TEAMS ACROSS (RESTRAINED LOGOS) */}
        <section aria-label="Worked with teams across">
          <div className="mx-auto w-full max-w-[1200px] px-[clamp(20px,4vw,56px)] max-[1024px]:px-12 max-md:px-5">
            <Reveal>
              <BrandTicker />
            </Reveal>
          </div>
        </section>

        {/* 4. SELECTED WORK SECTION */}
        <section id="workSection" className="pb-[90px] pt-14">
          <div className="mx-auto w-full max-w-[1200px] px-[clamp(20px,4vw,56px)] max-[1024px]:px-12 max-md:px-5">
            <Reveal>
              <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-black/[0.06] pb-6">
                <div>
                  <h2 className="text-[32px] font-bold tracking-[-0.025em] text-[#1a1d1a]">Selected Work</h2>
                  <p className="mt-1 text-[14.5px] font-normal text-[#666c66]">
                    A selection of products, digital experiences, and experiments shaped by different problems.
                  </p>
                </div>
                <div className="flex items-center gap-[18px]">
                  <div className="inline-flex items-center gap-0.5 rounded-full border border-black/10 bg-white p-[3px] shadow-[0_1px_3px_rgba(0,0,0,0.04)]" role="group" aria-label="Layout view">
                    <button
                      type="button"
                      aria-label="Grid view"
                      title="Grid view"
                      onClick={() => setListView(false)}
                      className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-150 ${!listView ? "bg-[#f6f6f5] text-[#1a1d1a]" : "text-[#787d79] hover:text-[#1a1d1a]"}`}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <rect x="3" y="3" width="7" height="7" rx="1.5" />
                        <rect x="14" y="3" width="7" height="7" rx="1.5" />
                        <rect x="3" y="14" width="7" height="7" rx="1.5" />
                        <rect x="14" y="14" width="7" height="7" rx="1.5" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      aria-label="List view"
                      title="List view"
                      onClick={() => setListView(true)}
                      className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-150 ${listView ? "bg-[#f6f6f5] text-[#1a1d1a]" : "text-[#787d79] hover:text-[#1a1d1a]"}`}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                        <line x1="4" y1="6" x2="20" y2="6" />
                        <line x1="4" y1="12" x2="20" y2="12" />
                        <line x1="4" y1="18" x2="20" y2="18" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* 3 Flagship Projects Strictly Ordered: 1. Digital Receipt, 2. AERFORM, 3. NOMAD */}
            <div className={`${listView ? "grid-cols-1 gap-6" : "grid-cols-3 gap-x-6 gap-y-10 max-[1024px]:grid-cols-2 max-md:grid-cols-1 max-md:gap-9"} grid transition-all duration-300`}>
              {projects.map((project) => {
                const isDigitalReceipt = project.title === "Digital Receipt";
                return (
                  <Reveal key={project.title}>
                    <article className="h-full">
                      <Link
                        href={project.href}
                        aria-label={`View ${project.title} case study`}
                        className={`${
                          listView
                            ? "flex flex-row items-center gap-7 rounded-[22px] border border-black/10 bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:border-black/20 hover:shadow-[0_8px_24px_-4px_rgba(26,29,26,0.08)] max-md:flex-col max-md:items-stretch"
                            : "flex flex-col h-full"
                        } group block outline-none focus-visible:ring-2 focus-visible:ring-black/60 focus-visible:ring-offset-4 rounded-[22px] cursor-pointer`}
                      >
                        {/* Image Container with Subtle Zoom and Bottom-Left CTA */}
                        <div
                          className={`${
                            listView ? "w-[300px] shrink-0 max-md:w-full" : "w-full"
                          } relative overflow-hidden rounded-[20px] bg-white border border-black/[0.08] shadow-[0_3px_14px_-2px_rgba(26,29,26,0.06)] transition-all duration-[300ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-black/20 group-hover:shadow-[0_14px_36px_-4px_rgba(26,29,26,0.13)]`}
                        >
                          <img
                            src={project.image}
                            alt={project.title}
                            loading="lazy"
                            className={`aspect-[303/228] w-full object-cover transition-transform duration-[320ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] group-focus-visible:scale-[1.03] motion-reduce:group-hover:scale-100 ${project.imageClass ?? ""}`}
                          />

                          {/* Subtle Card Overlay */}
                          <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-[300ms] group-hover:bg-black/[0.08] group-focus-visible:bg-black/[0.08]" />

                          {/* Metadata Badge for Flagship */}
                          {isDigitalReceipt && (
                            <div className="absolute left-3.5 top-3.5 inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.06em] text-[#1a1d1a] shadow-[0_2px_8px_rgba(0,0,0,0.08)] backdrop-blur-sm">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#182904]" />
                              Case Study
                            </div>
                          )}

                          {/* Desktop Hover CTA inside Image at Bottom-Left */}
                          <div className="pointer-events-none absolute bottom-3.5 left-3.5 z-10 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-[#141715]/90 px-3.5 py-1.5 text-[12px] font-semibold text-white shadow-[0_4px_16px_rgba(0,0,0,0.25)] backdrop-blur-md transition-all duration-[280ms] ease-out opacity-0 translate-y-1.5 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0 motion-reduce:translate-y-0 max-md:hidden">
                            <span>View Case Study</span>
                            <span className="text-[11px]">↗</span>
                          </div>
                        </div>

                        {/* Project Details */}
                        <div className={`${listView ? "flex-1" : "mt-4"} flex flex-col gap-1.5`}>
                          <div className="flex items-center justify-between">
                            <h3 className="text-[17px] font-bold leading-[1.35] tracking-[-0.015em] text-[#1a1d1a] transition-colors duration-150 group-hover:text-[#1d3557]">
                              {project.title}
                            </h3>
                          </div>
                          <p className="text-[14px] font-normal leading-[1.5] text-[#404540]">
                            {project.tagline}
                          </p>
                          <div className="flex items-center justify-between gap-2 pt-0.5">
                            <p className="text-[12.5px] font-medium leading-[1.4] text-[#787d79]">
                              {project.tags}
                            </p>
                            {/* Mobile Touch Affordance */}
                            <span className="hidden shrink-0 text-xs font-semibold text-[#1a1d1a] max-md:inline-flex items-center gap-0.5">
                              View Case Study ↗
                            </span>
                          </div>
                        </div>
                      </Link>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. SYSTEMS & EXPERIMENTS (BALANCED 2-COLUMN GRID) */}
        <section id="systemsSection" className="pb-[110px] pt-[30px] bg-[#faf9f6] border-t border-black/[0.06]">
          <div className="mx-auto w-full max-w-[1200px] px-[clamp(20px,4vw,56px)] max-[1024px]:px-12 max-md:px-5">
            <Reveal>
              <div className="mb-10 max-w-[680px]">
                <span className="text-[11.5px] font-bold uppercase tracking-[0.1em] text-[#767c76]">
                  Technical Explorations
                </span>
                <h2 className="mt-2 text-[28px] font-bold tracking-[-0.02em] text-[#1a1d1a]">
                  SYSTEMS & EXPERIMENTS
                </h2>
                <p className="mt-2 text-[15px] font-normal leading-relaxed text-[#525854]">
                  Smaller technical explorations across analytics, AI, simulation, and intelligent systems.
                </p>
              </div>
            </Reveal>

            {/* Restrained 2-column grid on desktop, single-column on mobile. Anomaly Detection does not overpower */}
            <div className="grid grid-cols-2 gap-7 max-[960px]:grid-cols-1">
              {explorations.map((item) => (
                <Reveal key={item.title}>
                  <div className="flex h-full flex-col justify-between rounded-3xl border border-black/10 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.08)]">
                    <div>
                      <div className="mb-2 text-[11.5px] font-semibold uppercase tracking-[0.06em] text-[#6e736e]">
                        {item.meta}
                      </div>
                      <h3 className="mb-1.5 text-[17px] font-bold leading-[1.35] text-[#1a1d1a]">
                        {item.title}
                      </h3>
                      <p className="mb-5 text-[13.5px] font-normal leading-[1.5] text-[#525854]">
                        {item.desc}
                      </p>
                    </div>
                    <div className="aspect-[16/10] w-full overflow-hidden rounded-[14px] bg-[#141414] shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
                      <video src={item.video} autoPlay loop muted playsInline preload="metadata" className="h-full w-full object-cover opacity-90" />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* 6. SIDE QUESTS */}
            <div className="mt-16 pt-12 border-t border-black/[0.08]">
              <Reveal>
                <div className="mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#767c76]">
                    RAPID EXPERIMENTS
                  </span>
                  <h3 className="mt-1 text-[20px] font-bold tracking-[-0.015em] text-[#1a1d1a]">
                    SIDE QUESTS
                  </h3>
                  <p className="mt-1 text-[14px] font-normal text-[#525854]">
                    Small ideas built quickly to explore a tool, interaction, or technical question.
                  </p>
                </div>
              </Reveal>
              <div className="grid grid-cols-2 gap-6 max-[960px]:grid-cols-1">
                {[
                  {
                    tag: "Agentic Analyst · 2026 · Shipped",
                    desc: "An autonomous CLI tool that cleans messy spreadsheets and outputs executive charts.",
                    color: "#2a9d8f",
                  },
                  {
                    tag: "Macro Trend Pulse · 2026 · Under development",
                    desc: "Tracking global macroeconomic indices, commodity flows, and correlation anomalies.",
                    color: "#e76f51",
                  },
                ].map((item) => (
                  <Reveal key={item.tag}>
                    <div className="rounded-[20px] border border-black/10 bg-white p-6 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_4px_16px_-2px_rgba(0,0,0,0.06)]">
                      <div className="mb-2.5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.05em] text-[#525854]">
                        <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: item.color }} />
                        {item.tag}
                      </div>
                      <p className="text-[14.5px] font-medium leading-[1.5] text-[#1a1d1a]">{item.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. ABOUT / HOW I WORK */}
        <section id="aboutSection" className="py-24 bg-white border-t border-black/[0.06]">
          <div className="mx-auto w-full max-w-[1200px] px-[clamp(20px,4vw,56px)] max-[1024px]:px-12 max-md:px-5">
            <Reveal>
              <div className="max-w-[760px] mb-14">
                <span className="inline-flex items-center rounded-full border border-black/10 bg-[#faf9f6] px-3.5 py-1 text-[11.5px] font-semibold uppercase tracking-[0.08em] text-[#525854] shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                  How I Work
                </span>
                <h2 className="mt-4 text-[clamp(26px,2.8vw,38px)] font-bold tracking-[-0.025em] text-[#141714] leading-[1.3]">
                  &ldquo;I LIKE WORKING WHERE THINGS AREN&apos;T CLEAR YET.&rdquo;
                </h2>
                <p className="mt-4 text-[16px] font-normal leading-[1.7] text-[#525854]">
                  My background in business and analytics taught me to understand systems. Design and technology became the way I turn that understanding into something people can actually use.
                </p>
              </div>
            </Reveal>

            {/* Three Capability Pillars: THINK, BUILD, SHAPE */}
            <div className="grid grid-cols-3 gap-7 max-[960px]:grid-cols-1">
              {capabilityGroups.map((group) => (
                <Reveal key={group.pillar}>
                  <div className="flex h-full flex-col justify-between rounded-[22px] border border-black/10 bg-[#faf9f6] p-7 transition-all duration-300 hover:bg-white hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.06)] hover:-translate-y-1">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: group.color }} />
                        <h3 className="text-[17px] font-bold tracking-[0.05em] text-[#141714]">
                          {group.pillar}
                        </h3>
                      </div>
                      <p className="text-[13px] font-semibold text-[#1d3557] mb-4">
                        {group.focus}
                      </p>
                      <p className="text-[14px] font-normal leading-[1.65] text-[#525854]">
                        {group.details}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 8. REAL COLLABORATOR TESTIMONIALS */}
        <Testimonials />
      </main>

      {/* 9. CONTACT & 10. FOOTER */}
      <footer id="contactSection" className="border-t border-black/10 pb-10 pt-20 bg-white">
        <div className="mx-auto w-full max-w-[1200px] px-[clamp(20px,4vw,56px)] max-[1024px]:px-12 max-md:px-5">
          <div className="flex flex-col gap-12">
            <Reveal>
              <h2 className="max-w-[680px] text-[clamp(28px,3.2vw,38px)] font-bold leading-[1.25] tracking-[-0.025em] text-[#1a1d1a]">
                Some things start with a simple conversation.
              </h2>
            </Reveal>
            <Reveal>
              <div className="flex flex-wrap items-center justify-between gap-5 max-md:flex-col max-md:items-stretch">
                <button
                  id="copyEmailBtn"
                  type="button"
                  aria-label="Copy Email Address"
                  onClick={copyEmail}
                  className="inline-flex select-none items-center gap-3 rounded-full border border-black/10 bg-white px-6 py-2.5 text-base font-semibold text-[#1a1d1a] shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_-2px_rgba(0,0,0,0.06)] max-md:w-full max-md:justify-between"
                >
                  <span className="tracking-[-0.01em]">{email}</span>
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[13px] font-semibold shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-150 ${
                      copied ? "bg-[#182904] text-white" : "bg-[#faf9f6] text-[#525854]"
                    }`}
                  >
                    {copied ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                      </svg>
                    )}
                    {copied ? "Copied" : "Copy"}
                  </span>
                </button>
                <div className="flex items-center gap-3 max-md:w-full">
                  {["Linkedin", "Resume"].map((label) => (
                    <a
                      key={label}
                      href={label === "Linkedin" ? "https://linkedin.com" : "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-semibold text-[#1a1d1a] shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_-2px_rgba(0,0,0,0.06)] max-md:flex-1 max-md:justify-center"
                    >
                      {label}
                      <ArrowUpRight />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="flex items-center justify-between border-t border-black/10 pt-8 text-sm font-medium text-[#787d79]">
                <span>&copy; 2026 Andre Afrillian</span>
                <span>Thanks for visiting!</span>
              </div>
            </Reveal>
          </div>
        </div>
      </footer>
    </>
  );
}
