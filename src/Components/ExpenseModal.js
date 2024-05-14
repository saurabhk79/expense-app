import React, { useContext, useState } from "react";
import { Context } from "../context";
import ModalWrapper from "./Modal";

const ExpenseModal = ({
  data = {
    title: "",
    price: 0,
    category: "",
    date: "",
  },
}) => {
  const { wallet, update_modal_status, handle_expense, categories } =
    useContext(Context);
  const [formData, setFormData] = useState(data);

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
      const new_expense = {
        ...formData,
        price: Number(price),
        id: Math.floor(Math.random() * 1000),
      };
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
    <>
      {!wallet.modal_status.add_expense_modal ? (
        <></>
      ) : (
        <ModalWrapper>
          <h2>Add Expense</h2>
          <form onSubmit={handleFormData} className="expense-form">
            <div className="form-set">
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
            </div>

            <div className="form-set">
              <select name="category" onChange={handleFormChange}>
                <option value="" defaultChecked>
                  Category
                </option>
                {Object.keys(categories).map((cat) => (
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
            </div>

            <div className="form-set">
              <button type="submit" className="colored">
                Add expense
              </button>
              <button
                type="button"
                onClick={() => update_modal_status("add_expense_modal", false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </ModalWrapper>
      )}
    </>
  );
};

export default ExpenseModal;
