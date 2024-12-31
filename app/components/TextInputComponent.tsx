import React, { useState, type FC } from 'react'
import {
    View,
    StyleSheet
} from 'react-native'
import { TextInput, HelperText, Text, useTheme } from 'react-native-paper'
import CountryPicker, {
    type CountryCode,
    DARK_THEME,
    DEFAULT_THEME,
} from 'react-native-country-picker-modal'
import { TextInputComponentProps } from '../types/TextInputComponentProps'

const TextInputComponent: FC<TextInputComponentProps> = (props) => {
    const [secureTextEntry, setSecureTextEntry] = useState(props.secureTextEntry === true || false)
    const theme = useTheme()
    const shouldShowErrorText = (errorText: string | null | undefined): boolean => {
        return errorText !== null && errorText !== undefined && errorText.length > 0
    }

    return (
        <View style={props.style}>
            <View style={styles.rowStyle}>
                {props.selectedCountry !== undefined && props.selectedCountry !== null && (
                    <View
                        style={[styles.countryPickerStyle, { borderColor: theme.colors.outline }]}
                    >
                        <CountryPicker
                            containerButtonStyle={{
                                marginRight: 20
                            }}
                            theme={theme.dark ? DARK_THEME : DEFAULT_THEME}
                            onSelect={(country) => {
                                if (props.onCountrySelect != null) {
                                    props?.onCountrySelect(country)
                                }
                            }}
                            {...{
                                countryCode: props.selectedCountry as CountryCode,
                                withCallingCode: true,
                                withCallingCodeButton: true,
                                withFilter: true
                            }}
                        />
                    </View>
                )}
                <TextInput
                    placeholder={props.placeholder}
                    label={
                        <Text>
                            {props.label}
                            {props.isRequired ?? false ? (
                                <Text style={{ color: theme.colors.error }}> *</Text>
                            ) : null}
                        </Text>
                    }
                    value={props.value}
                    defaultValue={props.value?.toString()}
                    error={!(props.errorText == null)}
                    maxLength={props.maxLength}
                    multiline={props.multiline ?? false}
                    numberOfLines={props.numberOfLines}
                    inputMode={props.inputMode}
                    outlineStyle={props.outlineStyle}
                    secureTextEntry={secureTextEntry}
                    contentStyle={{ textAlign: 'auto' }}
                    style={[{ flex: 1, backgroundColor: "white" }]}
                    onChangeText={(text) => props.onChangeText?.(text)}
                    right={
                        props.secureTextEntry !== undefined ? (
                            <TextInput.Icon
                                icon={secureTextEntry ? 'eye' : 'eye-off'}
                                onPress={() => {
                                    setSecureTextEntry(!secureTextEntry)
                                }}
                            />
                        ) : props.right ? props.right : <></>
                    }
                    mode={props.mode}
                    outlineColor={props.outlineColor}
                    editable={props.editable}
                    pointerEvents={props.pointerEvents}
                />
            </View>
            {shouldShowErrorText(props.errorText) && (
                <HelperText
                    style={{
                        marginStart:
                            props.selectedCountry != null && props.selectedCountry !== undefined
                                ? '30%'
                                : 0
                    }}
                    type="error"
                >
                    {props.errorText}
                </HelperText>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    countryPickerStyle: {
        paddingHorizontal: 4,
        height: 50,
        borderWidth: 1,
        justifyContent: 'center',
        marginRight: 4,
        borderRadius: 4
    },
    rowStyle: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    }
})

export default TextInputComponent