import React from "react";

function InputWrapper({ label, name, type, onChange, value }) {
  return (
    <div className="input-wrapper">
      <label>{label}</label>
      <input name={name} type={type} onChange={onChange} value={value} />
    </div>
  );
}

export default InputWrapper;
