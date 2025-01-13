"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800 border-b pb-4">
          追蹤測試首頁
        </h1>
        <div className="grid gap-6">
          <Link
            href="/page1"
            className="p-6 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition-all flex items-center justify-between group"
          >
            <span className="text-xl">前往頁面 1</span>
            <span className="group-hover:translate-x-2 transition-transform">
              →
            </span>
          </Link>
          <Link
            href="/page2"
            className="p-6 bg-purple-500 text-white rounded-lg shadow-lg hover:bg-purple-600 transition-all flex items-center justify-between group"
          >
            <span className="text-xl">前往頁面 2</span>
            <span className="group-hover:translate-x-2 transition-transform">
              →
            </span>
          </Link>
          <Link
            href="/page3"
            className="p-6 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition-all flex items-center justify-between group"
          >
            <span className="text-xl">前往頁面 3 (巢狀路由)</span>
            <span className="group-hover:translate-x-2 transition-transform">
              →
            </span>
          </Link>
          <Link
            href="/page3/subpage"
            className="p-6 bg-teal-500 text-white rounded-lg shadow-lg hover:bg-teal-600 transition-all flex items-center justify-between group"
          >
            <span className="text-xl">直接前往頁面 3 的子頁面</span>
            <span className="group-hover:translate-x-2 transition-transform">
              →
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
