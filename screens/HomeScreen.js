import { Text, View } from 'react-native';
import Loading from '../components/LoadingComponent';
import ProductsDisplay from '../features/products/ProductsDisplay';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <ProductsDisplay navigation={navigation} />
    </View>
  );
};

export default HomeScreen;
