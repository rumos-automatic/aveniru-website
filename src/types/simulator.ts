export interface SimulatorInputs {
  // 商品情報
  productCategory: string;
  productPrice: number; // USD
  quantity: number;
  
  // 仕入先・発送情報
  supplierCountry: string;
  shippingMethod: string;
  packageWeight: number; // kg
  packageDimensions: {
    length: number; // cm
    width: number;
    height: number;
  };
  
  // 品質・検査
  qualityInspection: boolean;
  certificationRequired: boolean;
  
  // 保険・オプション
  insuranceRequired: boolean;
  expressService: boolean;
  
  // 日本国内配送
  domesticShipping: boolean;
  domesticShippingDestination: string;
  
  // その他
  urgentOrder: boolean;
  customsDeclarationSupport: boolean;
}

export interface SimulatorResults {
  // コスト内訳
  productCost: number; // 商品代金（円）
  shippingCost: number; // 国際送料（円）
  customsDuty: number; // 関税（円）
  consumptionTax: number; // 消費税（円）
  serviceFee: number; // サービス料（円）
  optionFees: number; // オプション料金（円）
  domesticShippingCost: number; // 国内送料（円）
  
  // 合計
  totalLandedCost: number; // 着地原価（円）
  recommendedSellingPrice: number; // 推奨販売価格（円）
  profitMargin: number; // 利益率（%）
  
  // 詳細
  exchangeRate: number; // 為替レート
  estimatedDeliveryDays: number; // 予想配送日数
  breakdown: CostBreakdown[];
}

export interface CostBreakdown {
  category: string;
  amount: number;
  percentage: number;
  description: string;
}