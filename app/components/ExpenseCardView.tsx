import { View, Text, Image } from 'react-native'
import React from 'react'

type ExpenseCardViewProps = {
    expenseType: "income" | "expense",
    title: string,
    amount: number,
    cardBackgroundColor: string
}
const ExpenseCardView: React.FC<ExpenseCardViewProps> = ({ expenseType, cardBackgroundColor, title, amount }) => {
    const imageSource = expenseType === "expense" ? require("../assets/expense.png") : require("../assets/income.png")
    return (
        <View style={{ width: "auto", height: "50%", backgroundColor: cardBackgroundColor, borderRadius: 28, overflow: "hidden", marginTop: 28 }}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ backgroundColor: "white", width: 48, height: 48, marginStart: 16, marginTop: 16, borderRadius: 16, justifyContent: "center" }}>
                    <Image source={imageSource} style={{ width: 32, height: 32, alignSelf: "center" }} />
                </View>
                <View style={{ marginTop: 18, marginStart: 8, marginEnd: 16 }}>
                    <Text style={{ color: "#fff", fontWeight: "600" }}>{title}</Text>
                    <Text style={{ fontSize: 20, color: "#fff", fontWeight: 'bold' }}>₹{amount}</Text>
                </View>
            </View>
        </View>
    )
}

export default ExpenseCardView