import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Home({ navigation }) {
  const handleMenu = () => {
    // Open menu logic here, e.g. navigate to another screen
    alert("Menu clicked!");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuButton} onPress={handleMenu}>
        <Text style={styles.menuText}>☰</Text>
      </TouchableOpacity>
      
      <View style={styles.content}>
        <Text style={styles.heading}>Welcome to the Home Page!</Text>
        <TouchableOpacity style={styles.button} onPress={() => alert("Button Pressed!")}>
          <Text style={styles.buttonText}>Click Me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    alignItems: "center",
  },
  menuButton: {
    position: "absolute",
    top: 20,
    left: 20,
    backgroundColor: "#4F46E5",
    padding: 12,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  menuText: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 20,
    color: "#4F46E5",
  },
  button: {
    backgroundColor: "#4F46E5",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
});
