import React from "react";

// const HelloReact = () => {
  
//   return <div>HelloReact</div>;
// };

// export default HelloReact;

const HelloReact = () => {
  
  const user = {
    name: "John",
    age: 22,
  };

  return (
    <div>
      <div className="hello">Hello React</div>
      <div>Name: {user.name}</div>
    </div>
  );
};

export default HelloReact;
