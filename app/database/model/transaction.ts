import { Model } from "@nozbe/watermelondb";
import { date, field } from "@nozbe/watermelondb/decorators";

export default class Transaction extends Model {
  static table = "transactions";

  @field("category")
  category!: string;

  @field("expenseType")
  expenseType!: string;

  @field("description")
  description!: string;

  @field("amount")
  amount!: number;

  @date('createdAt')
  createdAt!: Date


}
