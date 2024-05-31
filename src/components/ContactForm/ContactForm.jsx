
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be less than 50 characters")
    .required("This field must be filled in!"),
  number: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be less than 50 characters")
    .required("This field must be filled in!"),
});

export default function ContactForm({ onAdd }) {
  const initialValues = { name: "", number: "" };
  const fieldId = useId();

  const handleSubmit = (values, actions) => {
    onAdd({ ...values, id: nanoid(5) });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
<Form className={css.form}>
        <label htmlFor={`${fieldId}-name`}>Name</label>
              <Field id={fieldId} className={css.input} name="name" type="text" />
               <ErrorMessage className={css.error} name="name" component="span" />
        <label htmlFor={`${fieldId}-number`}>Number</label>
              <Field id={fieldId} className={css.input} name="number" type="tel" />
               <ErrorMessage className={css.error} name="number" component="span" />

              <button className={css.btn} type="submit" >Add contact</button>
        </Form>
    </Formik>
  );
}
