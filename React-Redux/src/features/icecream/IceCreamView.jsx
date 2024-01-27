import { useSelector } from "react-redux";
const IceCreamView = () => {
  const numOfIceCreams = useSelector((state) => state.iceCreams.NumOficecream);
  return (
    <div>
      <h2>Number of iceCream - {numOfIceCreams}</h2>
      <button>order cake</button>
      <button>Restock iceCream</button>
    </div>
  );
};
export default IceCreamView;
