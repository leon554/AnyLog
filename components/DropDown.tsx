import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

type DropdownProps = {
    options: string[];
    selected: string | null;
    onSelect: (value: string) => void;
    placeholder?: string;
};

export const Dropdown: React.FC<DropdownProps> = ({options, selected, onSelect, placeholder = 'Select an option',}) => {
    const [open, setOpen] = useState(false);
    const height = useSharedValue(100);

    const handleSelect = (value: string) => {
        onSelect(value);
        setOpen(false);
    };

    const openDropDown = () => {
        height.value = withSpring(open ? 200 : 0);
        setOpen(!open)
    }

    return (
        <View className="w-64 relative">
            <TouchableOpacity
                className="border border-gray-300 rounded-md p-3 bg-white"
                onPress={() => openDropDown()}
            >
                <Text className="text-gray-700">{selected || placeholder}</Text>
            </TouchableOpacity>

            
            <Animated.View 
                className={`absolute top-14 bg-white border border-gray-300 
                rounded-md shadow-lg z-50 "max-h-40 w-full" `}
                style={{
                    height
                }}
            >
                <FlatList
                    data={options}
                    keyExtractor={(item) => `${item}${Math.random()}`}
                    renderItem={({ item }) => (
                    <TouchableOpacity
                        className="p-3 border-b border-gray-200"
                        onPress={() => handleSelect(item)}
                    >
                        <Text className="text-gray-700">{item}</Text>
                    </TouchableOpacity>
                    )}
                />
            </Animated.View>
            
        </View>
    );
};
