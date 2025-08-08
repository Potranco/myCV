import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background text-text font-sans snap-y snap-mandatory h-screen w-screen overflow-y-scroll scroll-smooth">
      <main className="max-w-4xl mx-auto p-6 flex flex-col justify-center items-center">
        {/* Main content area */}
        {children}
      </main>
    </div>
  )
}