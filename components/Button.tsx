type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children: React.ReactNode;
  color: string;
  buttonClass?: string;
  onClick?: () => void;
};

const Button = ({ children, color, onClick, buttonClass }: ButtonProps) => {
  const className =
    "px-5 py-1.5 rounded-md focus:ring-2 focus:ring-stone-400 focus:ring-offset-1";

  if (onClick)
    return (
      <button
        style={{
          backgroundColor: color,
        }}
        className={`${className} ${buttonClass}`}
        onClick={onClick}
      >
        {children}
      </button>
    );

  return (
    <button
      style={{
        backgroundColor: color,
      }}
      className={`${className} + ${buttonClass}`}
    >
      {children}
    </button>
  );
};

export default Button;
