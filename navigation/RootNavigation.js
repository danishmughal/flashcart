import { Notifications } from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';

import MainTabNavigator from './MainTabNavigator';
import UserLogin from '../screens/UserLogin';
import StoreLogin from '../screens/StoreLogin';

import StoreView from '../screens/StoreView';
import CustomerDetail from '../screens/CustomerDetail';

const RootStackNavigator = StackNavigator(
  {
    UserLogin: {
      screen: UserLogin,
    },
    StoreLogin: {
      screen: StoreLogin,
    },
    Main: {
      screen: MainTabNavigator,
      navigationOptions: {
        headerLeft: null,
      },
    },
    StoreView: {
      screen: StoreView,
      navigationOptions: {
        headerLeft: null,
      },
    },
    CustomerDetail: {
      screen: CustomerDetail,
    },
  },
  {
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),
  },
);

export default class RootNavigator extends React.Component {
  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications();
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove();
  }

  render() {
    return <RootStackNavigator />;
  }

  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync();

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = ({ origin, data }) => {
    console.log(`Push notification ${origin} with data: ${JSON.stringify(data)}`);
  };
}
