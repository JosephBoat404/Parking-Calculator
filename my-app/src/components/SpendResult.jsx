import React from "react";

function SpendResult({
  totalHours,
  totalMoneyToPay,
  totalCostForSemester,
  Worth,
  PermitAmount,
}) {
  return (
    <>
      <div className="container  rounded shadow-sm p-3 mb-4 bg-primary-subtle border border-primary-subtle">
        <div className="row">
          <div className="col  justify-content-center d-flex ">
            Weekly Hours
          </div>
          <div className="col  justify-content-center d-flex ">Weekly Pay</div>
          <div className="col  justify-content-center d-flex ">
            Semester Pay
          </div>
          <div className="col  justify-content-center d-flex ">
            Get the ${PermitAmount} Permit?
          </div>
        </div>
        <div className="row">
          <div className="col justify-content-center d-flex">
            <label>{totalHours}hr</label>
          </div>

          <div className="col justify-content-center d-flex">
            <label>${totalMoneyToPay}</label>
          </div>

          <div className="col justify-content-center d-flex">
            <label>${totalCostForSemester}</label>
          </div>

          <div className="col justify-content-center d-flex">
            <label>{Worth}</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default SpendResult;
