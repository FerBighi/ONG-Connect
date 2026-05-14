import React, { useEffect, useState } from "react";

import {
    View,
    Text,
    StyleSheet,
    FlatList,
    ActivityIndicator,
} from "react-native";

import ONGCard from "../app-example/components/ONGCard";

export default function ExplorarScreen() {

    const [loading, setLoading] = useState(true);

    const [ongs, setOngs] = useState<any[]>([]);

    useEffect(() => {

        setTimeout(() => {

            const dados = [

                {
                    id: "1",
                    nome: "Sorrisos que Curam",
                    causa: "Recreação em hospitais",
                    descricao:
                        "Levando alegria e esperança para crianças em tratamento hospitalar.",

                    imagem: require("../assets/images/ong1.jpg"),
                },

                {
                    id: "2",
                    nome: "Mãos Solidárias",
                    causa: "Ajuda humanitária",
                    descricao:
                        "Distribuímos alimentos, roupas e apoio para famílias em vulnerabilidade.",

                    imagem: require("../assets/images/ong2.jpg"),
                },

                {
                    id: "3",
                    nome: "Rede do Bem",
                    causa: "Combate à fome",
                    descricao:
                        "Acreditamos que nenhuma família deveria passar fome.",

                    imagem: require("../assets/images/ong3.jpg"),
                },

            ];

            setOngs(dados);

            setLoading(false);

        }, 2000);

    }, []);

    if (loading) {

        return (

            <View style={styles.loadingContainer}>

                <ActivityIndicator
                    size="large"
                    color="#1e73be"
                />

                <Text style={styles.loadingText}>
                    Carregando ONGs...
                </Text>

            </View>
        );
    }

    return (

        <View style={styles.container}>

            <Text style={styles.title}>
                Explore ONGs
            </Text>

            <FlatList
                data={ongs}
                keyExtractor={(item) => item.id}

                renderItem={({ item }) => (
                    <ONGCard ong={item} />
                )}

                showsVerticalScrollIndicator={false}
            />

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#f2f7fc",
        paddingTop: 50,
    },

    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#1e73be",
        textAlign: "center",
        marginBottom: 20,
    },

    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    loadingText: {
        marginTop: 15,
        fontSize: 16,
        color: "#1e73be",
    },

});