import { appSchema, tableSchema } from "@nozbe/watermelondb";
import constants from "../../constants";

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: constants.TRANSACTIONS_TABLE,
      columns: [
        { name: "category", type: "string" },
        { name: "expenseType", type: "string" },
        { name: "description", type: "string" },
        { name: "createdAt", type: "number" },
        { name: "amount", type: "number" },
      ],
    }),
  ],
});
