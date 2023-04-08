import { ContactListItem } from './ContactListItem';
import { ContactsList, ListItem } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectVisibleContact, selectIsLoading } from 'redux/selectors';
import { Circles } from 'react-loader-spinner';

export const ContactList = () => {
  const isLoading = useSelector(selectIsLoading);
  const visibleContacts = useSelector(selectVisibleContact);

  return (
    <ContactsList>
      {isLoading && <Circles />}
      {visibleContacts.map(contact => {
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
