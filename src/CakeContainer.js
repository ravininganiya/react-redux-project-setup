import { connect } from "react-redux";
import { buyCake } from "./redux/index";

const CakeContainer = (props) => {
  return (
    <>
      <div>Number of cakes: {props.numberOfCakes}</div>
      <button onClick={props.buyCake}>Clcik</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.numberOfCakes
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
