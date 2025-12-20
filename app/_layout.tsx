import Ionicons from "@expo/vector-icons/Ionicons";
import * as Haptics from 'expo-haptics';
import { Tabs } from "expo-router";
import "../global.css";

export default function RootLayout() {
    return (
        <Tabs 
            screenOptions={{
                headerShown: false,
                tabBarStyle:{
                    paddingTop: 15,
                    backgroundColor: "hsl(0, 0%, 8%)",
                    borderColor: "hsl(0, 0%, 17%)"
                },
                tabBarActiveTintColor: "hsl(144, 100%, 39%)",
	            tabBarInactiveTintColor: "hsl(0, 0%, 55%)"
                
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Metrics",
                    tabBarIcon: ({focused}) => (
                        <Ionicons
                            size={24}
                            name={"stats-chart-sharp"}
                            color={focused ? "hsl(144, 100%, 39%)" : "hsl(0, 0%, 55%)"}
                        />
                    ),
                    
                }}
                listeners={{
                    tabPress: () => {
                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
                    }
                }}
            />
            <Tabs.Screen
                name="NewMetric"
                options={{
                    title: "New",
                    tabBarIcon: ({focused}) => (
                        <Ionicons
                            size={24}
                            name={"add-circle-sharp"}
                            color={focused ? "hsl(144, 100%, 39%)" : "hsl(0, 0%, 55%)"}
                        />
                    )
                }}
                 listeners={{
                    tabPress: () => {
                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
                    }
                }}
            />
        </Tabs>
    );
}
