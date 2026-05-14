import React from "react";

import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";

export default function DashboardScreen() {

    return (

        <ScrollView style={styles.container}>

            {/* HEADER */}

            <View style={styles.header}>

                <Text style={styles.welcome}>
                    Olá, Voluntário!
                </Text>

                <Text style={styles.subtitle}>
                    Obrigado por ajudar a transformar vidas
                </Text>

            </View>

            {/* CARDS */}

            <View style={styles.cardsContainer}>

                <View style={styles.card}>
                    <Text style={styles.cardNumber}>24</Text>
                    <Text style={styles.cardText}>
                        ONGs disponíveis
                    </Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardNumber}>120+</Text>
                    <Text style={styles.cardText}>
                        Voluntários ativos
                    </Text>
                </View>

            </View>

            <View style={styles.cardLarge}>

                <Text style={styles.cardTitle}>
                    Projetos sociais
                </Text>

                <Text style={styles.cardDescription}>
                    Encontre ações solidárias perto de você
                    e participe de causas importantes.
                </Text>

            </View>

            {/* BOTÃO */}

            <TouchableOpacity style={styles.button}>

                <Text style={styles.buttonText}>
                    Explorar Projetos
                </Text>

            </TouchableOpacity>

        </ScrollView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#f2f7fc",
        padding: 20,
    },

    header: {
        marginTop: 40,
        marginBottom: 25,
    },

    welcome: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#1e73be",
    },

    subtitle: {
        fontSize: 16,
        color: "#666",
        marginTop: 8,
    },

    cardsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },

    card: {
        backgroundColor: "#fff",
        width: "48%",
        padding: 20,
        borderRadius: 18,
        elevation: 4,
        alignItems: "center",
    },

    cardNumber: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#1e73be",
    },

    cardText: {
        fontSize: 14,
        color: "#666",
        textAlign: "center",
        marginTop: 8,
    },

    cardLarge: {
        backgroundColor: "#1e73be",
        borderRadius: 20,
        padding: 25,
        marginBottom: 25,
    },

    cardTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 10,
    },

    cardDescription: {
        fontSize: 15,
        color: "#e3f2fd",
        lineHeight: 22,
    },

    button: {
        backgroundColor: "#1e73be",
        paddingVertical: 18,
        borderRadius: 30,
        alignItems: "center",
        marginBottom: 40,
    },

    buttonText: {
        color: "#fff",
        fontSize: 17,
        fontWeight: "bold",
    },

});