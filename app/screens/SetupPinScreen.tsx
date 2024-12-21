import { View, Text, FlatList, Dimensions, TouchableOpacity, Platform } from 'react-native'
import React, { useCallback, useEffect, useMemo, useState } from 'react'

const SetupPinScreen = () => {
    const array = useMemo(() => {
        const arr = Array.from({ length: 9 }, (_, index) => index + 1);
        arr.push('X', '0', '→');
        return arr;
    }, []);
    var pinView = Array.from({ length: 4 }, (_, index) => index + 1)
    const [pin, setPin] = useState("")

    const handlePress = useCallback(
        (item: string) => {
            if (item !== ' ' && item !== '→') {
                if (item === 'X') {
                    setPin((prevPin) => prevPin.slice(1, prevPin.length))
                } else {
                    setPin((prevPin) => (prevPin.length < 4 ? prevPin + item.toString() : prevPin));
                }
            } else if (item === '→') {
                console.log('PIN entered:', pin);
            }
        },
        [pin]
    );

    return (
        <View style={{ flex: 1, justifyContent: "space-around", backgroundColor: "#7F3DFF" }}>
            <View style={{ position: "absolute", top: 0, left: 0, right: 0, height: '40%', marginTop: 46 }}>
                <Text style={{ color: 'white', fontWeight: "bold", textAlign: 'center' }}>Let's setup your PIN</Text>
                <View style={{ flexDirection: 'row', justifyContent: "center", marginTop: '20%' }}>
                    {pinView.map((item, index) => {
                        return (
                            <View
                                key={item.toString()}
                                style={{
                                    width: 32,
                                    height: 32,
                                    borderRadius: 16,
                                    backgroundColor: pin[index] !== undefined ? "white" : "transparent",
                                    marginEnd: 16,
                                    borderWidth: pin[index] !== undefined ? 0 : 4,
                                    borderColor: "#EEE5FF",
                                    opacity: pin[index] !== undefined ? 1 : 0.4,
                                }}></View>
                        )
                    })}
                </View>

            </View>
            <View style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
                <FlatList
                    scrollEnabled={false}
                    data={array}
                    numColumns={3}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => handlePress(item.toString())} style={{ flex: 1 }}>
                                <Text style={{ textAlign: "center", fontSize: 48, paddingVertical: 12, color: '#FCFCFC' }}>{item}</Text>
                            </TouchableOpacity>
                        )
                    }} />
            </View>
        </View>
    )
}

export default SetupPinScreen