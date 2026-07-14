import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Calendar,
  ExternalLink,
  Factory,
  Mail,
  MapPin,
  Ruler,
  Ship,
  Waves,
  Zap,
} from 'lucide-react';

const siteFacts = [
  {
    value: '5,539',
    label: 'Total area (acres)',
    detail: 'Combined onshore and sea area',
    icon: MapPin,
  },
  {
    value: '3,068',
    label: 'Onshore area (acres)',
    detail: 'Published SOGIP land area',
    icon: Ruler,
  },
  {
    value: '2,471',
    label: 'Sea area (acres)',
    detail: 'Published SOGIP sea area',
    icon: Waves,
  },
  {
    value: '16–25m',
    label: 'Natural water depth',
    detail: 'Published depth range at the site',
    icon: Ship,
  },
];

const developments = [
  {
    name: 'SAMUR Fertiliser Complex',
    status: 'Operational',
    statusClass: 'border-emerald-400/40 bg-emerald-400/10 text-emerald-300',
    value: 'Approx. RM4.6B',
    timeline: 'Commercial since May 2017',
    location: '211-acre site at SOGIP',
    description: 'An integrated ammonia and urea complex operated by PETRONAS Chemicals Fertiliser Sabah.',
    facts: ['1.2 MTPA granulated urea capacity', '740,000 tonnes per annum liquid ammonia capacity'],
    icon: Factory,
    sources: [
      { label: 'SOGIP project facts', url: 'https://sogip.com.my/sogip/' },
      {
        label: 'PETRONAS Chemicals operating status',
        url: 'https://www.petronas.com/pcg/media/media-releases/smj-completes-acquisition-equity-interest-petronas-chemicals-fertiliser-sabah',
      },
    ],
  },
  {
    name: 'PETRONAS PFLNG 3',
    status: 'Under Construction',
    statusClass: 'border-sky-400/40 bg-sky-400/10 text-sky-300',
    value: 'US$3.1B',
    timeline: 'Targeted for H2 2027',
    location: 'Nearshore at SOGIP',
    description: 'A nearshore floating LNG facility under construction for deployment at SOGIP.',
    facts: ['2.0 MTPA design capacity', 'SMJ Energy holds a 25% equity interest'],
    icon: Ship,
    sources: [{ label: 'Sabah Chief Minister Department', url: 'https://cm.sabah.gov.my/siaran-media/4197' }],
  },
  {
    name: 'Esteel Green Steel Project',
    status: 'Phase I Launched',
    statusClass: 'border-amber-400/40 bg-amber-400/10 text-amber-300',
    value: 'Approx. RM31B',
    timeline: 'Multi-phase development',
    location: 'SOGIP, Sipitang',
    description: 'A multi-phase integrated green steel development. Phase I was launched on 30 May 2025.',
    facts: ['Natural gas used as a reducing agent', 'Overall value is an announced investment estimate'],
    icon: Factory,
    sources: [{ label: 'Sabah Chief Minister Department', url: 'https://cm.sabah.gov.my/siaran-media/3324' }],
  },
  {
    name: 'Sipitang Power Plant',
    status: 'Under Construction',
    statusClass: 'border-sky-400/40 bg-sky-400/10 text-sky-300',
    value: 'Approx. RM230M',
    timeline: 'Targeted by end-2026',
    location: 'SOGIP, Sipitang',
    description: 'A power plant being developed by Sipitang Utilities Sdn Bhd for the upcoming nearshore LNG facility.',
    facts: ['52MW generation capacity', 'Reported on schedule in PETRONAS Gas Berhad’s 2025 report'],
    icon: Zap,
    sources: [
      {
        label: 'PETRONAS Gas Berhad 2025 report',
        url: 'https://www.petronas.com/pgb/sites/default/files/2026-03/PGB%20Integrated%20Report%202025_1.pdf',
      },
    ],
  },
  {
    name: 'Petroventure Storage & Refinery',
    status: 'Development Announced',
    statusClass: 'border-amber-400/40 bg-amber-400/10 text-amber-300',
    value: 'RM15.5B announced',
    timeline: 'Completion not publicly confirmed',
    location: 'Announced 400-acre site',
    description: 'A petroleum storage and refining development announced in February 2025.',
    facts: ['Up to 150,000 barrels per day announced refinery capacity', 'Three million m³ announced storage capacity'],
    icon: Factory,
    sources: [{ label: 'Sabah Chief Minister Department', url: 'https://cm.sabah.gov.my/siaran-media/2794' }],
  },
  {
    name: 'Integrated Energy Hub Proposal',
    status: 'Proposed / MoU Stage',
    statusClass: 'border-violet-400/40 bg-violet-400/10 text-violet-300',
    value: 'Value not confirmed',
    timeline: 'Announced April 2026',
    location: 'Proposed approximately 275-acre site',
    description: 'A proposed LNG, ammonia and hydrogen storage and distribution hub with supporting infrastructure.',
    facts: ['Includes a 400–500MW CCGT feasibility study', 'Subject to studies and definitive agreements'],
    icon: Factory,
    sources: [{ label: 'Sabah Chief Minister Department', url: 'https://cm.sabah.gov.my/siaran-media/6705' }],
  },
];

