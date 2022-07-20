import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/index";

const HooksCakeContainer = () => {
  const numberOfCakes = useSelector((state) => state.cakes.numberOfCakes);
  const dispatch = useDispatch();
  return (
    <>
      <div>Number of cakes: {numberOfCakes}</div>
      <button onClick={() => dispatch(buyCake())}>Clcik</button>
    </>
  );
};

export default HooksCakeContainer;
