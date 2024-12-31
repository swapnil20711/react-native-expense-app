import { Dimensions, View } from 'react-native'
import React, { useEffect } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import HomeAppBar from '../components/HomeAppBar'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Text } from 'react-native-paper'
import ExpenseCardView from '../components/ExpenseCardView'
import { LineChart } from "react-native-gifted-charts";
import { Colors } from '../colors'
import useAccountStore from '../hooks/useAccountStore'
import { getTotalAmount } from '../database/helpers'


const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const screenHeight = Dimensions.get('window').height;
  const data = [{ value: 10 }, { value: 10 }, { value: 10 }, { value: 20 }, { value: 30 }, { value: 20 }, { value: 70 }, { value: 20 }, { value: 15 }, { value: 15 }]
  const { balance, income, expense, updateIncome } = useAccountStore();


  const getTotalTransactionValue = (transactionType: string) => {
    getTotalAmount(transactionType).then((totalAmount) => {
      console.log(totalAmount);
      if (transactionType === "income") {
        updateIncome(totalAmount)
      } else {
        console.log('====================================');
        console.log(totalAmount);
        console.log('====================================');
      }
    }).catch((error) => {
      console.log('====================================');
      console.log("error is: ", error);
      console.log('====================================');
    })
  }

  useEffect(() => {
    getTotalTransactionValue("income")
    getTotalTransactionValue("expense")
  }, [])

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <LinearGradient
        colors={['#FFF6E5', '#F8EDD840']}
        start={{ x: 0, y: 0.8 }}
        end={{ x: 0, y: 1 }}
        style={{
          height: screenHeight * 0.4,
          borderBottomLeftRadius: 32,
          borderBottomRightRadius: 32,
        }}>
        <View style={{ top: insets.top, position: "absolute", left: 0, right: 0 }}>
          <HomeAppBar />
          <View style={{ marginTop: 16, marginStart: 60, marginEnd: 40 }}>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ color: "#91919F", fontSize: 16, marginStart: 8 }}>Account Balance</Text>
              <Text style={{ fontSize: 28 }}>₹{balance}</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", height: "80%", justifyContent: "space-evenly" }}>
            <ExpenseCardView expenseType="income" cardBackgroundColor={Colors.green} title='Income' amount={income} />
            <ExpenseCardView expenseType="expense" cardBackgroundColor={Colors.red} title='Expenses' amount={expense} />
          </View>
        </View>
      </LinearGradient>

      <View style={{ height: screenHeight * 0.6 }}>

        <View style={{ marginStart: 44, marginTop: 16 }}>
          <Text style={{ color: "#0D0E0F", fontWeight: "bold", fontSize: 20 }}>Spend Frequency</Text>
        </View>
        <View style={{ width: '100%' }}>
          <LineChart
            disableScroll
            color1={Colors.primaryColor}
            spacing={40}
            thickness={4}
            startFillColor="#8B50FF"
            endFillColor="#8B50FF"
            startOpacity={0.24}
            endOpacity={0}
            data={data}
            areaChart
            curved
            hideDataPoints
            hideAxesAndRules={true} />
        </View>
      </View>

    </View >
  )
}

export default HomeScreen