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
            <Text className='text-neutral-600 font-medium'>
                {name}
            </Text>
            <TextInput
                className='p-2 bg-neutral-100 rounded-md 
                border-1 outline-black'
                placeholder={placeholder}
                placeholderTextColor={"#b0b0b0"}
                value={value}
                onChangeText={(v) => setValue(v)}
                secureTextEntry={secureText}
                multiline={multiline}
            />
        </View>
    )
}

export default TextField