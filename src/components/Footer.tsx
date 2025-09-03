import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'サービス',
      links: [
        { name: '輸入代行', href: '/services#import-agency' },
        { name: '卸・法人仕入れ', href: '/services#wholesale' },
        { name: 'オプションサービス', href: '/services#options' },
        { name: '料金シミュレーター', href: '/simulator' },
      ],
    },
    {
      title: '情報',
      links: [
        { name: 'FAQ', href: '/faq' },
        { name: 'Amazon店舗', href: '/stores' },
        { name: '会社情報', href: '/company' },
        { name: 'お問い合わせ', href: '/contact' },
      ],
    },
    {
      title: '法的情報',
      links: [
        { name: '利用規約', href: '/legal/terms' },
        { name: 'プライバシーポリシー', href: '/legal/privacy' },
        { name: '特定商取引法に基づく表記', href: '/legal/commercial-law' },
      ],
    },
  ];

  return (
    <footer className="bg-navy-900 text-white">
      <div className="container">
        {/* メインフッター */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 会社情報 */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">A</span>
                </div>
                <span className="text-lg font-bold">AveniRu</span>
              </div>
              <p className="text-navy-300 text-sm leading-relaxed mb-4">
                海外から日本へ。輸入をもっとシンプルに、もっと早く。
              </p>
              <p className="text-navy-400 text-xs">
                AveniRu株式会社<br />
                海外輸入代行・卸売事業
              </p>
            </div>

            {/* フッターリンク */}
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold text-white mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-navy-300 hover:text-white text-sm transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* フッター下部 */}
        <div className="border-t border-navy-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-navy-400 text-sm">
              © {currentYear} AveniRu株式会社. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link
                href="/legal/terms"
                className="text-navy-400 hover:text-white text-sm transition-colors duration-200"
              >
                利用規約
              </Link>
              <Link
                href="/legal/privacy"
                className="text-navy-400 hover:text-white text-sm transition-colors duration-200"
              >
                プライバシーポリシー
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;