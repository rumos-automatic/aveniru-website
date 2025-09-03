'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import { Calculator, BarChart3, DollarSign } from 'lucide-react';
import Card from '@/components/ui/Card';
import SimulatorForm from '@/components/simulator/SimulatorForm';
import SimulatorResults from '@/components/simulator/SimulatorResults';
import { SimulatorInputs, SimulatorResults as Results } from '@/types/simulator';
import { calculateImportCosts } from '@/lib/simulator';

const defaultInputs: SimulatorInputs = {
  productCategory: 'electronics',
  productPrice: 100,
  quantity: 1,
  supplierCountry: 'us',
  shippingMethod: 'standard',
  packageWeight: 1,
  packageDimensions: {
    length: 20,
    width: 15,
    height: 10,
  },
  qualityInspection: false,
  certificationRequired: false,
  insuranceRequired: false,
  expressService: false,
  domesticShipping: true,
  domesticShippingDestination: 'tokyo',
  urgentOrder: false,
  customsDeclarationSupport: false,
};

export default function SimulatorPage() {
  const [inputs, setInputs] = useState<SimulatorInputs>(defaultInputs);
  const [results, setResults] = useState<Results | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleCalculate = async () => {
    setIsCalculating(true);
    
    // 計算処理をシミュレート
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const calculatedResults = calculateImportCosts(inputs);
    setResults(calculatedResults);
    setIsCalculating(false);
  };

  const handleInputChange = (field: keyof SimulatorInputs, value: any) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleDimensionChange = (dimension: keyof SimulatorInputs['packageDimensions'], value: number) => {
    setInputs(prev => ({
      ...prev,
      packageDimensions: {
        ...prev.packageDimensions,
        [dimension]: value
      }
    }));
  };

  return (
    <div className="min-h-screen bg-navy-50">
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-br from-primary-600 to-accent-600 text-white section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Calculator className="h-12 w-12 mr-4" />
              <h1 className="text-4xl lg:text-5xl font-bold">料金シミュレーター</h1>
            </div>
            <p className="text-lg lg:text-xl opacity-90">
              16項目の詳細入力で、着地原価と推奨販売価格を正確に計算します
            </p>
          </div>
        </div>
      </section>

      {/* メインコンテンツ */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 入力フォーム */}
            <div>
              <Card padding="lg" className="sticky top-24">
                <h2 className="heading-3 mb-6 flex items-center">
                  <BarChart3 className="h-6 w-6 mr-2 text-primary-600" />
                  条件入力
                </h2>
                <SimulatorForm
                  inputs={inputs}
                  onInputChange={handleInputChange}
                  onDimensionChange={handleDimensionChange}
                  onCalculate={handleCalculate}
                  isCalculating={isCalculating}
                />
              </Card>
            </div>

            {/* 計算結果 */}
            <div>
              {results ? (
                <SimulatorResults results={results} />
              ) : (
                <Card padding="lg" className="text-center">
                  <div className="py-12">
                    <DollarSign className="h-16 w-16 text-navy-300 mx-auto mb-4" />
                    <h3 className="heading-3 text-navy-400 mb-4">計算結果がここに表示されます</h3>
                    <p className="text-body text-navy-500">
                      左のフォームに必要事項を入力し、「計算する」ボタンをクリックしてください
                    </p>
                  </div>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 注意事項 */}
      <section className="bg-white section-padding">
        <div className="container">
          <Card padding="lg">
            <h2 className="heading-3 mb-6">ご利用上の注意</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-navy-600">
              <div>
                <h3 className="font-semibold text-navy-800 mb-2">計算の精度について</h3>
                <ul className="space-y-1">
                  <li>• 為替レートは目安として固定値を使用</li>
                  <li>• 実際の関税率は商品により異なる場合があります</li>
                  <li>• 配送料は重量・サイズにより変動します</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-navy-800 mb-2">その他</h3>
                <ul className="space-y-1">
                  <li>• 結果は概算です。正確な見積もりはお問い合わせください</li>
                  <li>• 法規制により輸入できない商品もあります</li>
                  <li>• 配送日数は目安であり保証するものではありません</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}