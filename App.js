import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';
import FaceBookScreen from './screens/fb';
import InstagramScreen from './screens/ig';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
export default function App() {
  return (
      <AppContainer/>
  );
}
const tabNavigator = createBottomTabNavigator({
  FaceBook:{screen:FaceBookScreen},
  Instagram:{screen:InstagramScreen}},
  {defaultNavigationOptions:({navigation})=>({
    tabBarIcon:({})=>{
      const route=navigation.state.routeName
      if(route==='FaceBook'){
        return(
          <Image style={{width:20,height:20}} source={require('./assets/facebook image.png')}/>
        )
      }
      else if(route==='Instagram'){
        return(
          <Image style={{width:20,height:20}} source={require('./assets/instagram image.png')}/>
        )
      }
    }
  })

});
const AppContainer= createAppContainer(tabNavigator);

