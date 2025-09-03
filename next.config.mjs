/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
  },
  // SEO対策：検索エンジンのクロールを制限
  async headers() {
    return [
      {
        source: '/company',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
    ];
  },
};

export default nextConfig;