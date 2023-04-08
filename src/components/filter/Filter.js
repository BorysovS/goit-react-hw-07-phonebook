import { useDispatch, useSelector } from 'react-redux';
import { FilterSection, FilterLabel, FilterInput } from './Filter.styled';
import { getFiltered } from 'redux/selectors';
import { setFilterValue } from 'redux/filtersSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFiltered);

  const getVisibleContacts = evt => {
    dispatch(setFilterValue(evt.target.value));
    console.log(filter);
  };

  return (
    <FilterSection>
      <FilterLabel htmlFor="filter">
        Find contact by name
        <FilterInput
          name="filter"
          placeholder="Find"
          onChange={getVisibleContacts}
        />
      </FilterLabel>
    </FilterSection>
  );
};

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
