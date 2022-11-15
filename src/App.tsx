import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./App.css";
import FormResults from "./components/FormResult";

interface FormValues {
  email: string;
  username: string;
  github: string;
  could_better: string;
}

function FormikYup() {
  const SignUpSchema = Yup.object().shape({
    could_better: Yup.string()
      .min(5, "Should be 5 character long")
      .max(15, "should not exceed 15 characters")
      .required("Required"),

    username: Yup.string()
      .min(5, "Should be 5 character long")
      .max(15, "should not exceed 15 characters")
      .required("Required"),

    email: Yup.string()
      .required("Required")
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        "Invalid email address"
      ),
  });

  const [isSubmit, setSubmit] = useState(false);
  const [formValue, setFormValue] = useState({
    email: "",
    username: "",
    could_better: "",
    github: "",
  });

  const handleSubmit = (values: FormValues) => {
    setSubmit(true);
    setFormValue({
      ...values,
    });
  };

  return (
    <div className="formik-feedback">
      <h2>Formik Feedback</h2>
      <Formik
        initialValues={{
          email: "",
          username: "",
          could_better: "",
          github: "",
        }}
        validationSchema={SignUpSchema}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {() => (
          <>
            {!isSubmit ? (
              <Form>
                <label htmlFor="email" className="label">
                  <span style={{ color: "red" }}>*</span> Email
                </label>
                <Field name="email" placeholder="Type your answer here" />
                <ErrorMessage name="email" component="span" />

                <label htmlFor="could_better" className="label">
                  <span style={{ color: "red" }}>*</span> What could be better?
                </label>
                <Field
                  name="could_better"
                  placeholder="Type your answer here"
                />
                <ErrorMessage name="could_better" component="span" />

                <label htmlFor="username" className="label">
                  <span style={{ color: "red" }}>*</span> Your Name
                </label>
                <Field name="username" placeholder="Type your answer here" />
                <ErrorMessage name="username" component="span" />

                <label htmlFor="github" className="label">
                  Your GitHub profile URL (optional)
                </label>
                <Field name="github" placeholder="Type your answer here" />
                <ErrorMessage name="github" component="span" />

                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </Form>
            ) : (
              <FormResults formResult={formValue} />
            )}
          </>
        )}
      </Formik>
    </div>
  );
}

export default FormikYup;
