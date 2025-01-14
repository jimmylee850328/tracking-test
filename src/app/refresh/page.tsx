"use client";

import { useRouter } from "next/navigation";

export default function RefreshPage() {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    // 使用 window.location.href 進行硬重整
    window.location.href = path;
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-orange-800 border-b border-orange-200 pb-4">
          重新整理測試頁面
        </h1>
        <div className="grid gap-6">
          <button
            onClick={() => handleNavigation("/")}
            className="p-4 bg-white text-orange-600 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2 border border-orange-200"
          >
            <span>←</span>
            <span>返回首頁</span>
          </button>
          <button
            onClick={() => handleNavigation("/refresh/page1")}
            className="p-4 bg-orange-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-between group"
          >
            <span>前往子頁面 1</span>
            <span className="group-hover:translate-x-2 transition-transform">
              →
            </span>
          </button>
          <button
            onClick={() => handleNavigation("/refresh/page2")}
            className="p-4 bg-orange-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-between group"
          >
            <span>前往子頁面 2</span>
            <span className="group-hover:translate-x-2 transition-transform">
              →
            </span>
          </button>
        </div>
      </div>
    </main>
  );
}
