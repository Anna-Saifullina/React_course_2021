import React, { useEffect } from "react";

type MainContentPropType = {
  setWasOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const MainContent: React.FC<MainContentPropType> = (props) => {
  const { setWasOpen } = props;
  const handler = () => {
    console.log("click");
  };
  useEffect(() => {
    console.log("main content mout");
    document.body.addEventListener("click", handler);
    setWasOpen(true);
    return () => {
      console.log("main content unmount!!");
      document.body.removeEventListener("click", handler);
    };
  }, []);
  return (
    <div>
      <h1>MAIN PAGE CONTENT</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        mollitia velit eveniet ad impedit tempore iure porro officia nisi totam,
        debitis praesentium optio delectus eligendi aliquam, ipsum iusto
        cupiditate quo.
      </p>
    </div>
  );
};

export default MainContent;
