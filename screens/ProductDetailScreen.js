import { Text } from 'react-native';
import Loading from '../components/LoadingComponent';

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;
  return <Text>Product Detail</Text>;
};

export default ProductDetailScreen;
