// In UpdateModal.js
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context";
import ModalWrapper from "./Modal";

const UpdateModal = () => {
  const { wallet, update_modal_status, update_expense, categories } =
    useContext(Context);

  const [formData, setFormData] = useState({
    id: null,
    title: "",
    price: 0,
    category: "",
    date: "",
  });

  useEffect(() => {
    const expenseToEdit = wallet.transactions.find(
      (expense) => expense.id === wallet.updating_expense_id
    );
    if (expenseToEdit) setFormData(expenseToEdit);
  }, [wallet.updating_expense_id, wallet.transactions]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    update_expense(formData);

    update_modal_status("update_expense_modal", false);
    setFormData({
      id: null,
      title: "",
      price: 0,
      category: "",
      date: "",
    });
  };

  return (
    <ModalWrapper modal_name="update_expense_modal">
      <h2>Update Expense</h2>
      <form className="expense-form" onSubmit={handleSubmit}>
        <div className="form-set">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-set">
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Category</option>
            {Object.keys(categories).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-set">
          <button type="submit" className="colored">
            Add expense
          </button>
          <button
            type="button"
            onClick={() => update_modal_status("update_expense_modal", false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </ModalWrapper>
  );
};

export default UpdateModal;
