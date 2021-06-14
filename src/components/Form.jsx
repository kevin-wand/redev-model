import React from "react";
import { useParams, useHistory } from "react-router";
import { useEffect } from "react";
import { createProject, editProject } from "../api";
import NavBar from "./NavBar.jsx";
import { getProject } from "../api.js";

export default function Form(props) {
  const { formData, setFormData } = props;
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const fetchProject = async () => {
      setFormData({});
      if (id) {
        const res = await getProject(id);
        res && setFormData(res.fields);
      }
    };
    fetchProject();
    //eslint-disable-next-line
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await editProject(id, formData);
    } else {
      await createProject(formData);
    }
    history.push("/pr");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  return (
    <div className="form-inner-wrapper">
      <NavBar />

      <form
        className="form-container"
        onChange={handleChange}
        onSubmit={handleSubmit}
      >
        <label className="form-labels" htmlFor="projName">
          Project Name:{" "}
        </label>
        <input
          className="form-numbers"
          id="projName"
          type="text"
          name="projectName"
          defaultValue={formData.projectName ?? ""}
        />
        <br />
        <label className="form-labels" htmlFor="initialInvestment">
          Initial Investment:{" "}
        </label>
        <input
          className="form-numbers"
          id="initialInvestment"
          type="number"
          name="initialInvestment"
          defaultValue={formData.initialInvestment ?? ""}
          min="0"
        />
        <br />
        <label className="form-labels" htmlFor="addCapital">
          Additional Capital:{" "}
        </label>
        <input
          className="form-numbers"
          id="addCapital"
          type="number"
          name="additionalCapital"
          defaultValue={formData.additionalCapital ?? ""}
          min="0"
        />
        <br />
        <label className="form-labels" htmlFor="holdPeriod">
          Hold Period:{" "}
        </label>
        <input
          className="form-numbers"
          id="holdPeriod"
          type="number"
          name="holdPeriod"
          defaultValue={formData.holdPeriod ?? ""}
          min="0"
        />
        <br />
        <label className="form-labels" htmlFor="annualRev">
          Annual Revenue:{" "}
        </label>
        <input
          className="form-numbers"
          id="annualRev"
          type="number"
          name="annualRevenue"
          defaultValue={formData.annualRevenue ?? ""}
          min="0"
        />
        <br />
        <label className="form-labels" htmlFor="annualExp">
          Annual Expense:{" "}
        </label>
        <input
          className="form-numbers"
          id="annualExp"
          type="number"
          name="annualExpense"
          defaultValue={formData.annualExpense ?? ""}
          min="0"
        />
        <br />
        <label className="form-labels" htmlFor="closingCost">
          Closing Cost:{" "}
        </label>
        <input
          className="form-numbers"
          id="closingCost"
          type="number"
          name="closingCost"
          defaultValue={formData.closingCost ?? ""}
          min="0"
        />
        <br />
        <label className="form-labels" htmlFor="growthRev">
          Revenue Growth Rate:{" "}
        </label>
        <input
          className="form-numbers"
          id="growthRev"
          type="number"
          name="revenueGrowthRate"
          defaultValue={formData.revenueGrowthRate ?? ""}
          min="0"
        />
        <br />
        <label className="form-labels" htmlFor="growthExp">
          Expense Growth Rate:{" "}
        </label>
        <input
          className="form-numbers"
          id="growthExp"
          type="number"
          name="expenseGrowthRate"
          defaultValue={formData.expenseGrowthRate ?? ""}
          min="0"
        />
        <br />
        <label className="form-labels" htmlFor="capRate">
          Cap Rate:{" "}
        </label>
        <input
          className="form-numbers"
          id="capRate"
          type="number"
          name="capRate"
          defaultValue={formData.capRate ?? ""}
          min="0"
        />
        <br />
        <div className="form-button">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
