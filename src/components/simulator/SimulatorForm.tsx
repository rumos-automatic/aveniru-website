'use client';

import { useState } from 'react';
import { Calculator } from 'lucide-react';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';
import { SimulatorInputs } from '@/types/simulator';

interface SimulatorFormProps {
  inputs: SimulatorInputs;
  onInputChange: (field: keyof SimulatorInputs, value: any) => void;
  onDimensionChange: (dimension: keyof SimulatorInputs['packageDimensions'], value: number) => void;
  onCalculate: () => void;
  isCalculating: boolean;
}

const SimulatorForm = ({
  inputs,
  onInputChange,
  onDimensionChange,
  onCalculate,
  isCalculating
}: SimulatorFormProps) => {
  const productCategories = [
    { value: 'electronics', label: '電子機器' },
    { value: 'clothing', label: 'アパレル・衣類' },
    { value: 'accessories', label: 'アクセサリー' },
    { value: 'books', label: '書籍' },
    { value: 'cosmetics', label: '化粧品' },
    { value: 'food', label: '食品' },
    { value: 'toys', label: 'おもちゃ' },
    { value: 'sports', label: 'スポーツ用品' },
    { value: 'home', label: 'ホーム・生活用品' },
    { value: 'other', label: 'その他' },
  ];

  const supplierCountries = [
    { value: 'us', label: 'アメリカ' },
    { value: 'uk', label: 'イギリス' },
    { value: 'germany', label: 'ドイツ' },
    { value: 'china', label: '中国' },
    { value: 'korea', label: '韓国' },
  ];

  const shippingMethods = [
    { value: 'economy', label: 'エコノミー（最安値）' },
    { value: 'standard', label: 'スタンダード' },
    { value: 'express', label: 'エクスプレス' },
    { value: 'dhl', label: 'DHL' },
    { value: 'fedex', label: 'FedEx' },
  ];

  const domesticDestinations = [
    { value: 'tokyo', label: '東京都内' },
    { value: 'kanto', label: '関東地方' },
    { value: 'kansai', label: '関西地方' },
    { value: 'other', label: 'その他地域' },
  ];

  return (
    <div className="space-y-6">
      {/* 商品情報 */}
      <div>
        <h3 className="text-lg font-semibold text-navy-900 mb-4">商品情報</h3>
        <div className="space-y-4">
          <Select
            label="商品カテゴリー"
            value={inputs.productCategory}
            onChange={(e) => onInputChange('productCategory', e.target.value)}
            options={productCategories}
            fullWidth
          />
          
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="商品単価（USD）"
              type="number"
              min="0"
              step="0.01"
              value={inputs.productPrice}
              onChange={(e) => onInputChange('productPrice', parseFloat(e.target.value) || 0)}
              fullWidth
            />
            
            <Input
              label="購入数量"
              type="number"
              min="1"
              value={inputs.quantity}
              onChange={(e) => onInputChange('quantity', parseInt(e.target.value) || 1)}
              fullWidth
            />
          </div>
        </div>
      </div>

      {/* 仕入先・発送情報 */}
      <div>
        <h3 className="text-lg font-semibold text-navy-900 mb-4">仕入先・発送情報</h3>
        <div className="space-y-4">
          <Select
            label="仕入先国"
            value={inputs.supplierCountry}
            onChange={(e) => onInputChange('supplierCountry', e.target.value)}
            options={supplierCountries}
            fullWidth
          />
          
          <Select
            label="配送方法"
            value={inputs.shippingMethod}
            onChange={(e) => onInputChange('shippingMethod', e.target.value)}
            options={shippingMethods}
            fullWidth
          />
          
          <Input
            label="重量（kg）"
            type="number"
            min="0.1"
            step="0.1"
            value={inputs.packageWeight}
            onChange={(e) => onInputChange('packageWeight', parseFloat(e.target.value) || 0.1)}
            fullWidth
          />
          
          <div>
            <label className="block text-sm font-medium text-navy-700 mb-2">
              梱包サイズ（cm）
            </label>
            <div className="grid grid-cols-3 gap-2">
              <Input
                placeholder="長さ"
                type="number"
                min="1"
                value={inputs.packageDimensions.length}
                onChange={(e) => onDimensionChange('length', parseInt(e.target.value) || 1)}
                fullWidth
              />
              <Input
                placeholder="幅"
                type="number"
                min="1"
                value={inputs.packageDimensions.width}
                onChange={(e) => onDimensionChange('width', parseInt(e.target.value) || 1)}
                fullWidth
              />
              <Input
                placeholder="高さ"
                type="number"
                min="1"
                value={inputs.packageDimensions.height}
                onChange={(e) => onDimensionChange('height', parseInt(e.target.value) || 1)}
                fullWidth
              />
            </div>
          </div>
        </div>
      </div>

      {/* オプションサービス */}
      <div>
        <h3 className="text-lg font-semibold text-navy-900 mb-4">オプションサービス</h3>
        <div className="space-y-3">
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={inputs.qualityInspection}
              onChange={(e) => onInputChange('qualityInspection', e.target.checked)}
              className="rounded border-navy-300 text-primary-600 focus:ring-primary-500"
            />
            <span className="text-sm text-navy-700">品質検査（+3,000円）</span>
          </label>
          
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={inputs.certificationRequired}
              onChange={(e) => onInputChange('certificationRequired', e.target.checked)}
              className="rounded border-navy-300 text-primary-600 focus:ring-primary-500"
            />
            <span className="text-sm text-navy-700">認証取得支援（+5,000円）</span>
          </label>
          
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={inputs.insuranceRequired}
              onChange={(e) => onInputChange('insuranceRequired', e.target.checked)}
              className="rounded border-navy-300 text-primary-600 focus:ring-primary-500"
            />
            <span className="text-sm text-navy-700">輸送保険（商品価格の1%）</span>
          </label>
          
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={inputs.expressService}
              onChange={(e) => onInputChange('expressService', e.target.checked)}
              className="rounded border-navy-300 text-primary-600 focus:ring-primary-500"
            />
            <span className="text-sm text-navy-700">エクスプレスサービス（+8,000円）</span>
          </label>
          
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={inputs.urgentOrder}
              onChange={(e) => onInputChange('urgentOrder', e.target.checked)}
              className="rounded border-navy-300 text-primary-600 focus:ring-primary-500"
            />
            <span className="text-sm text-navy-700">緊急対応（+10,000円）</span>
          </label>
          
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={inputs.customsDeclarationSupport}
              onChange={(e) => onInputChange('customsDeclarationSupport', e.target.checked)}
              className="rounded border-navy-300 text-primary-600 focus:ring-primary-500"
            />
            <span className="text-sm text-navy-700">通関書類作成支援（+2,000円）</span>
          </label>
        </div>
      </div>

      {/* 国内配送 */}
      <div>
        <h3 className="text-lg font-semibold text-navy-900 mb-4">国内配送</h3>
        <div className="space-y-4">
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={inputs.domesticShipping}
              onChange={(e) => onInputChange('domesticShipping', e.target.checked)}
              className="rounded border-navy-300 text-primary-600 focus:ring-primary-500"
            />
            <span className="text-sm text-navy-700">国内配送を希望する</span>
          </label>
          
          {inputs.domesticShipping && (
            <Select
              label="配送先地域"
              value={inputs.domesticShippingDestination}
              onChange={(e) => onInputChange('domesticShippingDestination', e.target.value)}
              options={domesticDestinations}
              fullWidth
            />
          )}
        </div>
      </div>

      {/* 計算ボタン */}
      <div className="pt-6 border-t border-navy-200">
        <Button
          onClick={onCalculate}
          disabled={isCalculating}
          fullWidth
          size="lg"
          className="flex items-center justify-center"
        >
          {isCalculating ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              計算中...
            </>
          ) : (
            <>
              <Calculator className="h-5 w-5 mr-2" />
              計算する
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default SimulatorForm;