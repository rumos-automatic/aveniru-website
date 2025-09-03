import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "株式会社 AveniRu - 海外輸入代行・物流最適化",
  description: "米欧調達から通関・国内配送まで一気通貫。小ロットからの輸入代行サービス。最適ルート選定で納期短縮とコスト削減を実現。",
  keywords: "輸入代行,海外仕入れ,国際送料,関税計算,物流最適化,Amazon輸入",
  openGraph: {
    title: "株式会社 AveniRu",
    description: "海外から日本へ。輸入をもっとシンプルに、もっと早く。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-gray-50 antialiased">
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
