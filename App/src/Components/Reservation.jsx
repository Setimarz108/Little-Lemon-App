import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Flex, VStack } from "@chakra-ui/react";

function Reservation() {
  return (
    <>
      <div className="Form">
        <h1>Create a Reservation</h1>
        <Formik
          initialValues={{ name: "", guests: "", date: "", comment: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.name) {
              errors.name = "Required";
            }
            if (!values.guests) {
              errors.guests = "Required";
            } else if (isNaN(values.guests)) {
              errors.guests = "Invalid number";
            }
            if (!values.date) {
              errors.date = "Required";
            }
            if (!values.comment) {
              errors.comment = "Required";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <VStack>
              
              <Form>
                <label htmlFor="name">Name:</label>
                <Field type="text" name="name" />
                <ErrorMessage name="name" component="div" />

                <label htmlFor="guests">Number of guests:</label>
                <Field type="text" name="guests" />
                <ErrorMessage name="guests" component="div" />

                <label htmlFor="date">Date:</label>
                <Field type="date" name="date" />
                <ErrorMessage name="date" component="div" />

                <label htmlFor="comment">Comments:</label>
                <Field as="textarea" name="comment" />
                <ErrorMessage name="comment" component="div" />

                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </Form>
            </VStack>
          )}
        </Formik>
      </div>
    </>
  );
}

export default Reservation;
