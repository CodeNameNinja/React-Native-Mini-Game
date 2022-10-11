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
      <View style={styles.buttonRow}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={handleReset}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={handleConfirm}>Confirm</PrimaryButton>
        </View>
      </View>
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
    justifyContent: "center",
    alignItems: "center",
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

  // Add Styles for the button row.
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  buttonContainer: {
    flex: 1,
    width: 100,
  },
});
