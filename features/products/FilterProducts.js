import { Text, View, Platform, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const FilterProducts = (props) => {
  const { filter, handleSortChange } = props;

  return (
    <View style={styles.container}>
      <Text
        style={{
          flex: 1,
          justifyContent: 'center',
          textAlign: 'center',
          marginTop: 15
        }}
      >
        Sort By:
      </Text>
      <View
        style={
          Platform.OS === 'ios'
            ? pickerStyles.inputIOS
            : pickerStyles.inputAndroid
        }
      >
        <RNPickerSelect
          style={pickerStyles}
          onValueChange={(value) => handleSortChange(value)}
          value={filter}
          items={[
            { label: 'All', value: 'All' },
            { label: 'Featured', value: 'Featured' },
            { label: "Men's Clothing", value: 'Mens' },
            { label: "Womens's Clothing", value: 'Womens' },
            { label: 'Jewelery', value: 'Jewelery' },
            { label: 'Electronics', value: 'Electronics' },
            { label: 'Alphabetically, A-Z', value: 'AZ' },
            { label: 'Alphabetically, Z-A', value: 'ZA' },
            { label: 'Price, Low to High', value: 'LowToHigh' },
            { label: 'Price, High to Low', value: 'HighToLow' }
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    borderWidth: 0.5,
    borderColor: 'gray',
    justifyContent: 'center'
  }
});

const pickerStyles = StyleSheet.create({
  inputIOS: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 0,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    color: 'black',
    paddingRight: 30 // to ensure the text is never behind the icon
  },
  inputAndroid: {
    flex: 2,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 0,
    borderWidth: 0.5,
    borderColor: 'gray',
    color: 'black',
    paddingRight: 30 // to ensure the text is never behind the icon
  }
});

export default FilterProducts;
