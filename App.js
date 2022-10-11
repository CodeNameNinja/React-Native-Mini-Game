import { View, StyleSheet, ImageBackground } from "react-native";

import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
export default function App() {
  return (
    <LinearGradient
      colors={["#358EAC", "#0C1821"]}
      start={{ x: 0, y: 0.1 }}
      end={{ x: 0, y: 0.9 }}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={{
          opacity: 0.15,
        }}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});

// Learn about Linear gradient.
// [](https://docs.expo.dev/versions/latest/sdk/linear-gradient)
