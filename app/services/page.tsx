'use client';

import { motion } from 'framer-motion';
import { Package, Truck, Shield, CheckCircle, Globe, DollarSign } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-8 text-gray-800"
        >
          事業内容
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center text-gray-600 mb-12 text-lg"
        >
          調達から国内出荷まで、必要な工程をワンストップで。<br />
          費用は「着地原価」基準で透明化します。
        </motion.p>

        {/* 輸入代行 */}
        <section id="import" className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-xl p-8 border border-gray-100"
          >
            <div className="flex items-center mb-6">
              <Package className="w-8 h-8 text-primary-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">輸入代行</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-3 text-gray-700">提供範囲</h3>
                <p className="text-gray-600">
                  見積 → 調達 → 集荷 → 国際輸送 → 通関 → 国内配送 → 検品・梱包 → 出荷
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3 text-gray-700">納期目安</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    速達: 4-7営業日
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    標準: 7-11営業日（混雑・通関で変動）
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3 text-gray-700">コスト構成</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="font-medium mb-2">海外費用</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>・商品代金</li>
                      <li>・米国内送料</li>
                      <li>・国際送料（課金重量×係数）</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="font-medium mb-2">国内費用</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>・通関税費</li>
                      <li>・国内配送</li>
                      <li>・手数料</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3 text-gray-700">品質・規約</h3>
                <p className="text-gray-600">
                  正規品・カタログ整合遵守、返品は国内再販ルートで損失最小化
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 卸・法人仕入れ */}
        <section id="wholesale" className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-xl p-8 border border-gray-100"
          >
            <div className="flex items-center mb-6">
              <Truck className="w-8 h-8 text-primary-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">卸・法人仕入れ</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-3 text-gray-700">対象</h3>
                <p className="text-gray-600">小売・EC・B2B販路をお持ちの事業者様</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3 text-gray-700">受注形態</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    単発注文対応
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    定期便対応
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    SKU提案可能
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3 text-gray-700">SLA</h3>
                <p className="text-gray-600">見積回答: 24-48時間以内</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3 text-gray-700">条件</h3>
                <p className="text-gray-600">
                  最小ロット目安あり、支払条件（前払／デポ／掛け）は応相談
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* オプションサービス */}
        <section id="options" className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-xl p-8 border border-gray-100"
          >
            <div className="flex items-center mb-6">
              <Shield className="w-8 h-8 text-primary-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">オプションサービス</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <DollarSign className="w-6 h-6 text-green-500 mr-2" />
                  <h3 className="font-semibold text-gray-700">Tax Exemption Program</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  該当商品の米国内税を軽減。コスト削減に貢献します。
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <Truck className="w-6 h-6 text-blue-500 mr-2" />
                  <h3 className="font-semibold text-gray-700">送料最適化</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  MyUS/Shipito/DHL等の使い分けで最適ルートを選定。
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <Package className="w-6 h-6 text-purple-500 mr-2" />
                  <h3 className="font-semibold text-gray-700">国内再販</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  返品・不良品の国内回収・再販ルートで損失を最小化。
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <Globe className="w-6 h-6 text-orange-500 mr-2" />
                  <h3 className="font-semibold text-gray-700">AI活用</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  需要・在庫・価格の最適化を支援する運用基準。
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg p-8 text-center border border-primary-100"
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            まずはお気軽にご相談ください
          </h2>
          <p className="text-gray-600 mb-6">
            貴社のビジネスに最適な輸入ソリューションをご提案します
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/simulator"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              料金シミュレーション
            </a>
            <a 
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-600 text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              お問い合わせ
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}