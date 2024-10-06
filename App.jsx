import { SafeAreaView } from "react-native-safe-area-context";
import Router from "./src/navigation/Router";
import { StatusBar } from "expo-status-bar";



const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#9ee4d4" }}>
      <StatusBar backgroundColor={"#9ee4d4"} barStyle={"light-content"} />
      <Router />
    </SafeAreaView>
  );
};

export default App;
