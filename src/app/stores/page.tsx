import { Metadata } from 'next';
import { Star, ExternalLink, Package, Users, Award } from 'lucide-react';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Amazon店舗 - AveniRu株式会社',
  description: '3つのAmazon店舗で厳選した海外商品を販売しています。高品質な商品を日本のお客様にお届けします。',
};

export default function StoresPage() {
  const stores = [
    {
      name: 'AveniRu Electronics',
      category: '電子機器・ガジェット',
      description: '最新の海外電子機器・スマートガジェットを厳選してお届けします。品質管理を徹底し、安心してお買い求めいただけます。',
      features: [
        '米国最新ガジェット',
        '品質保証付き',
        '日本語サポート',
        '迅速配送'
      ],
      stats: {
        rating: 4.8,
        reviews: 2543,
        products: 120
      },
      amazonUrl: 'https://amazon.co.jp/shops/aveniru-electronics',
      image: '/api/placeholder/400/300',
      specialties: ['スマートホーム', 'ウェアラブル', 'PC周辺機器', 'カメラアクセサリー']
    },
    {
      name: 'AveniRu Lifestyle',
      category: 'ライフスタイル・生活用品',
      description: 'ヨーロッパとアメリカから厳選したライフスタイル商品。毎日の生活をより豊かにする商品を取り揃えています。',
      features: [
        '欧米ブランド商品',
        'エコフレンドリー',
        'デザイン性重視',
        '機能性抜群'
      ],
      stats: {
        rating: 4.9,
        reviews: 1876,
        products: 85
      },
      amazonUrl: 'https://amazon.co.jp/shops/aveniru-lifestyle',
      image: '/api/placeholder/400/300',
      specialties: ['キッチン用品', 'インテリア', 'アウトドア', 'ヘルス&ビューティー']
    },
    {
      name: 'AveniRu Professional',
      category: 'ビジネス・プロフェッショナル',
      description: 'プロフェッショナル向けの高品質な商品を取り扱っています。効率的な仕事環境をサポートする商品が中心です。',
      features: [
        'プロ仕様品質',
        'B2B対応可能',
        '大口注文対応',
        '法人サポート'
      ],
      stats: {
        rating: 4.7,
        reviews: 892,
        products: 65
      },
      amazonUrl: 'https://amazon.co.jp/shops/aveniru-professional',
      image: '/api/placeholder/400/300',
      specialties: ['オフィス用品', '測定機器', '工具', 'ソフトウェア']
    }
  ];

  const benefits = [
    {
      icon: Package,
      title: '厳選商品',
      description: '海外の優良メーカーと直接取引し、品質の高い商品のみを厳選してお届けします。'
    },
    {
      icon: Star,
      title: '高評価実績',
      description: '全店舗平均4.8以上の高評価を維持。お客様満足度を最優先に運営しています。'
    },
    {
      icon: Users,
      title: '日本語サポート',
      description: '商品に関するご質問や使用方法など、日本語で丁寧にサポートいたします。'
    },
    {
      icon: Award,
      title: '品質保証',
      description: '全商品に品質保証を付けており、万が一の不具合にも迅速に対応いたします。'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-br from-accent-600 to-primary-600 text-white section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Amazon店舗</h1>
            <p className="text-lg lg:text-xl opacity-90 mb-8">
              3つの専門店舗で厳選した海外商品をお届けします
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold">3</div>
                <div className="text-sm opacity-80">専門店舗</div>
              </div>
              <div>
                <div className="text-3xl font-bold">270+</div>
                <div className="text-sm opacity-80">取扱商品数</div>
              </div>
              <div>
                <div className="text-3xl font-bold">4.8</div>
                <div className="text-sm opacity-80">平均評価</div>
              </div>
              <div>
                <div className="text-3xl font-bold">5000+</div>
                <div className="text-sm opacity-80">レビュー総数</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 店舗一覧 */}
      <section className="section-padding bg-navy-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">3つの専門店舗</h2>
            <p className="text-large">カテゴリー別に最適化された店舗で、お客様のニーズにお応えします</p>
          </div>

          <div className="space-y-8">
            {stores.map((store, index) => (
              <Card key={index} padding="lg" className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* 店舗情報 */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-navy-900 mb-2">{store.name}</h3>
                      <p className="text-accent-600 font-semibold mb-4">{store.category}</p>
                      <p className="text-body">{store.description}</p>
                    </div>

                    {/* 評価・統計 */}
                    <div className="flex items-center space-x-6 py-4 border-y border-navy-100">
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-500 fill-current mr-1" />
                        <span className="font-semibold">{store.stats.rating}</span>
                        <span className="text-navy-600 ml-1">({store.stats.reviews}件)</span>
                      </div>
                      <div className="flex items-center">
                        <Package className="h-5 w-5 text-primary-600 mr-2" />
                        <span className="font-semibold">{store.stats.products}商品</span>
                      </div>
                    </div>

                    {/* 特色 */}
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-3">店舗の特色</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {store.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-navy-700">
                            <div className="w-2 h-2 bg-primary-500 rounded-full mr-2 flex-shrink-0"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 専門分野 */}
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-3">主な取扱商品</h4>
                      <div className="flex flex-wrap gap-2">
                        {store.specialties.map((specialty, specialtyIndex) => (
                          <span
                            key={specialtyIndex}
                            className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* 店舗アクセスボタン */}
                    <div>
                      <a
                        href={store.amazonUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary inline-flex items-center"
                      >
                        Amazonで見る
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </a>
                    </div>
                  </div>

                  {/* 店舗画像エリア */}
                  <div className="lg:order-first">
                    <div className="bg-navy-100 rounded-xl h-64 lg:h-full flex items-center justify-center">
                      <div className="text-center text-navy-500">
                        <Package className="h-16 w-16 mx-auto mb-2 opacity-50" />
                        <p className="text-sm">店舗イメージ</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 利用のメリット */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Amazon店舗利用のメリット</h2>
            <p className="text-large">安心のAmazonプラットフォームで海外商品をお楽しみください</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} hover className="text-center">
                  <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-6 w-6 text-accent-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-3">{benefit.title}</h3>
                  <p className="text-sm text-navy-700">{benefit.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 輸入代行サービスとの連携 */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Amazon店舗にない商品をお探しですか？</h2>
            <p className="text-lg mb-8 opacity-90">
              Amazon店舗で取り扱いのない商品も、輸入代行サービスでお取り寄せ可能です。
              お客様のご要望に合わせて世界中から商品を調達いたします。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/services" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:bg-navy-50 transition-all duration-200"
              >
                輸入代行について
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary-700 transition-all duration-200"
              >
                お問い合わせ
              </a>
            </div>
            
            <div className="mt-8 text-sm opacity-80">
              Amazon店舗での販売実績があるからこそ、お客様が本当に求める商品を理解しています
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}