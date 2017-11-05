import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: () => null,
  };

  constructor(props) {
    super(props);

    global.cartCount = 0;

    this.state = {
      userPhone: '',
    };
  }

  loginUser = () => {
    console.log(this.state.userPhone);

    if (this.state.userPhone === '1234567890') {
      // Customer
      this.props.navigation.navigate('StoreLogin');
      // this.props.navigation.navigate('Main');
    } else if (this.state.userPhone === '111') {
      // Agent
      this.props.navigation.navigate('StoreView');
    }
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
            enablesReturnKeyAutomatically
            returnKeyType="done"
            onChangeText={userPhone => this.setState({ userPhone })}
          />
          <FormInput
            containerStyle={styles.inputStyle}
            placeholder="Password"
            placeholderTextColor="gray"
            enablesReturnKeyAutomatically
            returnKeyType="done"
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
