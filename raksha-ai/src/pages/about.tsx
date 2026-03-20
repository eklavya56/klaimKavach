import { motion } from "framer-motion";
import { Link } from "wouter";
import { Shield, ArrowRight, Heart, Target, Lightbulb } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useAuth } from "@/hooks/use-auth";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const, delay },
});

const team = [
  { name: "Prakhar Kumar", role: "Co-founder & CEO", initials: "PI", bio: "Ex-Flipkart. Built logistics for 10M+ deliveries before founding KlaimKavach." },
  { name: "Eklavya Verma", role: "Co-founder & CTO", initials: "RM", bio: "Ex-Google. ML engineer who trained fraud detection models at scale." },
  { name: "Prashant Gupta", role: "Head of Product", initials: "AS", bio: "Former gig worker turned product designer. Knows the problem first-hand." },
  { name: "Suryakant Dwivedi", role: "Head of Insurance", initials: "KR", bio: "IRDA-licensed actuary with 12 years in insurtech and microinsurance." },
];

const values = [
  {
    icon: Heart,
    title: "Worker-First",
    desc: "Every decision we make starts with one question: does this make life better for the gig worker?",
  },
  {
    icon: Target,
    title: "Radical Transparency",
    desc: "Your trust score, risk model, and premium calculation are always visible and explainable.",
  },
  {
    icon: Lightbulb,
    title: "Technology with Purpose",
    desc: "We use AI not to replace human judgment, but to speed up fair decisions and remove bias.",
  },
];

const milestones = [
  { year: "2022", event: "Founded in Bengaluru after spending 6 months riding with delivery partners." },
  { year: "2023", event: "Launched pilot with 500 Swiggy partners in Bengaluru. 98% claim approval rate." },
  { year: "2024", event: "Expanded to 12 cities. Crossed ₹1 Crore in claims paid out." },
  { year: "2025", event: "50,000 active policyholders. Launched weather disruption auto-detection." },
  { year: "2026", event: "KlaimKavach v2.0 — AI risk scoring, fraud engine, and instant payouts go live." },
];

export default function About() {
  const { isAuthenticated } = useAuth();
  return (
    <div className="bg-background text-foreground">
      <Helmet>
        <title>About Us | KlaimKavach</title>
        <meta name="description" content="Learn more about the team and values behind KlaimKavach." />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <motion.p {...fadeUp(0)} className="text-xs uppercase tracking-widest text-white/30 font-medium mb-4">
              About
            </motion.p>
            <motion.h1 {...fadeUp(0.06)} className="text-5xl sm:text-6xl font-bold tracking-tight text-foreground leading-[1.05] mb-6">
              We rode with
              <br /><span className="text-white/30">them first.</span>
            </motion.h1>
            <motion.p {...fadeUp(0.12)} className="text-sm text-muted-foreground leading-relaxed mb-6">
              KlaimKavach was founded after our team spent six months working as gig delivery riders in Bengaluru. We saw first-hand how a single day of heavy rain could wipe out a week's earnings — with no safety net in sight.
            </motion.p>
            <motion.p {...fadeUp(0.16)} className="text-sm text-muted-foreground leading-relaxed">
              We built KlaimKavach to change that. Smart insurance, instant payouts, and zero paperwork — because gig workers deserve protection that actually works.
            </motion.p>
          </div>

          <motion.div
            {...fadeUp(0.1)}
            className="p-8 rounded-2xl border border-[#1f1f1f] bg-[#111] space-y-6"
          >
            {[
              { label: "Founded", value: "2022" },
              { label: "Headquarters", value: "Bengaluru, India" },
              { label: "Team size", value: "42 people" },
              { label: "Cities covered", value: "18 cities" },
              { label: "Workers protected", value: "50,000+" },
              { label: "Claims paid", value: "₹4.2 Crore+" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between border-b border-[#1a1a1a] last:border-0 pb-4 last:pb-0">
                <span className="text-xs uppercase tracking-widest text-white/30 font-medium">{item.label}</span>
                <span className="text-sm font-semibold text-foreground tabular-nums">{item.value}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 border-t border-[#1f1f1f]">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp()} className="mb-12">
            <p className="text-xs uppercase tracking-widest text-white/30 font-medium mb-3">Our values</p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">What we stand for.</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.07)}
                className="p-7 rounded-xl border border-[#1f1f1f] bg-[#111] hover:border-[#2a2a2a] transition-all"
              >
                <div className="w-10 h-10 rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] flex items-center justify-center mb-5">
                  <v.icon className="w-5 h-5 text-white/40" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 border-t border-[#1f1f1f]">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp()} className="mb-12">
            <p className="text-xs uppercase tracking-widest text-white/30 font-medium mb-3">Timeline</p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">How we got here.</h2>
          </motion.div>
          <div className="relative pl-8 border-l border-[#1f1f1f] space-y-10">
            {milestones.map((m, i) => (
              <motion.div key={i} {...fadeUp(i * 0.07)} className="relative">
                <div className="absolute -left-[2.15rem] w-3.5 h-3.5 rounded-full border-2 border-[#2a2a2a] bg-background" />
                <p className="text-xs uppercase tracking-widest text-white/30 font-medium mb-1.5">{m.year}</p>
                <p className="text-sm text-white/60 leading-relaxed">{m.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 border-t border-[#1f1f1f]">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp()} className="mb-12">
            <p className="text-xs uppercase tracking-widest text-white/30 font-medium mb-3">Team</p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">The people behind KlaimKavach.</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {team.map((member, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.07)}
                className="p-6 rounded-xl border border-[#1f1f1f] bg-[#111] hover:border-[#2a2a2a] transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-sm font-bold text-white/50 mb-4">
                  {member.initials}
                </div>
                <h4 className="text-sm font-semibold text-foreground">{member.name}</h4>
                <p className="text-xs text-white/30 uppercase tracking-widest font-medium mt-0.5 mb-3">{member.role}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <motion.div {...fadeUp()} className="max-w-4xl mx-auto p-12 rounded-2xl border border-[#222] bg-[#111] text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Join our mission.</h2>
          <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
            Experience the future of insurance. Free for your first week, flat weekly rates after that.
          </p>
          <Link href={isAuthenticated ? "/dashboard" : "/register"}>
            <motion.div
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              className="inline-flex cursor-pointer items-center justify-center gap-2 px-8 py-3 rounded-lg bg-white text-black text-sm font-semibold hover:bg-white/90 transition-all"
            >
              {isAuthenticated ? "Go to Dashboard" : "Protect Your Hustle"} <ArrowRight className="w-4 h-4" />
            </motion.div>
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
