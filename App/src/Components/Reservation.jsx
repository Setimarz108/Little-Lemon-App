import React from "react";
import { Formik, Field, Form } from "formik";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Flex,
  Spacer,
} from "@chakra-ui/react";

const ReservationForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        numOfGuests: 1,
        date: "",
        comments: "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = "Required";
        }
        if (!values.numOfGuests) {
          errors.numOfGuests = "Required";
        }
        if (!values.date) {
          errors.date = "Required";
        }
        return errors;
      }}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field name="name">
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.name && form.touched.name}
                mb="4"
              >
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input {...field} id="name" placeholder="Name" />
              </FormControl>
            )}
          </Field>

          <Field name="numOfGuests">
            {({ field, form }) => (
              <FormControl
                isInvalid={
                  form.errors.numOfGuests && form.touched.numOfGuests
                }
                mb="4"
              >
                <FormLabel htmlFor="numOfGuests">Number of Guests</FormLabel>
                <Input
                  {...field}
                  id="numOfGuests"
                  placeholder="Number of Guests"
                  type="number"
                  min="1"
                />
              </FormControl>
            )}
          </Field>

          <Field name="date">
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.date && form.touched.date}
                mb="4"
              >
                <FormLabel htmlFor="date">Date</FormLabel>
                <Input {...field} id="date" placeholder="Date" type="date" />
              </FormControl>
            )}
          </Field>

          <Field name="comments">
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.comments && form.touched.comments}
                mb="4"
              >
                <FormLabel htmlFor="comments">Comments</FormLabel>
                <Textarea
                  {...field}
                  id="comments"
                  placeholder="Comments"
                  resize="none"
                />
              </FormControl>
            )}
          </Field>

          <Flex>
            <Spacer />
            <Button
              mt={4}
              colorScheme="teal"
              isLoading={isSubmitting}
              type="submit"
            >
              Submit
            </Button>
          </Flex>
        </Form>
      )}
    </Formik>
  );
};

export default ReservationForm;