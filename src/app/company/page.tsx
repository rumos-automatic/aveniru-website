import { Metadata } from 'next';
import { Building2, MapPin, Phone, Mail, Calendar, Users } from 'lucide-react';
import Card from '@/components/ui/Card';
import Image from 'next/image';

export const metadata: Metadata = {
  title: '会社情報 - AveniRu株式会社',
  description: 'AveniRu株式会社の会社概要、代表挨拶、沿革をご紹介します。海外輸入代行事業を通じて日本のビジネスをサポートします。',
  robots: 'noindex, nofollow', // SEO対策：検索エンジンにインデックスされないように
};

export default function CompanyPage() {
  const companyInfo = {
    name: 'AveniRu株式会社',
    nameEn: 'AveniRu Co., Ltd.',
    established: '2020年4月',
    capital: '500万円',
    business: [
      '海外商品輸入代行業',
      '海外商品卸売業',
      'Amazon販売事業',
      '輸入コンサルティング事業'
    ],
    address: '東京都渋谷区',
    phone: '03-XXXX-XXXX',
    email: 'info@aveniru.co.jp',
    employees: '5名'
  };

  const timeline = [
    {
      year: '2020年4月',
      event: 'AveniRu株式会社設立',
      description: '海外輸入代行事業を開始'
    },
    {
      year: '2020年8月',
      event: 'Amazon販売事業開始',
      description: '第1店舗「AveniRu Electronics」をオープン'
    },
    {
      year: '2021年3月',
      event: 'サービス拡大',
      description: 'ヨーロッパ市場への展開を開始'
    },
    {
      year: '2021年9月',
      event: 'Amazon店舗拡張',
      description: '「AveniRu Lifestyle」「AveniRu Professional」をオープン'
    },
    {
      year: '2022年6月',
      event: '法人サービス強化',
      description: 'B2B向け輸入代行サービスを本格展開'
    },
    {
      year: '2023年1月',
      event: 'オンラインツール導入',
      description: '料金シミュレーターシステムをリリース'
    },
    {
      year: '2024年現在',
      event: '事業拡大継続中',
      description: 'お客様満足度向上とサービス品質向上に取り組む'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-br from-navy-600 to-primary-600 text-white section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">会社情報</h1>
            <p className="text-lg lg:text-xl opacity-90">
              海外から日本へ。輸入をもっとシンプルに、もっと早く。
            </p>
          </div>
        </div>
      </section>

      {/* 代表挨拶 */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 text-center mb-12">代表挨拶</h2>
            
            <Card padding="lg">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-2">代表取締役</h3>
                    {/* 代表者名を画像として表示（SEO対策） */}
                    <div className="mb-6">
                      <Image
                        src="/api/generate-name-image?name=大岩 涼太&width=200&height=40&fontSize=18"
                        alt="代表取締役"
                        width={200}
                        height={40}
                        className="mb-4"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4 text-body leading-relaxed">
                    <p>
                      AveniRu株式会社のウェブサイトにお越しいただき、ありがとうございます。
                    </p>
                    
                    <p>
                      私たちは「海外から日本へ。輸入をもっとシンプルに、もっと早く。」をミッションに、
                      海外商品の輸入代行事業を展開しております。
                    </p>
                    
                    <p>
                      輸入ビジネスは複雑で時間のかかるプロセスですが、私たちの経験と
                      ネットワークを活用することで、お客様にとって「シンプル」で「スピーディー」な
                      輸入体験を提供することが可能です。
                    </p>
                    
                    <p>
                      個人事業主様から大企業様まで、幅広いお客様のニーズにお応えし、
                      日本のビジネスシーンに新たな価値を提供してまいります。
                    </p>
                    
                    <p>
                      今後ともAveniRu株式会社をよろしくお願いいたします。
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-center lg:justify-end">
                  <div className="w-48 h-64 bg-navy-100 rounded-xl flex items-center justify-center">
                    <div className="text-center text-navy-500">
                      <Users className="h-16 w-16 mx-auto mb-2 opacity-50" />
                      <p className="text-sm">代表者写真</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 会社概要 */}
      <section className="section-padding bg-navy-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 text-center mb-12">会社概要</h2>
            
            <Card padding="lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Building2 className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-navy-900 mb-2">会社名</h3>
                      <p className="text-body">{companyInfo.name}</p>
                      <p className="text-sm text-navy-600">{companyInfo.nameEn}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Calendar className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-navy-900 mb-2">設立年月</h3>
                      <p className="text-body">{companyInfo.established}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <DollarSign className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-navy-900 mb-2">資本金</h3>
                      <p className="text-body">{companyInfo.capital}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Users className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-navy-900 mb-2">従業員数</h3>
                      <p className="text-body">{companyInfo.employees}</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-navy-900 mb-2">本社所在地</h3>
                      <p className="text-body">{companyInfo.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-navy-900 mb-2">電話番号</h3>
                      <p className="text-body">{companyInfo.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-navy-900 mb-2">メールアドレス</h3>
                      <p className="text-body">{companyInfo.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Building2 className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-navy-900 mb-2">事業内容</h3>
                      <ul className="space-y-1">
                        {companyInfo.business.map((item, index) => (
                          <li key={index} className="text-body flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 沿革 */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 text-center mb-12">沿革</h2>
            
            <Card padding="lg">
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
                    <div className="md:w-32 flex-shrink-0">
                      <div className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {item.year}
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="font-semibold text-navy-900 mb-2">{item.event}</h3>
                      <p className="text-body">{item.description}</p>
                    </div>
                    
                    {index < timeline.length - 1 && (
                      <div className="hidden md:block absolute left-16 mt-8 w-0.5 h-8 bg-primary-200"></div>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-accent-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">お気軽にお問い合わせください</h2>
          <p className="text-lg mb-8 opacity-90">
            輸入に関するご相談から具体的なお見積まで、何でもご相談ください
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-accent-700 font-semibold rounded-xl hover:bg-navy-50 transition-all duration-200"
            >
              お問い合わせ
            </a>
            <a 
              href="/services" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-accent-700 transition-all duration-200"
            >
              サービス詳細
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}