"use client";

export function JourneySection() {
  return (
    <section id="journey" className="pb-12 pt-4">
      <h2 className="text-center text-3xl font-bold tracking-tight mb-8">Journey</h2>
  <div className="mx-auto max-w-2xl rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-[#18181b]/90 backdrop-blur-md shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_8px_30px_-8px_rgba(0,0,0,0.35)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_8px_32px_-12px_rgba(0,0,0,0.7)] overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center gap-2 px-4 h-10 border-b border-black/10 dark:border-white/10">
          <span className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f56] shadow-[0_0_4px_#ff5f56]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e] shadow-[0_0_4px_#ffbd2e]" />
            <span className="h-3 w-3 rounded-full bg-[#27c93f] shadow-[0_0_4px_#27c93f]" />
          </span>
        </div>
        {/* Content */}
        <div className="p-6 font-mono text-sm leading-relaxed space-y-4">
          <p className="text-foreground/90"><span className="text-[#8e51ff] select-none">&gt;</span> life journey --start</p>
          <p className="whitespace-pre-line text-amber-600 dark:text-yellow-400">
            ⚠ 2019-2024: Wasted. Trapped in self-doubt, lies, fear, and delays.
          </p>
          <p className="font-semibold text-emerald-600 dark:text-emerald-400">
            ✔ 2025: Awakened. Working for my dream with everything I have.
          </p>
          <p className="text-muted-foreground">Success! Restart complete. No turning back this time.</p>
        </div>
      </div>
    </section>
  );
}
