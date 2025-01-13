import Link from "next/link";

// 強制頁面為動態頁面，每次訪問都會重新載入
export const dynamic = "force-dynamic";

export default function RefreshPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-orange-800 border-b border-orange-200 pb-4">
          重新整理測試頁面
        </h1>
        <div className="grid gap-6">
          <Link
            href="/"
            className="p-4 bg-white text-orange-600 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2 border border-orange-200"
          >
            <span>←</span>
            <span>返回首頁</span>
          </Link>
          <Link
            href="/refresh/page1"
            className="p-4 bg-orange-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-between group"
          >
            <span>前往子頁面 1</span>
            <span className="group-hover:translate-x-2 transition-transform">
              →
            </span>
          </Link>
          <Link
            href="/refresh/page2"
            className="p-4 bg-orange-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-between group"
          >
            <span>前往子頁面 2</span>
            <span className="group-hover:translate-x-2 transition-transform">
              →
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
