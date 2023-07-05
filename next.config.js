/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "cdn.yemek.com",
      "www.tasteofhome.com",
      "www.torani.com",
      "www.foodandwine.com",
      "images.ctfassets.net",
      "i.nefisyemektarifleri.com",
      "www.foodandwine.com",
      "https://shottbeverages.com",
      "https://www.allrecipes.com",
      "https://tarasmulticulturaltable.com",
      "https://izzycooking.com",
      "https://assets.epicurious.com",
      "https://www.thespruceeats.com",
      "https://coffeeaffection.com",
      "https://www.thespruceeats.com",
    ],
  },
};

module.exports = nextConfig;
