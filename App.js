import React from 'react';
import {Text,View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import FbScreen from './screens/FbScreen';
import IgScreen from './screens/IgScreen';

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

const TabNavigator=createBottomTabNavigator({
  FaceBook:{screen:FbScreen},
  Instagram:{screen:IgScreen}
});

const AppContainer=createAppContainer(TabNavigator);