import { Text, View } from 'react-native';
import { Card, Rating } from 'react-native-elements';
import { baseUrl } from '../shared/baseUrl';

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;
  return (
    <View>
      <Text>{JSON.stringify(product)}</Text>

      <Card containerStyle={{ padding: 0, width: 165 }}>
        <Card.Image source={{ uri: product.image }} />
        <Text
          numberOfLines={2}
          style={{
            color: 'black',
            textAlign: 'center',
            fontSize: 20
          }}
        >
          {product.title}
        </Text>
        <Rating
          readonly
          startingValue={product.rating.rate}
          imageSize={20}
          style={{
            alignItems: 'flex-start',
            paddingBottom: '5%',
            paddingLeft: 5
          }}
        />
        <Text style={{ textAlign: 'center', fontSize: 18 }}>
          ${product.price}
        </Text>
      </Card>
    </View>
  );
};

export default ProductDetailScreen;
