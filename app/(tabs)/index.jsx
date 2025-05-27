import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import icedCoffeeImage from "@/assets/images/iced-coffee.png";

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={icedCoffeeImage}>
        <Text style={styles.text}>coffee shop</Text>
      </ImageBackground>
    </View>
  );
};

export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    width: "100%",
    height: "500px",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    
  },
  text: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    textAlign: "center", 
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
