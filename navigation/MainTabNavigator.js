import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import FeaturedScreen from '../screens/FeaturedScreen';
import ScannerScreen from '../screens/ScannerScreen';
import CartScreen from '../screens/CartScreen';

export default TabNavigator(
  {
    Featured: {
      screen: FeaturedScreen,
    },
    Scan: {
      screen: ScannerScreen,
    },
    Cart: {
      screen: CartScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Featured':
            iconName = Platform.OS === 'ios' ? `ios-star${focused ? '' : '-outline'}` : 'md-star';
            break;
          case 'Scan':
            iconName =
              Platform.OS === 'ios'
                ? `ios-qr-scanner${focused ? '' : '-outline'}`
                : 'md-qr-scanner';
            break;
          case 'Cart':
            iconName = Platform.OS === 'ios' ? `ios-cart${focused ? '' : '-outline'}` : 'md-cart';
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  },
);
