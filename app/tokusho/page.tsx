'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FileText, Mail, Phone, Clock, CreditCard, Truck } from 'lucide-react';

export default function TokushoPage() {
  const sections = [
    {
      icon: <FileText className="w-5 h-5" />,
      title: '販売業者',
      content: '株式会社 AveniRu'
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: '運営責任者',
      content: '代表取締役による運営管理'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: 'お問い合わせ',
      content: 'お問い合わせフォームよりご連絡ください',
      link: '/contact'
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: '営業時間',
      content: '平日 10:00〜18:00（土日祝日を除く）'
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: '支払い方法',
      content: '銀行振込（前払い）、請求書払い（法人のみ）'
    },
    {
      icon: <Truck className="w-5 h-5" />,
      title: '商品引き渡し時期',
      content: '注文確定後、通常4〜11営業日以内に発送'
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: '返品・交換',
      content: '商品到着後7日以内。初期不良の場合は交換対応'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-8 text-gray-800"
        >
          特定商取引法に基づく表記
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          {/* 会社所在地と代表者情報（画像） */}
          <div className="mb-8 p-4 bg-gray-50 rounded-lg">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">事業者情報</h2>
            <Image 
              src="/images/company-info.svg" 
              alt="会社所在地・代表者情報" 
              width={400} 
              height={200} 
              className="max-w-full h-auto"
            />
            <div className="mt-4 space-y-2 text-gray-600">
              <p>設立: 2025年1月</p>
              <p>資本金: 100万円</p>
            </div>
          </div>

          {/* その他の情報 */}
          <div className="space-y-6">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="border-b pb-4 last:border-b-0"
              >
                <div className="flex items-start">
                  <div className="flex items-center text-primary-600 mr-4 w-40 flex-shrink-0">
                    {section.icon}
                    <span className="ml-2 font-medium text-gray-700">{section.title}</span>
                  </div>
                  <div className="text-gray-600">
                    {section.link ? (
                      <a href={section.link} className="text-primary-600 hover:text-primary-700 underline">
                        {section.content}
                      </a>
                    ) : (
                      section.content
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 追加事項 */}
          <div className="mt-8 pt-8 border-t">
            <h3 className="font-semibold mb-4 text-gray-800">販売価格について</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>・商品ページに記載の価格は税込価格です</li>
              <li>・国際配送料は重量・サイズにより変動します</li>
              <li>・関税・輸入消費税は商品により異なります</li>
              <li>・詳細は料金シミュレーターでご確認ください</li>
            </ul>
          </div>

          <div className="mt-6 pt-6 border-t">
            <h3 className="font-semibold mb-4 text-gray-800">キャンセルについて</h3>
            <p className="text-gray-600 text-sm">
              注文確定後のキャンセルは原則お受けできません。
              海外からの取り寄せ商品のため、ご注文前に商品詳細をよくご確認ください。
            </p>
          </div>

          <div className="mt-6 pt-6 border-t">
            <h3 className="font-semibold mb-4 text-gray-800">個人情報の取り扱い</h3>
            <p className="text-gray-600 text-sm">
              お客様の個人情報は、商品の発送およびサービスの提供にのみ使用し、
              法令に基づく場合を除き第三者への提供は行いません。
            </p>
          </div>
        </motion.div>

        {/* リンク */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-600 mb-4">
            ご不明な点がございましたらお問い合わせください
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            お問い合わせフォーム
          </a>
        </motion.div>
      </div>
    </div>
  );
}