import React from "react";

export default function Output(props) {
  const { editForm } = props;
  console.log(editForm);

  let time = editForm.holdPeriod;
  let data = {
    year: 0,
    rev: editForm.annualRevenue,
    exp: editForm.annualExpense,
    buy: editForm.initialInvestment,
    saleFees: editForm.closingCost,
    revG: editForm.revenueGrowthRate,
    expG: editForm.expenseGrowthRate,
    noi: 0,
    salePrice: 0,
  };

  // console.log(data);
  // console.log(time);
  let arr = [];

  for (let j = 0; j <= time; j++) {
    data.year = data.year + 1;
    data.noi = data.rev - data.exp;
    data.rev = data.rev * (1 + parseInt(data.revG));
    data.exp = data.exp * (1 + parseInt(data.expG));
    for (let i = 0; i <= time; i++) {
      arr.push(data);
    }
  }
  console.log(arr);

  return (
    <div>
      {arr.map(() => {
        return <div>Yr {arr.year};</div>;
      })}
    </div>
  );
}
// for (let i in editForm) {
//   if (editForm[i] === null) {

//   }
// }
// console.log(i + " " + editForm[i]);
/* <h2>Project Name: {editForm.projectName}</h2>
// let arr = [];
// editform look through each item object
// mapping through objects / for in
// create rows


<p>Additional Capital: {editForm.additionalCapital}</p>
<p>Annual Revenue: {editForm.annualRevenue}</p>
<p>Annual Expense: {editForm.annualExpense}</p>
<p>Closing Cost: {editForm.closingCost}</p>
<p>Revenue Growth Rate: {editForm.revenueGrowthRate}</p>
<p>Expense Growth Rate: {editForm.expenseGrowthRate}</p>
<p>Hold Period: {editForm.holdPeriod}</p> */
