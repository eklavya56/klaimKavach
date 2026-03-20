import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Shield,
  Zap,
  BarChart2,
  CloudRain,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Users,
  Clock,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useAuth } from "@/hooks/use-auth";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const, delay },
});

const features = [
  {
    icon: Zap,
    title: "Instant Claims",
    desc: "Submit and get approved in under 60 seconds. No paperwork, no waiting.",
  },
  {
    icon: BarChart2,
    title: "AI Risk Scoring",
    desc: "Real-time risk assessment based on your routes, weather, and driving patterns.",
  },
  {
    icon: CloudRain,
    title: "Weather Disruption Cover",
    desc: "Automatic alerts and instant payouts when bad weather impacts your earnings.",
  },
  {
    icon: Shield,
    title: "Fraud Protection",
    desc: "AI-powered trust scoring keeps your account and payouts secure at all times.",
  },
];

const stats = [
  { icon: Users, value: "50,000+", label: "Gig workers protected" },
  { icon: TrendingUp, value: "₹4.2Cr", label: "Claims paid out" },
  { icon: Clock, value: "< 60s", label: "Average claim time" },
  { icon: CheckCircle2, value: "99.1%", label: "Claim approval rate" },
];

const steps = [
  { num: "01", title: "Sign Up", desc: "Register in 2 minutes with your phone, vehicle, and city." },
  { num: "02", title: "Get Covered", desc: "Your AI policy activates instantly — ₹249/week." },
  { num: "03", title: "Claim Instantly", desc: "Detect a disruption, file a claim, receive your payout." },
];

export default function Home() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="bg-background text-foreground">
      <Helmet>
        <title>KlaimKavach | Insurance for Gig Workers</title>
        <meta name="description" content="AI-Powered Insurance for Gig Workers. Instant claims, real-time risk scoring, no paperwork." />
      </Helmet>

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Grid bg */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Radial glow */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[600px] rounded-full bg-white/[0.03] blur-3xl" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-white/50 font-medium tracking-widest uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            AI-Powered Insurance for Gig Workers
          </motion.div>

          <motion.h1
            {...fadeUp(0.08)}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.05] mb-6"
          >
            Coverage built for
            <br />
            <span className="text-white/40">the gig economy.</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.16)}
            className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
          >
            KlaimKavach is smart insurance for delivery riders, cab drivers, and freelancers. Instant claims, real-time risk scoring, no paperwork.
          </motion.p>

          <motion.div {...fadeUp(0.22)} className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href={isAuthenticated ? "/dashboard" : "/register"}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex cursor-pointer items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white text-black text-sm font-semibold transition-all hover:bg-white/90"
              >
                {isAuthenticated ? "Go to Dashboard" : "Get Protected — Free"}
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </Link>
            {!isAuthenticated && (
              <Link href="/dashboard">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex cursor-pointer items-center justify-center gap-2 px-6 py-3 rounded-lg border border-white/10 text-sm font-medium text-white/60 hover:text-white hover:border-white/20 transition-all"
                >
                  View Dashboard
                </motion.div>
              </Link>
            )}
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-white/20" />
          <span className="text-[10px] uppercase tracking-widest text-white/20">Scroll</span>
        </motion.div>
      </section>

      {/* ── Stats ── */}
      <section className="border-t border-[#1f1f1f] py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.45 }}
              className="flex flex-col items-center text-center p-6 rounded-xl border border-[#1f1f1f] bg-[#111]"
            >
              <s.icon className="w-5 h-5 text-white/30 mb-3" />
              <span className="text-2xl font-bold tracking-tight text-foreground tabular-nums">{s.value}</span>
              <span className="text-xs text-muted-foreground mt-1">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 max-w-lg"
          >
            <p className="text-xs uppercase tracking-widest text-white/30 font-medium mb-4">Features</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight">
              Everything you need,
              <br />
              <span className="text-white/40">nothing you don't.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.45 }}
                whileHover={{ y: -2 }}
                className="group p-6 rounded-xl border border-[#1f1f1f] bg-[#111] hover:border-[#2a2a2a] transition-all cursor-default"
              >
                <div className="w-10 h-10 rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] flex items-center justify-center mb-4 group-hover:border-white/10 transition-colors">
                  <f.icon className="w-5 h-5 text-white/50" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-24 px-6 border-t border-[#1f1f1f]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 max-w-lg"
          >
            <p className="text-xs uppercase tracking-widest text-white/30 font-medium mb-4">How it works</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight">
              From signup to payout
              <br />
              <span className="text-white/40">in three steps.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-6 rounded-xl border border-[#1f1f1f] bg-[#111]"
              >
                <span className="text-4xl font-bold text-white/[0.06] tabular-nums absolute top-5 right-6 select-none">
                  {s.num}
                </span>
                <div className="w-8 h-8 rounded-md bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                  <span className="text-xs font-bold text-white/40">{s.num}</span>
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl border border-[#222] bg-[#111] p-12 text-center overflow-hidden"
          >
            {/* Subtle glow */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full bg-white/[0.03] blur-3xl" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to get covered?</h2>
              <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
                Join 50,000+ gig workers across the country who trust KlaimKavach for their protection.
              </p>
              <Link href={isAuthenticated ? "/dashboard" : "/register"}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex cursor-pointer items-center justify-center gap-2 px-8 py-3 rounded-lg bg-white text-black text-sm font-semibold hover:bg-white/90 transition-all"
                >
                  {isAuthenticated ? "View Your Dashboard" : "Protect Your Hustle"}
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-[#1f1f1f] py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="/logo.jpg" alt="KlaimKavach" className="w-6 h-6 rounded-md object-contain" />
            <span className="font-semibold text-sm text-foreground">KlaimKavach</span>
          </div>
          <p className="text-xs text-white/20">© 2026 KlaimKavach. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-white/30">
            <span className="hover:text-white/50 cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-white/50 cursor-pointer transition-colors">Terms</span>
            <span className="hover:text-white/50 cursor-pointer transition-colors">Contact</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
