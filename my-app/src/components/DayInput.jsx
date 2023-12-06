import React from "react";

function DayInput({ label, hours, onChange, name, fee }) {
  const handleInputChange = (event) => {
    const inputString = event.target.value;
    if (parseInt(inputString, 10) > 24 || inputString.length > 2) {
      onChange({ target: { name, value: 24 } });
    } else {
      onChange(event);
    }
  };

  return (
    <div className="container cb rounded -sm p-3 mb-4 fade-in">
      <div className="row">
        <div className="col justify-content-center d-flex align-items-center">
          <label htmlFor={name}>{label}</label>
        </div>
        <div className="col justify-content-center d-flex align-items-center">
          <div>${fee}</div>
        </div>
        <div className="col justify-content-center d-flex align-items-center">
          <form className="scaleanimation"> 
            <input
              className="rounded formColor noscroll"
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
