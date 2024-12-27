import { Image, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import HomeAppBar from '../components/HomeAppBar'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Text } from 'react-native-paper'
import ExpenseCardView from '../components/ExpenseCardView'

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <LinearGradient
        colors={['#FFF6E5', '#F8EDD840']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{
          flex: 0.42,
          borderBottomLeftRadius: 32,
          borderBottomRightRadius: 32,
        }}>

      </LinearGradient>
      <View style={{ top: insets.top, position: "absolute", left: 0, right: 0 }}>
        <HomeAppBar />
        <View style={{ marginTop: 16, marginStart: 60, marginEnd: 40 }}>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ color: "#91919F", fontSize: 16, marginStart: 8 }}>Account Balance</Text>
            <Text style={{ fontSize: 28 }}>₹9400</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", height: "80%", justifyContent: "space-evenly" }}>
          <ExpenseCardView expenseType="income" cardBackgroundColor='#00A86B' title='Income' amount={5000} />
          <ExpenseCardView expenseType="expense" cardBackgroundColor='#FD3C4A' title='Expenses' amount={1200} />
        </View>
      </View>

    </View >
  )
}

export default HomeScreen