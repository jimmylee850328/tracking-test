"use client";

import Link from "next/link";

export default function SubPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-50 to-teal-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-teal-800 border-b border-teal-200 pb-4">
          頁面 3 的子頁面
        </h1>
        <div className="grid gap-6">
          <Link
            href="/"
            className="p-4 bg-white text-teal-600 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2 border border-teal-200"
          >
            <span>←</span>
            <span>返回首頁</span>
          </Link>
          <Link
            href="/page3"
            className="p-4 bg-teal-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2"
          >
            <span>←</span>
            <span>返回頁面 3</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
