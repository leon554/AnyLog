import { getMetrics, setupDB } from "@/db/queries";
import { Metric } from "@/db/types";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

export default function Index() {

    const isFocused = useIsFocused()
    const [metrics, setMetrics] = useState<Metric[]>([])

    useEffect(() => {
        const setup = async () => {
            await setupDB()
            const data = await getMetrics()
            setMetrics([...data])
        }
        setup()
    }, [isFocused])

    return (
        <View className="flex-1 bg-background p-10 pt-[100px] gap-5">
            <Text className="text-2xl text-title font-bold">
                Metrics
            </Text>
            <View>
                <FlatList
                    className="h-full"
                    data={metrics}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({item}) => (
                        <View className="w-full bg-panel-1 border border-border rounded-2xl p-3 
                        gap-7">
                            <View className="flex-row items-center justify-between">
                                <Text className="text-highlight text-lg font-semibold">
                                    {item.name}
                                </Text>
                                <View style={{
                                        transform: [{ rotate: `270deg` }]
                                    }}>
                                    <Ionicons
                                        name="caret-down"
                                        size={15}
                                        color="hsl(0, 0%, 70%)" 
                                    />
                                </View>
                            </View>
                            <View className="flex-row items-center justify-between">
                                <View className="flex-row items-end gap-0.5">
                                    <Text className="text-title font-bold text-3xl">
                                        96
                                    </Text>
                                    <Text className="text-sm text-subtext-1 mb-0.5">
                                        {item.unit}
                                    </Text>
                                </View>
                                <View>
                                </View>
                            </View>
                        </View>
                    )}
                    ItemSeparatorComponent={ () =>
                        <View className="h-5">
                            
                        </View>
                    }
                />
            </View>
        </View>
    );
}
