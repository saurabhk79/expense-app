import React, { createContext, useState,  useEffect } from "react";

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

  return (
    <Context.Provider value={{ wallet, add_wallet_balance }}>
      {children}
    </Context.Provider>
  );
};


export default ContextProvider;
