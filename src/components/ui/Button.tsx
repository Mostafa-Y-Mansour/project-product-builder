import { FC, ReactNode } from "react";

interface IProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  width?: "w-full" | "w-fit";
}

const Button: FC<IProps> = ({
  children,
  className,
  width = "w-full",
  ...rest
}) => {
  return (
    <button
      className={`p-2 rounded-md text-white ${width} ${
        className || "bg-indigo-500 hover:bg-indigo-700"
      }`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
