import React, { useEffect } from "react";
import "./App.css";
// import ProductCounter from "./ProductCounter";
// import Form from "./Form";
// import RegistrationPage from "./RegistrationPage";
import MainPage from "./containers/MainPage";

// const App = () => {
//   // const [orangeCount, setOrangeCount] = useState(0);
//   // const [applleCount, setAppleCount] = useState(0);
//   return (
//     <RegistrationPage />
//     // <div className="App">
//     //   <ProductCounter
//     //     productName="Апельсин"
//     //     count={orangeCount}
//     //     setCount={setOrangeCount}
//     //   />
//     //   <ProductCounter
//     //     productName="Яблоко"
//     //     count={applleCount}
//     //     setCount={setAppleCount}
//     //   />
//     //   <ProductCounter
//     //     productName="Апельсин"
//     //     count={orangeCount}
//     //     setCount={setOrangeCount}
//     //   />
//     //   <Form />
//     // </div>
//   );
// };

const App = () => {
  useEffect(() => {
    console.log("app mount");
  }, []);
  return <MainPage />;
};
export default App;
