import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
  const handleReset = () => {
    console.log("Reset");
  };

  const handleConfirm = () => {
    console.log("Confirm");
  };
  return (
    <View style={styles.screen}>
      <TextInput
        style={styles.input}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <PrimaryButton onPress={handleReset}>Reset</PrimaryButton>
      <PrimaryButton onPress={handleConfirm}>Confirm</PrimaryButton>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: "#72bcd4",
    // Add Shadow.
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    // Add elevation for Android.
    elevation: 5,
  },

  // Add styles for the TextInput.
  input: {
    height: 40,
    width: 45,
    fontSize: 32,
    borderBottomColor: "#0C1821",
    borderBottomWidth: 1,
    marginVertical: 16,
    fontWeight: "bold",
    color: "#0C1821",
    textAlign: "center",
  },
});
