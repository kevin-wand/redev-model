import React from "react";

export default function Output(props) {
  const { formData } = props;
  console.log(formData);
  let time = formData.holdPeriod;

  // =======================================================
  // ================= OUTPUT CALCULATION ==================
  // =======================================================

  let yearArray = [];
  for (let j = -1; j <= time; j++) {
    yearArray.push(j);
  }

  let revArray = [];
  for (let j = 0; j <= time; j++) {
    if (!revArray.length) {
      revArray.push(parseInt(formData.annualRevenue));
    } else {
      revArray.push(
        parseInt(revArray[j - 1] * (1 + parseFloat(formData.revenueGrowthRate)))
      );
    }
  }

  let expArray = [];
  for (let j = 0; j <= time; j++) {
    if (!expArray.length) {
      expArray.push(parseInt(formData.annualExpense));
    } else {
      expArray.push(
        parseInt(expArray[j - 1] * (1 + parseFloat(formData.expenseGrowthRate)))
      );
    }
  }

  let noiArray = [];
  for (let j = 0; j <= time; j++) {
    if (!noiArray.length) {
      noiArray.push(
        parseInt(formData.annualRevenue) - parseInt(formData.annualExpense)
      );
    } else {
      noiArray.push(
        parseInt(
          revArray[j - 1] * (1 + parseFloat(formData.revenueGrowthRate))
        ) -
          parseInt(
            expArray[j - 1] * (1 + parseFloat(formData.expenseGrowthRate))
          )
      );
    }
  }

  let addCapArray = [];
  for (let j = 0; j < time; j++) {
    if (!addCapArray.length) {
      addCapArray.push(parseInt(-formData.additionalCapital));
    } else {
      addCapArray.push(parseInt(addCapArray[j - 1]));
    }
  }

  let saleArray = [];
  for (let j = 0; j <= time; j++) {
    if (!saleArray.length) {
      saleArray.push("");
    } else if (j < time) {
      saleArray.push("");
    } else {
      saleArray.push(parseInt(noiArray[j] / parseFloat(formData.capRate)));
    }
  }

  let feeArray = [];
  for (let j = 0; j <= time; j++) {
    if (j < time) {
      feeArray.push("");
    } else {
      feeArray.push(saleArray[j] * parseFloat(formData.closingCost));
    }
  }

  let cashArray = isNaN(formData.initialInvestment)
    ? [0]
    : [-parseInt(formData.initialInvestment)];
  for (let j = 0; j <= time; j++) {
    if (j === 0) {
      cashArray.push(
        parseInt(formData.annualRevenue) -
          parseInt(formData.annualExpense) -
          parseInt(formData.additionalCapital)
      );
    } else if (j > 0 && j + 1 < time) {
      cashArray.push(
        parseInt(
          revArray[j - 1] * (1 + parseFloat(formData.revenueGrowthRate))
        ) -
          parseInt(
            expArray[j - 1] * (1 + parseFloat(formData.expenseGrowthRate))
          ) +
          parseInt(addCapArray[j - 1])
      );
    } else if (j < time) {
      cashArray.push(
        parseInt(
          revArray[j - 1] * (1 + parseFloat(formData.revenueGrowthRate))
        ) -
          parseInt(
            expArray[j - 1] * (1 + parseFloat(formData.expenseGrowthRate))
          ) +
          parseInt(addCapArray[j - 1]) +
          parseInt(noiArray[j + 1] / parseFloat(formData.capRate)) -
          parseInt(noiArray[j + 1] / parseFloat(formData.capRate)) *
            parseFloat(formData.closingCost)
      );
    }
  }

  const reducer = (a, b) => a + b;
  let profit = cashArray.reduce(reducer).toFixed(0);
  let roi = parseFloat(1 + profit / formData.initialInvestment).toFixed(2);

  profit = isNaN(profit) ? "" : profit;
  roi = isNaN(roi) ? "" : roi + "x";

  // =======================================================
  // ============= COLUMN POSITION FOR OUTPUT ==============
  // =======================================================

  let yearStyles = (columnPosition) => {
    let styles = {
      gridRow: 1,
      gridColumn: columnPosition + 2,
    };
    return styles;
  };

  let revStyles = (columnPosition) => {
    let styles = {
      gridRow: 2,
      gridColumn: columnPosition + 3,
    };
    return styles;
  };

  let expStyles = (columnPosition) => {
    let styles = {
      gridRow: 3,
      gridColumn: columnPosition + 3,
    };
    return styles;
  };

  let noiStyles = (columnPosition) => {
    let styles = {
      gridRow: 4,
      gridColumn: columnPosition + 3,
    };
    return styles;
  };

  let initInvestStyles = (columnPosition) => {
    let styles = {
      gridRow: 7,
      gridColumn: columnPosition + 2,
    };
    return styles;
  };

  let addCapStyles = (columnPosition) => {
    let styles = {
      gridRow: 8,
      gridColumn: columnPosition + 3,
    };
    return styles;
  };

  let saleStyles = (columnPosition) => {
    let styles = {
      gridRow: 9,
      gridColumn: columnPosition + 2,
    };
    return styles;
  };

  let feeStyles = (columnPosition) => {
    let styles = {
      gridRow: 10,
      gridColumn: columnPosition + 2,
    };
    return styles;
  };

  let cashStyles = (columnPosition) => {
    let styles = {
      gridRow: 11,
      gridColumn: columnPosition + 2,
    };
    return styles;
  };

  return (
    <div>
      <div className="output-container">
        {yearArray.map((e, index) => {
          return (
            <p style={yearStyles(index)} key={index}>
              Yr {index}
            </p>
          );
        })}
        <p className="annualRevenue">Annual Revenue </p>
        {revArray.map((e, index) => {
          return (
            <p style={revStyles(index)} key={index}>
              {e}
            </p>
          );
        })}
        <p className="annualExpense">Annual Expense </p>
        {expArray.map((e, index) => {
          return (
            <p style={expStyles(index)} key={index}>
              {e}
            </p>
          );
        })}
        <p className="annualNoi">Net Operating Income </p>
        {noiArray.map((e, index) => {
          return (
            <p style={noiStyles(index)} key={index}>
              {e}
            </p>
          );
        })}
        <p className="initialInvestment">Initial Investment</p>
        <p style={initInvestStyles()}>{formData.initialInvestment}</p>
        <p className="additionalCapital">Additional Capital</p>
        {addCapArray.map((e, index) => {
          return (
            <p style={addCapStyles(index)} key={index}>
              {e}
            </p>
          );
        })}
        <p className="salePrice">Sale Price </p>
        {saleArray.map((e, index) => {
          return (
            <p style={saleStyles(index)} key={index}>
              {e}
            </p>
          );
        })}
        <p className="closingCost">Closing Cost </p>
        {feeArray.map((e, index) => {
          return (
            <p style={feeStyles(index)} key={index}>
              {e}
            </p>
          );
        })}
        <p className="cashFlow">Total Cash Flow </p>
        {cashArray &&
          cashArray.map((e, index) => {
            return (
              <p style={cashStyles(index)} key={index}>
                {e}
              </p>
            );
          })}
      </div>
      <div className="profit-wrapper">
        <p className="profit">Investor Profit</p>
        <p className="profitNum">{profit}</p>
        <p className="roi">Return on Investment</p>
        <p className="roiNum">{roi}</p>
      </div>
    </div>
  );
}
