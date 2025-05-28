import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import React from "react";
import icedCoffeeImage from "@/assets/images/iced-coffee.png";
import { Link } from "expo-router";

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={icedCoffeeImage}>
        <Text style={styles.text}>coffee shop</Text>
        <Link
          // style={[styles.link, { marginHorizontal: "auto" }]}
          href={"/contact"}        
        >
          {" "}
          <Pressable style={styles.Button}>
            <Text style={styles.Buttontext}>Contact</Text>{" "}
          </Pressable>
        </Link>
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
    marginBottom: 120,
  },
  link: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    textDecorationLine: "underline",
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 4,
  },
  Button: {
    height: 60,
    borderRadius: 20,
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    padding: 6,
  },
  Buttontext: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    padding: 4,
  },
});
