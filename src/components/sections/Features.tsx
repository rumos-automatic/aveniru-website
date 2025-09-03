import { Globe, Zap, Package } from 'lucide-react';
import Card from '@/components/ui/Card';

const Features = () => {
  const features = [
    {
      icon: Globe,
      title: '米欧調達網',
      description: 'アメリカ・ヨーロッパの信頼できるサプライヤーネットワークを活用し、幅広い商品を調達します。',
      details: [
        '500社以上のサプライヤー',
        '品質管理体制完備',
        '現地スタッフによるサポート'
      ]
    },
    {
      icon: Zap,
      title: 'スピード納期',
      description: '独自の物流ネットワークにより、従来の半分の期間での納期を実現します。',
      details: [
        '最短7日での納品',
        'リアルタイム配送追跡',
        '緊急対応可能'
      ]
    },
    {
      icon: Package,
      title: '小ロットOK',
      description: '1個からでも対応可能。スタートアップや個人事業主様も安心してご利用いただけます。',
      details: [
        '最小ロット1個から',
        '在庫リスクなし',
        'テスト販売に最適'
      ]
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">AveniRuが選ばれる3つの理由</h2>
          <p className="text-large max-w-2xl mx-auto">
            長年の経験と独自のネットワークで、お客様の輸入ビジネスを成功に導きます
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} hover className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="h-8 w-8 text-primary-600" />
                </div>
                
                <h3 className="heading-3 mb-4">{feature.title}</h3>
                <p className="text-body mb-6">{feature.description}</p>
                
                <ul className="text-left space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-navy-600">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
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
  );
};

export default Features;