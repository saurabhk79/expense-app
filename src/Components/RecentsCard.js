import React, { useContext, useState } from "react";
import Expense from "./Expense";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { Context } from "../context";
import UpdateModal from "./UpdateModal";

const RecentsCard = () => {
  const { wallet } = useContext(Context);
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 3;

  const totalPages = Math.ceil(
    wallet.transactions.length / transactionsPerPage
  );

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = wallet.transactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div className="recents-card">
      <h2>Recent Transactions</h2>

      <div className="card" style={{ backgroundColor: "#fff" }}>
        <div className="recents-card">
          {currentTransactions.map((expense) => {
            return <Expense key={expense.id} expense={expense} />;
          })}
        </div>

        <div className="centered">
          <button
            className="arrow-button"
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            <BsArrowLeft />
          </button>
          <button className="page-button">{currentPage}</button>
          <button
            className="arrow-button"
            onClick={nextPage}
            disabled={currentPage === totalPages}
          >
            <BsArrowRight />
          </button>
        </div>
      </div>

      {wallet.modal_status.update_expense_modal ? <UpdateModal /> : <></>}
    </div>
  );
};

export default RecentsCard;
