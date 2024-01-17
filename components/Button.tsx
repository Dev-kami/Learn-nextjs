const Button = ({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) => {
  return (
    <button
      style={{
        backgroundColor: color,
      }}
      className="px-5 py-1.5 rounded-md focus:ring-2 focus:ring-stone-400 focus:ring-offset-1"
    >
      {children}
    </button>
  );
};

export default Button;
