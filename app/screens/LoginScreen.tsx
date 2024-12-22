import { Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import TextInputComponent from '../components/TextInputComponent';
import { Button } from 'react-native-paper';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import {Colors} from '../colors'
const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation<NavigationProp<ParamListBase>>()
  return (
    <View style={{ backgroundColor: 'white', flex: 1, paddingHorizontal: 16, paddingTop: 36 }}>
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

      <Button
        onPress={() => {
          navigation.navigate("MainApp")
        }}
        mode='contained'
        style={{ marginTop: 30, borderRadius: 16, backgroundColor: Colors.primaryColor }}>Login</Button>

      <TouchableOpacity style={{ marginTop: 32, alignItems: 'center' }}>
        <Text style={{ color: Colors.primaryColor, fontWeight: 'bold' }}>Forgot Password?</Text>
      </TouchableOpacity>

      <View style={{ marginTop: 32, flexDirection: 'row' }}>
        <Text style={{ flex: 2, textAlign: 'right' }}>
          Don’t have an account yet?
        </Text>
        <TouchableOpacity onPress={() => {
          navigation.navigate("Signup")
        }} style={{ flex: 1 }}>
          <Text style={{ color: Colors.primaryColor, fontWeight: 'bold', textAlign: 'left', marginStart: 4 }}> Sign Up</Text></TouchableOpacity>
      </View>
    </View>
  )
}

export default LoginScreen