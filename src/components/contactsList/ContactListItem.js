import { AiOutlinePhone } from 'react-icons/ai';
import { Item, ItemBtn } from './ContactList.styled';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';

export const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <AiOutlinePhone />
      <span>{name}:</span>
      <span>{number}</span>
      <ItemBtn type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </ItemBtn>
    </Item>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
