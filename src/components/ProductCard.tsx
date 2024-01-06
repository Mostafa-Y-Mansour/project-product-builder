import { FC } from "react";
import Image from "./Image";
import Button from "./ui/Button";
import { IProduct } from "../interfaces";
import { txtSlicer } from "../utils/functions";

interface IProps {
  product: IProduct;
}

const ProductCard: FC<IProps> = ({ product }) => {
  return (
    <div className="max-w-sm md:max-w-lg mx-auto  border rounded-md p-2 flex flex-col">
      <Image
        className="w-full aspect-video object-cover rounded-md mb-5"
        imageUrl={product.imageURL}
        alt="product image"
      />
      <h3 className="text-lg font-bold mb-2">{product.title}</h3>

      <p className="text-gray-400 ">{txtSlicer(product.description, 70)}</p>

      <div className="flex items-center  my-4 space-x-2 cursor-pointer">
        <span className="w-5 h-5 bg-indigo-600 rounded-full" />
        <span className="w-5 h-5 bg-yellow-600 rounded-full" />
        <span className="w-5 h-5 bg-red-600 rounded-full" />
        <span className="w-5 h-5 bg-teal-600 rounded-full" />
      </div>
      <div className="flex items-center justify-between my-4">
        <span className="text-indigo-600 text-3xl">${product.price}</span>
        <img
          src={product.category.imageURL}
          alt="logo"
          className="w-10 h-10 object-cover rounded-full"
        />
      </div>
      <div className="flex items-center justify-between space-x-2">
        <Button
          className="bg-indigo-500 hover:bg-indigo-700"
          onClick={() => {
            console.log("clicked");
          }}
        >
          Edit
        </Button>
        <Button className="bg-red-500 hover:bg-red-700">Delete ❌</Button>
      </div>
    </div>
  );
};

export default ProductCard;
