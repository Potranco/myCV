import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background text-text font-sans">
      <main className="max-w-4xl mx-auto p-6">
        {/* Main content area */}
        {children}
      </main>
    </div>
  )
}