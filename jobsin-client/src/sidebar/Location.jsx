import React from "react";
import InputField from "../components/InputField";

const Location = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Location</h4>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>All
        </label>

        <InputField
          handleChange={handleChange}
          value="Bangalore"
          title="Bangalore"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="New Delhi"
          title="New Delhi"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="Hydrabad"
          title="Hydrabad"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="Jaipur"
          title="Jaipur"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="Gurugram"
          title="Gurugram"
          name="test"
        />

        <InputField
          handleChange={handleChange}
          value="Chennai"
          title="Chennai"
          name="test"
        />
      </div>
    </div>
  );
};

export default Location;
