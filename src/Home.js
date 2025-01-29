import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as DocumentPicker from "expo-document-picker";
import { Ionicons } from "@expo/vector-icons";

export default function Home({ navigation }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleMenu = () => setMenuOpen(!menuOpen);
  const handleLogout = () => navigation.navigate("Login");

  const handleFileSelect = async () => {
    if (Platform.OS === "web") {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "*/*";
      input.onchange = (event) => {
        const file = event.target.files[0];
        if (file) {
          setSelectedFiles([...selectedFiles, file]);
        }
      };
      input.click();
    } else {
      const result = await DocumentPicker.getDocumentAsync({ type: "*/*" });
      if (result.assets && result.assets.length > 0) {
        setSelectedFiles([...selectedFiles, result.assets[0]]);
      }
    }
  };

  const handleFileRemove = (index) => {
    setSelectedFiles(selectedFiles.filter((_, i) => i !== index));
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
          onPress={handleFileSelect} 
          disabled={selectedFiles.length > 0}>
          <Text style={styles.buttonText}>Select Files</Text>
          <Ionicons 
            name="cloud-upload-outline" 
            size={24} 
            color={selectedFiles.length > 0 ? "#FFFFFF" : "#888888"} 
            style={styles.uploadIcon} 
          />
        </TouchableOpacity>

        {selectedFiles.length > 0 && (
          <View style={styles.fileList}>
            {selectedFiles.map((file, index) => (
              <View key={index} style={styles.fileItem}>
                <Text style={styles.fileName}>{file.name}</Text>
                <TouchableOpacity onPress={() => handleFileRemove(index)}>
                  <Ionicons name="close-circle" size={24} color="#FFFFFF" />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}
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
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4F46E5",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
  uploadIcon: {
    marginLeft: 10,
  },
  fileList: {
    marginTop: 20,
    alignItems: "center",
  },
  fileItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  fileName: {
    color: "#FFFFFF",
    marginRight: 10,
  },
});
