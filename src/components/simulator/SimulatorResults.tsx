'use client';

import { 
  BarChart3, 
  DollarSign, 
  TrendingUp, 
  Clock, 
  Download,
  Share2 
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { SimulatorResults as Results } from '@/types/simulator';

interface SimulatorResultsProps {
  results: Results;
}

const SimulatorResults = ({ results }: SimulatorResultsProps) => {
  // 円グラフ用データ
  const pieData = results.breakdown.map((item, index) => ({
    name: item.category,
    value: item.amount,
    percentage: item.percentage,
    fill: `hsl(${220 + index * 40}, 70%, ${50 + index * 10}%)`
  }));

  // 棒グラフ用データ
  const barData = results.breakdown.map(item => ({
    category: item.category,
    amount: item.amount
  }));

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('ja-JP', {
      style: 'currency',
      currency: 'JPY',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const COLORS = ['#2563eb', '#7c3aed', '#059669', '#dc2626', '#ea580c', '#ca8a04', '#4338ca'];

  return (
    <div className="space-y-6">
      {/* サマリーカード */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card padding="md" className="text-center">
          <DollarSign className="h-8 w-8 text-primary-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-navy-900">
            {formatCurrency(results.totalLandedCost)}
          </div>
          <div className="text-sm text-navy-600">着地原価</div>
        </Card>
        
        <Card padding="md" className="text-center">
          <TrendingUp className="h-8 w-8 text-accent-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-navy-900">
            {formatCurrency(results.recommendedSellingPrice)}
          </div>
          <div className="text-sm text-navy-600">推奨販売価格</div>
        </Card>
      </div>

      {/* 詳細情報 */}
      <Card padding="lg">
        <h3 className="heading-3 mb-6">計算結果詳細</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-semibold text-navy-900 mb-3">コスト内訳</h4>
            <div className="space-y-3">
              {results.breakdown.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-navy-50 rounded-lg">
                  <div>
                    <div className="font-medium text-navy-900">{item.category}</div>
                    <div className="text-sm text-navy-600">{item.description}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-navy-900">
                      {formatCurrency(item.amount)}
                    </div>
                    <div className="text-sm text-navy-600">
                      {item.percentage.toFixed(1)}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-navy-900 mb-3">その他の情報</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span className="text-navy-700">利益率</span>
                <span className="font-semibold text-green-700">
                  {results.profitMargin.toFixed(1)}%
                </span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <span className="text-navy-700">為替レート</span>
                <span className="font-semibold text-blue-700">
                  1 USD = {results.exchangeRate} JPY
                </span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-orange-600" />
                  <span className="text-navy-700">予想配送日数</span>
                </div>
                <span className="font-semibold text-orange-700">
                  {results.estimatedDeliveryDays}日
                </span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* グラフ表示 */}
      <Card padding="lg">
        <h3 className="heading-3 mb-6 flex items-center">
          <BarChart3 className="h-6 w-6 mr-2 text-primary-600" />
          コスト構成
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 円グラフ */}
          <div>
            <h4 className="font-semibold text-navy-900 mb-4 text-center">構成比率</h4>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percentage }) => `${name} ${percentage.toFixed(1)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => formatCurrency(value)} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          {/* 棒グラフ */}
          <div>
            <h4 className="font-semibold text-navy-900 mb-4 text-center">金額比較</h4>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={barData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="category" 
                  angle={-45}
                  textAnchor="end"
                  height={80}
                  fontSize={12}
                />
                <YAxis 
                  tickFormatter={(value) => `¥${(value / 1000).toFixed(0)}K`}
                  fontSize={12}
                />
                <Tooltip formatter={(value: number) => formatCurrency(value)} />
                <Bar dataKey="amount" fill="#2563eb" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Card>

      {/* アクションボタン */}
      <Card padding="lg">
        <h3 className="heading-3 mb-4">この結果をもとに</h3>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="primary" className="flex items-center justify-center">
            <Download className="h-4 w-4 mr-2" />
            結果をダウンロード
          </Button>
          
          <Button variant="secondary" className="flex items-center justify-center">
            <Share2 className="h-4 w-4 mr-2" />
            結果を共有
          </Button>
          
          <Button 
            variant="accent" 
            className="flex items-center justify-center"
            onClick={() => window.open('/contact', '_blank')}
          >
            詳細見積もりを依頼
          </Button>
        </div>
        
        <div className="mt-4 p-4 bg-accent-50 border border-accent-200 rounded-lg">
          <p className="text-sm text-accent-800">
            <strong>注意：</strong>この結果は概算です。実際の料金は商品・仕入先・時期により変動する可能性があります。
            正確な見積もりについては、お気軽にお問い合わせください。
          </p>
        </div>
      </Card>
    </div>
  );
};

export default SimulatorResults;