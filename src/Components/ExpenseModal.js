import React, { useContext, useState } from "react";
import { Context } from "../context";

import ReactModal from "react-modal";

const ExpenseModal = () => {
  const { wallet, update_modal_status, handle_expense } = useContext(Context);
  const [formData, setFormData] = useState({
    title: "",
    price: 0,
    category: "",
    date: "",
  });

  const handleFormChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormData = (e) => {
    e.preventDefault();
    const { title, price, category, date } = formData;

    if (title && price && price > 0 && category && date) {
      const new_expense = { ...formData, price: Number(price), id: Math.floor(Math.random() * 1000) };
      handle_expense(new_expense);

      setFormData({
        title: "",
        price: 0,
        category: "",
        date: "",
      });
    }
  };
  return (
    <ReactModal
      isOpen={wallet.modal_status.add_expense_modal}
      ariaHideApp={false}
    >
      <h2>Add Expense</h2>
      <form onSubmit={handleFormData}>
        <input
          type="text"
          placeholder="title"
          value={formData.title}
          name="title"
          onChange={handleFormChange}
        />
        <input
          type="text"
          placeholder="price"
          value={formData.price}
          name="price"
          onChange={handleFormChange}
        />

        <br />

        <select name="category" onChange={handleFormChange}>
          <option value="" disabled defaultChecked>
            Category
          </option>
          {Object.keys(wallet.category).map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <input
          type="date"
          value={formData.date}
          name="date"
          onChange={handleFormChange}
        />

        <br />

        <button type="submit">Add expense</button>
        <button
          type="button"
          onClick={() => update_modal_status("add_expense_modal", false)}
        >
          Cancel
        </button>
      </form>
    </ReactModal>
  );
};

export default ExpenseModal;
