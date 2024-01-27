import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "../../features/cake/cakeSlice";
const CakeView = () => {
  const numOfCakes = useSelector((state) => state.cakes.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cakes -{numOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>order cake</button>
      <button onClick={() => dispatch(restocked(5))}>Restock cakes</button>
    </div>
  );
};
export default CakeView;
