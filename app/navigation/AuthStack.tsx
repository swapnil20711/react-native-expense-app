import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import AppHeader from '../components/AppHeader';
import SetupPinScreen from '../screens/SetupPinScreen';
import { Routes } from '../screens';

const AuthStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={Routes.OnboardingScreen.toString()}>
            <Stack.Screen name={Routes.OnboardingScreen.toString()} component={OnboardingScreen} />
            <Stack.Screen name={Routes.SetupPinScreen.toString()} component={SetupPinScreen}/>
            <Stack.Screen name={Routes.LoginScreen.toString()} component={LoginScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    header: () => (
                        <AppHeader navigation={navigation} title={'Login'} />
                    ),
                })} />
            <Stack.Screen
                name={Routes.SignupScreen.toString()}
                component={SignupScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    header: () => (
                        <AppHeader navigation={navigation} title={'Sign Up'} />
                    ),
                })}
            />
        </Stack.Navigator>
    );
};

export default AuthStack;
