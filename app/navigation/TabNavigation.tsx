import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import { Image, TouchableOpacity } from 'react-native';
import TransactionScreen from '../screens/TransactionScreen';
import BudgetScreen from '../screens/BudgetScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Colors } from '../colors';

const TabNavigation = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='Home'
                component={HomeScreen} options={{
                    tabBarIcon: ({ focused }) => (
                        <Image tintColor={focused ? Colors.primaryColor : ""} style={{ width: 32, height: 32 }} source={require("../assets/home.png")} />
                    ),
                    tabBarActiveTintColor: Colors.primaryColor,
                    headerShown: false,
                }}></Tab.Screen>
            <Tab.Screen
                name='Transaction'
                component={TransactionScreen} options={{
                    tabBarIcon: ({ focused }) => (
                        <Image tintColor={focused ? Colors.primaryColor : ""} style={{ width: 32, height: 32 }} source={require("../assets/transaction.png")} />
                    ),
                    tabBarActiveTintColor: Colors.primaryColor,
                    headerShown: false,
                }}></Tab.Screen>
            <Tab.Screen
                name='Add'
                component={HomeScreen} options={{
                    tabBarIcon: () => (
                        <TouchableOpacity>
                            <Image style={{ width: 56, height: 56, top: -15 }} source={require("../assets/add_button.png")} />
                        </TouchableOpacity>
                    ),
                    headerShown: false,
                    title: ""
                }}></Tab.Screen>
            <Tab.Screen
                name='Budget'
                component={BudgetScreen} options={{
                    tabBarIcon: ({ focused }) => (
                        <Image tintColor={focused ? Colors.primaryColor : ""} style={{ width: 32, height: 32 }} source={require("../assets/pie-chart.png")} />
                    ),
                    tabBarActiveTintColor: Colors.primaryColor,
                    headerShown: false,
                }}></Tab.Screen>
            <Tab.Screen
                name='Profile'
                component={ProfileScreen} options={{
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