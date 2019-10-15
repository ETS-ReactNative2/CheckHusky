import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SplashScreen from '../Components/SplashScreen/SplashScreen';
import LoginScreenContainer from '../Components/LoginScreen/LoginScreenContainer';
import HomeTabContainer from '../Components/Home/HomeTabContainer';
import OrderTabContainer from '../Components/Order/OrderTabContainer';
import FavoritesTabContainer from '../Components/Favorites/FavoritesTabContainer';
import ProfileTabContainer from '../Components/ProfileTab/ProfileTabContainer';
import AboutUsTabContainer from '../Components/AboutUsTab/AboutUsTabContainer';
import Ionicons from 'react-native-vector-icons/FontAwesome5';
import * as CONST from '../Utils/Constants';

const TabNavigator = createBottomTabNavigator({
  HomeTab: { screen: HomeTabContainer },
  OrderTab: { screen: OrderTabContainer },
  FavoritesTab: { screen: FavoritesTabContainer },
  ProfileTab: { screen: ProfileTabContainer },
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Ionicons;
      let iconName;
      if (routeName === 'HomeTab') {
        iconName = `beer`;
      } else if (routeName === 'OrderTab') {
        iconName = `money-check`;
      } else if (routeName === 'FavoritesTab') {
        iconName = `thumbs-up`;
      } else if (routeName === 'ProfileTab') {
        iconName = `user-edit`;
      }
      // You can return any component that you like here!
      return <IconComponent name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: CONST.PRIMARY_COLOR,
    inactiveTintColor: 'gray',
  },
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
