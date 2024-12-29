import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '../colors'

const AddExpenseScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.3, backgroundColor: Colors.red }}></View>
      <View style={{ borderTopStartRadius: 32, borderTopEndRadius: 32, backgroundColor: "white", position: "absolute", left: 0, right: 0, top: "26%", bottom: 0 }}></View>
    </View>
  )
}

export default AddExpenseScreen