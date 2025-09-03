# 画像管理ガイド

## 画像の保存場所

### 推奨ディレクトリ構造
```
aveniru-website/
└── public/
    └── images/
        ├── hero/          # ヒーローセクション用大型画像
        ├── services/      # サービス関連画像
        ├── about/         # 会社情報関連画像
        ├── icons/         # アイコン・小画像
        └── misc/          # その他の画像
```

## セットアップ手順

### 1. ディレクトリ作成
```bash
cd aveniru-website
mkdir -p public/images/hero
mkdir -p public/images/services
mkdir -p public/images/about
mkdir -p public/images/icons
mkdir -p public/images/misc
```

### 2. 画像生成後の配置

生成した画像は以下のように配置してください：

- `hero-logistics.jpg` → `public/images/hero/`
- `quality-control.jpg` → `public/images/services/`
- `logistics-center.jpg` → `public/images/services/`
- `customer-support.jpg` → `public/images/services/`
- `import-process.jpg` → `public/images/services/`
- `customs-clearance.jpg` → `public/images/services/`
- `packaging-service.jpg` → `public/images/services/`
- `contact-support.jpg` → `public/images/misc/`
- `company-office.jpg` → `public/images/about/`
- アイコン類 → `public/images/icons/`

### 3. コードでの参照方法

Next.jsでは、publicディレクトリ内のファイルは`/`から始まるパスで参照します：

```tsx
// 変更前（外部URL）
<Image
  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&h=675"
  alt="国際物流のイメージ"
  width={1200}
  height={675}
/>

// 変更後（ローカル画像）
<Image
  src="/images/hero/hero-logistics.jpg"
  alt="国際物流のイメージ"
  width={1200}
  height={675}
/>
```

## 画像最適化のベストプラクティス

### 1. フォーマット
- 写真: JPEG形式（品質85-90%）
- アイコン・ロゴ: PNG形式（透過が必要な場合）
- 可能であればWebP形式も用意（Next.jsが自動変換）

### 2. サイズ最適化
- ヒーロー画像: 最大1920x1080px
- サムネイル: 400-800px幅
- アイコン: 200x200px
- ファイルサイズ: 可能な限り200KB以下

### 3. 命名規則
- 小文字英数字とハイフンのみ使用
- 説明的な名前を付ける
- 例: `hero-logistics.jpg`, `icon-fast-delivery.png`

## 画像生成AI推奨設定

### Midjourney
```
--ar 16:9 --q 2 --v 6
```

### DALL-E 3
- Size: 1792x1024 (横長)
- Quality: HD
- Style: Natural

### Stable Diffusion XL
- Steps: 30-50
- CFG Scale: 7-8
- Sampler: DPM++ 2M Karras

## 実装時の注意点

1. **優先度の設定**
   - ヒーロー画像には `priority` プロパティを追加
   - スクロール下の画像は遅延読み込み（デフォルト）

2. **alt属性**
   - SEOとアクセシビリティのため必ず設定
   - 日本語で具体的な説明を記載

3. **レスポンシブ対応**
   - `fill` プロパティと `object-fit` の組み合わせ
   - または `sizes` プロパティで画面幅に応じた最適化

## トラブルシューティング

### 画像が表示されない場合
1. ファイルパスを確認（大文字小文字を含む）
2. ファイル拡張子を確認
3. `npm run dev` を再起動
4. ブラウザのキャッシュをクリア

### ビルドエラーが発生する場合
1. 画像ファイルが存在することを確認
2. next.config.mjs の画像設定を確認
3. 外部URLを使用する場合は、ドメインを設定に追加