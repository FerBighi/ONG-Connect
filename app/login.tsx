import React, { useState } from "react";

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
} from "react-native";

import { router } from "expo-router";

export default function LoginScreen() {

    const [username, setUser] = useState("");
    const [senha, setSenha] = useState("");

    const handleLogin = () => {

        if (username.trim() !== "" && senha.trim() !== "") {

            console.log("✅ Acesso autorizado para:", username);

            router.push({
                pathname: "/tabs",

                params: {
                    userName: username,

                    voluntarioId:
                        Math.random()
                            .toString(36)
                            .substr(2, 9)
                            .toUpperCase()
                }
            });

        }

        else {

            alert("Preencha todos os campos!");

            console.log("❌ Falha no login");

        }

        console.table({ username, senha });
    };

    return (

        <View style={styles.container}>

            {/* LOGO */}

            <Image
                source={require("../assets/images/logo.png")}
                style={styles.logo}
            />

            {/* FORMULÁRIO */}

            <View style={styles.form}>

                <Text style={styles.title}>
                    Faça Login!
                </Text>

                <TextInput
                    placeholder="Digite seu username"
                    placeholderTextColor="#666"
                    style={styles.input}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={username}
                    onChangeText={setUser}
                />

                <TextInput
                    placeholder="Digite sua senha"
                    placeholderTextColor="#666"
                    style={styles.input}
                    secureTextEntry={true}
                    value={senha}
                    onChangeText={setSenha}
                />

            </View>

            {/* BOTÃO */}

            <View style={styles.footer}>

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleLogin}
                >

                    <Text style={styles.buttonText}>
                        Entrar
                    </Text>

                </TouchableOpacity>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },

    logo: {
        width: 110,
        height: 110,
        marginBottom: 20,
    },

    form: {
        width: "100%",
        alignItems: "center",
        marginBottom: 25,
    },

    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#1e73be",
        marginBottom: 25,
    },

    input: {
        width: "100%",
        backgroundColor: "#b9dbf9",
        borderRadius: 15,
        padding: 15,
        marginBottom: 15,
        elevation: 2,
    },

    footer: {
        width: "100%",
        alignItems: "center",
    },

    button: {
        backgroundColor: "#1e73be",
        paddingVertical: 16,
        paddingHorizontal: 60,
        borderRadius: 30,
        elevation: 4,
    },

    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 17,
    },

});