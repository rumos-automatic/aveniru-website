import { NextRequest, NextResponse } from 'next/server';
import { createCanvas } from 'canvas';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name') || '大岩 涼太';
  const width = parseInt(searchParams.get('width') || '300');
  const height = parseInt(searchParams.get('height') || '60');
  const fontSize = parseInt(searchParams.get('fontSize') || '24');

  try {
    // Canvasを作成
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    // 背景色（透明）
    ctx.fillStyle = 'transparent';
    ctx.fillRect(0, 0, width, height);

    // フォント設定
    ctx.fillStyle = '#1e293b'; // navy-800
    ctx.font = `${fontSize}px "Hiragino Sans", "ヒラギノ角ゴ Pro", "Yu Gothic Medium", "游ゴシック Medium", YuGothic, "游ゴシック体", "Meiryo UI", sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // テキストを描画
    ctx.fillText(name, width / 2, height / 2);

    // 画像をBufferとして取得
    const buffer = canvas.toBuffer('image/png');

    // レスポンスヘッダーを設定
    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000', // 1年間キャッシュ
        'X-Robots-Tag': 'noindex, nofollow', // SEO対策
      },
    });
  } catch (error) {
    console.error('画像生成エラー:', error);
    return NextResponse.json(
      { error: '画像の生成に失敗しました' },
      { status: 500 }
    );
  }
}