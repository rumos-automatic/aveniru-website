import { Metadata } from 'next';
import { 
  ShoppingCart, 
  Building2, 
  Truck,
  Shield,
  FileCheck,
  Headphones
} from 'lucide-react';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'サービス一覧 - AveniRu株式会社',
  description: '輸入代行、卸・法人仕入れ、オプションサービスまで、幅広い輸入支援サービスをご提供しています。',
};

export default function ServicesPage() {
  const mainServices = [
    {
      id: 'import-agency',
      icon: ShoppingCart,
      title: '輸入代行',
      description: 'お客様に代わって海外商品の調達から輸入まで全てを代行いたします。',
      features: [
        '商品リサーチ・選定',
        'サプライヤー交渉',
        '品質管理・検品',
        '国際輸送手配',
        '通関手続き',
        '国内配送'
      ],
      pricing: '商品価格の10-20%',
      suitableFor: [
        '個人事業主の方',
        '輸入初心者の方',
        '少量からテストしたい方'
      ]
    },
    {
      id: 'wholesale',
      icon: Building2,
      title: '卸・法人仕入れ',
      description: '法人様向けの大口仕入れや定期的な商品調達をサポートします。',
      features: [
        '大口割引対応',
        '定期発注システム',
        '専任担当者制',
        '在庫管理支援',
        'OEM・ODM対応',
        '品質保証'
      ],
      pricing: '個別お見積り',
      suitableFor: [
        '小売業者様',
        'EC事業者様',
        '製造業者様'
      ]
    }
  ];

  const optionServices = [
    {
      icon: Truck,
      title: '国内配送・倉庫保管',
      description: '商品の国内配送や一時保管サービスをご提供します。',
      details: [
        '全国配送対応',
        '冷蔵・冷凍保管',
        'ピッキング・梱包',
        '返品・交換対応'
      ]
    },
    {
      icon: Shield,
      title: '保険・保証サービス',
      description: '輸送中の事故や商品不良に対する各種保険をご用意しています。',
      details: [
        '輸送保険',
        '商品保証',
        '品質保証',
        'PL保険対応'
      ]
    },
    {
      icon: FileCheck,
      title: '書類作成代行',
      description: '輸入に必要な各種書類の作成・申請を代行します。',
      details: [
        'インボイス作成',
        '原産地証明書',
        'FDA申請',
        'CE認証取得支援'
      ]
    },
    {
      icon: Headphones,
      title: '輸入コンサルティング',
      description: '輸入ビジネスの立ち上げから運営まで専門的なアドバイスを提供します。',
      details: [
        '輸入戦略策定',
        'リスク分析',
        '市場調査',
        '法規制アドバイス'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-br from-navy-50 to-primary-50 section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6">サービス一覧</h1>
            <p className="text-large">
              輸入代行から卸売まで、お客様のニーズに合わせた<br />
              幅広いサービスをご提供しています
            </p>
          </div>
        </div>
      </section>

      {/* メインサービス */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">メインサービス</h2>
            <p className="text-large">お客様の事業規模に合わせた2つのプランをご用意</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.id} padding="lg" className="h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mr-4">
                      <IconComponent className="h-6 w-6 text-primary-600" />
                    </div>
                    <h3 className="heading-3">{service.title}</h3>
                  </div>
                  
                  <p className="text-body mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-navy-900 mb-3">含まれるサービス</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-navy-600">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-navy-100">
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-2">料金目安</h4>
                      <p className="text-primary-600 font-semibold">{service.pricing}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-2">こんな方におすすめ</h4>
                      <ul className="space-y-1">
                        {service.suitableFor.map((item, index) => (
                          <li key={index} className="text-sm text-navy-600">{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* オプションサービス */}
      <section className="section-padding bg-navy-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">オプションサービス</h2>
            <p className="text-large">輸入をより便利に、より安全にするための追加サービス</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {optionServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} hover>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center mr-3">
                      <IconComponent className="h-5 w-5 text-accent-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-navy-900">{service.title}</h3>
                  </div>
                  
                  <p className="text-body mb-4">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-sm text-navy-600">
                        <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-3 flex-shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">どのサービスが最適かお悩みですか？</h2>
          <p className="text-lg mb-8 opacity-90">
            無料相談で御社のニーズをお聞かせください。最適なプランをご提案いたします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:bg-navy-50 transition-all duration-200"
            >
              無料相談を予約
            </a>
            <a 
              href="/simulator" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary-700 transition-all duration-200"
            >
              料金を計算
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}