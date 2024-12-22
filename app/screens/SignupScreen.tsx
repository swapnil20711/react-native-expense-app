import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Checkbox } from 'react-native-paper'
import TextInputComponent from '../components/TextInputComponent';
import { Colors } from '../colors';

const SignupScreen = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={{ backgroundColor: 'white', flex: 1, paddingHorizontal: 16, paddingTop: 36 }}>
      <TextInputComponent
        mode='outlined'
        outlineStyle={{ borderRadius: 16 }}
        outlineColor='#F1F1FA'
        placeholder='Swapnil'
        label={'Name'}
        style={{ backgroundColor: 'white' }}
        onChangeText={(text) => {
          setName(text);
        }}
        value={name}
        inputMode={"text"} />
        
      <TextInputComponent
        mode='outlined'
        outlineStyle={{ borderRadius: 16 }}
        outlineColor='#F1F1FA'
        placeholder='swapnil.bhojwani@gmail.com'
        label={'Email'}
        style={{ marginTop: 24 }}
        onChangeText={(text) => {
          setEmail(text)
        }}
        value={email}
        inputMode={"email"} />

      <TextInputComponent
        mode='outlined'
        secureTextEntry={true}
        outlineStyle={{ borderRadius: 16 }}
        outlineColor='#F1F1FA'
        label={'Password'}
        style={{ marginTop: 24 }}
        value={password}
        placeholder={undefined}
        onChangeText={(text) => {
          setPassword(text)
        }}
        inputMode={"text"} />

      <View style={{ flexDirection: "row", marginTop: 16 }}>
        <Checkbox.Android
          style={{ marginEnd: 10 }}
          color={Colors.primaryColor}
          status={isChecked ? 'checked' : 'unchecked'}
          onPress={() => { setIsChecked(!isChecked) }} ></Checkbox.Android>
        <Text style={{ flexShrink: 1 }}>By signing up, you agree to the <Text style={{ color: Colors.primaryColor, fontWeight: "500" }}>Terms of Service and Privacy Policy</Text></Text>
      </View>
    </View>
  )
}

export default SignupScreen