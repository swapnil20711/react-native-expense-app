import React from 'react'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { ScreenWithSafeAreaViewProps } from '../types/ScreenWithSafeAreaViewProps'
import { View } from 'react-native'

const ScreenWithSafeAreaView: React.FC<ScreenWithSafeAreaViewProps> = (props: ScreenWithSafeAreaViewProps) => {
    const insets = useSafeAreaInsets();
    return (
        props.hasSafeAreaView ?
            <View style={{ flex: 1, paddingTop: insets.top}}>
                {props.children}
            </View> :
            props.children
    )
}

export default ScreenWithSafeAreaView