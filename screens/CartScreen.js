import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { List, ListItem, Card, PricingCard } from 'react-native-elements';

const PRODUCTS = [
  {
    id: 'D5DYR6VFN1B4Y',
    name: 'Lion 3D Printed Hoodie',
    price: '$20.00',
    picture_url:
      'https://gloimg.gbtcdn.com/gb/pdm-product-pic/Clothing/2016/09/17/goods-img/1474255033919918033.jpg',
  },
  {
    id: '1KYB8N5506N6R',
    name: 'Aisaly Men’s Boxer Briefs',
    price: '$8.00',
    picture_url:
      'https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2016/07/05/goods-img/1497895407648455670.jpg',
  },
  {
    id: 'S26XQRS8EQY40',
    name: 'Zaful Woman Jumpsuit Floral Print',
    price: '$40.00',
    picture_url:
      'https://gloimg.gbtcdn.com/gb/ebay/2017/201702/20170221/goods-img/1497922629672128909.jpg',
  },
];
export default class CartScreen extends React.Component {
  static navigationOptions = {
    title: 'Cart',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#151C43',
      borderBottomColor: '#2F95D6',
    },
    headerTitleStyle: {
      fontSize: 18,
    },
  };

  renderCartItems = () =>
    PRODUCTS.map(product => (
      <Card wrapperStyle={styles.cartCard} key={product.id}>
        <Image style={{ width: 75, height: 75 }} source={{ uri: product.picture_url }} />
        <View style={styles.productContent}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productDescription}>Product Description</Text>
        </View>
        <View>
          <Text style={styles.productPrice}>{product.price}</Text>
        </View>
      </Card>
    ));

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.storeName}>American Apparel</Text>
        {this.renderCartItems()}
        <View style={styles.totalContainer}>
          <Text style={styles.totalStyle}>
            — Total:
            <Text style={styles.totalNumber}>$68.00</Text> —
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  storeName: {
    fontSize: 14,
    marginBottom: 10,
    marginLeft: 10,
    marginTop: 10,
  },
  cartCard: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: 14,
  },
  productDescription: {
    fontSize: 11,
    color: 'gray',
  },
  productPrice: {
    fontSize: 18,
    color: 'green',
    paddingRight: 10,
  },
  totalContainer: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  totalStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    marginRight: 20,
    marginBottom: 100,
    color: 'gray',
  },
  totalNumber: {
    color: 'black',
  },
});
