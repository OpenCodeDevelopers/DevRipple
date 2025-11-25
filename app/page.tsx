import React from "react";
import {
  Code,
  Users,
  ThumbsUp,
  ChevronRight,
  Zap,
  GraduationCap,
  MessageSquare,
} from "lucide-react";
import { CallToActionButton } from "@/components/cta";
import { Feature } from "@/components/Features";

const customCss = `
  /* Load Inter font (using a web-safe sans-serif fallback) */
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
`;

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <style dangerouslySetInnerHTML={{ __html: customCss }} />
      <main className="mx-auto max-w-5xl px-4 py-12 md:py-24">
        {/* === 1. Hero Section === */}
        <section className="text-center mb-20 md:mb-32">
          <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium mb-5 bg-muted text-muted-foreground border-primary/20">
            <Zap className="w-4 h-4 mr-2 text-primary" />
            Collaboration is the fastest path to mastery.
          </div>
          <h1 className="text-pretty text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight mb-6">
            Peer-to-Peer <span className="text-primary">Coding Mastery</span>
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl">
            OpenCodeDev is the platform for serious coders to collaborate, share
            knowledge, and{" "}
            <span className="font-semibold font-sans italic">
              level up through daily problem-solving
            </span>{" "}
            and rigorous, inline code reviews.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <CallToActionButton href="/dashboard">
              Start Collaborating <ChevronRight className="w-5 h-5 ml-2" />
            </CallToActionButton>
            <CallToActionButton href="#features" variant="secondary">
              Explore Features
            </CallToActionButton>
          </div>
        </section>

        {/* --- 2. Core Features Grid Section --- */}
        <section id="features" className="mb-20 md:mb-32">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-tight">
            How OpenCodeDev Empowers You
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Feature
              Icon={Users}
              title="Group Collaboration"
              desc="Structured group feeds with 'Today’s Question' keep everyone focused on a single, rotating challenge for comparative learning."
            />
            <Feature
              Icon={GraduationCap}
              title="Rich Submissions"
              desc="Go beyond the code. Submit solutions with a built-in editor, detailed approach, and LaTeX for T.C./S.C. analysis."
            />
            <Feature
              Icon={ThumbsUp}
              title="Inline Code Reviews"
              desc="Receive and give high-quality feedback. Comment directly on lines of code with Markdown/LaTeX and upvote the most helpful critiques."
            />
          </div>
        </section>

        {/* --- 3. Workflow Highlight Section --- */}
        <section
          id="workflow"
          className="mb-20 md:mb-32 flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-tight">
            Our Simple, Effective Workflow
          </h2>
          <div className="w-full grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Step 1 */}
            <div className="text-center p-6 border-2 border-primary/10 rounded-xl bg-muted/30 shadow-sm">
              <div className="text-3xl font-bold text-primary mb-2">1.</div>
              <Users className="w-8 h-8 mx-auto mb-3 text-primary/80" />
              <h4 className="font-semibold mb-1">Join a Group</h4>
              <p className="text-sm text-muted-foreground">
                Find or create a group for your favorite language or topic.
              </p>
            </div>
            {/* Step 2 */}
            <div className="text-center p-6 border-2 border-primary/10 rounded-xl bg-muted/30 shadow-sm">
              <div className="text-3xl font-bold text-primary mb-2">2.</div>
              <Code className="w-8 h-8 mx-auto mb-3 text-primary/80" />
              <h4 className="font-semibold mb-1">Solve the Daily Problem</h4>
              <p className="text-sm text-muted-foreground">
                Tackle the 'Today’s Question' and submit your detailed solution.
              </p>
            </div>
            {/* Step 3 */}
            <div className="text-center p-6 border-2 border-primary/10 rounded-xl bg-muted/30 shadow-sm">
              <div className="text-3xl font-bold text-primary mb-2">3.</div>
              <MessageSquare className="w-8 h-8 mx-auto mb-3 text-primary/80" />
              <h4 className="font-semibold mb-1">Review Peers' Code</h4>
              <p className="text-sm text-muted-foreground">
                Leave specific, constructive feedback directly on lines of code.
              </p>
            </div>
            {/* Step 4 */}
            <div className="text-center p-6 border-2 border-primary/10 rounded-xl bg-muted/30 shadow-sm">
              <div className="text-3xl font-bold text-primary mb-2">4.</div>
              <Zap className="w-8 h-8 mx-auto mb-3 text-primary/80" />
              <h4 className="font-semibold mb-1">Grow Exponentially</h4>
              <p className="text-sm text-muted-foreground">
                Absorb diverse solutions and critiques to accelerate your
                learning.
              </p>
            </div>
          </div>
        </section>

        {/* --- 4. Final CTA Section --- */}
        <section
          id="cta"
          className="text-center p-12 md:p-16 bg-card border border-primary/10 rounded-2xl shadow-2xl shadow-primary/10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Join the Ripple?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8">
            Stop coding in isolation. Start growing with a community that values
            quality, critique, and continuous improvement.
          </p>
          <CallToActionButton href="/dashboard">
            Get Started Today <ChevronRight className="w-5 h-5 ml-2" />
          </CallToActionButton>
        </section>
      </main>

      {/* --- Footer --- */}
      <footer className="mt-24 py-10 border-t border-border/40 bg-background text-foreground">
        <div className="mx-auto max-w-5xl px-4 text-center text-sm text-muted-foreground">
          <p className="mb-2">
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-semibold text-primary">DevRipple</span>. All
            rights reserved.
          </p>
          <div className="space-x-2 text-xs text-muted-foreground">
            <span>Created By</span>
            <span className="text-blue-600 font-medium">
              💖 Priyanshu Singh
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
