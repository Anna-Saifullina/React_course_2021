import React, { useState } from "react";
import "./App.css";
import ProductCounter from "./ProductCounter";
import Form from "./Form";
import RegistrationPage from "./RegistrationPage";

const App = () => {
  // const [orangeCount, setOrangeCount] = useState(0);
  // const [applleCount, setAppleCount] = useState(0);
  return (
    <RegistrationPage />
    // <div className="App">
    //   <ProductCounter
    //     productName="Апельсин"
    //     count={orangeCount}
    //     setCount={setOrangeCount}
    //   />
    //   <ProductCounter
    //     productName="Яблоко"
    //     count={applleCount}
    //     setCount={setAppleCount}
    //   />
    //   <ProductCounter
    //     productName="Апельсин"
    //     count={orangeCount}
    //     setCount={setOrangeCount}
    //   />
    //   <Form />
    // </div>
  );
};

export default App;
