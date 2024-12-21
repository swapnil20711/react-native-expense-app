import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Checkbox, Icon, TextInput } from 'react-native-paper'

const SignupScreen = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <View style={{ backgroundColor: 'white', flex: 1, paddingHorizontal: 16, paddingTop: 36 }}>
      <TextInput
        mode='outlined'
        outlineStyle={{ borderRadius: 16 }}
        outlineColor='#F1F1FA'
        placeholder='Swapnil'
        label={'Name'}
        style={{ backgroundColor: 'white' }}
      />
      <TextInput
        mode='outlined'
        outlineStyle={{ borderRadius: 16 }}
        outlineColor='#F1F1FA'
        placeholder='swapnil.bhojwani@gmail.com'
        label={'Email'}
        style={{ backgroundColor: 'white', marginTop: 24 }}
      />
      <TextInput
        mode='outlined'
        secureTextEntry={!isPasswordShown}
        outlineStyle={{ borderRadius: 16 }}
        outlineColor='#F1F1FA'
        label={'Password'}
        right={
          <TextInput.Icon onPress={() => {
            setIsPasswordShown(!isPasswordShown)
          }} icon={isPasswordShown ? "eye" : "eye-off"} />}
        style={{ backgroundColor: 'white', marginTop: 24 }}
      />

      <View style={{ flexDirection: "row", marginTop: 16 }}>
        <Checkbox.Android
          style={{ marginEnd: 10 }}
          color='#7F3DFF'
          status={isChecked ? 'checked' : 'unchecked'}
          onPress={() => { setIsChecked(!isChecked) }} ></Checkbox.Android>
        <Text style={{ flexShrink: 1 }}>By signing up, you agree to the <Text style={{ color: "#7F3DFF", fontWeight: "500" }}>Terms of Service and Privacy Policy</Text></Text>
      </View>
    </View>
  )
}

export default SignupScreen