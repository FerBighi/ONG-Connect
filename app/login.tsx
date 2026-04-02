import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
} from "react-native";

export default function LoginScreen() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleLogin = () => {
        if (email.includes("@") && senha.length > 6) {
            console.log("✅ Acesso autorizado para:", email);
        } else {
            console.log("❌ Falha no login: Verifique os critérios de validação");
        }

        console.table({ email, senha });
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

                <Text style={styles.title}>Faça Login!</Text>

                <TextInput
                    placeholder="Digite seu e-mail"
                    placeholderTextColor="#666"
                    style={styles.input}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                />

                <TextInput
                    placeholder="Digite sua senha"
                    placeholderTextColor="#666"
                    style={styles.input}
                    secureTextEntry={true}
                    value={senha}
                    onChangeText={setSenha}
                />

                {email.length > 0 && (
                    <Text style={styles.helperText}>
                        Logando como: {email}
                    </Text>
                )}

            </View>

            {/* BOTÃO */}
            <View style={styles.footer}>
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        justifyContent: "center", // centraliza tudo
        alignItems: "center",
        padding: 20,
    },

    logo: {
        width: 110,
        height: 110,
        marginBottom: 20, // em vez de marginTop gigante
    },

    form: {
        width: "100%",
        alignItems: "center",
        marginBottom: 25, // controla o espaço abaixo
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

    helperText: {
        color: "#1e73be",
        fontSize: 14,
        marginTop: 5,
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