import WelcomeScreen from "./App/Pages/WelcomeScreen";
import Navigator from "./App/routes/homeStack";
import { AppRegistry } from "react-native";
AppRegistry.registerComponent("Aashram", () => App);

export default function App() {
  return <Navigator />;
}
