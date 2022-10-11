import { Text, StyleSheet } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#0C1821",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#0C1821",
    padding: 12,
  },
});
