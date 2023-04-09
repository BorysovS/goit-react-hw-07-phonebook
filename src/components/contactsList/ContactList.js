import { ContactListItem } from './ContactListItem';
import { ContactsList, ListItem } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectVisibleContact, selectIsLoading } from 'redux/selectors';
import { Loader } from 'components/Loader/Loader';

export const ContactList = () => {
  const isLoading = useSelector(selectIsLoading);
  const visibleContacts = useSelector(selectVisibleContact);

  return (
    <ContactsList>
      {isLoading && <Loader />}
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
