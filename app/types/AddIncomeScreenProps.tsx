import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
    Income: { expenseType: string,title:string };
};

export type AddIncomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Income'>;