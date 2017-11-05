import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default class FeaturedScreen extends React.Component {
  static navigationOptions = {
    title: 'American Apparel',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#151C43',
      borderBottomColor: '#2F95D6',
    },
    headerTitleStyle: {
      fontSize: 18,
    },
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          alignItems: 'center',
        }}
      >
        <Text style={styles.welcomeText}>Welcome.</Text>
        <Image
          style={styles.logoStyle}
          source={require('../assets/images/american_apparel_logo.png')}
        />
        <Text style={styles.captionStyle}>Feel free to browse and add products to your cart.</Text>
        <Text style={styles.captionStyle}>
          When you are ready to check out, simply go to the check out counter.
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#100F26',
  },
  welcomeText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  logoStyle: {
    width: 200,
    height: 200,
  },
  captionStyle: {
    marginTop: 30,
    color: 'white',
  },
});
