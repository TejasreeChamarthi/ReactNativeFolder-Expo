import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Home({ navigation }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen); 
  };

  const handleLogout = () => {
    navigation.navigate("Login"); 
  };

  return (
    <LinearGradient
      colors={["#C73481", "#E5374E"]}
      locations={[0, 0.5]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
    >
      <View style={styles.menu}>
        {menuOpen && (
          <>
            <Text style={styles.menuContent}>Profile</Text>
            <Text style={styles.menuContent}>Chatbox</Text>
            <TouchableOpacity onPress={handleLogout}>
              <Text style={styles.menuContent}>Logout</Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      <TouchableOpacity style={styles.menuButton} onPress={handleMenu}>
        <Text style={styles.menuText}>☰</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.heading}>Good Morning!</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert("Button Pressed!")}
        >
          <Text style={styles.buttonText}>Click Me</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  menu: {
    position: "absolute",
    left: 0,
    top: 90,
    bottom: 0,
    zIndex: 1,
    justifyContent: "flex-start",
    paddingHorizontal: 20,
  },
  menuContent: {
    color: "#FFFFFF",
    fontSize: 18,
    marginBottom: 20,
    marginTop: 20,
  },
  menuButton: {
    position: "absolute",
    top: 40,
    left: 10,
    padding: 12,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    zIndex: 2,
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
    color: "#ffffff",
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
