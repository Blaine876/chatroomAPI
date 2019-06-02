import React, { Component } from "react";
import { Home, Authenticate, Conversation } from "./components/screens";

import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";

const MessageStack = createStackNavigator(
  {
    home: Home,
    conversation: Conversation
  },
  {
    defaultNavigationOptions: {
      headerTitle: 'Messages',
      headerStyle: {
        backgroundColor: 'rgb(162,55,243)'
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        color: 'rgb(255,255,255)'
      },
      headerTintColor: 'rgb(255,255,255)'
    }
  }
);

const SwitchStack = createSwitchNavigator({
  auth: Authenticate,
  main: MessageStack
});

const AppContainer = createAppContainer(SwitchStack);

export default class Routes extends Component {
  render() {
    return <AppContainer />;
  }
}
