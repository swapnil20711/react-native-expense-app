import { View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../colors';
import { Icon } from 'react-native-paper';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { Routes } from '../screens';

const AddButtonComponent = () => {
    const [showIcons, setShowIcons] = useState(false);
    const navigation = useNavigation<NavigationProp<ParamListBase>>()

    return (
        <View style={{ position: "absolute", alignItems: "center" }}>
            <TouchableOpacity
                style={{
                    width: 56,
                    height: 56,
                    top: -15,
                    borderRadius: 28,
                    backgroundColor: Colors.primaryColor,
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                }}
                onPress={() => setShowIcons(!showIcons)}
            >
                <Icon size={32} source={"plus"} color="#fff" />
            </TouchableOpacity>

            {showIcons && (
                <View
                    style={{
                        position: "absolute",
                        top: -74,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <TouchableOpacity
                        style={{
                            width: 56,
                            height: 56,
                            borderRadius: 28,
                            backgroundColor: Colors.green,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        onPress={() => {
                            navigation.navigate(Routes.ExpenseScreen)
                        }}
                    >
                        <Icon size={32} source={require("../assets/income.png")} color="#fff" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            width: 56,
                            height: 56,
                            borderRadius: 28,
                            top: -74,
                            backgroundColor: Colors.blue,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Icon size={32} source={require("../assets/currency_exchange.png")} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            width: 56,
                            height: 56,
                            borderRadius: 28,
                            backgroundColor: Colors.red,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Icon size={32} source={require("../assets/expense.png")} color="#fff" />
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}

export default AddButtonComponent