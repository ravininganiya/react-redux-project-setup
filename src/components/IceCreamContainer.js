import { useDispatch, useSelector } from "react-redux";
import { buyIceCream } from "../redux/index";

const IceCreamContainer = () => {
  const iceCreams = useSelector((state) => state.iceCreams.numberOfIceCreams);
  console.log(iceCreams);
  const dispatch = useDispatch();
  return (
    <>
      <div>Number of Icecreams: {iceCreams}</div>
      <button onClick={() => dispatch(buyIceCream())}>Clcik</button>
    </>
  );
};
export default IceCreamContainer;
