import React, { useEffect, useState } from 'react'
import { FlatList, TouchableOpacity, View } from 'react-native'
import { Dialog, Divider, Icon, List, Portal, Text, TextInput } from 'react-native-paper'
import DropDownViewProps from '../types/DropDownViewProps'
import { Colors } from '../colors'
import TextInputComponent from './TextInputComponent'
const Dropdown = (props: DropDownViewProps) => {
    useEffect(() => {
        if (props.data.length === 1) {
            props.onSelect(props.data[0])
        }
    }, [props.data])
    const [isDialogShown, setIsDialogShown] = useState(false)
    return (
        <View style={props.containerStyle}>
            <TouchableOpacity
                onPress={() => {
                    setIsDialogShown(!isDialogShown)
                }}
            >
                <TextInputComponent
                    outlineStyle={{ borderRadius: 16 }}
                    style={{ backgroundColor: "white" }}
                    mode="outlined"
                    value={props.selectedOption?.name}
                    label={props.label}
                    editable={false}
                    pointerEvents="none"
                    errorText={props.error}
                    right={
                        <TextInput.Icon
                            onPress={() => {
                                setIsDialogShown(true)
                            }}
                            icon={require("../assets/arrow_down.png")}
                            color={Colors.gray} />
                    }
                    placeholder={''}
                    inputMode={'text'}
                    outlineColor={'#F1F1FA'}></TextInputComponent>
            </TouchableOpacity>
            <Portal>
                <Dialog
                    visible={isDialogShown}
                    style={{ backgroundColor: "white", padding: 8,overflow:"hidden" }}
                >
                    <TouchableOpacity onPress={() => {
                        setIsDialogShown(!isDialogShown)
                    }} style={{ alignItems: "flex-end", marginEnd: 16, position: "absolute", right: 0, top: 0 }}>
                        <Icon size={28} source={"close"} />
                    </TouchableOpacity>
                    <Dialog.Title>
                        {props.label}
                    </Dialog.Title>
                    <Dialog.Content>
                        {props.data.length > 0 ? (
                            <FlatList
                                data={props.data}
                                ItemSeparatorComponent={() => <Divider />}
                                renderItem={({ item, index }) => {
                                    return (
                                        <TouchableOpacity
                                            onPress={() => {
                                                props.onSelect(item)
                                                setIsDialogShown(false)
                                            }}
                                        >
                                            <List.Item
                                                title={item.name}
                                                titleStyle={{ color: Colors.black }}
                                            />
                                        </TouchableOpacity>
                                    )
                                }}
                            />
                        ) : (
                            <View>
                                <Text variant="titleMedium" style={{ color: Colors.black }}>
                                    No data found
                                </Text>
                            </View>
                        )}
                    </Dialog.Content>
                </Dialog>
            </Portal>
        </View>
    )
}

export default Dropdown