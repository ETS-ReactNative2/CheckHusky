import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SplashScreen from '../Components/SplashScreen/SplashScreen'
import HomeScreenContainer from '../Components/Home/HomeScreenContainer'

const StackNavigator = createStackNavigator(
  {
    SplashScreen: { screen: SplashScreen },
    HomeScreen: { screen: HomeScreenContainer }
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none'
  }
)
export default createAppContainer(StackNavigator)
