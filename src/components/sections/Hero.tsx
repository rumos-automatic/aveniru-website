import Link from 'next/link';
import { ArrowRight, Globe, Zap, Package } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-navy-50 via-white to-primary-50 section-padding">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          {/* メインメッセージ */}
          <h1 className="heading-1 mb-6">
            海外から日本へ。<br />
            輸入をもっと
            <span className="text-primary-600">シンプル</span>に、<br />
            もっと<span className="text-accent-600">早く</span>。
          </h1>
          
          <p className="text-large mb-8 max-w-2xl mx-auto">
            米欧調達網、スピード納期、小ロット対応で<br />
            御社の輸入ビジネスをトータルサポート
          </p>

          {/* CTA ボタン */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/contact" className="btn btn-primary btn-lg inline-flex items-center">
              無料相談を始める
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/simulator" className="btn btn-secondary btn-lg inline-flex items-center">
              料金を計算する
            </Link>
          </div>

          {/* 実績・特徴の数値 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">7日〜</div>
              <div className="text-sm text-navy-600">最短納期</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-600 mb-2">1個〜</div>
              <div className="text-sm text-navy-600">小ロット対応</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-navy-700 mb-2">米欧</div>
              <div className="text-sm text-navy-600">調達ネットワーク</div>
            </div>
          </div>
        </div>
      </div>

      {/* 背景装飾 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-100 rounded-full opacity-20"></div>
      </div>
    </section>
  );
};

export default Hero;