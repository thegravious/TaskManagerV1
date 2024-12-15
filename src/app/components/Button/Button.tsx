import React from 'react';

interface buttonType {
  buttonColor?: "primary" | "success" | "warn" | "danger" | "default";
  buttonType?: "button" | "submit",
  buttonText?: string;
  operation?: () => void;
}

const ButtonColor = (buttonColor: "primary" | "danger" | "warn" | "success" | "default") => {
  if (buttonColor === "primary") {
    return "bg-blue-700 hover:bg-blue-800 text-white border-blue-700";
  } else if (buttonColor === "danger") {
    return "bg-red-700 hover:bg-red-800 text-white border-red-700";
  } else if (buttonColor === "warn") {
    return "bg-yellow-700 hover:bg-yellow-800 text-white border-yellow-700";
  } else if (buttonColor === "success") {
    return "bg-green-700 hover:bg-green-800 text-white border-green-700";
  } else if (buttonColor === "default") {
    return "bg-slate-700 hover:bg-slate-800 text-white border-slate-700";
  }
};

const Button: React.FC<buttonType> = ({
  buttonColor = "default",
  buttonType = "button",
  buttonText = "button",
  operation,
}) => {
  return (
    <button
      type={buttonType}
      onClick={operation}
      className={`px-5 py-2.5 m-5 rounded-lg text-sm tracking-wider font-medium ${ButtonColor(buttonColor)} outline-none transition-all duration-300`}
    >
      {buttonText}
    </button>
  );
};

export default Button;
