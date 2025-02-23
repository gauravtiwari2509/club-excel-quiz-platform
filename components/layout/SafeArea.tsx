import React from "react";

export default function SafeArea({ children }: { children: React.ReactNode }) {
  return (
    <main className="overflow-x-hidden w-[100dvw] h-[100dvh] scroll-smooth">
      <div className="mx-auto max-w-[1440px] overflow-x-hidden scroll-smooth">
        {children}
      </div>
    </main>
  );
}
