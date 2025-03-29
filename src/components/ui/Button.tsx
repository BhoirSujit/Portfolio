import { ReactNode } from "react";

type PropsType = {
  handleOnClick: () => void; // Fix: should return void, not null
  children?: ReactNode;
  variant?: "primary" | "secondary"; // New prop for styling
};

const Button = ({ handleOnClick, children, variant = "primary" }: PropsType) => {
  const baseStyles =
    "flex align-middle gap-4 py-2 px-4 border rounded-lg transition-all ease-in-out delay-100";
  
  const variantStyles = {
    primary: "bg-black text-white border-black hover:bg-opacity-85",
    secondary: "bg-white text-black border-black hover:bg-gray-200",
  };

  return (
    <button
      onClick={handleOnClick}
      className={`${baseStyles} ${variantStyles[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;
