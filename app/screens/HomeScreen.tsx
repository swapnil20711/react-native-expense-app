import { View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import HomeAppBar from '../components/HomeAppBar'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <LinearGradient
        colors={['#FFF6E5', '#F8EDD840']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{
          flex: 0.3,
          borderBottomLeftRadius: 32,
          borderBottomRightRadius: 32,
        }}>

      </LinearGradient>
      <View style={{ top: insets.top ,position:"absolute",left:0,right:0}}>
        <HomeAppBar />
      </View>

    </View>
  )
}

export default HomeScreen