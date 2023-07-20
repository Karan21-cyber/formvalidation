import React, { useState } from "react";
import Validation from "./component/Validation";

function ResuableFormData() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
  });

  const [errors, setErrors] = useState({});
  

  const handleInput = (event) => {
    const newObj = { ...values, [event.target.name]: event.target.value };
    setValues(newObj);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const ValidationErrors = Validation(values);
    setErrors(ValidationErrors);
    if (Object.keys(ValidationErrors).length === 0) {
      console.log(values);
    }
  };

  return (
    <section className="form-container">
      <div className="register-form">
        <div className="form-data">
          <label>User Name</label>
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            onChange={handleInput}
            value={values.username}
          />
          {errors.username && <span className="error">{errors.username}</span>}
        </div>

        <div className="form-data">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleInput}
            value={values.email}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-data">
          <label>Phone</label>
          <input
            type="number"
            name="phone"
            placeholder="Enter your phone"
            onChange={handleInput}
            value={values.phone}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>

        <div className="form-data">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleInput}
            value={values.password}
            required
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div className="form-data">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmpassword"
            placeholder="Enter your password"
            onChange={handleInput}
            value={values.confirmpassword}
          />
          {errors.confirmpassword && (
            <span className="error">{errors.confirmpassword}</span>
          )}
        </div>

        <button className="btn" onClick={handleSubmit}>
          {" "}
          Register{" "}
        </button>
      </div>
    </section>
  );
}

export default ResuableFormData;
