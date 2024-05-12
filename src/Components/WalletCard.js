import React, { useContext } from "react";
import { Context } from "../context";

const WalletCard = () => {
  const { wallet } = useContext(Context);

  return (
    <div className="wallet-card card">
      <h2>Wallet Balance - {wallet.wallet_balance}</h2>
      <div className="centered">
        <button className="add-balance-button">+ Add Balance</button>
      </div>
    </div>
  );
};

export default WalletCard;
