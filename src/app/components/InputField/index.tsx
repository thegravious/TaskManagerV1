import React from "react";

interface InputfeildType {
  inputType?: string;
  placeholderType?: string;
  inputValue?: string;
  operation?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Inputfeild: React.FC<InputfeildType> = ({
  inputType,
  placeholderType,
  inputValue,
  operation,
}) => {
  return (
    <div className="flex items-center justify-center">
      <input
        value={inputValue}
        type={inputType}
        placeholder={placeholderType}
        onChange={operation}
        className="px-2 py-3 text-black w-1/2 text-sm border-b-2 border-slate-400 focus:outline-none"
      />
    </div>
  );
};

export default Inputfeild;
