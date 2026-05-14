import React from "react";

import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";

export default function PerfilScreen({ route }: any) {

    const { userName, voluntarioId } = route.params;

    return (

        <ScrollView style={styles.container}>

            {/* HEADER */}

            <View style={styles.header}>

                <Image
                    source={require("../assets/images/profile.png")}
                    style={styles.profileImage}
                />

                <Text style={styles.name}>
                    {userName}
                </Text>

                <Text style={styles.id}>
                    ID Voluntário: {voluntarioId}
                </Text>

                <Text style={styles.bio}>
                    do my best 
                </Text>

            </View>

            {/* ESTATÍSTICAS */}

            <View style={styles.statsContainer}>

                <View style={styles.statCard}>

                    <Text style={styles.statNumber}>
                        12
                    </Text>

                    <Text style={styles.statText}>
                        Projetos
                    </Text>

                </View>

                <View style={styles.statCard}>

                    <Text style={styles.statNumber}>
                        48h
                    </Text>

                    <Text style={styles.statText}>
                        Voluntariado
                    </Text>

                </View>

                <View style={styles.statCard}>

                    <Text style={styles.statNumber}>
                        5
                    </Text>

                    <Text style={styles.statText}>
                        ONGs
                    </Text>

                </View>

            </View>

            {/* CARD PRINCIPAL */}

            <View style={styles.mainCard}>

                <Text style={styles.cardTitle}>
                    Sua Jornada...
                </Text>

                <Text style={styles.cardText}>
                    Você já ajudou diversas causas sociais
                    e continua fazendo a diferença na vida
                    de muitas pessoas.
                </Text>

            </View>

            {/* BOTÃO */}

            <TouchableOpacity style={styles.button}>

                <Text style={styles.buttonText}>
                    Editar Perfil
                </Text>

            </TouchableOpacity>

        </ScrollView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#f2f7fc",
    },

    header: {
        backgroundColor: "#1e73be",

        alignItems: "center",

        paddingTop: 70,
        paddingBottom: 40,

        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },

    profileImage: {
        width: 120,
        height: 120,

        borderRadius: 60,

        borderWidth: 4,
        borderColor: "#fff",

        marginBottom: 15,
    },

    name: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#fff",
    },

    id: {
        fontSize: 14,
        color: "#dbeafe",
        marginTop: 5,
    },

    bio: {
        fontSize: 15,
        color: "#fff",

        textAlign: "center",

        marginTop: 15,
        paddingHorizontal: 35,

        lineHeight: 22,
    },

    statsContainer: {
        flexDirection: "row",

        justifyContent: "space-between",

        marginHorizontal: 20,
        marginTop: -30,
    },

    statCard: {
        backgroundColor: "#fff",

        width: "31%",

        borderRadius: 20,

        paddingVertical: 22,

        alignItems: "center",

        elevation: 5,
    },

    statNumber: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#1e73be",
    },

    statText: {
        fontSize: 13,
        color: "#666",
        marginTop: 6,
    },

    mainCard: {
        backgroundColor: "#fff",

        margin: 20,

        borderRadius: 24,

        padding: 25,

        elevation: 4,
    },

    cardTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#1e73be",

        marginBottom: 12,
    },

    cardText: {
        fontSize: 15,
        color: "#444",

        lineHeight: 24,
    },

    button: {
        backgroundColor: "#1e73be",

        marginHorizontal: 20,
        marginBottom: 40,

        paddingVertical: 18,

        borderRadius: 30,

        alignItems: "center",

        elevation: 4,
    },

    buttonText: {
        color: "#fff",
        fontSize: 17,
        fontWeight: "bold",
    },

});