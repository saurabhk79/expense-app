import React, { createContext, useState, useEffect } from "react";
import {
  MdEmojiTransportation,
  MdOutlineLocalPizza,
  MdOutlineHealthAndSafety,
  MdOutlinePerson,
} from "react-icons/md";
import { PiCirclesFourLight, PiCheersLight } from "react-icons/pi";
// import { GiJumpAcross } from "react-icons/gi";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [wallet, setWallet] = useState({
    wallet_balance: 5000,
    expense_amount: 0,
    transactions: [],
    modal_status: {
      add_wallet_modal: false,
      add_expense_modal: false,
    },
    category: {
      Health: <MdOutlineHealthAndSafety />,
      Vehicle: <MdEmojiTransportation />,
      PersonalCare: <MdOutlinePerson />,
      Entertainment: <PiCheersLight />,
      Food: <MdOutlineLocalPizza />,
      Misc: <PiCirclesFourLight />,
    },
  });

  useEffect(() => {
    const localContext = localStorage.getItem("wallet");

    if (localContext) setWallet(localContext);
  }, []);

  const add_wallet_balance = (amount) => {
    const new_balance = wallet.wallet_balance + amount;
    setWallet({ ...wallet, wallet_balance: new_balance });
  };

  const handle_expense = (expense_obj) => {
    setWallet((prevState) => ({
      wallet_balance: prevState.wallet_balance - expense_obj.price,
      expense_amount: prevState.expense_amount + expense_obj.price,
      transactions: [...prevState.transactions, expense_obj],
    }));
  };

  const delete_expense = (id) => {
    const del_expense = wallet.transactions.find((obj) => obj.id === id);
    const new_expense_list = wallet.transactions.filter((obj) => obj.id !== id);

    setWallet((prevState) => ({
      wallet_balance: prevState.wallet_balance + del_expense.price,
      expense_amount: prevState.expense_amount - del_expense.price,
      transactions: new_expense_list,
    }));
  };

  const update_modal_status = (modal, status) => {
    setWallet((prevState) => ({
      ...prevState,
      modal_status: {
        ...prevState.modal_status,
        [modal]: status,
      },
    }));
  };

  return (
    <Context.Provider
      value={{
        wallet,
        add_wallet_balance,
        handle_expense,
        update_modal_status,
        delete_expense,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
