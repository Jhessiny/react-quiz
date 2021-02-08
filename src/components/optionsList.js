import { useEffect, useState } from "react";
import Option from "./option";

const OptionList = ({
  optionsRef,
  optionsList,
  shouldEnableButton,
  isNextChecked,
}) => {
  const [optChecked, setOptChecked] = useState([false, false, false, false]);
  const [isQChecked, setIsQChecked] = useState(isNextChecked);

  const changeInput = (optIndex) => {
    const optArray = [false, false, false, false];
    optArray[optIndex] = true;
    setOptChecked(optArray);
    shouldEnableButton();
  };

  // useEffect(() => {
  //   const optArray = [false, false, false, false];
  //   setOptChecked(optArray);
  //   console.log(isNextChecked);

  //   if (isNextChecked !== null) {
  //     console.log("oi");
  //     optArray[isQChecked] = true;
  //     setOptChecked(optArray);
  //     console.log(optChecked);
  //   }
  // }, [isNextChecked]);

  return (
    <ul>
      {optionsList.map((opt, index) => (
        <Option
          key={index}
          propsRef={optionsRef[index]}
          optText={opt}
          optChecked={optChecked[index]}
          changeInput={changeInput}
          optIndex={index}
          isNextChecked={isNextChecked}
        />
      ))}
    </ul>
  );
};

export default OptionList;
