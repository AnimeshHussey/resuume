import react from "react";
import "./header.scss";

const navigationOptions = (props) => {
  const { items } = props;
  return (
    <>
      {items &&
        Array.isArray(items) &&
        items.map((item, index) => (
          <span key={`${item.name}-${index}`}>{item.name}</span>
        ))}
    </>
  );
};

export default navigationOptions;
