import { View, Text, StyleSheet } from "react-native";

export default function PerfilScreen({ route }: any) {

    const { userName, voluntarioId } = route.params;

    return (

        <View style={styles.container}>

            <Text style={styles.title}>
                Perfil do Voluntário 👤
            </Text>

            <Text style={styles.text}>
                Nome: {userName}
            </Text>

            <Text style={styles.text}>
                ID: {voluntarioId}
            </Text>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },

    text: {
        fontSize: 18,
        marginBottom: 10,
    },

});