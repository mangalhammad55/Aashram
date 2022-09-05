import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import WelcomeScreen from "../Pages/WelcomeScreen";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import HomeScreen from "../Pages/HomeScreen";
import SocialMedia from "../Pages/SocialMedia";
import Location from "../Pages/Location";
import PawanSmaran from "../Pages/PawanSmaran";
import AartiStrot from "../Pages/AartiStrot";
import AboutUs from "../Pages/AboutUs";
import Introduction from "../Pages/Introduction";

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
  SocialMedia: {
    screen: SocialMedia,
  },
  Location: {
    screen: Location,
  },
  PawanSmaran: {
    screen: PawanSmaran,
  },
  AartiStrot: {
    screen: AartiStrot,
  },
  AboutUs: {
    screen: AboutUs,
  },
  Introduction: {
    screen: Introduction,
  },
};
const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);
