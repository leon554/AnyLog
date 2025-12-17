import { Tabs } from "expo-router";
import "../global.css";

export default function RootLayout() {
    return (
        <Tabs 
            screenOptions={{
                headerShown: false,
                tabBarStyle:{
                    paddingTop: 10
                }
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Users"
                }}
            />
            <Tabs.Screen
                name="addUser"
                options={{
                    title: "Add"
                }}
            />
        </Tabs>
    );
}
