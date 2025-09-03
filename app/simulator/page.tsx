'use client';

import { useState, useEffect } from 'react';
import { Calculator, Info } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

interface SimulatorData {
  productPriceUSD: number;
  domesticShippingUSD: number;
  localTaxRate: number;
  actualWeight: number;
  dimensions: { length: number; width: number; height: number };
  route: 'MyUS' | 'Shipito' | 'DHL';
  insuranceRate: number;
  hsTaxRate: number;
  customsFee: number;
  exchangeRate: number;
  domesticDelivery: number;
  domesticHandlingFee: number;
  salesChannel: 'FBA' | '自社発送';
  referralFeeRate: number;
  fbaFee: number;
  targetGrossMargin: number;
}

export default function SimulatorPage() {
  const [formData, setFormData] = useState<SimulatorData>({
    productPriceUSD: 100,
    domesticShippingUSD: 10,
    localTaxRate: 0,
    actualWeight: 1,
    dimensions: { length: 30, width: 20, height: 10 },
    route: 'MyUS',
    insuranceRate: 1,
    hsTaxRate: 0,
    customsFee: 200,
    exchangeRate: 145,
    domesticDelivery: 500,
    domesticHandlingFee: 300,
    salesChannel: 'FBA',
    referralFeeRate: 10,
    fbaFee: 500,
    targetGrossMargin: 30,
  });

  const [results, setResults] = useState({
    volumeWeight: 0,
    chargeableWeight: 0,
    usTotalUSD: 0,
    internationalShippingUSD: 0,
    insuranceUSD: 0,
    cifUSD: 0,
    cifJPY: 0,
    customsTax: 0,
    importConsumptionTax: 0,
    importCosts: 0,
    domesticCosts: 0,
    landedCost: 0,
    targetSalesPrice: 0,
    breakEvenPrice: 0,
  });

  useEffect(() => {
    calculateResults();
  }, [formData]);

  const calculateResults = () => {
    const { dimensions, actualWeight, productPriceUSD, domesticShippingUSD, localTaxRate,
            route, insuranceRate, hsTaxRate, customsFee, exchangeRate, domesticDelivery,
            domesticHandlingFee, salesChannel, referralFeeRate, fbaFee, targetGrossMargin } = formData;

    // 容積重量
    const volumeWeight = (dimensions.length * dimensions.width * dimensions.height) / 5000;
    const chargeableWeight = Math.max(actualWeight, volumeWeight);

    // 米国小計
    const usTotalUSD = productPriceUSD + domesticShippingUSD + (productPriceUSD * localTaxRate / 100);

    // 国際送料（簡略化）
    const routeRates = { MyUS: 15, Shipito: 18, DHL: 25 };
    const internationalShippingUSD = Math.max(20, routeRates[route] * chargeableWeight);

    // 保険
    const insuranceUSD = usTotalUSD * insuranceRate / 100;

    // CIF
    const cifUSD = usTotalUSD + internationalShippingUSD + insuranceUSD;
    const cifJPY = cifUSD * exchangeRate;

    // 関税
    const customsTax = cifJPY * hsTaxRate / 100;

    // 輸入消費税
    const importConsumptionTax = (cifJPY + customsTax) * 0.1;

    // 輸入諸費用
    const importCosts = customsFee + customsTax + importConsumptionTax;

    // 国内諸費用
    const domesticCosts = domesticDelivery + domesticHandlingFee;

    // 着地原価
    const landedCost = cifJPY + importCosts + domesticCosts;

    // 目標販売価格
    let targetSalesPrice = 0;
    if (salesChannel === 'FBA') {
      targetSalesPrice = (landedCost + fbaFee) / (1 - targetGrossMargin / 100 - referralFeeRate / 100);
    } else {
      targetSalesPrice = (landedCost + domesticDelivery) / (1 - targetGrossMargin / 100 - referralFeeRate / 100);
    }

    // 損益分岐価格
    const breakEvenPrice = landedCost * 1.1;

    setResults({
      volumeWeight,
      chargeableWeight,
      usTotalUSD,
      internationalShippingUSD,
      insuranceUSD,
      cifUSD,
      cifJPY,
      customsTax,
      importConsumptionTax,
      importCosts,
      domesticCosts,
      landedCost,
      targetSalesPrice,
      breakEvenPrice,
    });
  };

  const chartData = [
    { name: 'CIF', value: results.cifJPY, color: '#0066e6' },
    { name: '関税', value: results.customsTax, color: '#7300e6' },
    { name: '輸入消費税', value: results.importConsumptionTax, color: '#00a86b' },
    { name: '通関手数料', value: formData.customsFee, color: '#ff6b6b' },
    { name: '国内費用', value: results.domesticCosts, color: '#ffa500' },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          料金シミュレーター
        </h1>
        <p className="text-center text-gray-600 mb-12">
          輸入にかかる費用を即座に計算。着地原価と推奨販売価格を算出します。
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* 入力フォーム */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center">
              <Calculator className="mr-2" />
              入力項目
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  商品価格（USD）
                </label>
                <input
                  type="number"
                  value={formData.productPriceUSD}
                  onChange={(e) => setFormData({...formData, productPriceUSD: Number(e.target.value)})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  米国内送料（USD）
                </label>
                <input
                  type="number"
                  value={formData.domesticShippingUSD}
                  onChange={(e) => setFormData({...formData, domesticShippingUSD: Number(e.target.value)})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  実重量（kg）
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={formData.actualWeight}
                  onChange={(e) => setFormData({...formData, actualWeight: Number(e.target.value)})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  寸法（cm）
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <input
                    type="number"
                    placeholder="縦"
                    value={formData.dimensions.length}
                    onChange={(e) => setFormData({...formData, dimensions: {...formData.dimensions, length: Number(e.target.value)}})}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <input
                    type="number"
                    placeholder="横"
                    value={formData.dimensions.width}
                    onChange={(e) => setFormData({...formData, dimensions: {...formData.dimensions, width: Number(e.target.value)}})}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <input
                    type="number"
                    placeholder="高"
                    value={formData.dimensions.height}
                    onChange={(e) => setFormData({...formData, dimensions: {...formData.dimensions, height: Number(e.target.value)}})}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  配送ルート
                </label>
                <select
                  value={formData.route}
                  onChange={(e) => setFormData({...formData, route: e.target.value as 'MyUS' | 'Shipito' | 'DHL'})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="MyUS">MyUS</option>
                  <option value="Shipito">Shipito</option>
                  <option value="DHL">DHL Express</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  HS税率（%）
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={formData.hsTaxRate}
                  onChange={(e) => setFormData({...formData, hsTaxRate: Number(e.target.value)})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  為替レート（USD→JPY）
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.exchangeRate}
                  onChange={(e) => setFormData({...formData, exchangeRate: Number(e.target.value)})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  販売チャネル
                </label>
                <select
                  value={formData.salesChannel}
                  onChange={(e) => setFormData({...formData, salesChannel: e.target.value as 'FBA' | '自社発送'})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="FBA">Amazon FBA</option>
                  <option value="自社発送">自社発送</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  目標粗利率（%）
                </label>
                <input
                  type="number"
                  value={formData.targetGrossMargin}
                  onChange={(e) => setFormData({...formData, targetGrossMargin: Number(e.target.value)})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>
          </div>

          {/* 計算結果 */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">計算結果</h2>
              
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">容積重量</span>
                  <span className="font-semibold">{results.volumeWeight.toFixed(2)} kg</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">課金重量</span>
                  <span className="font-semibold">{results.chargeableWeight.toFixed(2)} kg</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">CIF（円）</span>
                  <span className="font-semibold">¥{Math.round(results.cifJPY).toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">関税</span>
                  <span className="font-semibold">¥{Math.round(results.customsTax).toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">輸入消費税</span>
                  <span className="font-semibold">¥{Math.round(results.importConsumptionTax).toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-3 text-lg font-bold text-primary-700">
                  <span>着地原価</span>
                  <span>¥{Math.round(results.landedCost).toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-3 text-lg font-bold text-green-600">
                  <span>推奨販売価格</span>
                  <span>¥{Math.round(results.targetSalesPrice).toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* コスト内訳グラフ */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">コスト内訳</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({name, percent}) => `${name} ${(percent * 100).toFixed(1)}%`}
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value: number) => `¥${Math.round(value).toLocaleString()}`} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start">
                <Info className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                <div className="text-sm text-gray-700">
                  <p className="font-semibold mb-1">ご注意</p>
                  <p>試算は概算です。正式なコストは通関確定後に精算されます。危険品・規制品は取り扱い不可の場合があります。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}