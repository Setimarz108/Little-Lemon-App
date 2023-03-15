import React from "react";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Flex,
  Spacer,
  Box,
} from "@chakra-ui/react";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  numOfGuests: Yup.number()
    .min(1, "Must have at least 1 guest")
    .required("Number of guests is required"),
  date: Yup.date().required("Date is required"),
  comments: Yup.string().min(3, "Comments cannot exceed 1000 characters"),
});

const ReservationForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        numOfGuests: 1,
        date: "",
        comments: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="Form">
          <h1>Make your reservation!</h1>
          <Flex direction="column">
            <Box mb="4">
              <Field name="name">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.name && form.touched.name}
                  >
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <Input {...field} id="name" placeholder="Name"
                    isInvalid
                    errorBorderColor='red.300' />
                    <ErrorMessage name="name" />
                  </FormControl>
                )}
              </Field>
            </Box>

            <Box mb="4">
              <Field name="numOfGuests">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.numOfGuests && form.touched.numOfGuests
                    }
                  >
                    <FormLabel htmlFor="numOfGuests">Number of Guests</FormLabel>
                    <Input
                      {...field}
                      id="numOfGuests"
                      placeholder="Number of Guests"
                      type="number"
                      min="1"
                    />
                    <ErrorMessage name="numOfGuests" />
                  </FormControl>
                )}
              </Field>
            </Box>

            <Box mb="4">
              <Field name="date">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.date && form.touched.date}
                  >
                    <FormLabel htmlFor="date">Date</FormLabel>
                    <Input {...field} id="date" placeholder="Date" type="date" />
                    <ErrorMessage name="date" />
                  </FormControl>
                )}
              </Field>
            </Box>

            <Box mb="4">
              <Field name="comments">
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.comments && form.touched.comments}
                  >
                  <FormLabel htmlFor="comments">Comments</FormLabel>
                  <Textarea
                  {...field}
                  id="comments"
                  placeholder="Comments"
                  />
                  <ErrorMessage name="comments" />
                  </FormControl>
                  )}
                  </Field>
                  </Box>
                  <Button colorScheme="blue" type="submit" isLoading={isSubmitting}>
          Submit
        </Button>
      </Flex>
    </Form>
  )}
</Formik>
);
};

export default ReservationForm;