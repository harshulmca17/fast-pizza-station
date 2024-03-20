/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { deleteItem } from './cartSlice';

export default function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
    console.log(pizzaId)
  return (
    <Button
      onClick={() => {
        dispatch(deleteItem(pizzaId));
      }}
      type="small"
    >
      Delete
    </Button>
  );
}
