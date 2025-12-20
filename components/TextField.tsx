import React from 'react'
import { Text, TextInput, View } from 'react-native'


interface Props{
    name: string
    placeholder: string
    value: string
    setValue: (value: string) => void
    secureText?: boolean
    multiline?: boolean
}
const TextField = ({name, placeholder, value, setValue, secureText, multiline}: Props) => {
    return (
       <View className='gap-2'>
            <Text className='text-subtext-1 font-medium'>
                {name}
            </Text>
            <TextInput
                className={`p-2 bg-panel-2 border min-h-10 border-border-secondary rounded-md 
                text-subtext-2 ${multiline ? "max-h-20" : ""} flex items-center`}
                placeholder={placeholder}
                placeholderTextColor={"hsl(0, 0%, 55%)"}
                value={value}
                onChangeText={(v) => setValue(v)}
                secureTextEntry={secureText}
                multiline={multiline}
            />
        </View>
    )
}

export default TextField