import { mockTransactions } from "./data/mockData";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import "./App.css";

// Formatting Helpers
// simply change 'en-US' to 'en-IN' and 'USD' to 'INR' to automatically format as Rupees!
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
};

// Chronological running balance for the Line Chart
const generateBalanceData = () => {
  let currentBalance = 0;
  
  const chronologicalTransactions = [...mockTransactions].sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return chronologicalTransactions.map((transaction) => {
    if (transaction.type === "Income") {
      currentBalance += transaction.amount;
    } else {
      currentBalance -= transaction.amount;
    }
    return {
      // Use the raw date here; the chart handles the string fine
      date: formatDate(transaction.date),
      balance: currentBalance,
    };
  });
};

function App() {
  const totalIncome = mockTransactions
    .filter((item) => item.type === "Income")
    .reduce((sum, item) => sum + item.amount, 0);
  const totalExpense = mockTransactions
    .filter((item) => item.type === "Expense")
    .reduce((sum, item) => sum + item.amount, 0);
  const totalBalance =
    totalExpense > totalIncome ? 0 : totalIncome - totalExpense;

  const expensesOnly = mockTransactions.filter(
    (item) => item.type === "Expense",
  );

  const categoryBuckets = expensesOnly.reduce(
    (acc, transaction) => {
      if (acc[transaction.category]) {
        acc[transaction.category] += transaction.amount;
      } else {
        acc[transaction.category] = transaction.amount;
      }
      return acc;
    },
    {} as Record<string, number>,
  );

  const actualPieData = Object.keys(categoryBuckets).map((categoryName) => {
    return {
      name: categoryName,
      value: categoryBuckets[categoryName],
    };
  });

  // Create a chronological running balance for the Line Chart
  const balanceData = generateBalanceData();

  // Sort transactions from newest to oldest for the table
  const sortedTransactions = [...mockTransactions].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Dashboard Header */}
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Financial Dashboard
      </h1>
      {/* Summary Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Balance Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-sm font-medium text-gray-500 mb-1">
            Total Balance
          </h3>
          <p className="text-2xl font-bold text-gray-900">
            {formatCurrency(totalBalance)}
          </p>
        </div>

        {/* Total Income Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-sm font-medium text-gray-500 mb-1">
            Total Income
          </h3>
          <p className="text-2xl font-bold text-green-600">
            {formatCurrency(totalIncome)}
          </p>
        </div>

        {/* Total Expense Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-sm font-medium text-gray-500 mb-1">
            Total Expense
          </h3>
          <p className="text-2xl font-bold text-red-600">
            {formatCurrency(totalExpense)}
          </p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* Doughnut Chart Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Spending Breakdown
          </h3>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={actualPieData}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {actualPieData.map((_entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Line Chart Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Balance Trend
          </h3>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={balanceData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f3f4f6"
                />
                <XAxis
                  dataKey="date"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#6b7280", fontSize: 12 }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#6b7280", fontSize: 12 }}
                  dx={-10}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: "8px",
                    border: "none",
                    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="balance"
                  stroke="#10b981"
                  strokeWidth={3}
                  dot={{ r: 4, fill: "#10b981", strokeWidth: 0 }}
                  activeDot={{ r: 6, strokeWidth: 0 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Transactions Table */}
      <div className="mt-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4">
          Recent Transactions
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200 text-sm text-gray-500">
                <th className="pb-3 font-medium">Date</th>
                <th className="pb-3 font-medium">Category</th>
                <th className="pb-3 font-medium">Type</th>
                <th className="pb-3 font-medium">Amount</th>
              </tr>
            </thead>
            <tbody>
              {sortedTransactions.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="py-3 text-gray-500">
                    {formatDate(item.date)}
                  </td>
                  <td className="py-3 text-gray-500">{item.category}</td>
                  <td className="py-3 text-gray-500">{item.type}</td>
                  <td className="py-3 text-gray-500">
                    {formatCurrency(item.amount)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
