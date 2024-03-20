/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';
export default function UpdateItemQuantity({ pizzaId }) {
  const dispatch = useDispatch();
  function handleDecreament() {
    dispatch(decreaseItemQuantity(pizzaId));
  }
  function handleIncreament() {
    dispatch(increaseItemQuantity(pizzaId));
  }

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button onClick={handleDecreament} type="round">
        -
      </Button>
      <Button onClick={handleIncreament} type="round">
        +
      </Button>
    </div>
  );
}
