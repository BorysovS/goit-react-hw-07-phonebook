import { ContactForm } from './phonebookForm/PhonebookForn';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { ContactList } from './contactsList/ContactList';
import { Filter } from './filter/Filter';


export const App = () => {
    return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <GlobalStyle />
    </Layout>
  )
};
