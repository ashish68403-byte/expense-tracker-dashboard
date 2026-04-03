# 💰 Expense Tracker Dashboard

> A clean, responsive personal finance dashboard built with React and TypeScript — track your income, expenses, and balance in real time.

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=flat&logo=tailwind-css&logoColor=white)

---

## 📌 Live Demo

🔗 **[View Live Demo](https://expense-tracker-dashboard-opal.vercel.app)**

---

## 📖 Description

**Expense Tracker Dashboard** is a personal finance web application that helps users manage their money with clarity. Users can log income and expense transactions, assign categories, and instantly see their running balance — all within a minimal, distraction-free interface.

Built as a demonstration of modern frontend development practices using React, TypeScript, Vite, and Tailwind CSS.

---

## ✨ Features

- 📂 **Smart Categorization** — Organize transactions by category (e.g., Food, Salary, Rent, Entertainment)
- ⚡ **Real-Time Balance** — Balance, total income, and total expenses update instantly on every action
- 📋 **Transaction History Table** — View all past transactions in a clean, sortable table
- 📱 **Responsive UI** — Fully functional across desktop, tablet, and mobile devices
- 🎨 **Clean Interface** — Minimalist design focused on usability and readability
- 💾 **Persistent Storage** — Transactions are saved using localStorage and persist across sessions
- 🌙 **Dark Mode Toggle** — Switch between light and dark themes for better usability

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | Component-based UI library |
| **TypeScript** | Static typing for reliability and maintainability |
| **Vite** | Fast development server and optimized build tool |
| **Tailwind CSS** | Utility-first CSS for rapid, responsive styling |

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) v18 or higher
- npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/ashish68403-byte/expense-tracker-dashboard.git
cd expense-tracker-dashboard
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

4. **Open your browser** and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

```bash
npm run preview
```

---

## 🧭 Usage

1. **Add a transaction** by entering a description, amount, and selecting a type (Income / Expense) along with a category.
2. **View your balance** — the summary cards at the top update in real time.
3. **Browse your history** — all transactions are listed in the table below with timestamps and categories.
4. **Delete a transaction** to instantly recalculate your totals.

---

## 📁 Folder Structure

```
expense-tracker-dashboard/
├── public/                  # Static assets
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── TransactionForm.tsx
│   │   ├── TransactionList.tsx
│   │   ├── BalanceSummary.tsx
│   │   └── CategoryBadge.tsx
│   ├── hooks/               # Custom React hooks
│   │   └── useTransactions.ts
│   ├── types/               # TypeScript interfaces & types
│   │   └── transaction.ts
│   ├── utils/               # Helper functions
│   │   └── calculations.ts
│   ├── App.tsx              # Root component
│   ├── main.tsx             # App entry point
│   └── index.css            # Global styles (Tailwind)
├── index.html
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🔮 Future Improvements

- [ ] 📊 Visual charts for income vs. expense trends (Recharts / Chart.js)
- [ ] 🗓️ Filter transactions by date range or category
- [ ] 🔐 User authentication and multi-account support
- [ ] 📤 Export transactions to CSV or PDF

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add: your feature description'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

Please ensure your code follows the existing style conventions and is properly typed.

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <sub>Built with ❤️ by <a href="https://github.com/ashish68403-byte">Ashish Kumar</a></sub>
</div>
