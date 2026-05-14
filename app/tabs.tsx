import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useLocalSearchParams } from "expo-router";

import DashboardScreen from "./dashboard";
import ExplorarScreen from "./explorar";
import PerfilScreen from "./perfil";

import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function TabsScreen() {

    const { userName, voluntarioId } = useLocalSearchParams();

    return (

        <Tab.Navigator
            screenOptions={({ route }) => ({

                headerShown: false,

                tabBarActiveTintColor: "#1e73be",

                tabBarIcon: ({ color, size }) => {

                    let iconName: any;

                    if (route.name === "Dashboard") {
                        iconName = "home";
                    }

                    else if (route.name === "Explorar") {
                        iconName = "search";
                    }

                    else if (route.name === "Perfil") {
                        iconName = "person";
                    }

                    return (
                        <Ionicons
                            name={iconName}
                            size={size}
                            color={color}
                        />
                    );
                },
            })}
        >

            <Tab.Screen
                name="Dashboard"
                component={DashboardScreen}
            />

            <Tab.Screen
                name="Explorar"
                component={ExplorarScreen}
            />

            <Tab.Screen name="Perfil">
                {() => (
                    <PerfilScreen
                        route={{
                            params: {
                                userName,
                                voluntarioId,
                            },
                        }}
                    />
                )}
            </Tab.Screen>

        </Tab.Navigator>
    );
}