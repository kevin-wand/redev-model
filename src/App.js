import "./App.css";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PrevResults from "./components/PrevResults";
import Form from "./components/Form.jsx";
import BlankForm from "./components/BlankForm.jsx";
import Output from "./components/Output.jsx";
import { useEffect, useState } from "react";

function App() {
  const [formData, setFormData] = useState({});
  const [displayTable, setDisplayTable] = useState(false);

  // =======================================================
  // ================= HIDDEN / DISPLAY ====================
  // =======================================================

  useEffect(() => {
    if (
      formData.holdPeriod > 2 &&
      formData.additionalCapital > 0 &&
      formData.annualExpense > 0 &&
      formData.annualRevenue > 0 &&
      formData.capRate > 0 &&
      formData.expenseGrowthRate > 0 &&
      formData.revenueGrowthRate > 0 &&
      formData.initialInvestment > 0 &&
      formData.closingCost > 0
    ) {
      setDisplayTable(true);
    } else {
      setDisplayTable(false);
    }
  }, [
    formData.holdPeriod,
    formData.additionalCapital,
    formData.annualExpense,
    formData.annualRevenue,
    formData.capRate,
    formData.expenseGrowthRate,
    formData.revenueGrowthRate,
    formData.initialInvestment,
    formData.closingCost,
  ]);

  return (
    <div className="container">
      <Header />
      <Switch>
        <Route path="/pr/" exact>
          <PrevResults />
        </Route>
        <Route path="/edit/pr/:id" exact>
          <div className="form-output-wrapper">
            <Form formData={formData} setFormData={setFormData} />
            {displayTable ? <Output formData={formData} /> : <BlankForm />}
          </div>
        </Route>
        <Route path="/" exact>
          <div className="form-output-wrapper">
            <Form formData={formData} setFormData={setFormData} />
            {displayTable ? <Output formData={formData} /> : <BlankForm />}
          </div>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
