import { Text, View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Loading from '../../components/LoadingComponent';
import ProductsList from './ProductsList';
import FilterProducts from './FilterProducts';

const ProductsDisplay = ({ navigation }) => {
  const products = useSelector((state) => state.products.productsArray);
  const isLoading = useSelector((state) => state.products.isLoading);
  const errMsg = useSelector((state) => state.products.errMsg);

  const [sortedProducts, setSortedProducts] = useState(products || []);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    setSortedProducts(products);
  }, [products]);

  const handleSortChange = (value) => {
    // Function to handle sort option change
    setFilter(value);
    setSortedProducts(filterProducts(value));
  };

  const filterProducts = (option) => {
    switch (option) {
      case 'All':
        return products;
      case 'Featured':
        return products.filter((product) => product.featured);
      case 'Mens':
        return products.filter(
          (product) => product.category === "men's clothing"
        );
      case 'Womens':
        return products.filter(
          (product) => product.category === "women's clothing"
        );
      case 'Jewelery':
        return products.filter((product) => product.category === 'jewelery');
      case 'Electronics':
        return products.filter((product) => product.category === 'electronics');
      case 'AZ':
        return [...products].sort((a, b) => a.title.localeCompare(b.title));
      case 'ZA':
        return [...products].sort((a, b) => b.title.localeCompare(a.title));
      case 'LowToHigh':
        return [...products].sort((a, b) => a.price - b.price);
      case 'HighToLow':
        return [...products].sort((a, b) => b.price - a.price);
      case 'OldToNew':
        return [...products].sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        );
      case 'NewToOld':
        return [...products].sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
      default:
        return products;
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  if (errMsg) {
    return <Text>Error: {errMsg}</Text>;
  }

  return (
    <View>
      <FilterProducts filter={filter} handleSortChange={handleSortChange} />
      <ProductsList navigation={navigation} products={sortedProducts} />
    </View>
  );
};

export default ProductsDisplay;
