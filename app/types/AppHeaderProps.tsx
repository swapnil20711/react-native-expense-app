import { ParamListBase } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export type AppHeaderProps = {
    title: string,
    navigation: NativeStackNavigationProp<ParamListBase, string, undefined>
}