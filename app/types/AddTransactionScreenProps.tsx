import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
    AddTransaction: { expenseType: string,title:string };
};

export type AddTransactionScreenProps = NativeStackScreenProps<RootStackParamList, 'AddTransaction'>;