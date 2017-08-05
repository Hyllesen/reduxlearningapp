import { StackNavigator } from "react-navigation";

import MainScreen from "./screens/MainScreen";
import ProfileScreen from "./screens/ProfileScreen";

const App = StackNavigator({
  Home: { screen: MainScreen },
  Profile: { screen: ProfileScreen }
});

export default App;
