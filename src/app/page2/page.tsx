"use client";

import Link from "next/link";

export default function Page2() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">頁面 2</h1>
      <div className="flex flex-col gap-4">
        <Link href="/" className="text-blue-500 hover:underline">
          返回首頁
        </Link>
        <Link href="/page1" className="text-blue-500 hover:underline">
          前往頁面 1
        </Link>
      </div>
    </main>
  );
}
