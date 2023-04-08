import { ContactListItem } from './ContactListItem';
import { ContactsList, ListItem } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectContacts, selectFiltered } from 'redux/selectors';
import { Circles } from 'react-loader-spinner';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFiltered);
  const isLoading = useSelector(state => state.contacts.isLoading);

  const getFilterContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <ContactsList>
      {isLoading && <Circles />}
      {getFilterContacts().map(contact => {
        return (
          <ListItem key={contact.id}>
            <ContactListItem
              id={contact.id}
              name={contact.name}
              phone={contact.phone}
            />
          </ListItem>
        );
      })}
    </ContactsList>
  );
};
