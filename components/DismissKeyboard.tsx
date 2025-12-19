import React from "react";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";


interface Props{
    children: React.ReactNode
}
const DismissKeyboard = ({children} : Props) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={{ flex: 1 }}>
            {children}
        </View>
    </TouchableWithoutFeedback>
);

export default DismissKeyboard