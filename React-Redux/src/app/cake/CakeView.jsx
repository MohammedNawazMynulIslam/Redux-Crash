import { useSelector } from "react-redux";
const CakeView = () => {
  const numOfCakes = useSelector((state) => state.cakes.numOfCakes);
  return (
    <div>
      <h2>Number of cakes -{numOfCakes}</h2>
      <button>order cake</button>
      <button>Restock cakes</button>
    </div>
  );
};
export default CakeView;
