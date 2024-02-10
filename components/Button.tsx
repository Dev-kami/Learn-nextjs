import React from "react";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
}

const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={`px-5 py-1.5 rounded-md focus:ring-2 focus:ring-stone-400 focus:ring-offset-1 bg-stone-400 hover:bg-stone-500 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
