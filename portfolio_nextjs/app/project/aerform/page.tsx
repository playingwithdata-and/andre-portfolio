"use client";

import { useState } from "react";
import Link from "next/link";

export default function AerformCaseStudy() {
  const [copied, setCopied] = useState(false);
  const email = "andre.analytics@gmail.com";

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="min-h-screen bg-white text-[#1a1d1a] antialiased selection:bg-[#ff5500] selection:text-white">
      {/* Navigation Bar */}
      <header className="fixed left-0 top-0 z-[1000] w-full py-4 bg-white/85 backdrop-blur-[14px] border-b border-black/[0.06]">
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-[clamp(20px,4vw,56px)]">
          <Link
            href="/"
            className="flex h-[42px] w-[42px] items-center justify-center rounded-xl bg-[#f6f5ed] text-xl font-bold text-[#1a1d1a] shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-150 hover:scale-105 hover:bg-[#ede8d8]"
            aria-label="Back to Homepage"
          >
            A
          </Link>

          <Link
            href="/#workSection"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2 text-sm font-semibold text-[#525854] shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-150 hover:-translate-x-0.5 hover:text-[#1a1d1a] hover:shadow-[0_4px_16px_-2px_rgba(0,0,0,0.06)]"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to Projects
          </Link>

          <div className="flex items-center gap-2.5 max-sm:hidden">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-[#1a1d1a] shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-150 hover:-translate-y-px hover:shadow-[0_4px_16px_-2px_rgba(0,0,0,0.06)]"
            >
              Linkedin
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
            <a
              href="#copyEmailBtn"
              className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-[#111827] px-4 py-2 text-sm font-semibold text-white shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-150 hover:-translate-y-px hover:opacity-95"
            >
              Contact
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-[1200px] px-[clamp(20px,4vw,56px)] pt-[clamp(95px,10vw,130px)] pb-24">
        {/* HERO */}
        <section className="mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-[#f6f6f5] px-3.5 py-1 text-[11.5px] font-bold uppercase tracking-[0.08em] text-[#525854]">
            <span className="h-2 w-2 rounded-full bg-[#ff5500]" />
            Performance Commerce Experience
          </div>

          <h1 className="text-[clamp(36px,4.8vw,60px)] font-extrabold leading-[1.06] tracking-[-0.03em] text-[#111]">
            AERFORM
          </h1>
          <p className="mt-3.5 text-[clamp(19px,2.2vw,26px)] font-semibold leading-[1.35] tracking-[-0.015em] text-[#525854]">
            Performance footwear, designed to move.
          </p>
          <p className="mt-3.5 max-w-[720px] text-[clamp(15.5px,1.5vw,18px)] leading-[1.55] text-[#787d79]">
            An interactive performance footwear experience built around movement and product discovery, merging athletic energy with a clear, restrained browsing architecture.
          </p>

          {/* Metadata Row */}
          <div className="my-8 grid grid-cols-3 gap-6 border-y border-black/[0.08] py-4 max-sm:grid-cols-1">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#787d79]">ROLE</div>
              <div className="mt-1 text-[14px] font-semibold text-[#1a1d1a] leading-snug">
                Product Design / Art Direction
              </div>
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#787d79]">TYPE</div>
              <div className="mt-1 text-[14px] font-semibold text-[#1a1d1a]">Interactive Commerce Experience</div>
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#787d79]">FOCUS</div>
              <div className="mt-1 text-[14px] font-semibold text-[#1a1d1a]">Product Discovery / Interaction</div>
            </div>
          </div>

          {/* Primary Hero Visual - Rich Full-Width Desktop Presentation */}
          <div className="overflow-hidden rounded-[24px] border border-black/[0.08] bg-[#0c0d0e] shadow-[0_16px_40px_-10px_rgba(26,29,26,0.12)]">
            <img
              src="/assets/images/projects/aerform/aerform_hero.png"
              alt="AERFORM Hero Section showcasing dynamic athletic performance and brand tagline"
              width={941}
              height={480}
              className="w-full h-auto object-cover"
              loading="eager"
            />
          </div>
        </section>

        {/* 01 / CONCEPT */}
        <section className="border-t border-black/[0.08] py-14">
          <div className="mb-2 text-[11.5px] font-bold uppercase tracking-[0.1em] text-[#ff5500]">01 / Concept</div>
          <h2 className="text-[clamp(26px,3.2vw,38px)] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#1a1d1a]">
            PRODUCT DISCOVERY SHOULD FEEL LIKE MOVEMENT.
          </h2>
          <p className="mt-4 max-w-[780px] text-[clamp(16px,1.6vw,19px)] leading-[1.55] font-medium text-[#525854]">
            Traditional ecommerce grids often flatten performance products into static catalog items. AERFORM explores a more expressive way to browse performance footwear by combining movement-led art direction with clear product discovery.
          </p>

          <div className="mt-7 rounded-[18px] border border-black/[0.08] border-l-4 border-l-[#ff5500] bg-[#fafafa] p-6 sm:p-7">
            <div className="text-[clamp(20px,2.4vw,28px)] font-extrabold tracking-[-0.02em] text-[#1a1d1a]">
              ENERGY IN MOTION, CLARITY IN SELECTION.
            </div>
            <p className="mt-1.5 text-[15px] leading-relaxed text-[#525854]">
              High-performance footwear is chosen for how it responds during intense physical exertion. The digital storefront should convey that kinetic sensation without making browsing cumbersome or confusing.
            </p>
          </div>
        </section>

        {/* 02 / EXPERIENCE */}
        <section className="border-t border-black/[0.08] py-14">
          <div className="mb-2 text-[11.5px] font-bold uppercase tracking-[0.1em] text-[#ff5500]">02 / Experience</div>
          <h2 className="text-[clamp(26px,3.2vw,38px)] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#1a1d1a]">
            BUILT AROUND HOW PEOPLE EXPLORE.
          </h2>
          <p className="mt-4 max-w-[780px] text-[clamp(16px,1.6vw,19px)] leading-[1.55] font-medium text-[#525854]">
            The experience flow connects athletic intent directly to technical shoe anatomy through structured progression.
          </p>

          {/* Flow Diagram */}
          <div className="my-6 flex flex-wrap items-center gap-2.5">
            {["Discover", "Explore", "Compare", "Select", "Product Detail"].map((step, idx) => (
              <div key={step} className="flex items-center gap-2.5">
                <span className="inline-flex items-center rounded-full border border-black/[0.08] bg-[#f6f6f5] px-4 py-1.5 text-[13.5px] font-semibold text-[#1a1d1a]">
                  {step}
                </span>
                {idx < 4 && <span className="text-sm text-[#787d79]">→</span>}
              </div>
            ))}
          </div>

          {/* 1. Large Discovery Grid Screen */}
          <div className="overflow-hidden rounded-[20px] border border-black/[0.08] bg-[#f7f7f8] shadow-sm">
            <img
              src="/assets/images/projects/aerform/aerform_discovery.png"
              alt="AERFORM Interactive Product Discovery Grid and Filtering System"
              width={941}
              height={330}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>

          {/* 2. Supporting Paired Product Models */}
          <div className="mt-6 grid grid-cols-2 gap-5 max-sm:grid-cols-1">
            <div className="overflow-hidden rounded-[18px] border border-black/[0.08] bg-[#fafafa] p-3 shadow-sm">
              <div className="overflow-hidden rounded-[12px] bg-[#f2f2f2]">
                <img
                  src="/assets/images/projects/aerform/pulse.jpg"
                  alt="AERFORM Pulse road runner shoe detail"
                  width={768}
                  height={512}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <div className="mt-3 px-1">
                <div className="text-[14px] font-bold text-[#1a1d1a]">AERFORM Pulse · $180</div>
                <div className="text-[12.5px] text-[#787d79]">Energy Return Road Runner · 4 Colors</div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[18px] border border-black/[0.08] bg-[#fafafa] p-3 shadow-sm">
              <div className="overflow-hidden rounded-[12px] bg-[#f2f2f2]">
                <img
                  src="/assets/images/projects/aerform/vortex.jpg"
                  alt="AERFORM Vortex maximum cushion stability shoe detail"
                  width={768}
                  height={512}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <div className="mt-3 px-1">
                <div className="text-[14px] font-bold text-[#1a1d1a]">AERFORM Vortex · $210</div>
                <div className="text-[12.5px] text-[#787d79]">Maximum Cushion Stability · 3 Colors</div>
              </div>
            </div>
          </div>
        </section>

        {/* 03 / DECISIONS */}
        <section className="border-t border-black/[0.08] py-14">
          <div className="mb-2 text-[11.5px] font-bold uppercase tracking-[0.1em] text-[#ff5500]">03 / Decisions</div>
          <h2 className="text-[clamp(26px,3.2vw,38px)] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#1a1d1a]">
            THREE DECISIONS SHAPED THE EXPERIENCE.
          </h2>

          <div className="mt-7 grid grid-cols-3 gap-6 max-md:grid-cols-1">
            <div className="border-t border-black/[0.08] pt-4">
              <h3 className="text-[17px] font-bold tracking-[-0.01em] text-[#1a1d1a]">
                01 — Movement over static presentation
              </h3>
              <p className="mt-1.5 text-[14.5px] leading-relaxed text-[#525854]">
                Dynamic visual energy and active athletic imagery establish performance intent immediately rather than waiting for a secondary video tab.
              </p>
            </div>

            <div className="border-t border-black/[0.08] pt-4">
              <h3 className="text-[17px] font-bold tracking-[-0.01em] text-[#1a1d1a]">
                02 — Product clarity over visual noise
              </h3>
              <p className="mt-1.5 text-[14.5px] leading-relaxed text-[#525854]">
                Clean category pills, high-contrast silhouettes, and transparent price tags ensure shoppers can quickly filter by activity.
              </p>
            </div>

            <div className="border-t border-black/[0.08] pt-4">
              <h3 className="text-[17px] font-bold tracking-[-0.01em] text-[#1a1d1a]">
                03 — Editorial energy without hurting commerce usability
              </h3>
              <p className="mt-1.5 text-[14.5px] leading-relaxed text-[#525854]">
                Expressive hero typography and asymmetrical layouts balance with standard ecommerce affordances: clear size pickers, quick add, and immediate availability.
              </p>
            </div>
          </div>
        </section>

        {/* 04 / ART DIRECTION */}
        <section className="border-t border-black/[0.08] py-14">
          <div className="mb-2 text-[11.5px] font-bold uppercase tracking-[0.1em] text-[#ff5500]">04 / Art Direction</div>
          <h2 className="text-[clamp(26px,3.2vw,38px)] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#1a1d1a]">
            MOTION WITHOUT CHAOS.
          </h2>
          <p className="mt-4 max-w-[780px] text-[clamp(16px,1.6vw,19px)] leading-[1.55] font-medium text-[#525854]">
            The aesthetic balances high-velocity sports photography with light, architectural interface discipline:
          </p>

          {/* Paired Performance Photography Proof */}
          <div className="my-7 grid grid-cols-2 gap-5 max-sm:grid-cols-1">
            <div className="overflow-hidden rounded-[18px] border border-black/[0.08] shadow-sm">
              <img
                src="/assets/images/projects/aerform/running.jpg"
                alt="Running discipline performance in motion"
                width={1024}
                height={683}
                className="w-full aspect-[16/10] object-cover transition-transform duration-300 hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-[18px] border border-black/[0.08] shadow-sm">
              <img
                src="/assets/images/projects/aerform/basketball.jpg"
                alt="Basketball agility mid-jump"
                width={1024}
                height={683}
                className="w-full aspect-[16/10] object-cover transition-transform duration-300 hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-4 max-sm:grid-cols-1">
            {[
              { title: "Performance Photography", desc: "Athletes captured mid-stride to emphasize shoe flexibility and impact absorption." },
              { title: "Strong Scale Contrast", desc: "Hero typography scales boldly while utility elements remain tightly controlled." },
              { title: "Directional Compositions", desc: "Diagonal postures and gaze vectors naturally lead eyes toward callouts." },
              { title: "Restrained Chrome", desc: "Minimal button borders and crisp white framing let footwear colors lead." },
              { title: "Clear Hierarchy", desc: "Categorization by discipline: Running, Basketball, Training, and Lifestyle." },
              { title: "Energetic Readability", desc: "High-contrast sans-serif typefaces engineered for quick scannability on small screens." },
            ].map((point) => (
              <div key={point.title} className="rounded-[16px] border border-black/[0.08] bg-[#fafafa] p-5">
                <div className="text-[15px] font-bold text-[#1a1d1a]">{point.title}</div>
                <div className="mt-1 text-[13.5px] leading-relaxed text-[#525854]">{point.desc}</div>
              </div>
            ))}
          </div>

          {/* Full Category Art Direction Screen */}
          <div className="mt-8 overflow-hidden rounded-[20px] border border-black/[0.08] shadow-sm">
            <img
              src="/assets/images/projects/aerform/aerform_categories.png"
              alt="AERFORM Category Art Direction across Running, Basketball, Training, and Lifestyle"
              width={941}
              height={310}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </section>

        {/* 05 / PRODUCT MOMENTS */}
        <section className="border-t border-black/[0.08] py-14">
          <div className="mb-2 text-[11.5px] font-bold uppercase tracking-[0.1em] text-[#ff5500]">05 / Product Moments</div>
          <h2 className="text-[clamp(26px,3.2vw,38px)] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#1a1d1a]">
            ENGINEERED COMFORT &amp; DETAILS.
          </h2>
          <p className="mt-4 max-w-[780px] text-[clamp(16px,1.6vw,19px)] leading-[1.55] font-medium text-[#525854]">
            Technical specifications are showcased through modular component blocks highlighting cushion innovation and grip architecture.
          </p>

          {/* Main Engineering Architecture Screen */}
          <div className="mt-7 overflow-hidden rounded-[20px] border border-black/[0.08] shadow-sm">
            <img
              src="/assets/images/projects/aerform/aerform_engineering.png"
              alt="AERFORM Cushioning Technology, Flex Motion, and Grip Control Breakdown"
              width={941}
              height={330}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>

          {/* Supporting Technical Anatomy Cards */}
          <div className="mt-6 grid grid-cols-2 gap-5 max-sm:grid-cols-1">
            <div className="overflow-hidden rounded-[18px] border border-black/[0.08] bg-[#fafafa] p-3 shadow-sm">
              <div className="overflow-hidden rounded-[12px] bg-[#f2f2f2]">
                <img
                  src="/assets/images/projects/aerform/trainer.jpg"
                  alt="AERFORM Trainer multi-directional outsole grip"
                  width={768}
                  height={512}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <div className="mt-3 px-1">
                <div className="text-[14px] font-bold text-[#1a1d1a]">Adaptive Grip &amp; Outsole Anatomy</div>
                <div className="text-[12.5px] text-[#787d79]">Multi-directional traction lugs engineered for aggressive directional cuts.</div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[18px] border border-black/[0.08] bg-[#fafafa] p-3 shadow-sm">
              <div className="overflow-hidden rounded-[12px] bg-[#f2f2f2]">
                <img
                  src="/assets/images/projects/aerform/club.jpg"
                  alt="AERFORM Club member experience"
                  width={900}
                  height={600}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <div className="mt-3 px-1">
                <div className="text-[14px] font-bold text-[#1a1d1a]">AERFORM Club Community Experience</div>
                <div className="text-[12.5px] text-[#787d79]">Early drop access, runner meetups, and digital workout integration.</div>
              </div>
            </div>
          </div>
        </section>

        {/* CLOSING & NEXT PROJECT NAVIGATION */}
        <section className="border-t border-black/[0.08] pt-14">
          <div className="rounded-[24px] bg-[#0c0d0e] px-6 py-12 sm:px-12 sm:py-14 text-center text-white shadow-xl">
            <div className="mb-3 text-[11.5px] font-bold uppercase tracking-[0.12em] text-[#ff5500]">Closing Reflection</div>
            <h2 className="text-[clamp(26px,3.6vw,40px)] font-extrabold tracking-[-0.02em]">
              A COMMERCE EXPERIENCE THAT MOVES WITH THE PRODUCT.
            </h2>
            <p className="mx-auto mt-3 max-w-[580px] text-[clamp(15px,1.6vw,17.5px)] leading-relaxed text-[#9ca3af]">
              By anchoring every layout decision in athletic motion while preserving frictionless product selection, AERFORM demonstrates that commerce interfaces don&apos;t have to feel like monotonous spreadsheets.
            </p>
            
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/#workSection"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-all duration-150 hover:bg-white/10"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
                All Projects
              </Link>

              <Link
                href="/project/nomad"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-[#0c0d0e] shadow-sm transition-all duration-150 hover:scale-105 hover:bg-[#f2f2ee]"
              >
                View Next Project: NOMAD
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-black/10 pb-10 pt-20">
        <div className="mx-auto w-full max-w-[1200px] px-[clamp(20px,4vw,56px)]">
          <div className="flex flex-col gap-12">
            <h2 className="max-w-[680px] text-[clamp(28px,3.2vw,38px)] font-bold leading-[1.25] tracking-[-0.025em] text-[#1a1d1a]">
              Some things start with a simple conversation.
            </h2>
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
                    copied ? "bg-[#182904] text-white" : "bg-white text-[#525854]"
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
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-black/10 pt-8 text-sm font-medium text-[#787d79]">
              <span>&copy; 2026 Andre</span>
              <span>Thanks for visiting!</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