const Reveal = ({ children, className = '', delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const MasterPlan = () => (
  <div className="min-h-[100dvh] bg-[#0A1628] pt-20 text-white">
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,212,255,0.12),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(255,176,32,0.10),transparent_36%)]" />
      <Reveal className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/10 px-4 py-2 text-sm font-semibold text-[#00D4FF]">
          Verified Site Overview
        </div>
        <h1 className="mb-5 text-4xl font-bold sm:text-5xl md:text-6xl">
          SOGIP <span className="bg-gradient-to-r from-[#00D4FF] to-[#FFB020] bg-clip-text text-transparent">Master Plan</span>
        </h1>
        <p className="mx-auto max-w-4xl text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl">
          SOGIP covers 5,539 acres in total: 3,068 acres onshore and 2,471 acres of sea area in Sipitang, Sabah.
        </p>
        <a
          href="https://sogip.com.my/wp-content/uploads/2025/06/SOGIP-BROCHURE-2.pdf"
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#00D4FF] transition-colors hover:text-white"
        >
          View official 2025 brochure <ExternalLink size={16} />
        </a>
      </Reveal>
    </section>

    <section className="bg-[#0D1F36] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Verified Site Facts</h2>
          <p className="mx-auto max-w-3xl text-gray-400">Published by SOGIP and its official 2025 brochure.</p>
        </Reveal>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {siteFacts.map((fact, index) => (
            <Reveal key={fact.label} delay={index * 0.08} className="h-full">
              <div className="h-full rounded-2xl border border-white/10 bg-[#0A1628]/70 p-6">
                <fact.icon className="mb-5 text-[#00D4FF]" size={30} />
                <div className="mb-2 text-3xl font-bold text-white">{fact.value}</div>
                <div className="font-semibold text-gray-200">{fact.label}</div>
                <div className="mt-2 text-sm text-gray-500">{fact.detail}</div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-6 text-center">
          <a href="https://sogip.com.my/sogip/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[#00D4FF] hover:text-white">
            Read the official SOGIP site facts <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </section>

    <section className="py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Published <span className="text-[#00D4FF]">Developments</span>
          </h2>
          <p className="mx-auto max-w-4xl text-gray-400">
            This is a factual project overview, not an official cadastral or zoning map. Statuses and timelines reflect the linked official publications.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {developments.map((development, index) => (
            <Reveal key={development.name} delay={(index % 2) * 0.08} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#0D1F36] p-6 transition-colors hover:border-[#00D4FF]/30 sm:p-8">
                <div className="mb-5 flex flex-col items-start justify-between gap-4 sm:flex-row">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#00D4FF]/10 text-[#00D4FF]">
                      <development.icon size={25} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white sm:text-2xl">{development.name}</h3>
                      <div className="mt-2 flex items-center gap-2 text-sm text-gray-400">
                        <MapPin size={15} /> {development.location}
                      </div>
                    </div>
                  </div>
                  <span className={`shrink-0 rounded-full border px-3 py-1 text-xs font-semibold ${development.statusClass}`}>
                    {development.status}
                  </span>
                </div>

                <p className="mb-5 leading-relaxed text-gray-300">{development.description}</p>
                <div className="mb-5 grid grid-cols-1 gap-3 rounded-xl bg-white/[0.04] p-4 sm:grid-cols-2">
                  <div>
                    <div className="text-xs uppercase tracking-wide text-gray-500">Published value</div>
                    <div className="mt-1 font-bold text-[#FFB020]">{development.value}</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-xs uppercase tracking-wide text-gray-500"><Calendar size={13} /> Timeline</div>
                    <div className="mt-1 font-semibold text-gray-200">{development.timeline}</div>
                  </div>
                </div>
                <ul className="mb-6 space-y-2 text-sm text-gray-400">
                  {development.facts.map((fact) => (
                    <li key={fact} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00D4FF]" />{fact}</li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 border-t border-white/10 pt-5">
                  {development.sources.map((source) => (
                    <a
                      key={source.url}
                      href={source.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#00D4FF] hover:text-white"
                    >
                      {source.label} <ExternalLink size={14} />
                    </a>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-[#0D1F36] py-16 sm:py-20">
      <Reveal className="mx-auto max-w-5xl px-4 text-center sm:px-6">
        <div className="rounded-3xl border border-[#00D4FF]/20 bg-gradient-to-br from-[#00D4FF]/10 to-[#FFB020]/10 p-7 sm:p-10">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Request Current Site Information</h2>
          <p className="mx-auto mb-8 max-w-3xl text-gray-300">
            Land and project availability can change. Contact SOGDC directly for current site availability, lease terms, infrastructure readiness and approval requirements.
          </p>
          <motion.a
            href="mailto:info@sogip.com.my?subject=SOGIP%20site%20information%20request"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#00D4FF] to-[#0099CC] px-7 py-3 font-semibold text-white shadow-xl shadow-[#00D4FF]/20"
          >
            <Mail size={19} /> Contact SOGDC
          </motion.a>
        </div>
      </Reveal>
    </section>
  </div>
);
