import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { router } from "expo-router";

export default function WelcomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.header}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logoImage}
        />
        <Text style={styles.logo}>ONG CONNECT</Text>

        <TextInput
          placeholder="Buscar projetos e ONGs..."
          placeholderTextColor="#666"
          style={styles.searchBar}
        />
      </View>

      <View style={styles.mainContent}>

        <Text style={styles.title}>
          Venha ser Voluntário!
        </Text>

        <Text style={styles.subtitle}>
          Conecte-se com projetos sociais e faça a diferença no mundo 🌎
        </Text>

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Venha conhecer nossos Projetos</Text>
        </TouchableOpacity>

        <Image
          source={require("../assets/images/voluntariado.png")}
          style={styles.imagecarousel}
        />

      </View>

      <View style={styles.buttonArea}>

        <Text style={styles.logandcadText}>Faça login ou cadastre-se:</Text>
        <TouchableOpacity onPress={() => router.push("/login")}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.loginText}>Cadastro</Text>
        </TouchableOpacity>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    backgroundColor: "#1e73be",
    padding: 20,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },

  logo: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#ffffff",
  },

  searchBar: {
    backgroundColor: "#ffffff",
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginBottom: 25,
  },

  mainContent: {
    alignItems: "center",
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: "#e3f2fd",
    textAlign: "center",
    marginBottom: 25,
  },

  image: {
    width: 220,
    height: 220,
    borderRadius: 110,
    marginBottom: 30,
  },

  buttonArea: {
    flexDirection: "row"
  },

  primaryButton: {
    backgroundColor: "#ffffff",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 15,
  },

  primaryButtonText: {
    color: "#1e73be",
    fontWeight: "bold",
    fontSize: 16,
  },

  loginText: {
    color: "#1e73be",
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 30,
  },

  logoImage: {
    width: 60,
    height: 40,
    marginBottom: 10,
  },

  logandcadText: {
    color: "#e3f2fd",
    fontSize: 14,
    marginLeft: 20,
  },

  imagecarousel: {
    width: 350,
    height: 180,
    borderRadius: 15,
    marginTop: 20,
    marginBottom: 30,
  },
});
