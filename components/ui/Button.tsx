"use client";

interface ButtonProps {
  onClick?: () => void;
  className: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  return <button {...props}>Button</button>;
};

export default Button;
