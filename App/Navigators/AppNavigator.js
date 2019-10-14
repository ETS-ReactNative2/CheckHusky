import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SplashScreen from '../Components/SplashScreen/SplashScreen';
import LoginScreenContainer from '../Components/LoginScreen/LoginScreenContainer';
import ProfileTabContainer from '../Components/ProfileTab/ProfileTabContainer';
import AboutUsTabContainer from '../Components/AboutUsTab/AboutUsTabContainer';

const TabNavigator = createBottomTabNavigator({
  ProfileTab: { screen: ProfileTabContainer },
  AboutUsTab: { screen: AboutUsTabContainer },
});

const StackNavigator = createStackNavigator(
  {
    SplashScreen: { screen: SplashScreen },
    LoginScreen: { screen: LoginScreenContainer },
    HomeTab: { screen: TabNavigator }
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
  }
);
export default createAppContainer(StackNavigator);
