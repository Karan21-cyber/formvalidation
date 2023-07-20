import React from 'react'

function reusableForm() {
    const handleSubmit =() => {

    };
    
  return (
    <section className="form-container">
      <div className="register-form">
        <div className="form-data">
          <label>User Name</label>
          <input type="text" name="username" placeholder="Enter Username" />
          <span className="error"></span>
        </div>

        <div class="form-data">
          <label>Email</label>
          <input type="email" name="email" placeholder="Enter your email" />
          <span className="error"></span>
        </div>

        <div class="form-data">
          <label>Phone</label>
          <input type="number" name="phone" placeholder="Enter your phone" />
          <span className="error"></span>
        </div>

        <div class="form-data">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <span className="error"></span>
        </div>
        <div class="form-data">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmpassword"
            placeholder="Enter your password"
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

export default reusableForm