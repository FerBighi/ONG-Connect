import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'dashboard'>;

export default function DashboardScreen() {
    // Reatividade: Recuperando parâmetros via hook do Expo Router
    const { userName, voluntarioId } = useLocalSearchParams<{ userName: string, voluntarioId: string }>();

    const handleLogout = () => {
        // Pensamento Crítico: navigation.reset (No Expo Router usamos replace para limpar a pilha)
        router.replace("/login");
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.welcomeText}>
                    Olá <Text style={styles.highlight}>{userName}</Text>, seja bem-vindo a ONG CONNECT!
                </Text>
                <Text style={styles.idText}>ID do Voluntário: {voluntarioId}</Text>
            </View>

            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Text style={styles.logoutText}>Sair</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },

    card: {
        backgroundColor: "#e3f2fd",
        padding: 30, 
        borderRadius: 20, 
        width: "100%", 
        alignItems: "center", 
        elevation: 4
    },

    welcomeText: { 
        fontSize: 18, 
        textAlign: "center" 
    },

    highlight: { 
        fontWeight: "bold", 
        color: "#1e73be" 
    },

    idText: { 
        marginTop: 10, 
        color: "#999" 
    },

    logoutButton: { 
        marginTop: 40,
        backgroundColor: "#1e73be",
        borderRadius: 25,
        paddingVertical: 12,
        paddingHorizontal: 30
    },

    logoutText: { 
        color: "#fff", 
        fontWeight: "bold" 
    }
});
