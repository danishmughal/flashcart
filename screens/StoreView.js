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
export default class StoreView extends React.Component {
  static navigationOptions = {
    title: 'FlashCart',
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
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('CustomerDetail')}
        key={product.id}
      >
        <Card wrapperStyle={styles.cartCard}>
          <Image
            style={{ width: 75, height: 75, borderRadius: 37.5 }}
            source={{ uri: product.picture_url }}
          />
          <View style={styles.customerContent}>
            <Text style={styles.customerName}>Customer Name</Text>
            <Text style={styles.customerPhone}>123-456-7890</Text>
            <Text style={styles.customerTotal}>$24.00</Text>
          </View>
        </Card>
      </TouchableOpacity>
    ));

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.activeCustomers}>
          Active Customers:
          <Text style={styles.activeCustomersText}>16</Text>
        </Text>
        {this.renderCartItems()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  activeCustomers: {
    fontSize: 24,
    marginBottom: 10,
    marginLeft: 10,
    marginTop: 10,
    fontWeight: 'bold',
  },
  activeCustomersText: {
    color: '#A159A0',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  cartCard: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  customerContent: {
    paddingLeft: 20,
    display: 'flex',
    flexDirection: 'column',
  },
  customerName: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  customerPhone: {
    fontSize: 14,
    color: '#A159A0',
    marginBottom: 5,
  },
  customerTotal: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
