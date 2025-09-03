# 画像パス更新ガイド

## 現在の外部URL → ローカルパスへの変更箇所

### app/page.tsx の変更箇所

#### 1. ヒーロー画像（139-144行目）
```tsx
// 変更前
src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&h=675"

// 変更後
src="/images/hero/hero-logistics.jpg"
```

#### 2. 品質管理画像（332-337行目）
```tsx
// 変更前
src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300"

// 変更後
src="/images/services/quality-control.jpg"
```

#### 3. 物流センター画像（340-345行目）
```tsx
// 変更前
src="https://images.unsplash.com/photo-1565008576549-57569a49371d?w=400&h=300"

// 変更後
src="/images/services/logistics-center.jpg"
```

#### 4. カスタマーサポート画像（348-353行目）
```tsx
// 変更前
src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&h=300"

// 変更後
src="/images/services/customer-support.jpg"
```

## 画像生成後の実装手順

1. **画像生成AIでプロンプトを使用**
   - `image-prompts.yaml` の各プロンプトを使用
   - 指定されたサイズで生成

2. **生成した画像を配置**
   ```bash
   # 例：ヒーロー画像を配置
   cp [生成した画像] aveniru-website/public/images/hero/hero-logistics.jpg
   ```

3. **コードを更新**
   ```bash
   # VS Codeなどで app/page.tsx を開いて画像パスを更新
   ```

4. **開発サーバーで確認**
   ```bash
   cd aveniru-website
   npm run dev
   ```

5. **最適化確認**
   - Chrome DevToolsのNetworkタブで画像サイズを確認
   - Lighthouseでパフォーマンスを測定

## next.config.mjs の設定（必要に応じて）

現在の設定で問題ありませんが、外部画像も併用する場合：

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      // 他の外部画像ドメインを追加
    ],
  },
}

export default nextConfig
```

## 画像が用意できるまでの一時対応

画像生成AIで画像を作成する前に、プレースホルダー画像で動作確認したい場合：

1. **プレースホルダーサービスの利用**
   ```tsx
   src="/images/hero/hero-logistics.jpg"
   // ↓ 一時的に
   src="https://via.placeholder.com/1200x675/0066e6/ffffff?text=International+Logistics"
   ```

2. **ローカルで仮画像作成**
   - Canvaなどで簡単な画像を作成
   - 適切なディレクトリに配置

## チェックリスト

- [ ] 画像生成AIでプロンプトから画像を生成
- [ ] 生成画像を適切なディレクトリに配置
- [ ] app/page.tsx の画像パスを更新
- [ ] 他のページの画像も必要に応じて更新
- [ ] npm run dev で表示確認
- [ ] npm run build でビルド確認
- [ ] Lighthouseでパフォーマンステスト