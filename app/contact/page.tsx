'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, Clock, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    consultationType: '輸入代行',
    targetUrl: '',
    weight: '',
    dimensions: '',
    desiredDelivery: '',
    budget: '',
    message: '',
    agree: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // API送信のシミュレーション
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      // フォームをリセット
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        consultationType: '輸入代行',
        targetUrl: '',
        weight: '',
        dimensions: '',
        desiredDelivery: '',
        budget: '',
        message: '',
        agree: false
      });
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-8 text-gray-800"
        >
          お問い合わせ
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center text-gray-600 mb-12 text-lg"
        >
          ご相談・概算見積のご依頼はお気軽に。<br />
          原則24-48時間以内にご返信します。
        </motion.p>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* 連絡先情報 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">お問い合わせ情報</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-primary-600 mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-gray-700">メール</p>
                    <p className="text-sm text-gray-600">info@aveniru.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-primary-600 mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-gray-700">電話</p>
                    <p className="text-sm text-gray-600">XXX-XXXX-XXXX</p>
                    <p className="text-xs text-gray-500">営業時間: 平日 9:00-18:00</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-primary-600 mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-gray-700">返信目安</p>
                    <p className="text-sm text-gray-600">24-48時間以内</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary-50 rounded-lg p-6">
              <h3 className="font-semibold mb-3 text-gray-800">即時連絡をご希望の方</h3>
              <p className="text-sm text-gray-600 mb-4">
                LINE・Chatworkでの相談も承っております
              </p>
              <button className="w-full px-4 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors">
                LINE で相談
              </button>
            </div>
          </motion.div>

          {/* お問い合わせフォーム */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            {submitStatus === 'success' ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-semibold mb-2 text-gray-800">送信完了</h2>
                <p className="text-gray-600">
                  お問い合わせありがとうございます。<br />
                  内容を確認の上、担当者よりご連絡させていただきます。
                </p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="mt-6 px-6 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                >
                  新しいお問い合わせ
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-xl font-semibold mb-6 text-gray-800">お問い合わせフォーム</h2>
                
                <div className="space-y-6">
                  {/* 必須項目 */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        お名前 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        会社名 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        メールアドレス <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        電話番号
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      相談区分 <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="consultationType"
                      value={formData.consultationType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="輸入代行">輸入代行</option>
                      <option value="卸">卸・法人仕入れ</option>
                      <option value="見積">見積もり依頼</option>
                      <option value="その他">その他</option>
                    </select>
                  </div>
                  
                  {/* 任意項目 */}
                  <div className="border-t pt-6">
                    <p className="text-sm text-gray-500 mb-4">以下は任意項目です</p>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          対象商品URL
                        </label>
                        <input
                          type="url"
                          name="targetUrl"
                          value={formData.targetUrl}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            想定重量
                          </label>
                          <input
                            type="text"
                            name="weight"
                            value={formData.weight}
                            onChange={handleInputChange}
                            placeholder="例: 1kg"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            寸法
                          </label>
                          <input
                            type="text"
                            name="dimensions"
                            value={formData.dimensions}
                            onChange={handleInputChange}
                            placeholder="例: 30x20x10cm"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                          />
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            希望納期
                          </label>
                          <input
                            type="text"
                            name="desiredDelivery"
                            value={formData.desiredDelivery}
                            onChange={handleInputChange}
                            placeholder="例: 2週間以内"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            概算予算
                          </label>
                          <input
                            type="text"
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                            placeholder="例: 10万円"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      お問い合わせ内容 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  
                  <div>
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        name="agree"
                        checked={formData.agree}
                        onChange={handleInputChange}
                        required
                        className="mt-1 mr-2"
                      />
                      <span className="text-sm text-gray-600">
                        <a href="/legal/privacy" className="text-primary-600 hover:underline">プライバシーポリシー</a>
                        に同意する <span className="text-red-500">*</span>
                      </span>
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.agree}
                    className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>送信中...</>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        送信する
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}