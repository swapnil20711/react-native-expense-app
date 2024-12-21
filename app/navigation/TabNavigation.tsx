import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import SettingsIcon from 'react-native-vector-icons/Feather'

const TabNavigation = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='Home'
                component={HomeScreen} options={{
                    tabBarIcon: ({ size, focused }) => (
                        <Icon name='home' size={size} color={focused ? "blue" : "black"} />
                    ),
                    tabBarActiveTintColor: "blue",
                    headerShown: false,
                }}></Tab.Screen>
            <Tab.Screen
                name='Setting'
                component={SettingsScreen} options={{
                    tabBarActiveTintColor: "blue",
                    tabBarIcon: ({ focused, size }) => (
                        <SettingsIcon name='settings' size={size} color={focused ? "blue" : "black"} />
                    ),
                    headerShown: false
                }}></Tab.Screen>
        </Tab.Navigator>
    )
}

export default TabNavigation