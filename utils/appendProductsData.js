// append additional properties to product data
// testing featured by selecting 4 random products to be featured
export const appendProductsData = (products) => {
  const featuredIndices = [
    Math.floor(Math.random() * products.length),
    Math.floor(Math.random() * products.length),
    Math.floor(Math.random() * products.length),
    Math.floor(Math.random() * products.length)
  ];
  return products.map((product, idx) => ({
    ...product,
    date: new Date(Date.now()).toISOString(),
    featured: featuredIndices.includes(idx) ? true : false
  }));
};
