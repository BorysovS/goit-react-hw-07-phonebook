import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Form,
  ErrorMessage,
  FormLabel,
  LabelName,
  FormBtn,
  Field,
} from './PhonebookFrom.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import toast from 'react-hot-toast';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name is not valid'
    )
    .required('Required'),
  phone: Yup.string()
    .min(9, 'Format tel: xxx-xx-xx')
    .max(15, 'Format tel: xxx-xx-xx')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone is not valid'
    )
    .required('Required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = newContact => {
    const normalizeName = newContact.name.toLowerCase();

    if (
      contacts.find(contact => contact.name.toLowerCase() === normalizeName)
    ) {
      toast.error('This contact is alredy in ypur phonebook');
      return;
    }
    dispatch(addContact(newContact));
    toast.success('Contacts is add to your phonebook!');
  };

  return (
    <Formik
      initialValues={{ name: '', phone: '' }}
      onSubmit={(values, actions) => {
        handleSubmit(values);
        console.log('submit');
        actions.resetForm();
      }}
      validationSchema={ContactSchema}
    >
      <Form autoComplete="off">
        <FormLabel htmlFor="name">
          <LabelName>Name</LabelName>
          <Field name="name" placeholder="Name" />
          <ErrorMessage name="name" component="span" />
        </FormLabel>
        <FormLabel htmlFor="phone">
          <LabelName>Number</LabelName>
          <Field name="phone" placeholder="xxx-xx-xx" />
          <ErrorMessage name="phone" component="span" />
        </FormLabel>
        <FormBtn type="submit">Add contact</FormBtn>
      </Form>
    </Formik>
  );
};
