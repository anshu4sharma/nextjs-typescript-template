import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Step1 = ({ values }) => {
  return (
    <>
      <div>
        <Field
          className="input input-bordered"
          name="firstName"
          placeholder="First Name"
        />
        <ErrorMessage name="firstName" />
      </div>
      <div>
        <Field
          className="input input-bordered"
          name="lastName"
          placeholder="Last Name"
        />
        <ErrorMessage name="lastName" />
      </div>
      <div className="flex">
        <button
          className="btn my-2"
          type="button"
          onClick={() => {
            if (values.firstName && values.lastName) {
              values.nextStep();
            } else {
              console.log("fill all");
            }
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

const Step2 = ({ values, errors }) => {
  return (
    <>
      <div>
        <Field
          className="input input-bordered"
          name="email"
          type="email"
          placeholder="Email"
        />
        <ErrorMessage name="email" />
      </div>
      <div className="flex gap-4 p-2">
        <button className="btn" type="button" onClick={() => values.prevStep()}>
          Prev
        </button>
        <div className="flex">
          <button className="btn" type="submit">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
      }}
      onSubmit={(values, actions) => {
        console.log(values, "values");
        actions.setSubmitting(false);
      }}
    >
      {({ values, errors }) => (
        <Form className="flex w-full max-w-md flex-col">
          {step === 1 && (
            <Step1 values={{ ...values, errors, nextStep: () => setStep(2) }} />
          )}
          {step === 2 && (
            <Step2 values={{ ...values, errors, prevStep: () => setStep(1) }} />
          )}
        </Form>
      )}
    </Formik>
  );
};

export default MultiStepForm;
