/* eslint-disable react/react-in-jsx-scope */
import {
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const categories = [
  {id: 1, name: 'fish', image: require('../assets/Image.jpeg')},
  {id: 2, name: 'rice', image: require('../assets/fish.jpg')},
  {id: 3, name: 'drinks', image: require('../assets/rice.jpg')},
  {id: 4, name: 'salad', image: require('../assets/Image.jpeg')},
  {id: 5, name: 'food', image: require('../assets/fish.jpg')},
  {id: 6, name: 'fruits', image: require('../assets/rice.jpg')},
];
const products = [
  {categoryId: 1, product: [{name: 'دنيس'}, {name: 'سلمون'}]},
  {categoryId: 2, product: [{name: 'رز حضرمي'}, {name: 'رز برياني'}]},
];

/* How to filter arrays in react native and display content based on id */
const homeScreen = ({navigation}) => {
  const Pressed = id => {
    const fliterdProduct = products.filter(i => i.categoryId === id);
  };
  const onIconPressed = () => {};
  return (
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'http://cafesriyadh.com/wp-content/uploads/2020/10/2-4-640x360.jpg',
            }}
            style={styles.Image}
            resizeMode="cover"
          />
          <TouchableOpacity style={styles.Touch} onPress={onIconPressed}>
            <Icon name="chevron-back-outline" color={'#000000'} size={25} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerContainer}>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Enter your name" style={styles.Input} />
          </View>
          <TouchableOpacity style={styles.Filter}>
            <Icon name="filter-circle-outline" size={30} color={'black'} />
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.View3}>
          {categories.map(i => (
            <TouchableOpacity
              key={i.id}
              style={styles.TouchOpacity}
              onPress={() => Pressed(i.id)}>
              <Image source={i.image} style={styles.Image1} />
              <Text style={styles.Text1}> {i.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};
export default homeScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#11d3ed',
    flex: 1,
  },
  Image: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  imageContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
    padding: 10,
    alignItems: 'center',
  },
  inputContainer: {
    width: '85%',
    marginLeft: 10,
  },
  Input: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '95%',
  },
  viewContainer: {
    flexDirection: 'column',
  },
  Touch: {
    backgroundColor: 'white',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Image1: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  View3: {
    padding: 10,
    margin: 10,
    flexDirection: 'row',
    paddingEnd: 50,
  },
  View9: {
    padding: 15,
  },
  imgae4: {
    width: 100,
    height: 100,
    marginLeft: 10,
    borderRadius: 7,
  },
  image5: {
    width: 100,
    height: 100,
    marginLeft: 10,
    borderRadius: 7,
  },
  Footer: {
    padding: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Text1: {
    // textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  TouchOpacity: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginLeft: 25,
  },
  headerContainer: {
    marginTop: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  Filter: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
  },
});
