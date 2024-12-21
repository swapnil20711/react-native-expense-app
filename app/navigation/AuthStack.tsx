import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import AppHeader from '../components/AppHeader';
import SetupPinScreen from '../screens/SetupPinScreen';

const AuthStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Onboard">
            <Stack.Screen name="Onboard" component={OnboardingScreen} />
            <Stack.Screen name="SetupPin" component={SetupPinScreen} options={{
                statusBarBackgroundColor:"reds"
            }}/>
            <Stack.Screen name="Login" component={LoginScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    header: () => (
                        <AppHeader navigation={navigation} title={'Login'} />
                    ),
                })} />
            <Stack.Screen
                name="Signup"
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
