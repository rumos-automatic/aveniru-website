'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqItems: FAQItem[] = [
    {
      category: '納期',
      question: '納期の目安は？',
      answer: '速達4-7営業日／標準7-11営業日（集荷〜日本着）。通関・天候で変動します。繁忙期や通関検査が入る場合は、追加で2-3営業日かかることがあります。'
    },
    {
      category: '費用',
      question: '送料はどうやって決まる？',
      answer: '課金重量（実重量と容積重量の大きい方）×ルート係数＋基本料＋燃油です。容積重量は縦×横×高さ(cm)÷5000で計算されます。'
    },
    {
      category: '費用',
      question: '関税・消費税は？',
      answer: 'HSコードに基づきCIF（商品代＋国際送料＋保険）に対して課税。輸入消費税は（CIF＋関税）×10%。商品により税率が異なるため、事前にHSコードの確認をお勧めします。'
    },
    {
      category: '対応',
      question: '小ロットでも対応可能？',
      answer: '可能です。混載前提で最適ルートを選定します。最小1個からでも対応いたしますが、送料効率を考慮すると複数個まとめての発送がお得です。'
    },
    {
      category: '対応',
      question: '返品・不良時は？',
      answer: '国内再販ルートを含む運用で損失最小化。規約に従い交換・返金に対応します。商品到着後7日以内にご連絡いただければ、迅速に対応いたします。'
    },
    {
      category: '支払い',
      question: '支払条件は？',
      answer: '前払／一部デポ／掛け等は取引条件に応じて協議。初回取引は前払いをお願いしていますが、継続取引では柔軟に対応可能です。'
    },
    {
      category: '商品',
      question: '取り扱い不可の商品はありますか？',
      answer: '危険品、規制品、知的財産権を侵害する商品は取り扱いできません。食品、医薬品、化粧品等は別途許可が必要な場合があります。'
    },
    {
      category: '流れ',
      question: '注文から配送までの流れは？',
      answer: '①お見積り→②ご発注→③商品調達→④国際輸送→⑤通関→⑥国内配送の流れです。各段階で進捗をご報告します。'
    },
    {
      category: '流れ',
      question: '見積もりに必要な情報は？',
      answer: '商品URL、数量、希望納期をお知らせください。より正確な見積もりのため、寸法・重量情報があれば併せてご提供ください。'
    },
    {
      category: 'その他',
      question: 'Amazon FBA直送は可能ですか？',
      answer: '可能です。商品ラベル貼付、FBA納品プラン作成まで対応いたします。追加手数料が発生しますが、効率的な納品が可能です。'
    }
  ];

  const categories = Array.from(new Set(faqItems.map(item => item.category)));

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-8 text-gray-800"
        >
          よくあるご質問
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center text-gray-600 mb-12 text-lg"
        >
          まずは納期・送料・関税の基本から。詳細はお問い合わせください。
        </motion.p>

        {/* カテゴリー別セクション */}
        {categories.map((category, categoryIndex) => (
          <motion.section
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.1 }}
            className="mb-8"
          >
            <h2 className="text-xl font-semibold mb-4 text-primary-700 flex items-center">
              <HelpCircle className="w-5 h-5 mr-2" />
              {category}
            </h2>
            
            <div className="space-y-4">
              {faqItems
                .filter(item => item.category === category)
                .map((item, index) => {
                  const globalIndex = faqItems.indexOf(item);
                  const isOpen = openItems.includes(globalIndex);
                  
                  return (
                    <motion.div
                      key={globalIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-medium text-gray-800">{item.question}</span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        )}
                      </button>
                      
                      <motion.div
                        initial={false}
                        animate={{
                          height: isOpen ? 'auto' : 0,
                          opacity: isOpen ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4 text-gray-600">
                          {item.answer}
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
            </div>
          </motion.section>
        ))}

        {/* CTA セクション */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary-50 rounded-lg p-8 text-center mt-12"
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            その他のご質問はお気軽に
          </h2>
          <p className="text-gray-600 mb-6">
            こちらに記載のない内容も、お問い合わせフォームよりご質問ください
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            お問い合わせフォームへ
          </a>
        </motion.div>
      </div>
    </div>
  );
}