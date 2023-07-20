import React, { useState } from "react";
import Validation from "./component/Validation";

function Form() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
  });

  const [errors , setErrors] = useState({});

  const handleInput = (event) => {
    const newObj = {...values, [event.target.name]:event.target.value};
    setValues(newObj);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));

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
          <span className="error"></span>
        </div>

        <div class="form-data">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleInput}
            value={values.email}
          />
          <span className="error"></span>
        </div>

        <div class="form-data">
          <label>Phone</label>
          <input
            type="number"
            name="phone"
            placeholder="Enter your phone"
            onChange={handleInput}
            value={values.phone}
          />
          <span className="error"></span>
        </div>

        <div class="form-data">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleInput}
            value={values.password}
          />
          <span className="error"></span>
        </div>
        <div class="form-data">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmpassword"
            placeholder="Enter your password"
            onChange={handleInput}
            value={values.confirmpassword}
          />
          <span className="error"></span>
        </div>

        <button className="btn" onClick={handleSubmit}>
          {" "}
          Register{" "}
        </button>
      </div>
    </section>
  );
}

export default Form;
