import { type PropsWithChildren } from 'react'
import { type ViewStyle } from 'react-native'
import DropDownData from './DropdownData'

export default interface DropDownViewProps extends PropsWithChildren {
    data: DropDownData[]
    label: string
    onSelect: (item: DropDownData) => void
    containerStyle?: ViewStyle
    selectedOption: DropDownData | null | undefined
}