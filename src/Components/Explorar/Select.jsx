import React from "react";
import "../../Assets/Styles/select.scss";
/**
 *
 * THIS IS A CUSTOM SELECT FOR THE EXPLORE MODULE
 *
 **/
const Select = (props) => {
  const data = props.options;
  return (
    <div className="select-wrapper">
      <select
        onChange={(e) => props.handleChange(e.target.value)}
        className="form-select form-select-lg mb-3"
      >
        {data.map((object, idx) => (
          <option value={object.name} key={"ID" + idx}>
            {object.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
