import Link from 'next/link';
import { ArrowRight, Calculator } from 'lucide-react';

const CTA = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 to-accent-600">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            輸入ビジネスを始めませんか？
          </h2>
          
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            無料相談で御社のニーズをお聞かせください。<br />
            最適な輸入戦略をご提案いたします。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:bg-navy-50 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              無料相談を予約する
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <Link 
              href="/simulator" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary-700 transition-all duration-200"
            >
              料金を計算してみる
              <Calculator className="ml-2 h-5 w-5" />
            </Link>
          </div>

          {/* 特徴の再強調 */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">無料相談</div>
              <div className="text-sm opacity-80">お気軽にお問い合わせください</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">透明な料金</div>
              <div className="text-sm opacity-80">事前に詳細お見積もり</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">スピード対応</div>
              <div className="text-sm opacity-80">最短7日でお届け</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;