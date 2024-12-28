import { create } from 'zustand';

// Define the shape of the store
type AccountStore = {
    balance: number;
    income: number;
    expenses: number;
    updateBalance: (newBalance: number) => void
}
const useAccountStore = create<AccountStore>((set) => ({
    balance: 0,
    income: 0,
    expenses: 0,
    updateBalance: (newBalance: number) => set({ balance: newBalance })
}));

export default useAccountStore;
