import React, { useContext } from "react";
import { Context } from "../context";
import BalanceModal from "./BalanceModal";

const WalletCard = () => {
  const { wallet, update_modal_status } = useContext(Context);

  return (
    <div className="wallet-card card">
      <h1>Wallet Balance - {wallet.wallet_balance}</h1>
      <div className="centered">
        <button
          className="add-balance-button"
          onClick={() => update_modal_status("add_wallet_modal", true)}
        >
          + Add Balance
        </button>
      </div>

      <BalanceModal />
    </div>
  );
};

export default WalletCard;
