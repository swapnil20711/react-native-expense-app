import { View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const HomeScreen = () => {
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

    </View>
  )
}

export default HomeScreen