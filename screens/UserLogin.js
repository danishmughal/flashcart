import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };

  loginUser = () => {
    // this.props.navigation.navigate('StoreLogin');
    this.props.navigation.navigate('Main');
  };

  render() {
    return (
      <View style={styles.container}>
        <FormLabel>Phone</FormLabel>
        <FormInput onChangeText={() => console.log('changed')} />
        <FormLabel>Password</FormLabel>
        <FormInput onChangeText={() => console.log('changed')} />
        <Button title="Login" onPress={this.loginUser} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
