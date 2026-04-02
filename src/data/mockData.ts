import type { Transaction } from "../types";

export const mockTransactions: Transaction[] = [
  {
    id: "1",
    date: "2026-04-01",
    amount: 25000,
    category: "Salary",
    type: "Income",
  },
  {
    id: "2",
    date: "2026-05-03",
    amount: 5000,
    category: "Groceries",
    type: "Expense"
  },
  {
    id: "3",
    date: "2026-06-24",
    amount: 3000,
    category: "Entertainment",
    type: "Expense"
  },
  {
    id: "4",
    date: "2026-07-10",
    amount: 13250,
    category: "Freelance",
    type: "Income"
  },
  {
    id: "5",
    date: "2026-08-04",
    amount: 15000,
    category: "Rent",
    type: "Expense"
  }
];
