import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react';
import { Dimensions, FlatList, Keyboard, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Animated, {
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withDelay,
    withTiming
} from 'react-native-reanimated';

type DropdownProps = {
    options: string[];
    selected: string | null;
    onSelect: (value: string) => void;
    placeholder?: string;
};

const { height, width } = Dimensions.get('window');

export const Dropdown: React.FC<DropdownProps> = ({ options, selected, onSelect, placeholder = 'Select an option' }) => {

    const animationProgress = useSharedValue(0);
    const borderWidth = useSharedValue(0)
    const isOpen = useSharedValue(false);

    const [search, setSearch] = useState("")
    const [isDropDownOpen, setIsDropDownOpen] = useState(false)
    options = options.filter(o => o.includes(search.toLowerCase()))

    const toggleDropDown = () => {
        if (isOpen.value) {
            animationProgress.value = withTiming(0, undefined)
            borderWidth.value = withDelay(150, withTiming(0, {duration: 200}))
            isOpen.value = false;
            setIsDropDownOpen(false)
            setSearch("")
        } else {
            animationProgress.value = withTiming(1);
            borderWidth.value = 1
            isOpen.value = true;
            setIsDropDownOpen(true)
        }
    };

    const handleSelect = (item: string) => {
        onSelect(item);
        toggleDropDown();
    };

    const rotationStyle = useAnimatedStyle(() => {
        const rotate = interpolate(animationProgress.value, [0, 1], [0, 180]);
        return {
            transform: [{ rotate: `${rotate}deg` }],
        };
    });

    const dropdownContentStyle = useAnimatedStyle(() => {
        return {
            height: interpolate(animationProgress.value, [0, 1], [0, 200]),
            borderWidth: borderWidth.value
        };
    });

    return (
        <View className="w-full">
            <TouchableOpacity
                className="border border-border-secondary rounded-md p-2 bg-panel-2 h-10
                    flex flex-row justify-between items-center "
                onPress={toggleDropDown}
                activeOpacity={0.7}
            >
                <Text className="text-subtext-2 capitalize font-medium pr-1">{selected || placeholder}</Text>
                <Animated.View style={rotationStyle}>
                    <Ionicons
                        name="caret-down"
                        size={15}
                        color="hsl(0, 0%, 70%)"
                    />
                </Animated.View>
            </TouchableOpacity>

            {isDropDownOpen && 
                <Pressable
                    onPress={() => {
                        toggleDropDown()
                        Keyboard.dismiss()
                    }}
                    style={{
                        position: 'absolute',
                        top: -height, 
                        left: -width,
                        width: width * 3, 
                        height: height * 3,
                        zIndex: 10, 
                        backgroundColor: 'transparent' 
                    }}
                />
            }

            <Animated.View 
                className="absolute top-12 bg-panel-2 border border-border-secondary
                rounded-md shadow-lg z-50 w-full overflow-hidden"
                style={dropdownContentStyle}
            >
                <View className='bg-panel-3 border-b border-border-secondary flex-row 
                    items-center pl-3'>
                    <Ionicons
                        name="search"
                        size={12}
                        color="hsl(0, 0%, 55%)"
                        className='mt-1'
                    />
                    <TextInput
                        className='w-full h-full p-3 text-subtext-1 font-medium
                        text-sm'
                        placeholder='Search...'
                        placeholderTextColor={"hsl(0, 0%, 55%)"}
                        value={search}
                        onChangeText={e => setSearch(e)}
                    />
                </View>
                <FlatList
                    data={options}
                    keyExtractor={(item, index) => `${item}-${index}`}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            className="p-3 border-b border-border-secondary"
                            onPress={() => handleSelect(item)}
                        >
                            <Text className="text-subtext-2 capitalize text-xs font-medium">{item}</Text>
                        </TouchableOpacity>
                    )}
                    scrollEnabled={true}
                    ListEmptyComponent={
                        <Text className="text-subtext-2 capitalize text-sm font-medium w-full p-3
                            flex  justify-center items-center border-b border-border-secondary">
                            No Units
                        </Text>
                    }
                />
            </Animated.View>
        </View>
    );
};