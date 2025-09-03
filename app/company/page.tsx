'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Building2, MapPin, User, Calendar, CreditCard, FileText, Phone, Mail } from 'lucide-react';

export default function CompanyPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Canvas APIで代表者名を画像として生成
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // 高解像度対応
        const scale = 2;
        canvas.width = 150 * scale;
        canvas.height = 30 * scale;
        canvas.style.width = '150px';
        canvas.style.height = '30px';
        
        ctx.scale(scale, scale);
        
        // 背景を透明に
        ctx.clearRect(0, 0, 150, 30);
        
        // テキスト設定
        ctx.font = '16px sans-serif';
        ctx.fillStyle = '#374151'; // text-gray-700
        ctx.textBaseline = 'middle';
        ctx.fillText('大岩 涼太', 0, 15);
      }
    }
  }, []);

  const companyInfo = [
    {
      icon: <Building2 className="w-5 h-5" />,
      label: '社名',
      value: '株式会社 AveniRu'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: '所在地',
      value: '〒XXX-XXXX 東京都〇〇区〇〇'
    },
    {
      icon: <User className="w-5 h-5" />,
      label: '代表者',
      value: 'canvas' // 特別処理
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      label: '設立',
      value: '202X年XX月'
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      label: '資本金',
      value: 'XXX万円'
    },
    {
      icon: <FileText className="w-5 h-5" />,
      label: '事業内容',
      value: '欧米輸入品の調達・卸売・小売（Amazon等）／輸入代行／物流・価格最適化'
    },
  ];

  const businessDetails = [
    '米国・欧州からの商品調達',
    '輸入代行サービス',
    'Amazon店舗運営（Dolphin STORE、LumieRu STORE、ChaRudonnay STORE）',
    '物流最適化コンサルティング',
    '価格戦略・在庫管理システムの提供',
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-8 text-gray-800"
        >
          会社情報
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center text-gray-600 mb-12 text-lg max-w-3xl mx-auto"
        >
          株式会社 AveniRu は、欧米調達と適正流通を軸に、<br />
          国内販売の効率化を支援する輸入事業会社です。
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* 会社概要 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">会社概要</h2>
            <dl className="space-y-4">
              {companyInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <dt className="flex items-center text-primary-600 mr-4 w-24 flex-shrink-0">
                    {item.icon}
                    <span className="ml-2 text-sm font-medium text-gray-700">{item.label}</span>
                  </dt>
                  <dd className="text-gray-600">
                    {item.value === 'canvas' ? (
                      <canvas 
                        ref={canvasRef}
                        className="inline-block"
                        aria-label="代表者名"
                      />
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 pt-6 border-t">
              <h3 className="font-semibold mb-3 text-gray-800">主要取引</h3>
              <ul className="space-y-2 text-gray-600">
                <li>・主要取引先国: 米国・欧州</li>
                <li>・主要取引銀行: XXX銀行（XX支店）</li>
                <li>・適格請求書発行事業者登録番号: T-XXXXXXXXXXXX</li>
              </ul>
            </div>
          </motion.div>

          {/* 事業詳細 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">事業詳細</h2>
            <ul className="space-y-3">
              {businessDetails.map((detail, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary-600 mr-2">▶</span>
                  <span className="text-gray-600">{detail}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-6 border-t">
              <h3 className="font-semibold mb-3 text-gray-800">運営基準</h3>
              <ul className="space-y-2 text-gray-600">
                <li>・商品カタログ整合性の確認</li>
                <li>・正規品・真贋確認プロセス</li>
                <li>・証憑の適切な保管</li>
                <li>・返品是正フロー（一次：交換・返金、二次：再発防止）</li>
                <li>・知的財産権・商標の遵守</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* ビジョン */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-8 mt-12"
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
            私たちのビジョン
          </h2>
          <p className="text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
            グローバルな商品調達と国内流通の架け橋となり、<br />
            お客様のビジネス成長を物流最適化とテクノロジーで支援します。<br />
            「海外から日本へ、もっとシンプルに、もっと早く」を実現し、<br />
            新たな価値を創造してまいります。
          </p>
        </motion.div>

        {/* お問い合わせCTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            ビジネスパートナーをお探しの企業様、お気軽にご相談ください
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              お問い合わせ
            </a>
            <a
              href="/simulator"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-600 text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              料金シミュレーター
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}