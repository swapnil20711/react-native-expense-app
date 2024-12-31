/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './app/screens/SplashScreen';
import AuthStack from './app/navigation/AuthStack';
import TabNavigation from './app/navigation/TabNavigation';
import { Routes } from './app/screens';
import AppHeader from './app/components/AppHeader';
import AddExpenseScreen from './app/screens/AddExpenseScreen';
import { Colors } from './app/colors';
import AddIncomeScreen from './app/screens/AddIncomeScreen';
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
            <Stack.Screen name={Routes.IncomeScreen.toString()} component={AddIncomeScreen}
              options={({ navigation }) => ({
                headerShown: true,
                header: () => (
                  <AppHeader
                    navigation={navigation}
                    title={'Income'}
                    color={Colors.green}
                    iconAndTextColor='#fff' />
                ),
              })} />
            <Stack.Screen name={Routes.ExpenseScreen.toString()} component={AddExpenseScreen}
              options={({ navigation }) => ({
                headerShown: true,
                header: () => (
                  <AppHeader
                    navigation={navigation}
                    title={'Expense'}
                    color={Colors.red}
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
