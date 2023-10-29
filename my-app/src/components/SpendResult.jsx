import React from "react";

function SpendResult({
  totalHours,
  totalMoneyToPay,
  totalCostForSemester,
  Worth,
  PermitAmount,
  savingsAmount
}) {
  return (
    <div className="container rounded shadow-sm p-3 mb-4 bg-primary-subtle">
      <table className="table table-primary table-hover">
        <tbody>
          <tr>
            <th className="text-center adjfont" >Weekly Hours</th>
            <td className="text-center" >
              <label>{totalHours}hr</label>
            </td>
          </tr>
          <tr>
            <th className="text-center adjfont" >Weekly Pay</th>
            <td className="text-center" >
              <label>${totalMoneyToPay}</label>
            </td>
          </tr>
          <tr>
            <th className="text-center adjfont" >Semester Pay</th>
            <td className="text-center" >
              <label>${totalCostForSemester}</label>
            </td>
          </tr>


          <tr>
            <th className="text-center adjfont" >Saving</th>
            <td className="text-center" >
              <label>${savingsAmount}</label>
            </td>
          </tr>

          <tr>
            <th className="text-center moneyUi" >Get the <span className="AmountIndic">${PermitAmount}</span> Permit?</th>
            <td className="text-center" >
              <label className="moneyUi">{Worth}</label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SpendResult;
