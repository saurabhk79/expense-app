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
    const localContext = JSON.parse(localStorage.getItem("wallet"));

    if (localContext) {
      setWallet((prevState) => ({
        ...prevState,
        ...localContext,
      }));
    }
  }, []);

  const add_wallet_balance = (amount) => {
    const new_balance = wallet.wallet_balance + Number(amount);
    setWallet((prevState) => ({
      ...wallet,
      modal_status: {
        ...prevState.modal_status,
        add_wallet_modal: false,
      },
      wallet_balance: new_balance,
    }));

    localStorage.setItem("wallet", wallet);
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
    localStorage.setItem("wallet", wallet);
  };

  const delete_expense = (id) => {
    const del_expense = wallet.transactions.find((obj) => obj.id === id);
    const new_expense_list = wallet.transactions.filter((obj) => obj.id !== id);

    setWallet((prevState) => ({
      wallet_balance: prevState.wallet_balance + del_expense.price,
      expense_amount: prevState.expense_amount - del_expense.price,
      transactions: new_expense_list,
    }));
    localStorage.setItem("wallet", wallet);
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

  const create_dataset = () => {
    const dataset = {};

    wallet.transactions.forEach((data) => {
      if (dataset[data.title]) {
        dataset.title = dataset.title + data.price;
      } else {
        dataset[data.title] = data.price;
      }
    });

    console.log(dataset);

    return dataset;
  };

  return (
    <Context.Provider
      value={{
        wallet,
        add_wallet_balance,
        handle_expense,
        update_modal_status,
        delete_expense,
        create_dataset
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
