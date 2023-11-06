import React from "react";

function FeeInput({
  fees,
  setFees,
  maxHour,
  setMaxHour,
  PermitAmount,
  SetPermitAmount,
  numberOfWeeksInSemester,
  SetnumberOfWeeksInSemester,
}) {
  const handleChange = (event, index) => {
    const { name, value } = event.target;
    const newFees = [...fees];
    if (value === "" || !isNaN(value)) {
      newFees[index][name] = parseFloat(value);
      setFees(newFees);
    }
  };

  const handleMaxHourChange = (event) => {
    const value = event.target.value;
    if (value === "" || !isNaN(value)) {
      setMaxHour(value === "" ? "" : Number(value));
    }
  };

  const handlePermitAmountChange = (event) => {
    const value = event.target.value;
    if (value === "" || !isNaN(value)) {
      SetPermitAmount(value === "" ? "" : Number(value));
    }
  };

  const handleWeeksChange = (event) => {
    const value = event.target.value;
    if (value === "" || !isNaN(value)) {
      SetnumberOfWeeksInSemester(value === "" ? "" : Number(value));
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col  p-1 mb-1 bg-primary-subtle cc">
          <div className="row p-1">
            <div className="col text-center">Duration</div>
            <div className="col text-center">Fee</div>
          </div>

          {fees.map((fee, index) => (
            <div className="row p-1" key={index}>
              <div className="col">
                <div className="input-group">
                  <input
                    type="number"
                    name="maxHours"
                    value={fee.maxHours}
                    onChange={(event) => handleChange(event, index)}
                    className="form-control form-control-sm noscroll focus-ring focus-ring-light"
                    disabled={index === 0}
                  />
                  <label
                    className="dollarsign p-2 border"
                    htmlFor="inputGroupFile01"
                  >
                    Hour/s
                  </label>
                </div>
              </div>
              <div className="col">
                <div className="input-group">
                  <label
                    className="dollarsign p-2 border"
                    htmlFor="inputGroupFile01"
                  >
                    $
                  </label>
                  <input
                    type="number"
                    name="fee"
                    value={fee.fee}
                    onChange={(event) => handleChange(event, index)}
                    className="form-control form-control-sm noscroll focus-ring focus-ring-dark"
                    id="inputGroupFile01"
                    disabled={index === 0} // Disable the input for the first row
                  />
                </div>
              </div>
            </div>
          ))}

          <div className="mb-3"></div>
          <div className="row p-1">
            <div className="col text-center d-flex justify-content-center align-items-center ">
              Permit Amount
            </div>
            <div className="col">
              <div className="input-group">
                <label className="dollarsign p-2  border" htmlFor="permdollar">
                  $
                </label>
                <input
                  type="number"
                  name="PermitAmount"
                  value={PermitAmount}
                  onChange={handlePermitAmountChange}
                  className="form-control form-control-sm noscroll"
                  id="permdollar"
                />
              </div>
            </div>
          </div>

          <div className="row p-1">
            <div className="col d-flex justify-content-center align-items-center">
              Weeks
            </div>
            <div className="col">
              <div className="input-group">
                <input
                  type="number"
                  name="numberOfWeeksInSemester"
                  value={numberOfWeeksInSemester}
                  onChange={handleWeeksChange}
                  className="form-control form-control-sm noscroll"
                  id="semesterword"
                />
                <label
                  className="dollarsign p-2  minwidth border"
                  htmlFor="semesterword"
                >
                  Week/s
                </label>
              </div>
            </div>
          </div>

          <div className="row p-1">
            <div className="col d-flex justify-content-center align-items-center ">
              Max Amount
            </div>
            <div className="col">
              <div className="input-group">
                <input
                  type="number"
                  name="maxHour"
                  value={maxHour}
                  onChange={handleMaxHourChange}
                  className="form-control form-control-sm noscroll"
                  id="hoursign"
                />
                <label
                  className="dollarsign p-2 minwidth border"
                  htmlFor="hoursign"
                >
                  Hour/s
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeeInput;
