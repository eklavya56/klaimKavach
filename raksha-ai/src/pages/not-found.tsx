import { Link } from "wouter";
import { ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center">
      <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8">
        <ShieldAlert className="w-12 h-12 text-white/40" />
      </div>
      <h1 className="text-4xl font-display font-bold text-white mb-4">Route Not Found</h1>
      <p className="text-muted-foreground mb-8 max-w-md mx-auto">
        The coverage area you are looking for does not exist in our system. Let's get you back on track.
      </p>
      <Link href="/dashboard" className="inline-block">
        <Button className="h-12 px-8">Return to Dashboard</Button>
      </Link>
    </div>
  );
}
