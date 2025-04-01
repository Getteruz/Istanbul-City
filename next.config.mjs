/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['grm-upload.getter.uz'],
  },
  trailingSlash: true,  // Для добавления слеша в конце URL (полезно при экспорте статических файлов)
  
  // Настройки для статического экспорта
  exportPathMap: async function () {
    return {
      '/': { page: '/' }, // Главная страница
      // Здесь ты можешь добавить другие страницы, если нужно
    };
  },
};

export default nextConfig;
