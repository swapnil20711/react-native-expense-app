import { create } from 'zustand';

// Define the shape of the store
type AccountStore = {
    balance: number;
    income: number;
    expense: number;
    updateBalance: (newBalance: number) => void
    updateIncome: (income: number) => void
    updateExpense : (expense:number)=>void
}
const useAccountStore = create<AccountStore>((set) => ({
    balance: 0,
    income: 0,
    expense: 0,
    updateBalance: (newBalance: number) => set({ balance: newBalance }),
    updateIncome: (income: number) => set({ income: income }),
    updateExpense : (expense:number)=>set({expense:expense})
}));

export default useAccountStore;
