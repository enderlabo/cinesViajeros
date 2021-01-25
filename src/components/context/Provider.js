import React, { useState } from "react";

export const Context = React.createContext();

const Provider = props => {
  const aCallback = () => {
    console.log("inside methods");
    
  };

  const [name, setName] = useState();

  return (
    <Context.Provider
      value={{
        name,
        updateName: name => setName(name),
        aCallback: aCallback
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Provider;