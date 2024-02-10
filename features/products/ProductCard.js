import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { baseUrl } from '../shared/baseUrl';

const ProductCard = ({ navigation, product }) => {
  if (product) {
    return (
      <Card
        containerStyle={{ padding: 0 }}
        onPress={() => navigation.navigate('ProductDetail', { product })}
      >
        <Card.Image source={{ uri: baseUrl + product.image }}>
          <View style={{ justifyContent: 'center', flex: 1 }}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 20
              }}
            >
              {product.title}
            </Text>
          </View>
        </Card.Image>
        <Text style={{ margin: 20 }}>{product.description}</Text>
      </Card>
    );
  }
  return <View />;
};

export default ProductCard;
