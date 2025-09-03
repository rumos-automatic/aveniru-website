import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'AveniRu株式会社 - 海外輸入をシンプルに',
  description: '海外から日本へ。輸入をもっとシンプルに、もっと早く。米欧調達網、スピード納期、小ロット対応で御社の輸入ビジネスをサポートします。',
  keywords: ['輸入代行', '海外調達', '米欧', 'B2B', '卸売', '法人仕入れ'],
  authors: [{ name: 'AveniRu株式会社' }],
  openGraph: {
    title: 'AveniRu株式会社 - 海外輸入をシンプルに',
    description: '海外から日本へ。輸入をもっとシンプルに、もっと早く。',
    type: 'website',
    locale: 'ja_JP',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}