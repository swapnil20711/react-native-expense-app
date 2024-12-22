import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Colors } from '../colors';

const SplashScreen = () => {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
    const isLoggedIn = false;

    useEffect(() => {
        setTimeout(() => {
            if(isLoggedIn){
                navigation.replace('MainApp')
            }else{
                navigation.replace('AuthStack')
            }
        }, 1000)
    }, [])
    return (
        <View style={{ flex: 1, justifyContent: "center", backgroundColor: Colors.primaryColor, alignItems: "center" }}>
            <Image source={require('../assets/splash_logo.png')} />
        </View>
    )
}

export default SplashScreen