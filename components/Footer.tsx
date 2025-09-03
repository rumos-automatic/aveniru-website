import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">株式会社 AveniRu</h3>
            <p className="text-gray-300">
              海外から日本へ。<br />
              輸入をもっとシンプルに、もっと早く。
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">サービス</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/services#import" className="hover:text-white">輸入代行</Link></li>
              <li><Link href="/services#wholesale" className="hover:text-white">卸・法人仕入れ</Link></li>
              <li><Link href="/simulator" className="hover:text-white">料金シミュレーター</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">法務情報</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/legal/specified-commercial-transaction" className="hover:text-white">特定商取引法に基づく表記</Link></li>
              <li><Link href="/legal/privacy" className="hover:text-white">プライバシーポリシー</Link></li>
              <li><Link href="/legal/returns" className="hover:text-white">返品・交換ポリシー</Link></li>
              <li><Link href="/legal/cookies" className="hover:text-white">Cookieポリシー</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 株式会社 AveniRu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;