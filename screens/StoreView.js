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

const CUSTOMERS = [
  {
    gender: 'male',
    name: { title: 'mr', first: 'john', last: 'lai' },
    location: {
      street: '7236 wed',
      city: 'overbetuwe',
      state: 'overijssel',
      postcode: 31004,
    },
    price: '$68.00',
    email: 'hector.vanschip@example.com',
    login: {
      username: 'tinypanda297',
      password: '1980',
      salt: 'AVe7V5eX',
      md5: '4a9ce5bb74e3c302914d72f24c50064a',
      sha1: '7d5e79fc198d1df15b6ddf1fcf74d9a722e19071',
      sha256: '21cb0113e3ff4ee84057cdca9819a0930ee1f5b328dc7df317cf5c1c6479c915',
    },
    dob: '1953-05-01 18:02:36',
    registered: '2014-04-25 05:53:18',
    phone: '(704)-861-3609',
    cell: '(123)-456-7890',
    id: { name: 'BSN', value: '28269992' },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/85.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/85.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/85.jpg',
    },
    nat: 'NL',
  },
  {
    gender: 'female',
    name: { title: 'ms', first: 'emma', last: 'christiansen' },
    location: {
      street: '3695 syrenvænget',
      city: 'snertinge',
      state: 'syddanmark',
      postcode: 55393,
    },
    email: 'emma.christiansen@example.com',
    login: {
      username: 'purplelion402',
      password: 'comet',
      salt: 'CGs6Fshx',
      md5: '6e59b858de7e77d1e8ed1e8912339a7f',
      sha1: 'db2e7c6e2b4e8a1bb958e5281d19a4acaf075c23',
      sha256: '847250656e5bdf06d8614ff532876aa1cdef7934c8a883806ea2a5e9f1541569',
    },
    dob: '1987-03-14 00:54:46',
    registered: '2005-11-03 15:53:43',
    phone: '08772842',
    cell: '28244357',
    id: { name: 'CPR', value: '724021-3654' },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/10.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/10.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/10.jpg',
    },
    nat: 'DK',
  },
  {
    gender: 'female',
    name: { title: 'miss', first: 'mandy', last: 'austin' },
    location: {
      street: '1284 herbert road',
      city: 'kilkenny',
      state: 'roscommon',
      postcode: 25527,
    },
    email: 'mandy.austin@example.com',
    login: {
      username: 'ticklishcat270',
      password: 'what',
      salt: 'lE1pxZAB',
      md5: 'e4706af3c8e3df39b1fb1d04817b9ccd',
      sha1: '5e97e9cec6f561b842dd7001fbc4aa70777a3950',
      sha256: '33a3a95eff2ac570935af8bb7c99a45a150416ef6009c9af730e76cb3c288943',
    },
    dob: '1976-05-18 14:10:24',
    registered: '2009-09-23 00:39:47',
    phone: '031-197-0768',
    cell: '081-143-5090',
    id: { name: 'PPS', value: '9546539T' },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/92.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/92.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/92.jpg',
    },
    nat: 'IE',
  },
  {
    gender: 'female',
    name: { title: 'ms', first: 'nora', last: 'noel' },
    location: {
      street: '6439 quai charles-de-gaulle',
      city: 'saint-étienne',
      state: 'ardèche',
      postcode: 37986,
    },
    email: 'nora.noel@example.com',
    login: {
      username: 'ticklishgoose333',
      password: 'absolutely',
      salt: '3QciPwMx',
      md5: 'cf39a8eda312eec73babe30c7d408603',
      sha1: 'efe823ae94cc727a91293b0b5d9bae00336bc674',
      sha256: 'bc4ea3c8b7d02283cb7afca75219d7b7f0ffd703f43d47531ffd6d3273dedb6f',
    },
    dob: '1958-02-06 09:29:38',
    registered: '2008-04-13 16:38:03',
    phone: '01-68-09-98-76',
    cell: '06-29-61-82-01',
    id: { name: 'INSEE', value: '258184802319 60' },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/79.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/79.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/79.jpg',
    },
    nat: 'FR',
  },
  {
    gender: 'male',
    name: { title: 'mr', first: 'hendrik-jan', last: 'valk' },
    location: {
      street: '1384 hoefsmederijstraat',
      city: 'bladel',
      state: 'friesland',
      postcode: 21207,
    },
    email: 'hendrik-jan.valk@example.com',
    login: {
      username: 'heavylion420',
      password: 'sport',
      salt: 'UbdiXOLG',
      md5: 'c9f8b032fe36888d1f799722a58025c7',
      sha1: '3fe6b630b752e69f8deed42c3a997d1bc275e07b',
      sha256: '01b7ec6b7672b3aa36704db0729674f459b40906f3185b24b7b03dcb806c8871',
    },
    dob: '1968-12-02 18:23:56',
    registered: '2006-06-13 14:49:45',
    phone: '(007)-582-3231',
    cell: '(547)-221-8698',
    id: { name: 'BSN', value: '13677592' },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/60.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/60.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/60.jpg',
    },
    nat: 'NL',
  },
  {
    gender: 'female',
    name: { title: 'mrs', first: 'ercília', last: 'sales' },
    location: {
      street: '5539 rua dezenove de outubro',
      city: 'caucaia',
      state: 'minas gerais',
      postcode: 87595,
    },
    email: 'ercília.sales@example.com',
    login: {
      username: 'smallkoala526',
      password: 'greene',
      salt: 'Dyo6Pbh2',
      md5: '417496ac991faafc818a150f18258a0a',
      sha1: 'b622744f1d0e49ae8fef1fe94847bcd71db0fe71',
      sha256: 'f638e9689d658b2faf8ed12fb1694954847024ae8d5f9137542872f69219402b',
    },
    dob: '1951-01-08 22:31:48',
    registered: '2002-10-17 17:24:01',
    phone: '(32) 9713-5893',
    cell: '(11) 5000-2850',
    id: { name: '', value: null },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/30.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/30.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/30.jpg',
    },
    nat: 'BR',
  },
  {
    gender: 'male',
    name: { title: 'mr', first: 'william', last: 'ray' },
    location: {
      street: '1356 westmoreland street',
      city: 'wexford',
      state: 'kildare',
      postcode: 70823,
    },
    email: 'william.ray@example.com',
    login: {
      username: 'tinytiger492',
      password: 'sail',
      salt: 'AKem0A9w',
      md5: '71e9e6d29b5c5fa868b630f2eecf3d59',
      sha1: 'a2763ee548345129abd400db962f3c793cc296b4',
      sha256: '73fd87962d6f44e62992c12f1879625c854b999dc596e5e2d933ebd6324a25ac',
    },
    dob: '1960-09-11 16:40:43',
    registered: '2011-12-13 15:56:53',
    phone: '071-041-0973',
    cell: '081-666-7281',
    id: { name: 'PPS', value: '1523019T' },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/38.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/38.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/38.jpg',
    },
    nat: 'IE',
  },
  {
    gender: 'male',
    name: { title: 'mr', first: 'joseph', last: 'gardner' },
    location: {
      street: '6896 high street',
      city: 'sunderland',
      state: 'nottinghamshire',
      postcode: 'CZ60 7WN',
    },
    email: 'joseph.gardner@example.com',
    login: {
      username: 'organicbutterfly255',
      password: 'chan',
      salt: 'dhF6rC48',
      md5: 'd11121a9118e51cea332aa32069449e0',
      sha1: '47184042a0dec8030451ad55afc3960f1217709c',
      sha256: '20e54164d7eeff94b6aa57640de894a0571ba6f8453f7e3c09dfbbaf32d1eba4',
    },
    dob: '1949-08-03 00:29:06',
    registered: '2008-08-23 17:44:51',
    phone: '017683 24728',
    cell: '0754-605-226',
    id: { name: 'NINO', value: 'GC 94 65 27 S' },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/46.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/46.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
    },
    nat: 'GB',
  },
  {
    gender: 'male',
    name: { title: 'mr', first: 'javier', last: 'rojas' },
    location: {
      street: '4605 calle de la luna',
      city: 'granada',
      state: 'islas baleares',
      postcode: 77474,
    },
    email: 'javier.rojas@example.com',
    login: {
      username: 'silverrabbit521',
      password: 'drifter',
      salt: 'BHVKTLlk',
      md5: '8f9ce48f854d61ff31ce682cdc6a47f0',
      sha1: '12803d2638ea005fb95be7771d5c627a7ef7ff25',
      sha256: 'e7ecfefe3018cfafdafe565ad3ed22efd736520276c97f0b0c272e0b73527330',
    },
    dob: '1950-12-12 04:35:57',
    registered: '2003-07-11 16:21:56',
    phone: '906-081-014',
    cell: '606-052-039',
    id: { name: 'DNI', value: '49711636-L' },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/34.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/34.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/34.jpg',
    },
    nat: 'ES',
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

  capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1);

  renderCartItems = () =>
    CUSTOMERS.map(customer => (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('CustomerDetail')}
        key={customer.phone}
      >
        <Card wrapperStyle={styles.cartCard}>
          <Image
            style={{ width: 75, height: 75, borderRadius: 37.5 }}
            source={{ uri: customer.picture.large }}
          />
          <View style={styles.customerContent}>
            <Text style={styles.customerName}>
              {this.capitalizeFirstLetter(customer.name.first)}{' '}
              {this.capitalizeFirstLetter(customer.name.last)}
            </Text>
            <Text style={styles.customerPhone}>{customer.cell}</Text>
            <Text style={styles.customerTotal}>{customer.price || '$20.00'}</Text>
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
