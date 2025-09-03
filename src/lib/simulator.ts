import { SimulatorInputs, SimulatorResults, CostBreakdown } from '@/types/simulator';

// 為替レート（実際のアプリケーションでは外部APIから取得）
const EXCHANGE_RATE = 150; // 1 USD = 150 JPY

// 関税率（商品カテゴリー別）
const CUSTOMS_DUTY_RATES: Record<string, number> = {
  electronics: 0.05, // 5%
  clothing: 0.12, // 12%
  accessories: 0.08, // 8%
  books: 0.0, // 0%
  cosmetics: 0.06, // 6%
  food: 0.15, // 15%
  toys: 0.03, // 3%
  sports: 0.07, // 7%
  home: 0.04, // 4%
  other: 0.05, // 5%
};

// 配送方法別料金（重量1kgあたり、円）
const SHIPPING_RATES: Record<string, number> = {
  economy: 800,
  standard: 1200,
  express: 2000,
  dhl: 2500,
  fedex: 2300,
};

// 国別配送日数
const SHIPPING_DAYS: Record<string, Record<string, number>> = {
  us: { economy: 14, standard: 10, express: 5, dhl: 3, fedex: 3 },
  uk: { economy: 18, standard: 12, express: 6, dhl: 4, fedex: 4 },
  germany: { economy: 16, standard: 11, express: 6, dhl: 4, fedex: 4 },
  china: { economy: 10, standard: 7, express: 4, dhl: 3, fedex: 3 },
  korea: { economy: 7, standard: 5, express: 3, dhl: 2, fedex: 2 },
};

export function calculateImportCosts(inputs: SimulatorInputs): SimulatorResults {
  // 商品代金（円換算）
  const productCost = inputs.productPrice * inputs.quantity * EXCHANGE_RATE;
  
  // 国際送料計算
  const baseShippingRate = SHIPPING_RATES[inputs.shippingMethod] || SHIPPING_RATES.standard;
  let shippingCost = baseShippingRate * inputs.packageWeight;
  
  // 容積重量の計算（長さ × 幅 × 高さ ÷ 5000）
  const volumeWeight = (inputs.packageDimensions.length * inputs.packageDimensions.width * inputs.packageDimensions.height) / 5000;
  const chargeableWeight = Math.max(inputs.packageWeight, volumeWeight);
  shippingCost = baseShippingRate * chargeableWeight;
  
  // 関税計算
  const dutyRate = CUSTOMS_DUTY_RATES[inputs.productCategory] || CUSTOMS_DUTY_RATES.other;
  const customsDuty = productCost * dutyRate;
  
  // 消費税計算（商品代金 + 送料 + 関税）× 10%
  const consumptionTax = (productCost + shippingCost + customsDuty) * 0.1;
  
  // サービス料（商品代金の15%、最低5,000円）
  const serviceFee = Math.max(productCost * 0.15, 5000);
  
  // オプション料金
  let optionFees = 0;
  if (inputs.qualityInspection) optionFees += 3000;
  if (inputs.certificationRequired) optionFees += 5000;
  if (inputs.insuranceRequired) optionFees += productCost * 0.01;
  if (inputs.expressService) optionFees += 8000;
  if (inputs.urgentOrder) optionFees += 10000;
  if (inputs.customsDeclarationSupport) optionFees += 2000;
  
  // 国内配送料
  let domesticShippingCost = 0;
  if (inputs.domesticShipping) {
    const baseRate = inputs.domesticShippingDestination === 'tokyo' ? 800 : 1200;
    domesticShippingCost = baseRate + (inputs.packageWeight * 100);
  }
  
  // 合計着地原価
  const totalLandedCost = productCost + shippingCost + customsDuty + consumptionTax + serviceFee + optionFees + domesticShippingCost;
  
  // 推奨販売価格（着地原価 × 1.3〜1.5）
  const recommendedSellingPrice = Math.ceil(totalLandedCost * 1.4);
  
  // 利益率
  const profitMargin = ((recommendedSellingPrice - totalLandedCost) / recommendedSellingPrice) * 100;
  
  // 予想配送日数
  const countryDays = SHIPPING_DAYS[inputs.supplierCountry] || SHIPPING_DAYS.us;
  let estimatedDeliveryDays = countryDays[inputs.shippingMethod] || countryDays.standard;
  if (inputs.expressService) estimatedDeliveryDays = Math.max(estimatedDeliveryDays - 2, 2);
  if (inputs.urgentOrder) estimatedDeliveryDays = Math.max(estimatedDeliveryDays - 1, 1);
  
  // コスト内訳
  const breakdown: CostBreakdown[] = [
    {
      category: '商品代金',
      amount: productCost,
      percentage: (productCost / totalLandedCost) * 100,
      description: `${inputs.productPrice} USD × ${inputs.quantity}個 × ${EXCHANGE_RATE}円`
    },
    {
      category: '国際送料',
      amount: shippingCost,
      percentage: (shippingCost / totalLandedCost) * 100,
      description: `${inputs.shippingMethod} ${chargeableWeight}kg`
    },
    {
      category: '関税',
      amount: customsDuty,
      percentage: (customsDuty / totalLandedCost) * 100,
      description: `${(dutyRate * 100).toFixed(1)}%`
    },
    {
      category: '消費税',
      amount: consumptionTax,
      percentage: (consumptionTax / totalLandedCost) * 100,
      description: '10%'
    },
    {
      category: 'サービス料',
      amount: serviceFee,
      percentage: (serviceFee / totalLandedCost) * 100,
      description: '輸入代行手数料'
    }
  ];
  
  if (optionFees > 0) {
    breakdown.push({
      category: 'オプション料金',
      amount: optionFees,
      percentage: (optionFees / totalLandedCost) * 100,
      description: '検査・認証・保険等'
    });
  }
  
  if (domesticShippingCost > 0) {
    breakdown.push({
      category: '国内配送料',
      amount: domesticShippingCost,
      percentage: (domesticShippingCost / totalLandedCost) * 100,
      description: inputs.domesticShippingDestination
    });
  }
  
  return {
    productCost,
    shippingCost,
    customsDuty,
    consumptionTax,
    serviceFee,
    optionFees,
    domesticShippingCost,
    totalLandedCost,
    recommendedSellingPrice,
    profitMargin,
    exchangeRate: EXCHANGE_RATE,
    estimatedDeliveryDays,
    breakdown
  };
}