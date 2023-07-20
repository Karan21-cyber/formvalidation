export default function Validation(values) {
  const errors = {};

  const email_pattern = /^[^\s@]+@[^s@]+\.[^\s@]{2,6}$/;
  const password_pattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (values.username === "") {
    errors.username = "Username is required";
  }
  if (values.email === "") {
    errors.email = "email is required";
  } else if (!email_pattern.test(values.email)) {
    errors.email = "Email is Invalid";
  }

  if (values.phone === "") {
    errors.phone = "Phone is required";
  } else if (values.phone.length !== 10) {
    errors.phone = "Phone number length shouble be 10";
  }

  if (values.password === "") {
    errors.password = "Password Required";
  } else if (!password_pattern.test(values.password)) {
    errors.password = "Password is Invalid";
  }
  
  if (values.confirmpassword === "") {
    errors.confirmpassword = "Confirm Password is required";
  }
  else if (values.password === values.confirmpassword) {
    errors.confirmpassword = "Password doesn't match";
  }
  

  return errors;
}
