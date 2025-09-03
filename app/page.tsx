'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Clock, Package, CheckCircle, TrendingUp, Shield, Sparkles, Zap, Users, ChevronRight } from 'lucide-react';

export default function Home() {
  const strengths = [
    {
      icon: <Globe className="w-10 h-10" />,
      title: '米欧調達網 × 正規流通',
      description: '信頼できる調達ルートで正規品のみを取り扱い',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: 'スピード納期',
      description: '標準7-11営業日、速達なら4-7営業日で配送',
      color: 'from-purple-400 to-pink-400'
    },
    {
      icon: <Package className="w-10 h-10" />,
      title: '小ロットからOK',
      description: '最小ロットから柔軟に対応、初回取引も歓迎',
      color: 'from-orange-400 to-red-400'
    }
  ];

  const processSteps = [
    { step: '調達', icon: '🛒' },
    { step: '集荷', icon: '📦' },
    { step: '国際輸送', icon: '✈️' },
    { step: '通関', icon: '🛃' },
    { step: '国内配送', icon: '🚚' },
    { step: '検品・梱包', icon: '📋' },
    { step: '出荷', icon: '📤' }
  ];

  const trustPoints = [
    'カタログ整合性の確認',
    '真贋確認プロセス',
    '証憑の適切な保管',
    '返品是正フロー完備',
    '知的財産権の遵守'
  ];

  const stats = [
    { value: '98%', label: '顧客満足度' },
    { value: '7日', label: '平均納期' },
    { value: '5000+', label: '取扱商品数' },
    { value: '24h', label: 'サポート対応' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Gradient */}
      <section className="relative overflow-hidden">
        {/* 背景グラデーション */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50" />
        
        {/* 装飾的な図形 */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full filter blur-3xl opacity-30 animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-200 rounded-full filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="relative z-10 py-24 px-4">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 text-lg font-bold mb-6 shadow-lg">
                <Sparkles className="w-5 h-5 mr-2" />
                🚢 国際輸送のプロフェッショナル
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-primary-600 via-blue-600 to-secondary-600 bg-clip-text text-transparent">
                海外から日本へ
              </span>
              <br />
              <span className="text-gray-800">輸入をもっと</span>
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">シンプル</span>
              <span className="text-gray-800">に</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-600 leading-relaxed"
            >
              米欧調達・最適ルート選定・通関まで一気通貫。
              <br />小ロットも歓迎。まずは概算見積をご確認ください。
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                href="/simulator"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 border-2 border-primary-200 rounded-xl font-bold text-lg hover:from-primary-200 hover:to-secondary-200 transform transition-all duration-300 hover:scale-105 shadow-xl hover-float"
              >
                <Zap className="mr-2 w-5 h-5" />
                料金シミュレーター
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-md border-2 border-primary-200 text-primary-700 rounded-xl font-bold text-lg hover:bg-primary-50 transform transition-all duration-300 hover:scale-105 shadow-xl hover-float"
              >
                <Users className="mr-2 w-5 h-5" />
                お問い合わせ
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>

            {/* Hero Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-16 relative"
            >
              <div className="relative mx-auto max-w-5xl">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary-100 to-secondary-100">
                  <Image
                    src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&h=675"
                    alt="国際物流のイメージ"
                    width={1200}
                    height={675}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* 装飾バッジ */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-400 to-pink-400 text-white px-6 py-3 rounded-full font-bold shadow-lg animate-float">
                  最短4日配送
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 実績数値 */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3つの強み */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                AveniRuの強み
              </span>
            </h2>
            <p className="text-xl text-gray-600">なぜ多くの企業に選ばれるのか</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {strengths.map((strength, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                  {/* 背景グラデーション */}
                  <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${strength.color} opacity-10 rounded-full filter blur-3xl`} />
                  
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${strength.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {strength.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{strength.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{strength.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 輸入プロセス */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                シンプルな7ステップ
              </span>
            </h2>
            <p className="text-xl text-gray-600">複雑な輸入プロセスを、私たちが代行します</p>
          </motion.div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="relative">
                    <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-6 mb-3 group-hover:from-primary-100 group-hover:to-secondary-100 transition-all duration-300 hover:-translate-y-1">
                      <div className="text-4xl mb-2">{step.icon}</div>
                      <div className="text-2xl font-bold text-primary-600 mb-2">{index + 1}</div>
                    </div>
                    <span className="font-medium text-gray-700">{step.step}</span>
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-14 -right-4 text-gray-300">
                        <ChevronRight className="w-8 h-8" />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link 
                href="/services" 
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-bold text-lg group"
              >
                詳しいサービス内容を見る
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 信頼・運営基準 */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                信頼性と運営基準
              </span>
            </h2>
            <p className="text-xl text-gray-600">安心してお取引いただくための品質管理体制</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {trustPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center">
                  <div className="bg-gradient-to-br from-green-400 to-emerald-500 rounded-full p-2 mr-4">
                    <CheckCircle className="text-white w-6 h-6" />
                  </div>
                  <span className="text-gray-700 font-medium">{point}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 画像プレースホルダー */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300"
                  alt="品質管理"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1565008576549-57569a49371d?w=400&h=300"
                  alt="物流センター"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&h=300"
                  alt="カスタマーサポート"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* 背景グラデーション */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-purple-600 to-secondary-600 animate-gradient" />
        
        {/* 装飾パターン */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 border-8 border-white rounded-full" />
          <div className="absolute bottom-10 right-10 w-96 h-96 border-8 border-white rounded-full" />
        </div>
        
        <div className="relative z-10 container mx-auto text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            まずは料金シミュレーションから
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-95"
          >
            商品価格、重量、寸法を入力するだけで、
            <br />着地原価と推奨販売価格を即座に算出します。
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link 
              href="/simulator"
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 border-2 border-primary-200 rounded-2xl font-bold text-xl hover:from-primary-200 hover:to-secondary-200 transform transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              <Zap className="mr-3 w-6 h-6" />
              無料で試算する
              <ArrowRight className="ml-3 w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                よくあるご質問
              </span>
            </h2>
            <p className="text-xl text-gray-600">お客様からよくいただくご質問にお答えします</p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: '納期の目安は？',
                a: '速達4-7営業日／標準7-11営業日（集荷〜日本着）。通関・天候で変動します。'
              },
              {
                q: '送料はどうやって決まる？',
                a: '課金重量（実重量と容積重量の大きい方）×ルート係数＋基本料＋燃油です。'
              },
              {
                q: '関税・消費税は？',
                a: 'HSコードに基づきCIF（商品代＋国際送料＋保険）に対して課税。輸入消費税は（CIF＋関税）×10%。'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="font-bold text-xl mb-3 text-gray-800 flex items-center">
                  <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">
                    Q
                  </div>
                  {faq.q}
                </h3>
                <p className="text-gray-600 pl-11">{faq.a}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link 
              href="/faq" 
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-bold text-lg group"
            >
              すべてのFAQを見る
              <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}