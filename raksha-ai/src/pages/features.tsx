import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Zap, Shield, CloudRain, BarChart2, Clock, Lock,
  Smartphone, TrendingUp, Bell, FileCheck, ArrowRight, CheckCircle2,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useAuth } from "@/hooks/use-auth";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const, delay },
});

const mainFeatures = [
  {
    icon: Zap,
    title: "Instant Claim Processing",
    desc: "Our AI reviews and approves claims in under 60 seconds. No forms, no agents, no waiting rooms. Just upload proof and get paid.",
    points: ["Automated approval engine", "Real-time status tracking", "Direct bank transfer in 24hrs"],
  },
  {
    icon: BarChart2,
    title: "AI Risk Scoring",
    desc: "A dynamic risk score computed in real time using your ride history, weather data, traffic patterns, and driving behavior.",
    points: ["Updates every 15 minutes", "Lower risk = lower premium", "Transparent scoring breakdown"],
  },
  {
    icon: CloudRain,
    title: "Weather Disruption Cover",
    desc: "When severe weather hits your zone, you get notified automatically and your disruption claim is pre-filled and ready to submit.",
    points: ["IMD weather data integration", "Auto-detection of eligible events", "Zero manual effort required"],
  },
  {
    icon: Shield,
    title: "Fraud Detection Engine",
    desc: "Every claim is cross-referenced with your location history, disruption logs, and behavioral patterns to ensure fair payouts for everyone.",
    points: ["Trust score per account", "Anomaly detection on claims", "Appeals process available"],
  },
];

const secondaryFeatures = [
  { icon: Clock, title: "24/7 Coverage", desc: "Active protection every hour you're on the road — weekends and holidays included." },
  { icon: Bell, title: "Smart Alerts", desc: "Get notified before disruptions hit so you can make better decisions about your shift." },
  { icon: Smartphone, title: "Mobile-First", desc: "Built for your phone. File a claim while waiting for the rain to stop." },
  { icon: Lock, title: "Bank-Grade Security", desc: "Your data is encrypted in transit and at rest. We never sell your information." },
  { icon: FileCheck, title: "No Paperwork", desc: "Everything is digital. Your policy, claims, and history are always one tap away." },
  { icon: TrendingUp, title: "Earnings Protection", desc: "Coverage scales with your weekly earnings — pay less when you earn less." },
];

export default function Features() {
  const { isAuthenticated } = useAuth();
  return (
    <div className="bg-background text-foreground">
      <Helmet>
        <title>Features | KlaimKavach</title>
        <meta name="description" content="Explore KlaimKavach's features: instant claims, AI risk scoring, and zero paperwork." />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <motion.p {...fadeUp(0)} className="text-xs uppercase tracking-widest text-white/30 font-medium mb-4">
            Features
          </motion.p>
          <motion.h1 {...fadeUp(0.06)} className="text-5xl sm:text-6xl font-bold tracking-tight text-foreground leading-[1.05] mb-5">
            Everything you need
            <br /><span className="text-white/30">to stay protected.</span>
          </motion.h1>
          <motion.p {...fadeUp(0.12)} className="text-base text-muted-foreground leading-relaxed">
            KlaimKavach combines real-time data, machine learning, and instant payments to give gig workers the protection they actually deserve.
          </motion.p>
        </div>
      </section>

      {/* Main features */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto space-y-5">
          {mainFeatures.map((f, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.06)}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 rounded-2xl border border-[#1f1f1f] bg-[#111] hover:border-[#2a2a2a] transition-all"
            >
              <div>
                <div className="w-10 h-10 rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] flex items-center justify-center mb-5">
                  <f.icon className="w-5 h-5 text-white/50" />
                </div>
                <h3 className="text-lg font-bold tracking-tight text-foreground mb-3">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
              <div className="flex flex-col justify-center space-y-3">
                {f.points.map((pt, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="text-sm text-white/60">{pt}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Secondary features */}
      <section className="py-24 px-6 border-t border-[#1f1f1f]">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp()} className="mb-12 text-center">
            <p className="text-xs uppercase tracking-widest text-white/30 font-medium mb-3">And more</p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Built for the real world.</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {secondaryFeatures.map((f, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.05)}
                className="p-6 rounded-xl border border-[#1f1f1f] bg-[#111] hover:border-[#2a2a2a] transition-all"
              >
                <f.icon className="w-5 h-5 text-white/30 mb-3" />
                <h4 className="text-sm font-semibold text-foreground mb-1.5">{f.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <motion.div {...fadeUp()} className="max-w-5xl mx-auto text-center p-12 rounded-2xl border border-[#222] bg-[#111]">
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-3">Ready to get protected?</h2>
          <p className="text-sm text-muted-foreground mb-8">Your first week is free. No credit card required.</p>
          <Link href={isAuthenticated ? "/dashboard" : "/register"}>
            <motion.div
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              className="inline-flex cursor-pointer items-center justify-center gap-2 px-8 py-3 rounded-lg bg-white text-black text-sm font-semibold hover:bg-white/90 transition-all"
            >
              {isAuthenticated ? "View Dashboard" : "Get Started Free"} <ArrowRight className="w-4 h-4" />
            </motion.div>
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
