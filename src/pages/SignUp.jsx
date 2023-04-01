import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import validations from "../components/validations";

function SignUp() {
  const navigate = useNavigate();

  const { handleSubmit, handleChange, values, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        phone_number: "",
        email: "",
        password: "",
        passwordConfirm: "",
      },
      onSubmit: (values) => {
        navigate("/");
        // console.log(values)
        // console.log(errors)
      },

      validationSchema: validations,
    });

  return (
    <main id="form">
      <div id="form-container">
        <form onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <div className="form-control">
            <label htmlFor="firstName">Name</label>
            <input
              name="firstName"
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {errors.firstName && touched.firstName && (
              <div className="error">{errors.firstName}</div>
            )}
          </div>

          <div className="form-control">
            <label htmlFor="lastName">Surname</label>
            <input
              name="lastName"
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {errors.lastName && touched.lastName && (
              <div className="error">{errors.lastName}</div>
            )}
          </div>

          <div className="form-control">
            <label htmlFor="phone_number">Phone Number</label>
            <input
              name="phone_number"
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {errors.phone_number && touched.phone_number && (
              <div className="error">{errors.phone_number}</div>
            )}
          </div>

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

          <div className="form-control">
            <label>Confirm Password</label>
            <input
              type="password"
              name="passwordConfirm"
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {errors.passwordConfirm && touched.passwordConfirm && (
              <div className="error">{errors.passwordConfirm}</div>
            )}
          </div>

          <div className="form-control">
            <label>Which country do you live in?</label>
            <select
              name="country"
              onChange={handleChange}
              value={values.country}
            >
              <option value="turkey">Turkey</option>
              <option value="england">England</option>
              <option value="usa">USA</option>
              <option value="italy">Italy</option>
              <option value="germany">Germany</option>
              <option value="france">France</option>
            </select>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </main>
  );
}

export default SignUp;
