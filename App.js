import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import SearchScreen from './src/screens/SearchScreen';
import Resultsshow from './src/screens/Resultsshow';

const navigator=createStackNavigator({
   Search:SearchScreen,
   Result:Resultsshow
},{
  initialRouteName:'Search',
  defaultNavigationOptions:{
    title :'Restaurant Reconnaissance'
  }
})



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default createAppContainer(navigator)