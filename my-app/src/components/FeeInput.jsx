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
    if (!isNaN(value)) {
      newFees[index][name] = parseFloat(value);
    }
    setFees(newFees);
  };

  const handleMaxHourChange = (event) => {
    setMaxHour(Number(event.target.value));
  };

  const handlePermitAmountChange = (event) => {
    SetPermitAmount(Number(event.target.value));
  };

  const handleWeeksChange = (event) => {
    SetnumberOfWeeksInSemester(Number(event.target.value));
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col  p-1 mb-4 bg-primary-subtle cc">
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
                    className="form-control form-control-sm noscroll"
                  />
                  <label
                    className="dollarsign p-2  border"
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
                    className="form-control form-control-sm noscroll"
                    id="inputGroupFile01"
                  />
                </div>
              </div>
            </div>
          ))}

          <div className="row p-1">
            <div className="col">Permit Amount:</div>
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
            <div className="col">Weeks:</div>
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
                  className="dollarsign p-2  border"
                  htmlFor="semesterword"
                >
                  Week/s
                </label>
              </div>
            </div>
          </div>

          <div className="row p-1">
            <div className="col">Max Amount:</div>
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
                <label className="dollarsign p-2  border" htmlFor="hoursign">
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
