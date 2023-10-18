import React from "react";

function DayInput({ label, hours, onChange, name, fee }) {
  const handleInputChange = (event) => {
    // Parse the input value as a number
    const inputValue = parseInt(event.target.value, 10);

    // Check if the input value is greater than the maximum allowed (24)
    if (inputValue > 24) {
      // If it's greater, set it to the maximum allowed value (24)
      onChange({ target: { name, value: 24 } });
    } else {
      // Otherwise, update the value with the input value
      onChange(event);
    }
  };

  return (
    <div className="container cb rounded shadow-sm p-3 mb-4">
      <div className="row">
        <div className="col justify-content-center d-flex">
          <label htmlFor={name}>{label}</label>
        </div>
        <div className="col justify-content-center d-flex">
          <div className="moneyUi">${fee}</div>
        </div>
        <div className="col justify-content-center d-flex">
          <form>
            <input
              className="rounded formColor"
              type="number"
              id={name}
              name={name}
              value={hours}
              onChange={handleInputChange}
              min="0"
              max="24"
              placeholder="0"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default DayInput;
