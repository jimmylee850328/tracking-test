"use client";

export default function RefreshPage2() {
  const handleNavigation = (path: string) => {
    window.location.href = path;
  };

  const randomNumber = Math.floor(Math.random() * 1000);

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-orange-800 border-b border-orange-200 pb-4">
          重新整理子頁面 2
        </h1>
        <div className="grid gap-6">
          <div className="p-4 bg-white rounded-lg shadow-md border border-orange-200">
            <p className="text-orange-800">
              每次載入的隨機數字：{randomNumber}
            </p>
            <p className="text-sm text-orange-600 mt-2">
              這個數字在每次訪問時都會改變，證明頁面被重新載入
            </p>
          </div>
          <button
            onClick={() => handleNavigation("/refresh")}
            className="p-4 bg-white text-orange-600 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2 border border-orange-200"
          >
            <span>←</span>
            <span>返回上一頁</span>
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
        </div>
      </div>
    </main>
  );
}
