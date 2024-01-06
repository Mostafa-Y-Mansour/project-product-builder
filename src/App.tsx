import { ChangeEvent, useState } from "react";
import ProductCard from "./components/ProductCard";
import Button from "./components/ui/Button";
import Modal from "./components/ui/Modal";
import { formInputsList, productList } from "./data";
import Input from "./components/ui/Input";
import { IProduct } from "./interfaces";

function App() {
  /* ----- State ----- */
  const [product, setProduct] = useState<IProduct>({
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  });
  const [isOpen, setIsOpen] = useState(true);

  /* ----- Handler ----- */
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setProduct({ ...product, [name]: value });
  };

  /* ----- Renders ----- */
  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  const renderFormInputList = formInputsList.map((input) => (
    <div className="w-full flex flex-col">
      <label className="text-xl font-bold" htmlFor={input.id}>
        {input.label}
      </label>
      <Input
        id={input.id}
        type={input.type}
        name={input.name}
        value={product[input.name]}
        onChange={onChangeHandler}
      />
    </div>
  ));

  return (
    <main className="container">
      <Button className="bg-indigo-400" onClick={openModal}>
        Add Product
      </Button>
      {/* modal */}
      <Modal isOpen={isOpen} closeModal={closeModal} title="Add Product">
        <form
          onSubmit={(e) => {
            // to fix an issue with the modal being open after submit
            e.preventDefault();
            console.log(product);
          }}
          className="space-y-3"
        >
          {renderFormInputList}
          <div className="flex gap-2 items-center justify-between">
            <Button
              className="px-10 bg-emerald-500 hover:bg-emerald-700"
              onClick={closeModal}
            >
              Add
            </Button>
            <Button
              className="px-10 bg-red-500 hover:bg-red-700"
              width="w-fit"
              onClick={closeModal}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
      {/*  */}
      <div className="p-2 m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4">
        {renderProductList}
      </div>
    </main>
  );
}
export default App;
