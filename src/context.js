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
      update_expense_modal : false
    },
    updating_expense_id: 0,
  });

  const categories = {
    Health: <MdOutlineHealthAndSafety />,
    Vehicle: <MdEmojiTransportation />,
    PersonalCare: <MdOutlinePerson />,
    Entertainment: <PiCheersLight />,
    Food: <MdOutlineLocalPizza />,
    Misc: <PiCirclesFourLight />,
  };

  useEffect(() => {
    const localWallet = localStorage.getItem("wallet");

    if (localWallet) {
      setWallet(JSON.parse(localWallet));
    }
  }, []);

  const add_wallet_balance = (amount) => {
    const new_balance = wallet.wallet_balance + Number(amount);
    setWallet((prevState) => ({
      ...prevState,
      modal_status: {
        ...prevState.modal_status,
        add_wallet_modal: false,
      },
      wallet_balance: new_balance,
    }));
    localStorage.setItem("wallet", JSON.stringify(wallet));
  };

  const handle_expense = (expense_obj) => {
    setWallet((prevState) => ({
      ...prevState,
      modal_status: {
        ...prevState.modal_status,
        add_expense_modal: false,
      },
      wallet_balance: prevState.wallet_balance - expense_obj.price,
      expense_amount: prevState.expense_amount + expense_obj.price,
      transactions: [...prevState.transactions, expense_obj],
    }));
    localStorage.setItem("wallet", JSON.stringify(wallet));
  };

  const delete_expense = (id) => {
    const del_expense = wallet.transactions.find((obj) => obj.id === id);
    const new_expense_list = wallet.transactions.filter((obj) => obj.id !== id);

    setWallet((prevState) => ({
      ...prevState,
      wallet_balance: prevState.wallet_balance + del_expense.price,
      expense_amount: prevState.expense_amount - del_expense.price,
      transactions: new_expense_list,
    }));
    localStorage.setItem("wallet", JSON.stringify(wallet));
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

  const update_expense = (updatedExpense) => {
    const updatedTransactions = wallet.transactions.map((expense) =>
      expense.id === updatedExpense.id ? updatedExpense : expense
    );
    setWallet((prevState) => ({
      ...prevState,
      transactions: updatedTransactions,
      modal_status: {
        ...prevState.modal_status,
        update_expense_modal: false,
      },
    }));
    localStorage.setItem("wallet", JSON.stringify(wallet));
  };

  const handle_expense_id = (id) => {
    setWallet(prevState => ({
      ...prevState,
      updating_expense_id : id
    }))
  }
  return (
    <Context.Provider
      value={{
        wallet,
        categories,
        add_wallet_balance,
        handle_expense,
        update_modal_status,
        delete_expense,
        handle_expense_id,
        update_expense
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
