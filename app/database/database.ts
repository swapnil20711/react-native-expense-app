import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";

import schema from "./model/schema";
import migrations from "./model/migrations";
import Transaction from "./model/transaction";

// First, create the adapter to the underlying database:
const adapter = new SQLiteAdapter({
  schema,
  migrations,
//   jsi: true /* Platform.OS === 'ios' */,
  onSetUpError: (error) => {
    console.log("error is : ", error);
  },
});

// Then, make a Watermelon database from it!
export const database = new Database({
  adapter,
  modelClasses: [Transaction],
});
