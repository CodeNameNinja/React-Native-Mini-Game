import { View, Text, Pressable, StyleSheet } from "react-native";

const PrimaryButton = ({ children, onPress }) => (
  <View style={styles.buttonOuter}>
    <Pressable
      onPress={onPress}
      style={({ pressed }) =>
        pressed ? [styles.buttonInner, styles.pressed] : styles.buttonInner
      }
      android_ripple={{
        color: "#1b2125ff",
        borderless: false,
        radius: 100,
      }}
    >
      <Text style={styles.primaryButtonText}>{children}</Text>
    </Pressable>
  </View>
);

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuter: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },

  buttonInner: {
    backgroundColor: "#0C1821",
    paddingVertical: 8,
    paddingHorizontal: 16,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.26,
    elevation: 2,
  },

  pressed: {
    opacity: 0.75,
  },

  primaryButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});
