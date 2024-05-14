import ExpenseCard from "./Components/ExpenseCard";
import RecentsCard from "./Components/RecentsCard";
import TopExpenses from "./Components/TopExpenses";
import WalletCard from "./Components/WalletCard";
// import PieGraph from "./Components/PieGraph"

import { useContext } from "react";
import "./buttons.css";
import "./App.css";
import { Context } from "./context";
import PieGraph from "./Components/PieGraph";

const App = () => {
  const context = useContext(Context)

  context.create_dataset()
  return (
    <div className="App">
      <h1>Expenses Tracker</h1>

      <div className="expense-grid">
        <div className="info card">
          <WalletCard />
          <ExpenseCard />
          <PieGraph />
        </div>

        <RecentsCard />
        <TopExpenses />
      </div>
    </div>
  );
};

export default App;
