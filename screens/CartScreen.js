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
    id: 'PB2DHXHRT7M4P',
    picture_url:
      'https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2017/05/26/goods-img/1501802167773711774.jpg',
  },
  {
    id: 'ZTP9SJHZ5HW9J',
    picture_url:
      'https://gloimg.gbtcdn.com/gb/pdm-product-pic/Clothing/2016/04/15/goods-img/1509067970790634901.jpg',
  },
  {
    id: 'D5DYR6VFN1B4Y',
    picture_url:
      'https://gloimg.gbtcdn.com/gb/pdm-product-pic/Clothing/2016/09/17/goods-img/1474255033919918033.jpg',
  },
  {
    id: 'VK5TNFNKFD40T',
    picture_url: 'https://gloimg.gbtcdn.com/gb/2015/201508/goods-img/1505948943224268717.jpg',
  },
  {
    id: 'GX9Q1ABB3Q508',
    picture_url:
      'https://gloimg.gbtcdn.com/gb/pdm-product-pic/Clothing/2016/12/23/goods-img/1502936501696411262.jpg',
  },
  {
    id: '1KYB8N5506N6R',
    picture_url:
      'https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2016/07/05/goods-img/1497895407648455670.jpg',
  },
  {
    id: '0C02RR0EXVW2J',
    picture_url:
      'https://gloimg.gbtcdn.com/gb/ebay/2016/201607/20160709/goods-img/1497922598907733538.jpg',
  },
  {
    id: 'GDGXX7HD5YDHY',
    picture_url:
      'https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2017/03/15/goods-img/1502331037464007648.jpg',
  },
  {
    id: 'S26XQRS8EQY40',
    picture_url:
      'https://gloimg.gbtcdn.com/gb/ebay/2017/201702/20170221/goods-img/1497922629672128909.jpg',
  },
  {
    id: '7KFDW65PCKVQR',
    picture_url:
      'https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2017/02/11/goods-img/1506314139535422840.jpg',
  },
  {
    id: 'RMJGWK4V1PP5M',
    picture_url:
      'https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2017/02/14/goods-img/1487097451379086025.jpg',
  },
  {
    id: '9JYM5F7GK0AXM',
    picture_url:
      'https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2017/03/27/goods-img/1506314887692330222.jpg',
  },
  {
    id: '3A3F572YBZK8C',
    picture_url:
      'https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2017/06/07/goods-img/1496797576822698158.jpg',
  },
  {
    id: '3X43MD7G3168E',
    picture_url:
      'https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2017/10/12/goods-img/1507770860305930303.jpg',
  },
  {
    id: '9ZPXCTGJ12J1Y',
    picture_url:
      'https://gloimg.gbtcdn.com/gb/ebay/2017/201702/20170207/goods-img/1507745671321102352.jpg',
  },
];
export default class CartScreen extends React.Component {
  static navigationOptions = {
    title: 'Cart',
  };

  renderCartItems = () =>
    PRODUCTS.map(product => (
      <Card wrapperStyle={styles.cartCard} key={product.id}>
        <Image style={{ width: 75, height: 75 }} source={{ uri: product.picture_url }} />
        <View style={styles.productContent}>
          <Text style={styles.productName}>Product Name</Text>
          <Text style={styles.productDescription}>Product Description</Text>
        </View>
        <View>
          <Text style={styles.productPrice}>$24</Text>
        </View>
      </Card>
    ));

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.storeName}>American Apparel</Text>
        {this.renderCartItems()}
        <PricingCard
          color="#4f9deb"
          title="Total"
          price="$124.00"
          info={[]}
          button={{ title: 'CHECKOUT', icon: 'attach money' }}
          containerStyle={{ marginBottom: 40 }}
        />
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
});
