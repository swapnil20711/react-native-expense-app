import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../colors'
import DropDown from '../components/Dropdown';
import DropDownData from '../types/DropdownData';
import TextInputComponent from '../components/TextInputComponent';

const AddIncomeScreen = () => {
    const [income, setIncome] = useState('');
    const incomeSources: DropDownData[] = [
        { name: "Salary", id: "1" },
        { name: "Stock Dividends", id: "2" },
        { name: "Freelance/Contract Work", id: "3" },
        { name: "Rental Income", id: "4" },
        { name: "Interest Income", id: "5" },
        { name: "Bonus/Commission", id: "6" },
        { name: "Gift Money", id: "7" },
        { name: "Investment Income", id: "8" },
        { name: "Side Business Income", id: "9" },
        { name: "Others", id: "10" }
    ];
    const [category, setCategory] = useState<DropDownData | null>(null)
    const [description, setDescription] = useState('')
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 0.3, backgroundColor: Colors.green }}>
                <View style={{ marginTop: "24%", marginStart: 28 }}>
                    <Text style={{ color: "#FCFCFC", opacity: 0.64, fontSize: 18, fontWeight: "bold" }}>How much?</Text>
                    <View style={{ flexDirection: "row", marginTop: 12, marginBottom: 16 }}>
                        <Text style={{ color: "#fff", fontSize: 44 }}>₹</Text>
                        <TextInput
                            value={income}
                            numberOfLines={2}
                            onChangeText={(text) => {
                                setIncome(text)
                            }}
                            placeholderTextColor={"#FCFCFC40"}
                            placeholder='2000'
                            inputMode='numeric'
                            autoFocus
                            returnKeyType="done"
                            style={{ backgroundColor: "transparent", flex: 1, fontSize: 44, color: "white" }} />
                    </View>
                </View>
            </View>
            <View style={{ borderTopStartRadius: 32, borderTopEndRadius: 32, backgroundColor: "white", position: "absolute", left: 0, right: 0, top: "26%", bottom: 0 }}>
                <View style={{ marginHorizontal: 16, marginTop: 28 }}>
                    <DropDown
                        data={incomeSources}
                        label={'Category'}
                        onSelect={function (item: DropDownData): void {
                            setCategory(item)
                        }}
                        selectedOption={category} />

                    <TextInputComponent
                        mode='outlined'
                        style={{ marginTop: 16 }}
                        outlineStyle={{ borderRadius: 16 }}
                        value={description}
                        onChangeText={(text) => {
                            setDescription(text)
                        }}
                        label={"Description"}
                        placeholder={''}
                        inputMode={"text"}
                        outlineColor={'#F1F1FA'} />
                </View>
            </View>
        </View>
    )
}

export default AddIncomeScreen