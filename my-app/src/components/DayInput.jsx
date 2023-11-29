import React from "react";

function DayInput({ label, hours, onChange, name, fee }) {
  const handleInputChange = (event) => {
    // Get the input value as a string
    const inputString = event.target.value;
  
    // Check if the input value is greater than the maximum allowed (24) or has more than 2 digits
    if (parseInt(inputString, 10) > 24 || inputString.length > 2) {
      // If it's greater, set it to the maximum allowed value (24)
      onChange({ target: { name, value: 24 } });
    } else {
      // Otherwise, update the value with the input value
      onChange(event);
    }
  };
  

  return (
    <div className="container cb rounded -sm p-3 mb-4 fade-in">
      <div className="row">
        <div className="col justify-content-center d-flex">
          <label htmlFor={name}>{label}</label>
        </div>
        <div className="col justify-content-center d-flex">
          <div>${fee}</div>
        </div>
        <div className="col justify-content-center d-flex">
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
