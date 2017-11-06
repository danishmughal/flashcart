import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationActions } from 'react-navigation';

import { BarCodeScanner, Permissions } from 'expo';

export default class ScannerScreen extends React.Component {
  static navigationOptions = {
    title: 'Scan',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#151C43',
      borderBottomColor: '#2F95D6',
    },
    headerTitleStyle: {
      fontSize: 18,
    },
  };

  state = {
    hasCameraPermission: null,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  _handleBarCodeRead = ({ type, data }) => {
    const navigateAction = NavigationActions.navigate({
      routeName: 'Cart',
      action: NavigationActions.navigate({ routeName: 'Cart' }),
    });

    this.props.navigation.dispatch(navigateAction);

    // this.props.navigation.navigate({ routeName: 'Cart', params: { cartedCount } });
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);

    // Data
    // lion: D5DYR6VFN1B4Y
    // boxers: 1KYB8N5506N6R
    // dress: S26XQRS8EQY40
  };

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.scannerOverlay}>
          <Text>This is some text</Text>
        </View>
        <BarCodeScanner onBarCodeRead={this._handleBarCodeRead} style={StyleSheet.absoluteFill} />
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
  scannerOverlay: {
    alignSelf: 'center',
    backgroundColor: 'red',
    width: '50%',
    height: '50%',
  },
});
