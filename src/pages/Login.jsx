import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import validations from "../components/validations";

function SignIn() {
  const navigate = useNavigate();

  const { handleSubmit, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: {  
        email: "",
        password: ""
      },
      onSubmit: () => {
        navigate("/");
      },

      validationSchema: validations,
    });

  return (
    <main id="form">
      <div id="form-container" className="log-in">
      <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
         

          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input name="email" onChange={handleChange} onBlur={handleBlur} />

            {errors.email && touched.email && (
              <div className="error">{errors.email}</div>
            )}
          </div>

          <div className="form-control">
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {errors.password && touched.password && (
              <div className="error">{errors.password}</div>
            )}
          </div>

          <button type="submit">Log in</button>
        </form>
      </div>
    </main>
  );
}

export default SignIn;
