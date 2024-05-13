import React, { createContext, useState, useEffect } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [wallet, setWallet] = useState({
    wallet_balance: 5000,
    expense_amount: 0,
    transactions: [],
  });

  useEffect(() => {
    const localContext = localStorage.getItem("wallet");

    if (localContext) setWallet(localContext);
  }, []);

  const add_wallet_balance = (amount) => {
    const new_balance = wallet.wallet_balance + amount;
    setWallet({ ...wallet, wallet_balance: new_balance });
  };

  const create_expense = (expense_obj) => {
    setWallet((prevState) => ({
      wallet_balance: prevState.wallet_balance - expense_obj.amount,
      expense_amount: prevState.expense_amount + expense_obj.amount,
      transactions: [...prevState.transactions, expense_obj],
    }));
  };

  const create_dataset = () => {
    const dataset = {};

    wallet.transactions.forEach((item) => {
      const { category, price } = item;
      if (dataset[category]) {
        dataset[category] += price;
      } else {
        dataset[category] = price;
      }
    });

    const categories = Object.keys(dataset);
    const prices = Object.values(dataset);

    const chartData = {
      series: prices,
      options: {
        chart: {
          width: 380,
          type: "pie",
        },
        labels: categories,
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };

    return chartData;
  };

  return (
    <Context.Provider
      value={{ wallet, add_wallet_balance, create_expense, create_dataset }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
