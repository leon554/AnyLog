import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

type DropdownProps = {
    options: string[];
    selected: string | null;
    onSelect: (value: string) => void;
    placeholder?: string;
};

export const Dropdown: React.FC<DropdownProps> = ({options, selected, onSelect, placeholder = 'Select an option',}) => {
    const [open, setOpen] = useState(false);

    const handleSelect = (value: string) => {
        onSelect(value);
        setOpen(false);
    };

    return (
        <View className="w-64 relative">
            <TouchableOpacity
                className="border border-gray-300 rounded-md p-3 bg-white"
                onPress={() => setOpen(!open)}
            >
                <Text className="text-gray-700">{selected || placeholder}</Text>
            </TouchableOpacity>

            
            <View 
                className={`absolute top-14 w-full bg-white border border-gray-300 
                rounded-md shadow-lg z-50 ${open ? "max-h-40" : "max-h-0"} transition-all
                duration-700 ease-in-out`}
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
            </View>
            
        </View>
    );
};
