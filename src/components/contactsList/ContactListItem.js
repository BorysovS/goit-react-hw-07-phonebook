import { AiOutlinePhone } from 'react-icons/ai';
import { Item, ItemBtn } from './ContactList.styled';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import toast from 'react-hot-toast';
import { selectIsLoading } from 'redux/selectors';

export const ContactListItem = ({ name, phone, id }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const hadleDelete = id => {
    dispatch(deleteContact(id));
    toast.success('Contact is delete');
  };
  return (
    <Item>
      <AiOutlinePhone />
      <span>{name}:</span>
      <span>{phone}</span>
      <ItemBtn
        type="button"
        onClick={() => hadleDelete(id)}
        disabled={isLoading}
      >
        Delete
      </ItemBtn>
    </Item>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
