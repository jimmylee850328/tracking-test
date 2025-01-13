"use client";

import Link from "next/link";

export default function Page1() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-blue-800 border-b border-blue-200 pb-4">
          頁面 1
        </h1>
        <div className="grid gap-6">
          <Link
            href="/"
            className="p-4 bg-white text-blue-600 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2 border border-blue-200"
          >
            <span>←</span>
            <span>返回首頁</span>
          </Link>
          <Link
            href="/page2"
            className="p-4 bg-blue-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-between group"
          >
            <span>前往頁面 2</span>
            <span className="group-hover:translate-x-2 transition-transform">
              →
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
