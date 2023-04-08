import { ContactListItem } from './ContactListItem';
import { ContactsList, ListItem } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFiltered } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFiltered);

  const getFilterContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <ContactsList>
      {getFilterContacts().map(contact => {
        return (
          <ListItem key={contact.id}>
            <ContactListItem
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          </ListItem>
        );
      })}
    </ContactsList>
  );
};
