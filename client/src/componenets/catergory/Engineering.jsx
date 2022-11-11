import React from "react";

const engineering = (props) => {
  const category = props;
  const random = () => {
    console.log(category);
  };
  return (
    <div>
      <button onClick={random}>Hello</button>
    </div>
  );
};

export default engineering;
