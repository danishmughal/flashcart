import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: () => null,
  };

  loginUser = () => {
    // this.props.navigation.navigate('StoreLogin');
    this.props.navigation.navigate('Main');
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../assets/images/flashcartLogo.png')} />
        </View>

        <View>
          <FormInput
            containerStyle={styles.inputStyle}
            placeholder="Phone Number"
            placeholderTextColor="gray"
            keyboardType="phone-pad"
            onChangeText={() => console.log('changed')}
          />
          <FormInput
            containerStyle={styles.inputStyle}
            placeholder="Password"
            placeholderTextColor="gray"
            secureTextEntry
            onChangeText={() => console.log('changed')}
          />
        </View>

        <Button buttonStyle={styles.button} title="Sign In" onPress={this.loginUser} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#100F26',
  },
  logoContainer: {
    display: 'flex',
    marginTop: 100,
    marginBottom: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 200,
    width: 200,
    paddingRight: 25,
  },
  inputStyle: {
    marginBottom: 50,
    borderColor: '#355F9E',
  },
  button: {
    marginTop: 25,
    backgroundColor: '#100F26',
    borderColor: '#355F9E',
    borderWidth: 1,
  },
});
