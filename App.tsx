/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  KeyboardAvoidingView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './app/screens/SplashScreen';
import AuthStack from './app/navigation/AuthStack';
import TabNavigation from './app/navigation/TabNavigation';
import { Routes } from './app/screens';
import AppHeader from './app/components/AppHeader';
import { Colors } from './app/colors';
import AddTransactionScreen from './app/screens/AddTransactionScreen';
import { PaperProvider } from 'react-native-paper';


function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <NavigationContainer>
        <PaperProvider>
          <Stack.Navigator initialRouteName='Splash'>
            <Stack.Screen name='Splash' component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name='MainApp' component={TabNavigation} options={{ headerShown: false }} />
            <Stack.Screen name='AuthStack' component={AuthStack} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.AddTransactionScreen} component={AddTransactionScreen}
              options={({ navigation, route }: any) => ({
                headerShown: true,
                header: () => (
                  <AppHeader
                    navigation={navigation}
                    title={route.params?.title}
                    color={route.params?.expenseType === "income" ? Colors.green : Colors.red}
                    iconAndTextColor='#fff' />
                ),
              })} />
          </Stack.Navigator>
        </PaperProvider>
      </NavigationContainer>
    </KeyboardAvoidingView>
  );
}

export default App;
