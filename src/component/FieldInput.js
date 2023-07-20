import React from 'react'

function FieldInput() {
  return (
    <div className="form-data">
      <label>User Name</label>
      <input type="text" name="username" placeholder="Enter Username" />
      <span className="error"></span>
    </div>
  );
}

export default FieldInput