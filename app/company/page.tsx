'use client';

import { motion } from 'framer-motion';
import { Building2, Calendar, CreditCard, FileText, Mail } from 'lucide-react';
import Image from 'next/image';

export default function CompanyPage() {
  const companyInfo = [
    {
      icon: <Building2 className="w-5 h-5" />,
      label: '社名',
      value: '株式会社 AveniRu'
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      label: '設立',
      value: '2025年1月'
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      label: '資本金',
      value: '100万円'
    },
    {
      icon: <FileText className="w-5 h-5" />,
      label: '事業内容',
      value: '欧米輸入品の調達・卸売・小売（Amazon等）／輸入代行／物流・価格最適化／AIを活用したシステム開発'
    },
  ];

  const businessDetails = [
    '米国・欧州からの商品調達',
    '輸入代行サービス',
    'Amazon店舗運営（ChaRudonnay STORE、LumieRu STORE、Lemon ストア）',
    '物流最適化コンサルティング',
    '価格戦略・在庫管理システムの提供',
    'AIを活用したシステム開発',
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
            
            {/* 所在地と代表者情報を画像として表示 */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <Image 
                src="/images/company-info.svg" 
                alt="会社所在地・代表者情報" 
                width={400} 
                height={200} 
                className="max-w-full h-auto"
              />
            </div>

            <dl className="space-y-4">
              {companyInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <dt className="flex items-center text-primary-600 mr-4 w-24 flex-shrink-0">
                    {item.icon}
                    <span className="ml-2 text-sm font-medium text-gray-700">{item.label}</span>
                  </dt>
                  <dd className="text-gray-600">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
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