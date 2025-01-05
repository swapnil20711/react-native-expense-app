import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import useAccountStore from '../hooks/useAccountStore'
import { getAllTransactions } from '../database/helpers';
import { Transaction } from '../types/Transaction';
import { _RawRecord } from '@nozbe/watermelondb/RawRecord';
import { Colors } from '../colors';
import moment from 'moment';

const TransactionScreen = () => {
  const { balance } = useAccountStore();
  const [transactions, setTransactions] = useState<any[]>([]);
  useEffect(() => {
    getAllTransactions().then((res) => {
      const array = res.map((transaction) => {
        return transaction._raw
      })
      setTransactions(array)
    })
    console.log("Balance is : ", balance);
  }, [])
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <FlatList
        style={{ paddingVertical: 24 }}
        data={transactions}
        renderItem={({ item, index }) => {
          const transaction = item as Transaction
          const transactionTypeIsIncome = transaction.expenseType === "income"
          return (
            <View style={{ marginHorizontal: 20, borderRadius: 16, backgroundColor: "#FCFCFC", padding: 16, marginTop: 8, alignItems: "center" }}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ backgroundColor: transactionTypeIsIncome ? "#CFFAEA" : "#FDD5D7", borderRadius: 16, padding: 16 }}>
                  <Image tintColor={transactionTypeIsIncome ? Colors.green : Colors.red} source={require("../assets/salary.png")} style={{ width: 32, height: 32, alignSelf: "center" }}></Image>
                </View>
                <View style={{ flex: 1, flexDirection: "row", marginVertical: 6 }}>
                  <View style={{ flex: 1, flexDirection: "column", padding: 6 }}>
                    <Text style={{ color: "#292B2D", fontWeight: "600", flex: 1 }}>{transaction.category}</Text>
                    <Text numberOfLines={1} style={{ color: Colors.gray, fontWeight: "500", flex: 1, marginTop: 12, }}>{transaction.description}</Text>
                  </View>
                  <View style={{ padding: 6 }}>
                    <Text style={{ color: transaction.expenseType === "income" ? Colors.green : Colors.red, fontWeight: "semibold" }}>{transaction.expenseType === "income" ? "+ " : "- "}{transaction.amount}</Text>
                    <Text style={{ marginTop: 12 }}>{moment(item.createdAt).format("LT")}</Text>
                  </View>
                </View>
              </View>
            </View>
          )
        }}
      />
    </View>
  )
}

export default TransactionScreen