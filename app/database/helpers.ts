import { Q } from "@nozbe/watermelondb";
import constants from "../constants";
import { Transaction as TransactionType } from "../types/Transaction";
import { database } from "./database";
import Transaction from "./model/transaction";

export const saveTransactionToDB = async (transaction: TransactionType) => {
  try {
    await database.write(async () => {
      await database.collections
        .get<Transaction>(constants.TRANSACTIONS_TABLE)
        .create((entry) => {
          entry.createdAt = new Date();
          entry.description = transaction.description;
          entry.amount = transaction.amount;
          entry.expenseType = transaction.expenseType;
          entry.category = transaction.category;
        });
    });
  } catch (error) {
    console.log("Error writing:", error);
  }
};

export const getAllTransactions = async () => {
  return await database.collections
    .get<Transaction>(constants.TRANSACTIONS_TABLE)
    .query(Q.sortBy("createdAt", Q.asc))
    .fetch();
};

export async function getTotalAmount(expenseType: string) {
  const transactions = await database.collections
    .get<Transaction>(constants.TRANSACTIONS_TABLE)
    .query(
      Q.where('expenseType', expenseType),
      Q.sortBy('createdAt', Q.asc)
    )
    .fetch();

  
  const totalAmount = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);

  return totalAmount;
}
