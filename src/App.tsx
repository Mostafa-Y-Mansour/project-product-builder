import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Button from "./components/ui/Button";
import Modal from "./components/ui/Modal";
import { productList } from "./data";

function App() {
  /* ----- State ----- */
  const [isOpen, setIsOpen] = useState(true);

  /* ----- Handler ----- */
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  /* ----- Renders ----- */
  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <main className="container">
      <Button className="bg-indigo-400" onClick={openModal}>
        Add Product
      </Button>
      <Modal isOpen={isOpen} closeModal={closeModal} title="Add Product">
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
      </Modal>
      <div className="p-2 m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4">
        {renderProductList}
      </div>
    </main>
  );
}
export default App;
