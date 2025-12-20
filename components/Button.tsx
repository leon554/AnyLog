import React from 'react'
import { Text, TouchableOpacity } from 'react-native'


interface Props{
    children: React.ReactNode,
    onClick: () => void
}

const Button = ({children, onClick}: Props) => {
    return (
        <TouchableOpacity
            className='bg-button p-3 flex justify-center
                items-center rounded-md h-10'
            onPress={onClick}
        >
            <Text className='text-button-text font-bold'>
                {children}
            </Text>
        </TouchableOpacity>
    )
}

export default Button