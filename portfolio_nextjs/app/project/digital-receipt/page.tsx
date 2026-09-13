"use client";

import { useState } from "react";
import Link from "next/link";

export default function DigitalReceiptCaseStudy() {
  const [copied, setCopied] = useState(false);
  const email = "andre.analytics@gmail.com";

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="min-h-screen bg-white text-[#1a1d1a] antialiased selection:bg-[#1d3557] selection:text-white">
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
              className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-[#182904] px-4 py-2 text-sm font-semibold text-white shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-150 hover:-translate-y-px hover:opacity-95"
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
            <span className="h-2 w-2 rounded-full bg-[#2a9d8f]" />
            Creative Product Experiment
          </div>

          <h1 className="text-[clamp(36px,4.8vw,60px)] font-extrabold leading-[1.06] tracking-[-0.03em] text-[#111]">
            DIGITAL RECEIPT
          </h1>
          <p className="mt-3.5 text-[clamp(19px,2.2vw,26px)] font-semibold leading-[1.35] tracking-[-0.015em] text-[#525854]">
            A receipt for where your day actually went.
          </p>
          <p className="mt-3.5 max-w-[720px] text-[clamp(15.5px,1.5vw,18px)] leading-[1.55] text-[#787d79]">
            A focused one-hour creative product experiment that turns a natural-language description of your day into a physical-style receipt for how you spent your time.
          </p>

          {/* Compact Metadata Row */}
          <div className="my-8 grid grid-cols-4 gap-6 border-y border-black/[0.08] py-4 max-lg:grid-cols-2 max-sm:grid-cols-2">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#787d79]">ROLE</div>
              <div className="mt-1 text-[14px] font-semibold text-[#1a1d1a] leading-snug">
                Product Design · Art Direction · Dev
              </div>
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#787d79]">TYPE</div>
              <div className="mt-1 text-[14px] font-semibold text-[#1a1d1a]">Creative Product Experiment</div>
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#787d79]">CONSTRAINT</div>
              <div className="mt-1 text-[14px] font-semibold text-[#1a1d1a]">~1 Hour MVP Boundary</div>
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#787d79]">YEAR</div>
              <div className="mt-1 text-[14px] font-semibold text-[#1a1d1a]">2026</div>
            </div>
          </div>

          {/* Primary Product Visual (Laptop Showcase) */}
          <div className="overflow-hidden rounded-[24px] border border-black/[0.08] bg-[#0f1110] shadow-[0_16px_40px_-10px_rgba(26,29,26,0.1)]">
            <img
              src="/assets/images/projects/digital-receipt/mockup_laptop_hero.png"
              alt="Digital Receipt Desktop Interface and Printed Thermal Receipt"
              className="w-full object-cover"
            />
          </div>
        </section>

        {/* 01 / CONCEPT (THE HOOK) */}
        <section className="border-t border-black/[0.08] py-14">
          <div className="mb-2 text-[11.5px] font-bold uppercase tracking-[0.1em] text-[#2a9d8f]">01 / Concept</div>
          <h2 className="text-[clamp(26px,3.2vw,38px)] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#1a1d1a]">
            YOU GET 24 HOURS.<br />WHERE DID THEY GO?
          </h2>
          <p className="mt-4 max-w-[780px] text-[clamp(16px,1.6vw,19px)] leading-[1.55] font-medium text-[#525854]">
            Every day gives us the same 24-hour budget, but we rarely experience time as something we&apos;ve actually spent. Digital Receipt turns that invisible transaction into a tangible object.
          </p>

          <div className="mt-7 rounded-[18px] border border-black/[0.08] border-l-4 border-l-[#1a1d1a] bg-[#fafafa] p-6 sm:p-7">
            <div className="text-[clamp(22px,2.6vw,32px)] font-extrabold tracking-[-0.02em] text-[#1a1d1a]">
              “YOU PAID WITH TIME.”
            </div>
            <p className="mt-1.5 text-[15px] leading-relaxed text-[#525854]">
              Time is an irreversible daily expenditure. When activities are treated like line items on a sales receipt, unconscious trade-offs become concrete reality.
            </p>
          </div>
        </section>

        {/* 02 / EXPERIENCE */}
        <section className="border-t border-black/[0.08] py-14">
          <div className="mb-2 text-[11.5px] font-bold uppercase tracking-[0.1em] text-[#2a9d8f]">02 / Experience</div>
          <h2 className="text-[clamp(26px,3.2vw,38px)] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#1a1d1a]">
            NATURAL RECALL OVER TIME-TRACKING
          </h2>
          <p className="mt-4 max-w-[780px] text-[clamp(16px,1.6vw,19px)] leading-[1.55] font-medium text-[#525854]">
            Users describe their day as they naturally remember it rather than filling out an intimidating spreadsheet.
          </p>

          {/* Pipeline Strip */}
          <div className="my-6 flex flex-wrap items-center gap-2.5">
            {["Natural Input", "Local Parsing", "Receipt Prints", "Reflect", "Export"].map((step, idx) => (
              <div key={step} className="flex items-center gap-2.5">
                <span className="inline-flex items-center rounded-full border border-black/[0.08] bg-[#f6f6f5] px-4 py-1.5 text-[13.5px] font-semibold text-[#1a1d1a]">
                  {step}
                </span>
                {idx < 4 && <span className="text-sm text-[#787d79]">→</span>}
              </div>
            ))}
          </div>

          <div className="rounded-[14px] border border-white/10 bg-[#141715] px-5 py-4 font-mono text-[14.5px] text-[#e2e8e4] shadow-sm">
            “gue kerja 8 jam, tidur 7 jam, nonton YouTube 2 jam dan coding 2 jam”
          </div>
          <p className="mt-2 text-[14px] text-[#787d79]">
            The parser supports casual Indonesian and English colloquialisms (including <em>sejam</em>, <em>setengah jam</em>, shorthand <em>8j</em>). The MVP intentionally uses pragmatic, deterministic local parsing rather than unpredictable external AI APIs.
          </p>
        </section>

        {/* 03 / DECISIONS — Compressed Editorial Treatment */}
        <section className="border-t border-black/[0.08] py-14">
          <div className="mb-2 text-[11.5px] font-bold uppercase tracking-[0.1em] text-[#2a9d8f]">03 / Decisions</div>
          <h2 className="text-[clamp(26px,3.2vw,38px)] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#1a1d1a]">
            FOUR DECISIONS SHAPED THE PRODUCT.
          </h2>

          <div className="mt-7 grid grid-cols-2 gap-x-9 gap-y-7 max-md:grid-cols-1">
            <div className="border-t border-black/[0.08] pt-4">
              <h3 className="text-[17px] font-bold tracking-[-0.01em] text-[#1a1d1a]">
                01 — Natural language over forms
              </h3>
              <p className="mt-1 text-[14.5px] leading-relaxed text-[#525854]">
                Remembering a day should feel conversational, not like filling out a spreadsheet.
              </p>
            </div>

            <div className="border-t border-black/[0.08] pt-4">
              <h3 className="text-[17px] font-bold tracking-[-0.01em] text-[#1a1d1a]">
                02 — Unaccounted, never invented
              </h3>
              <p className="mt-1 text-[14.5px] leading-relaxed text-[#525854]">
                Missing hours remain UNACCOUNTED instead of being guessed or fabricated to reach 24 hours.
              </p>
            </div>

            <div className="border-t border-black/[0.08] pt-4">
              <h3 className="text-[17px] font-bold tracking-[-0.01em] text-[#1a1d1a]">
                03 — Reflection, not judgment
              </h3>
              <p className="mt-1 text-[14.5px] leading-relaxed text-[#525854]">
                The system reveals observational patterns (e.g. creating vs. consuming) without assigning patronizing productivity scores.
              </p>
            </div>

            <div className="border-t border-black/[0.08] pt-4">
              <h3 className="text-[17px] font-bold tracking-[-0.01em] text-[#1a1d1a]">
                04 — Receipt over dashboard
              </h3>
              <p className="mt-1 text-[14.5px] leading-relaxed text-[#525854]">
                Time already spent becomes a physical artifact rather than another analytics interface.
              </p>
            </div>
          </div>
        </section>

        {/* 04 / ART DIRECTION & SIGNATURE INTERACTION */}
        <section className="border-t border-black/[0.08] py-14">
          <div className="mb-2 text-[11.5px] font-bold uppercase tracking-[0.1em] text-[#2a9d8f]">04 / Art Direction &amp; Interaction</div>
          <h2 className="text-[clamp(26px,3.2vw,38px)] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#1a1d1a]">
            THERMAL TRUTH
          </h2>
          <p className="mt-4 max-w-[780px] text-[clamp(16px,1.6vw,19px)] leading-[1.55] font-medium text-[#525854]">
            80% Thermal Truth balanced with 20% Personal Audit clarity. Tactile warm paper (<code className="rounded bg-[#f6f6f5] px-1 py-0.5 text-xs">#EEE9DE</code>), authentic monospace typography, and measured mechanical feedback as the receipt feeds downward from the slot.
          </p>

          <div className="mt-7 grid grid-cols-2 gap-6 max-md:grid-cols-1">
            <div className="overflow-hidden rounded-[18px] border border-black/[0.08] shadow-md">
              <img
                src="/assets/images/projects/digital-receipt/mockup_printer_feed.png"
                alt="Signature Interaction: Mechanical Printer Slot Feeding Receipt"
                className="w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-[18px] border border-black/[0.08] shadow-md">
              <img
                src="/assets/images/projects/digital-receipt/mockup_receipt_artifact.png"
                alt="Final Thermal Receipt Artifact with 24H Breakdown and Reflection"
                className="w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* 05 / ONE-HOUR CONSTRAINT */}
        <section className="border-t border-black/[0.08] py-14">
          <div className="mb-2 text-[11.5px] font-bold uppercase tracking-[0.1em] text-[#2a9d8f]">05 / The Constraint</div>
          <h2 className="text-[clamp(26px,3.2vw,38px)] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#1a1d1a]">
            ONE HOUR. ONE INTERACTION. ONE FINISHED PRODUCT.
          </h2>
          <p className="mt-4 max-w-[780px] text-[clamp(16px,1.6vw,19px)] leading-[1.55] font-medium text-[#525854]">
            The project intentionally started with a strict one-hour MVP constraint to force ruthless prioritization around a single end-to-end loop.
          </p>

          <div className="mt-7 rounded-[24px] border border-black/[0.08] bg-[#fafafa] p-7 sm:p-9">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-black/[0.08] pb-5 max-sm:flex-col max-sm:items-start">
              <div>
                <div className="text-[clamp(18px,2vw,24px)] font-extrabold tracking-[-0.02em] text-[#1a1d1a]">
                  THE 60-MINUTE BOUNDARY
                </div>
                <p className="mt-1 text-[14px] text-[#787d79]">Strict boundary enforced from minute zero.</p>
              </div>
              <div className="font-mono text-[clamp(32px,4vw,48px)] font-extrabold tracking-[0.04em] text-[#141715] rounded-[14px] border border-black/10 bg-white px-5 py-1.5 shadow-sm">
                01:00:00
              </div>
            </div>

            <div className="grid grid-cols-2 gap-7 max-sm:grid-cols-1">
              {/* CUT */}
              <div>
                <div className="mb-3 flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.08em] text-[#a84242]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                  CUT
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Authentication", "Database", "History", "Dashboard", "AI API"].map((item) => (
                    <span key={item} className="rounded-full border border-red-200 bg-red-50/70 px-3 py-1 text-xs font-semibold text-[#9c3b3b] line-through">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* SHIPPED */}
              <div>
                <div className="mb-3 flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.08em] text-[#1f7a63]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  SHIPPED
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Natural-language input",
                    "Indonesian + English parser",
                    "24-hour accounting",
                    "Thermal receipt",
                    "Reflective insight",
                    "Receipt export",
                  ].map((item) => (
                    <span key={item} className="rounded-full border border-teal-200 bg-teal-50/70 px-3 py-1 text-xs font-semibold text-[#1b6351]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Closing Gallery */}
          <div className="mt-10 overflow-hidden rounded-[22px] border border-black/[0.08] bg-[#0f1110] shadow-[0_16px_40px_-10px_rgba(26,29,26,0.1)]">
            <img
              src="/assets/images/projects/digital-receipt/mockup_full_overview.png"
              alt="Digital Receipt Complete Multi-Device Overview"
              className="w-full object-cover"
            />
          </div>
        </section>

        {/* CLOSING */}
        <section className="border-t border-black/[0.08] pt-14">
          <div className="rounded-[24px] bg-[#141715] px-6 py-12 sm:px-12 sm:py-14 text-center text-white shadow-xl">
            <h2 className="text-[clamp(26px,3.6vw,40px)] font-extrabold tracking-[-0.02em]">
              A SMALL PRODUCT.<br />FINISHED ON PURPOSE.
            </h2>
            <p className="mx-auto mt-3 max-w-[560px] text-[clamp(15px,1.6vw,17.5px)] leading-relaxed text-[#a4aca6]">
              Digital Receipt wasn&apos;t designed to become a bloated productivity suite. The goal was to find one strong metaphor, turn it into a coherent physical-digital interaction, and ship the complete experience.
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
                href="/project/aerform"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-[#141715] shadow-sm transition-all duration-150 hover:scale-105 hover:bg-[#f2f2ee]"
              >
                View Next Project: AERFORM
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
