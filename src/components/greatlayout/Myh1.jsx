import PropTypes from "prop-types";
import "./styler.css";
const Myh1 = ({ classNamee, children }) => {
  return (
    <h1 className={classNamee ? "regularstyle newstyle" : "regularstyle"}>
      {children}
    </h1>
  );
};

// Adding prop-types validation
Myh1.propTypes = {
  classNamee: PropTypes.string, // Expecting classNamee to be a string
  children: PropTypes.node,
};

export default Myh1;
