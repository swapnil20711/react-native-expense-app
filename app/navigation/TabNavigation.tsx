import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import { Image } from 'react-native';
import TransactionScreen from '../screens/TransactionScreen';
import BudgetScreen from '../screens/BudgetScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Colors } from '../colors';
import { Routes } from '../screens';
import withSafeArea from '../components/withSafeArea';
import AddButtonComponent from '../components/AddButtonComponent';

const TabNavigation = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen
                name={Routes.HomeScreen.toString()}
                component={withSafeArea(HomeScreen)}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image tintColor={focused ? Colors.primaryColor : ""} style={{ width: 32, height: 32 }} source={require("../assets/home.png")} />
                    ),
                    tabBarActiveTintColor: Colors.primaryColor,
                    headerShown: false,
                }}></Tab.Screen>
            <Tab.Screen
                name={Routes.TransactionScreen.toString()}
                component={withSafeArea(TransactionScreen)}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image tintColor={focused ? Colors.primaryColor : ""} style={{ width: 32, height: 32 }} source={require("../assets/transaction.png")} />
                    ),
                    tabBarActiveTintColor: Colors.primaryColor,
                    headerShown: false,
                }}></Tab.Screen>
            <Tab.Screen
                name="Add"
                component={withSafeArea(HomeScreen)}
                options={{
                    tabBarIcon: () => <AddButtonComponent/>,
                    headerShown: false,
                    title: "",
                }}
            />

            <Tab.Screen
                name={Routes.BudgetScreen.toString()}
                component={withSafeArea(BudgetScreen)}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image tintColor={focused ? Colors.primaryColor : ""} style={{ width: 32, height: 32 }} source={require("../assets/pie-chart.png")} />
                    ),
                    tabBarActiveTintColor: Colors.primaryColor,
                    headerShown: false,
                }}></Tab.Screen>
            <Tab.Screen
                name={Routes.ProfileScreen.toString()}
                component={withSafeArea(ProfileScreen)}
                options={{
                    tabBarActiveTintColor: Colors.primaryColor,
                    tabBarIcon: ({ focused }) => (
                        <Image tintColor={focused ? Colors.primaryColor : ""} style={{ width: 32, height: 32 }} source={require("../assets/user.png")} />
                    ),
                    headerShown: false
                }}></Tab.Screen>
        </Tab.Navigator>
    )
}

export default TabNavigation