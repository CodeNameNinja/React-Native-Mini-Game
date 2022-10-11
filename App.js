import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);

  const startHandler = (number) => {
    setUserNumber(number);
  };

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
        <SafeAreaView style={styles.rootScreen}>
          {userNumber ? (
            <GameScreen />
          ) : (
            <StartGameScreen onStart={startHandler} />
          )}
        </SafeAreaView>
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
