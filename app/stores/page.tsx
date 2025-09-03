'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, Star, TrendingUp, Shield } from 'lucide-react';

export default function StoresPage() {
  const stores = [
    {
      name: 'ChaRudonnay STORE',
      categories: 'アパレル・シューズ',
      description: 'セレクトしたアパレル・シューズを提供。サイズ展開豊富で、幅広いニーズに対応。',
      features: ['豊富なサイズ', 'シーズン対応', '返品交換対応'],
      url: 'https://www.amazon.co.jp/sp?is-secure=true&&ie=UTF8&seller=A3MLPUNUEKTO0I&isAmazonFulfilled=0&asin=B07HGHBMSS&ref_=olp_merch_name_1',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'LumieRu STORE',
      categories: 'ファッション小物・アクセサリー',
      description: 'トレンドを押さえたファッション小物を展開。お手頃価格で高品質なアイテムをお届けします。',
      features: ['最新トレンド', 'リーズナブル', 'ギフト対応'],
      url: 'https://www.amazon.co.jp/sp?is-secure=true&&ie=UTF8&seller=ANFCQ9BFFRJOL&isAmazonFulfilled=0&asin=B09QSSXDHP&ref_=olp_merch_name_1',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Lemon ストア',
      categories: '欧米輸入雑貨・日用品・ガジェット',
      description: '生活を豊かにする輸入雑貨を幅広く取り扱い。実用性とデザイン性を兼ね備えた商品をセレクト。',
      features: ['豊富な品揃え', '迅速な配送', '安心の品質保証'],
      url: 'https://www.amazon.co.jp/sp?is-secure=true&&ie=UTF8&seller=A219DXTDUNHNA1&isAmazonFulfilled=0&asin=B07TYQV1HS&ref_=olp_merch_name_1',
      color: 'from-yellow-400 to-yellow-500'
    }
  ];

  const operationStandards = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: '商品カタログ整合',
      description: 'すべての商品情報を正確に管理'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: '正規品・真贋確認',
      description: '厳格な品質チェック体制'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: '証憑保管',
      description: '取引記録の適切な管理'
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: '返品対応',
      description: '迅速な交換・返金フロー'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-8 text-gray-800"
        >
          Amazon店舗
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center text-gray-600 mb-12 text-lg"
        >
          当社運営のAmazon店舗です。正規品運用とカタログ整合を徹底しています。
        </motion.p>

        {/* 店舗一覧 */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stores.map((store, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
            >
              <div className={`h-3 bg-gradient-to-r ${store.color}`} />
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold mb-2 text-gray-800">{store.name}</h2>
                  <p className="text-sm text-gray-500 mb-4">{store.categories}</p>
                  <p className="text-gray-600 mb-4">{store.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {store.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <a
                  href={store.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-2 bg-white border-2 border-primary-600 text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors mt-auto"
                >
                  ストアを見る
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 運営基準 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-lg p-8"
        >
          <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800">
            店舗運営基準
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {operationStandards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 text-primary-600 rounded-full mb-3">
                  {standard.icon}
                </div>
                <h3 className="font-semibold mb-2 text-gray-800">{standard.title}</h3>
                <p className="text-sm text-gray-600">{standard.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 実績 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h2 className="text-2xl font-semibold mb-8 text-gray-800">運営実績</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="text-3xl font-bold text-primary-600 mb-2">3</div>
              <div className="text-sm text-gray-600">運営店舗数</div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="text-3xl font-bold text-primary-600 mb-2">5,000+</div>
              <div className="text-sm text-gray-600">取扱商品数</div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-sm text-gray-600">顧客満足度</div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="text-3xl font-bold text-primary-600 mb-2">24h</div>
              <div className="text-sm text-gray-600">発送対応</div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary-50 rounded-lg p-8 text-center mt-12"
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            卸売・OEMのご相談も承ります
          </h2>
          <p className="text-gray-600 mb-6">
            店舗運営で培ったノウハウを活かし、貴社のビジネスをサポートします
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            ビジネス相談をする
          </a>
        </motion.div>
      </div>
    </div>
  );
}