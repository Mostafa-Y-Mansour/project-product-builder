import { FC, InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<IProps> = ({ ...rest }) => {
  return (
    <input
      {...rest}
      className="border-[1px] border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 shadow-md mb-[2px] p-3 text-md outline-none rounded-md"
    />
  );
};

export default Input;
