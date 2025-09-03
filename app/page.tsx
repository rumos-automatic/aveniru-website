'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Clock, Package, CheckCircle, TrendingUp, Shield } from 'lucide-react';

export default function Home() {
  const strengths = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: '米欧調達網 × 正規流通',
      description: '信頼できる調達ルートで正規品のみを取り扱い'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'スピード納期',
      description: '標準7-11営業日、速達なら4-7営業日で配送'
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: '小ロットからOK',
      description: '最小ロットから柔軟に対応、初回取引も歓迎'
    }
  ];

  const processSteps = [
    '調達',
    '集荷',
    '国際輸送',
    '通関',
    '国内配送',
    '検品・梱包',
    '出荷'
  ];

  const trustPoints = [
    'カタログ整合性の確認',
    '真贋確認プロセス',
    '証憑の適切な保管',
    '返品是正フロー完備',
    '知的財産権の遵守'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            海外から日本へ。<br />
            輸入をもっとシンプルに、もっと早く。
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            米欧調達・最適ルート選定・通関まで一気通貫。<br />
            小ロットも歓迎。まずは概算見積をご確認ください。
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              href="/simulator"
              className="inline-flex items-center px-6 py-3 bg-white text-primary-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              料金シミュレーター
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary-700 transition-colors"
            >
              お問い合わせ
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 3つの強み */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            AveniRuの3つの強み
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {strengths.map((strength, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="text-primary-600 mb-4">{strength.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{strength.title}</h3>
                <p className="text-gray-600">{strength.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 輸入プロセス */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            輸入プロセス（7ステップ）
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center"
              >
                <div className="bg-primary-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <span className="ml-3 font-medium text-gray-700">{step}</span>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="ml-3 text-gray-400" />
                )}
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/services" className="text-primary-600 hover:underline font-medium">
              詳しい流れを見る →
            </Link>
          </div>
        </div>
      </section>

      {/* 信頼・運営基準 */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            信頼性と運営基準
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {trustPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center"
              >
                <CheckCircle className="text-green-500 w-6 h-6 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            まずは料金シミュレーションから
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            商品価格、重量、寸法を入力するだけで、<br />
            着地原価と推奨販売価格を即座に算出します。
          </p>
          <Link 
            href="/simulator"
            className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors text-lg"
          >
            無料で試算する
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            よくあるご質問
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-lg mb-2 text-gray-800">納期の目安は？</h3>
              <p className="text-gray-600">
                速達4-7営業日／標準7-11営業日（集荷〜日本着）。通関・天候で変動します。
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-lg mb-2 text-gray-800">送料はどうやって決まる？</h3>
              <p className="text-gray-600">
                課金重量（実重量と容積重量の大きい方）×ルート係数＋基本料＋燃油です。
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-lg mb-2 text-gray-800">関税・消費税は？</h3>
              <p className="text-gray-600">
                HSコードに基づきCIF（商品代＋国際送料＋保険）に対して課税。輸入消費税は（CIF＋関税）×10%。
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/faq" className="text-primary-600 hover:underline font-medium">
              すべてのFAQを見る →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}