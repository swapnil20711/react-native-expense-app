import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import useAccountStore from '../hooks/useAccountStore'

const TransactionScreen = () => {
  const {balance} = useAccountStore();

  useEffect(()=>{
    console.log("Balance is : ",balance);
  },[])
  return (
    <View>
      <Text>TransactionScreen</Text>
    </View>
  )
}

export default TransactionScreen