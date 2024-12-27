import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { Avatar, Text } from 'react-native-paper';
import { Colors } from '../colors';
import Icon from 'react-native-vector-icons/Ionicons';


const HomeAppBar = () => {
    return (
        <View style={styles.appBarContainerStyle}>
            <View style={styles.avatarContainerStyle}>
                <Avatar.Image source={{ uri: "https://avatars.githubusercontent.com/u/53923373?v=4" }} size={32} />
            </View>
            <View style={styles.centerContainerStyle}>
                <View style={styles.monthTextContainerStyle}>
                    <Image source={require("../assets/arrow_down.png")} style={{ width: 32, height: 32 }}></Image>
                    <Text style={styles.monthTextStyle}>October</Text>
                </View>
            </View>
            <Icon size={24} color={Colors.primaryColor} name='notifications' />
        </View>
    )
}

const styles = StyleSheet.create({
    appBarContainerStyle: {
        flexDirection: "row",
        paddingHorizontal: 16,
        alignItems: "center",
        flex: 1,
        marginTop:8
    },
    avatarContainerStyle:{
        borderRadius: 22, 
        width: 44, 
        height: 44, 
        borderWidth: 2, 
        borderColor: Colors.primaryColor, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    centerContainerStyle:{
        flex: 1, 
        alignItems: "center"
    },
    monthTextContainerStyle:{
        borderWidth: 1, 
        padding: 8, 
        borderColor: '#F1F1FA', 
        borderRadius: 40, 
        flexDirection: "row", 
        alignContent: 'center', 
        paddingHorizontal: 16
    },
    monthTextStyle:{
        color: "#212325", 
        alignSelf: "center", 
        marginStart: 4,
        fontWeight:"500"
    }
})

export default HomeAppBar