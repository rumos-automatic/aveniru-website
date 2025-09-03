'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigation = [
    { name: 'ホーム', href: '/' },
    { name: '事業内容', href: '/services' },
    { name: '料金シミュレーター', href: '/simulator' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Amazon店舗', href: '/stores' },
    { name: '会社情報', href: '/company' },
    { name: 'お問い合わせ', href: '/contact' },
  ];

  return (
    <header className="bg-white border-b border-navy-100 sticky top-0 z-50">
      <nav className="container">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* ロゴ */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold text-navy-900">AveniRu</span>
            </Link>
          </div>

          {/* デスクトップナビゲーション */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-navy-700 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn btn-primary"
            >
              無料相談
            </Link>
          </div>

          {/* モバイルメニューボタン */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-navy-700 hover:text-navy-900 p-2"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* モバイルメニュー */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-navy-100">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-navy-700 hover:text-primary-600 hover:bg-navy-50 rounded-md transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-4 px-3">
                <Link
                  href="/contact"
                  className="btn btn-primary w-full justify-center"
                  onClick={() => setIsOpen(false)}
                >
                  無料相談
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;