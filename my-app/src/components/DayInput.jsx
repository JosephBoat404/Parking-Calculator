import React from "react";

function DayInput({ label, hours, onChange, name, fee }) {
  return (
    <div className="container cb rounded shadow-sm p-3 mb-4">
      <div className="row">
        <div className="col justify-content-center d-flex">
          <label htmlFor={name}>{label}</label>
        </div>
        <div className="col justify-content-center d-flex">
          ${fee}
        </div>
        <div className="col justify-content-center d-flex">
          <form>
            <input
              className="rounded formColor"
              type="number"
              id={name}
              name={name}
              value={hours}
              onChange={onChange}
              min="0"
              max="24"
              required
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default DayInput;
