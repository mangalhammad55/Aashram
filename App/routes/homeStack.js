import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import WelcomeScreen from "../Pages/WelcomeScreen";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import HomeScreen from "../Pages/HomeScreen";

const screens = {
  WelcomeScreen: {
    screen: WelcomeScreen,
  },
  Login: {
    screen: Login,
  },
  Signup: {
    screen: Signup,
  },
  HomeScreen: {
    screen: HomeScreen,
  },
};
const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);
