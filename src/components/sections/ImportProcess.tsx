import { 
  MessageCircle, 
  Search, 
  FileText, 
  CreditCard, 
  Factory, 
  Ship, 
  Package2 
} from 'lucide-react';

const ImportProcess = () => {
  const steps = [
    {
      icon: MessageCircle,
      step: 'STEP 1',
      title: 'お問い合わせ',
      description: 'ご希望商品や条件をお聞かせください',
      duration: '即日'
    },
    {
      icon: Search,
      step: 'STEP 2',
      title: '商品リサーチ',
      description: '最適なサプライヤーを調査・選定',
      duration: '1-2日'
    },
    {
      icon: FileText,
      step: 'STEP 3',
      title: 'お見積り提示',
      description: '詳細見積りと納期をご提案',
      duration: '1日'
    },
    {
      icon: CreditCard,
      step: 'STEP 4',
      title: 'ご契約・決済',
      description: '契約締結と代金のお支払い',
      duration: '1日'
    },
    {
      icon: Factory,
      step: 'STEP 5',
      title: '発注・製造',
      description: 'サプライヤーへ発注・品質管理',
      duration: '3-14日'
    },
    {
      icon: Ship,
      step: 'STEP 6',
      title: '国際輸送',
      description: '海外から日本への輸送手配',
      duration: '3-7日'
    },
    {
      icon: Package2,
      step: 'STEP 7',
      title: 'お客様お届け',
      description: '通関手続き完了後、お客様へ配送',
      duration: '1-2日'
    }
  ];

  return (
    <section className="section-padding bg-navy-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">輸入プロセス 7つのステップ</h2>
          <p className="text-large max-w-2xl mx-auto">
            お問い合わせから商品お届けまで、すべてのプロセスを透明化し、
            お客様に安心していただけるサービスを提供します
          </p>
        </div>

        {/* デスクトップ表示 */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* 接続線 */}
            <div className="absolute top-16 left-0 right-0 h-0.5 bg-primary-200"></div>
            
            <div className="grid grid-cols-7 gap-4">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className="text-center relative">
                    {/* アイコンと接続点 */}
                    <div className="relative z-10 w-16 h-16 bg-white border-4 border-primary-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-primary-600" />
                    </div>
                    
                    {/* ステップ情報 */}
                    <div className="bg-white rounded-xl p-4 shadow-soft">
                      <div className="text-xs text-primary-600 font-semibold mb-1">{step.step}</div>
                      <h3 className="text-sm font-semibold text-navy-900 mb-2">{step.title}</h3>
                      <p className="text-xs text-navy-600 mb-2">{step.description}</p>
                      <div className="text-xs text-accent-600 font-semibold">{step.duration}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* モバイル表示 */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <IconComponent className="h-6 w-6 text-primary-600" />
                  </div>
                </div>
                
                <div className="flex-grow bg-white rounded-xl p-4 shadow-soft">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-primary-600 font-semibold">{step.step}</div>
                    <div className="text-sm text-accent-600 font-semibold">{step.duration}</div>
                  </div>
                  <h3 className="text-base font-semibold text-navy-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-navy-600">{step.description}</p>
                </div>
                
                {/* 接続線（最後以外） */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 mt-12 w-0.5 h-6 bg-primary-200"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* 総期間表示 */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-accent-50 border border-accent-200 rounded-2xl px-6 py-4">
            <div className="text-2xl font-bold text-accent-700 mb-1">最短7日〜</div>
            <div className="text-sm text-accent-600">お問い合わせからお届けまで</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportProcess;