import React from "react";

export default function Output(props) {
  const { formData } = props;
  console.log(formData);

  let time = formData.holdPeriod;
  // let data = {
  //   year: 0,
  //   rev: formData.annualRevenue,
  //   exp: formData.annualExpense,
  //   buy: formData.initialInvestment,
  //   saleFees: formData.closingCost,
  //   revG: formData.revenueGrowthRate,
  //   expG: formData.expenseGrowthRate,
  //   noi: 0,
  //   salePrice: 0,
  // };

  // // console.log(data);
  // // console.log(time);
  let arr = [];

  for (let j = 0; j <= time; j++) {
    //   data.year = data.year + 1;
    //   data.noi = data.rev - data.exp;
    //   data.rev = data.rev * (1 + parseInt(data.revG));
    //   data.exp = data.exp * (1 + parseInt(data.expG));

    arr.push(j);
  }
  // }
  // console.log(arr);

  let yearStyles = (columnPosition) => {
    let styles = {
      gridColumn: columnPosition + 2,
    };
    return styles;
  };

  // create a function
  // take className
  // dynamically place years in specific columns

  return (
    <div className="output-container">
      {arr.map((e, index, array) => {
        return <div style={yearStyles(index)}>Yr {index}</div>;
      })}
      <p className="additionalCapital">Additional Capital:</p>
      <p className="initialInvestment">Initial Investment:</p>
      <p className="annualRevenue">Annual Revenue: </p>
      <p className="annualExpense">Annual Expense: </p>
      <p className="closingCost">Closing Cost: </p>
      <p className="revenueGrowthRate">Revenue Growth Rate:</p>
      <p className="expenseGrowthRate">Expense Growth Rate:</p>
      <p className="holdPeriod">Hold Period: </p>
    </div>
  );
}
// for (let i in formData) {
//   if (formData[i] === null) {

//   }
// }
// console.log(i + " " + formData[i]);
// <h2>Project Name: {formData.projectName}</h2>
// let arr = [];
// formData look through each item object
// mapping through objects / for in
// create rows
