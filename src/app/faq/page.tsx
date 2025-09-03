'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Clock, Truck, DollarSign, HelpCircle } from 'lucide-react';
import Card from '@/components/ui/Card';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqCategories = [
    {
      title: '納期について',
      icon: Clock,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      faqs: [
        {
          question: '最短でどのくらいで届きますか？',
          answer: '最短7日でお届け可能です。ただし、商品の種類、仕入先の国、配送方法により異なります。エクスプレスサービスをご利用いただくと、さらに短縮できる場合があります。'
        },
        {
          question: '配送が遅れることはありますか？',
          answer: '通関手続きや天候、現地の祝日等により遅延が発生する場合があります。遅延が予想される場合は、事前にご連絡いたします。また、リアルタイムでの配送状況をお知らせしています。'
        },
        {
          question: '緊急で必要な商品があります',
          answer: '緊急対応サービス（+10,000円）をご利用いただけます。専任担当者が最優先で対応し、通常より1-2日短縮してお届けします。まずはお電話でご相談ください。'
        },
        {
          question: '配送状況を確認できますか？',
          answer: 'はい。発送後に追跡番号をお知らせし、リアルタイムで配送状況をご確認いただけます。また、重要な節目では随時メールでご連絡いたします。'
        }
      ]
    },
    {
      title: '送料について',
      icon: Truck,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      faqs: [
        {
          question: '送料はどのように計算されますか？',
          answer: '実重量と容積重量のうち大きい方で計算されます。容積重量は「縦×横×高さ(cm) ÷ 5000」で算出されます。配送方法と仕入先国により単価が異なります。'
        },
        {
          question: '送料を安くする方法はありますか？',
          answer: '複数商品をまとめて発送する、エコノミー配送を選択する、などの方法で送料を抑えられます。料金シミュレーターで事前に確認していただけます。'
        },
        {
          question: 'DHLやFedExは利用できますか？',
          answer: 'はい、DHL、FedEx、その他各種配送業者をご利用いただけます。速達性を重視される場合におすすめです。料金は配送方法により異なります。'
        },
        {
          question: '国内配送料は別途かかりますか？',
          answer: '国内配送をご希望の場合は別途料金がかかります。東京都内は800円から、その他地域は1,200円から（重量により加算）となります。'
        }
      ]
    },
    {
      title: '関税・消費税について',
      icon: DollarSign,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      faqs: [
        {
          question: '関税はどのくらいかかりますか？',
          answer: '商品カテゴリーにより異なります。電子機器5%、アパレル12%、化粧品6%など。詳細は料金シミュレーターでご確認いただけます。関税は商品価格に対してかかります。'
        },
        {
          question: '消費税はかかりますか？',
          answer: 'はい。商品価格+送料+関税の合計に対して10%の消費税がかかります。これは日本の法律により定められています。'
        },
        {
          question: '関税を安くする方法はありますか？',
          answer: '合法的な方法として、関税率の低い商品カテゴリーを選ぶ、原産地証明書を取得する、などがあります。詳細はお問い合わせください。'
        },
        {
          question: 'HS コードについて教えてください',
          answer: 'HS コードは商品分類のための国際統一番号です。関税率の決定に使用されます。弊社で適切なHS コードの選定をサポートいたします。'
        }
      ]
    },
    {
      title: 'その他',
      icon: HelpCircle,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      faqs: [
        {
          question: '最小発注量はありますか？',
          answer: '1個から対応可能です。ただし、サービス料の最低額は5,000円となります。小ロットでのテスト仕入れもお気軽にご相談ください。'
        },
        {
          question: '支払い方法を教えてください',
          answer: '銀行振込、クレジットカード決済が可能です。法人のお客様は請求書払いも対応しております（審査あり）。海外送金は弊社が代行いたします。'
        },
        {
          question: '商品に不具合があった場合は？',
          answer: '輸送保険をかけていれば保険でカバーされます。サプライヤーとの交渉も代行いたします。事前の品質検査サービスもご利用いただけます。'
        },
        {
          question: 'キャンセルは可能ですか？',
          answer: 'サプライヤーへの発注前であればキャンセル可能です。発注後のキャンセルはサプライヤーの対応により異なります。詳細は利用規約をご確認ください。'
        },
        {
          question: '見積もりは無料ですか？',
          answer: 'はい、お見積もりは無料です。料金シミュレーターでの概算見積もりも無料でご利用いただけます。詳細見積もりもお気軽にお問い合わせください。'
        },
        {
          question: '法人契約のメリットはありますか？',
          answer: '法人契約では専任担当者制、月締め請求書払い、大口割引などの特典があります。継続的なお取引をお考えの場合はぜひご検討ください。'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-navy-50">
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-br from-navy-600 to-primary-600 text-white section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">よくあるご質問</h1>
            <p className="text-lg lg:text-xl opacity-90">
              輸入代行に関するよくあるご質問にお答えします
            </p>
          </div>
        </div>
      </section>

      {/* FAQ コンテンツ */}
      <section className="section-padding">
        <div className="container max-w-4xl mx-auto">
          {faqCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div key={categoryIndex} className="mb-8">
                <div className={`flex items-center p-4 ${category.bgColor} rounded-t-2xl border-b`}>
                  <IconComponent className={`h-6 w-6 mr-3 ${category.color}`} />
                  <h2 className="text-xl font-bold text-navy-900">{category.title}</h2>
                </div>
                
                <Card padding="sm" className="rounded-t-none">
                  {category.faqs.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 100 + faqIndex;
                    return (
                      <div key={faqIndex} className="border-b border-navy-100 last:border-b-0">
                        <button
                          onClick={() => toggleFAQ(globalIndex)}
                          className="w-full text-left p-4 hover:bg-navy-50 transition-colors duration-200 focus:outline-none focus:bg-navy-50"
                        >
                          <div className="flex justify-between items-center">
                            <h3 className="font-semibold text-navy-900 pr-4">
                              Q. {faq.question}
                            </h3>
                            {openIndex === globalIndex ? (
                              <ChevronUp className="h-5 w-5 text-navy-400 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-navy-400 flex-shrink-0" />
                            )}
                          </div>
                        </button>
                        
                        {openIndex === globalIndex && (
                          <div className="px-4 pb-4">
                            <div className="pl-6 border-l-4 border-primary-200">
                              <p className="text-navy-700 leading-relaxed">
                                <span className="font-semibold text-primary-600">A. </span>
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </Card>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA セクション */}
      <section className="section-padding bg-white">
        <div className="container">
          <Card padding="lg" className="text-center max-w-3xl mx-auto">
            <h2 className="heading-2 mb-4">解決しない疑問はございませんか？</h2>
            <p className="text-large mb-8">
              お気軽にお問い合わせください。専門スタッフが丁寧にお答えいたします。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="btn btn-primary inline-flex items-center justify-center"
              >
                お問い合わせ
              </a>
              <a 
                href="/simulator" 
                className="btn btn-secondary inline-flex items-center justify-center"
              >
                料金を計算する
              </a>
            </div>
            
            <div className="mt-8 p-4 bg-accent-50 border border-accent-200 rounded-lg">
              <p className="text-sm text-accent-800">
                <strong>営業時間：</strong>平日 9:00-18:00 | 
                <strong> 電話：</strong>03-XXXX-XXXX | 
                <strong> メール：</strong>info@aveniru.co.jp
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}