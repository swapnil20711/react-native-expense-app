import { View, Text, TouchableOpacity, Platform, StatusBar } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-paper';
import { AppHeaderProps } from '../types/AppHeaderProps';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '../colors';

const AppHeader: React.FC<AppHeaderProps> = ({ navigation, title, color, iconAndTextColor }) => {
    const insets = useSafeAreaInsets();
    const backgroundColor = color === undefined ? "white" : color
    const iconColor = iconAndTextColor === undefined ? Colors.black : iconAndTextColor
    return (
        <View style={{
            paddingTop: insets.top,
            flexDirection: 'column',
            backgroundColor,
            //     ...Platform.select({
            //         ios: {
            //             shadowColor: 'rgba(0, 0, 0, 1)',
            //             shadowOpacity: 0.2,
            //             shadowRadius: 2,
            //             shadowOffset: {
            //                 height: 1,
            //                 width: 0,
            //             },
            //         },
            //         android: {
            //             elevation: 8,
            //             backgroundColor: 'rgba(0, 0, 0, 1)',
            //         },
            //     }
            // ),
        }}>
            <View style={{ flexDirection: 'row', padding: 8, backgroundColor, alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack();
                    }}
                >
                    <Icon
                        source={"keyboard-backspace"}
                        size={30}
                        color={iconColor} />
                </TouchableOpacity>
                <Text
                    style={{
                        flex: 1,
                        textAlign: 'center',
                        fontSize: 18,
                        paddingEnd: 38,
                        color: iconColor,
                        fontWeight: '500'
                    }}>{title}</Text>
            </View>
            {/* <Divider /> */}
        </View>
    )
}

export default AppHeader