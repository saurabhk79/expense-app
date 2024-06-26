import React, { useContext, useState } from "react";

import { Context } from "../context";
import ModalWrapper from "./Modal";

import "../modal.css";

const BalanceModal = () => {
  const { wallet, update_modal_status, add_wallet_balance } =
    useContext(Context);
  const [amount, setAmount] = useState(0);

  const handleFormData = (e) => {
    e.preventDefault();
    if (amount && amount > 0) add_wallet_balance(amount);

    setAmount(0);
  };
  return (
    <>
      {!wallet.modal_status.add_wallet_modal ? (
        <></>
      ) : (
        <ModalWrapper>
          <h2>Add Wallet Balance</h2>
          <form onSubmit={handleFormData} className="balance-form">
            <input
              type="text"
              placeholder="Amount"
              value={amount}
              name="amount"
              className="balance-form"
              onChange={(e) => setAmount(e.target.value)}
            />

            <button type="submit" className="colored">Add expense</button>
            <button
              type="button"
              onClick={() => update_modal_status("add_wallet_modal", false)}
            >
              Cancel
            </button>
          </form>
        </ModalWrapper>
      )}
    </>
  );
};

export default BalanceModal;
