import { Formik, Field, Form } from 'formik';
import { nanoid } from 'nanoid';

export default function ContactForm() {
  const nameFieldId = nanoid();
  const numberFieldId = nanoid();
  const addContact = (values, actions) => {
    actions.resetForm();
    console.log(values);
  };
  return (
    <Formik
      initialValues={{ name: '', number: '', id: '' }}
      onSubmit={addContact}
    >
      <Form>
        <label htmlFor={nameFieldId}>Name</label>
        <Field type="text" name="name" id={nameFieldId} />
        <label htmlFor={numberFieldId}>Number</label>
        <Field type="number" name="number" id={numberFieldId} />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
