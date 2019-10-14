import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SplashScreen from '../Components/SplashScreen/SplashScreen';
import LoginScreenContainer from '../Components/LoginScreen/LoginScreenContainer';
import ProfileTabContainer from '../Components/ProfileTab/ProfileTabContainer';
import AboutUsTabContainer from '../Components/AboutUsTab/AboutUsTabContainer';
import Ionicons from 'react-native-vector-icons/FontAwesome5';

const TabNavigator = createBottomTabNavigator({
  ProfileTab: { screen: ProfileTabContainer },
  AboutUsTab: { screen: AboutUsTabContainer },
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Ionicons;
      let iconName;
      if (routeName === 'ProfileTab') {
        iconName = `glass-cheers`;
      } else if (routeName === 'AboutUsTab') {
        iconName = `money-check`;
      }
      // You can return any component that you like here!
      return <IconComponent name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
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
