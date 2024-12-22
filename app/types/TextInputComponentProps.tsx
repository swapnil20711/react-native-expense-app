import { InputModeOptions, StyleProp, ViewStyle } from "react-native"
import { Country } from "react-native-country-picker-modal"
import { TextInputLabelProp } from "react-native-paper/lib/typescript/components/TextInput/types"

export type TextInputComponentProps = {
    label?: TextInputLabelProp | undefined
    isRequired?: boolean
    value: string | undefined
    placeholder: string | undefined
    errorText?: string | null
    maxLength?: number
    numberOfLines?: number
    inputMode: InputModeOptions | undefined
    outlineStyle?: StyleProp<ViewStyle>
    secureTextEntry?: boolean
    multiline?: boolean
    onChangeText?: (text: string) => void
    onCountrySelect?: (country: Country) => void
    selectedCountry?: string
    mode?: 'flat' | 'outlined' | undefined
    style?: object | undefined
    outlineColor:string
}