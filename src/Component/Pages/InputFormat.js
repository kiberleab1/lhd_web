import React from "react";

const InputFormat = ({
  InputClassName,
  TextType,
  NameOfInput,
  OnPlaceHolder,
  OnChangingInputs,
  ValueOfInput,
}) => {
  return (
    <input
      className={InputClassName}
      type={TextType}
      name={NameOfInput}
      placeholder={OnPlaceHolder}
      onChange={OnChangingInputs}
      value={ValueOfInput}
    />
  );
};

export default InputFormat;
