import { View, Text, TextInput } from 'react-native'
import React, { useEffect } from 'react'
import { Colors } from '../colors'
import DropDown from '../components/Dropdown';
import DropDownData from '../types/DropdownData';
import TextInputComponent from '../components/TextInputComponent';
import { Transaction } from '../types/Transaction';
import { saveTransactionToDB } from '../database/helpers';
import { Button } from 'react-native-paper';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { AddTransactionScreenProps } from '../types/AddTransactionScreenProps';
import { expense, income } from '../constants/sources.json'

const AddTransactionScreen = ({ route }: AddTransactionScreenProps): React.JSX.Element => {
    const expenseType = route.params?.expenseType;
    const sources: DropDownData[] = route.params.expenseType === "income" ? income : expense
    const schema = z.object({
        amount: z.number().min(1, { message: "Amount must be greater than 1" }),
        category: z.object({ id: z.string(), name: z.string() }),
        description: z.string().min(10)
    })

    const navigation = useNavigation();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: any) => {
        const t: Transaction = { amount: data.amount, description: data.description, expenseType: expenseType, category: data.category.name }
        saveTransactionToDB(t)
            .then(() => {
                navigation.goBack();
            }).catch((error) => {
                console.log('====================================');
                console.log("error is : ", error);
                console.log('====================================');
            })
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 0.3, backgroundColor: expenseType === "income" ? Colors.green : Colors.red }}>
                <View style={{position: "absolute", bottom: '16%', end: 0, start: 28}}>
                    <Text style={{ color: "#FCFCFC", opacity: 0.64, fontSize: 18, fontWeight: "bold" }}>How much?</Text>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ color: "#fff", fontSize: 34, textAlignVertical: "center" }}>₹</Text>
                        <Controller
                            control={control}
                            name="amount"
                            render={(
                                { field: { onChange, onBlur, value } }) => {
                                return (
                                    <TextInput
                                        value={value}
                                        numberOfLines={2}
                                        onChangeText={(text) => {
                                            onChange(Number(text))
                                        }}
                                        onBlur={onBlur}
                                        placeholderTextColor={"#FCFCFC40"}
                                        placeholder='2000'
                                        inputMode='numeric'
                                        autoFocus
                                        returnKeyType="done"
                                        style={{ backgroundColor: "transparent", flex: 1, fontSize: 34, color: "white" }} />
                                )
                            }
                            }
                        ></Controller>
                    </View>
                    <Text style={{ color: '#fff', fontWeight: "bold" }}>{errors.amount?.message as string}</Text>
                </View>
            </View>
            <View style={{ borderTopStartRadius: 32, borderTopEndRadius: 32, backgroundColor: "white", position: "absolute", left: 0, right: 0, bottom: 0,top:'26%' }}>
                <View style={{ marginHorizontal: 16, marginTop: 28 }}>
                    <Controller
                        name="category"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <DropDown
                                data={sources}
                                label="Category"
                                selectedOption={value}
                                onSelect={(item: DropDownData) => onChange(item)}
                                error={errors.category?.message as string}
                            />
                        )}>

                    </Controller>

                    <Controller
                        control={control}
                        name="description"
                        render={({ field: { onChange, onBlur, value } }) => {
                            return (
                                <TextInputComponent
                                    mode='outlined'
                                    style={{ marginTop: 16 }}
                                    outlineStyle={{ borderRadius: 16 }}
                                    value={value}
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    label={"Description"}
                                    placeholder={''}
                                    inputMode={"text"}
                                    outlineColor={'#F1F1FA'}
                                    errorText={errors.description?.message as string}
                                />
                            )
                        }}
                    />

                    <Button
                        onPress={handleSubmit(onSubmit)}
                        mode='contained'
                        style={{ marginTop: 30, borderRadius: 14, backgroundColor: Colors.primaryColor }}>Continue</Button>
                </View>
            </View>
        </View>
    )
}

export default AddTransactionScreen