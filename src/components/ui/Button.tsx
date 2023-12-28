import { FC, ReactNode } from "react";

interface IProps {
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
      className={`${className} p-2  ${width} rounded-md text-white`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
