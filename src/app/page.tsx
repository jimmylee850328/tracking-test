"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">追蹤測試首頁</h1>
      <div className="flex flex-col gap-4">
        <Link href="/page1" className="text-blue-500 hover:underline">
          前往頁面 1
        </Link>
        <Link href="/page2" className="text-blue-500 hover:underline">
          前往頁面 2
        </Link>
        <Link href="/page3" className="text-blue-500 hover:underline">
          前往頁面 3 (巢狀路由)
        </Link>
        <Link href="/page3/subpage" className="text-blue-500 hover:underline">
          直接前往頁面 3 的子頁面
        </Link>
      </div>
    </main>
  );
}
