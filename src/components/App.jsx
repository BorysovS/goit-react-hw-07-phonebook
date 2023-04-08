import { ContactForm } from './phonebookForm/PhonebookForn';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { ContactList } from './contactsList/ContactList';
import { Filter } from './filter/Filter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { Toaster } from 'react-hot-toast';


export const App = () => {
  const dispatch = useDispatch();

useEffect(() => {
 dispatch(fetchContacts()) 
}, [dispatch])


    return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <GlobalStyle />
      < Toaster />
    </Layout>
  )
};
