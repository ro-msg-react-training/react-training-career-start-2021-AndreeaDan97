import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../models/Product";
import { addProduct } from "../redux/actions/productActions";

const AddForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [imageURL, setImageURL] = useState("");
  const [description, setDescription] = useState("");
  const [weight, setWeight] = useState(0);
  const [category, setCategory] = useState("");
  const [descCategory, setDescCategory] = useState("");
  const [supplier, setSupplier] = useState("");

  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.productReducer.shopProduct);

  const addTask = () => {
    const product: Product = new Product(
      0,
      name,
      category,
      imageURL,
      price,
      description,
      weight,
      descCategory,
      supplier
    );

    const addNewProduct = addProduct(product);
    addNewProduct(dispatch);
    console.log(data.name);
  };

  const returnToInputInitialState = () => {
    setName("");
    setPrice(0);
    setImageURL("");
    setDescription("");
    setWeight(0);
    setCategory("");
    setSupplier("");
  };

  const onSubmit = (e: any) => {
    e.preventDefault();

    if (!name) {
      alert("Add a name for your product!");
      return;
    }

    addTask();
    returnToInputInitialState();
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Produs: </label>
        <input
          type="text"
          placeholder="Name of the product"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>
      <div className="form-control">
        <label>Pret: </label>
        <input
          type="number"
          placeholder="Price of the product"
          value={price}
          onChange={(e) => setPrice(e.target.valueAsNumber)}
        ></input>
      </div>
      <div className="form-control">
        <label>ImageURL: </label>
        <input
          type="text"
          placeholder="ImageURL of the product"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        ></input>
      </div>
      <div className="form-control">
        <label>Tip faina: </label>
        <input
          type="text"
          placeholder="Description of the product"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
      </div>
      <div className="form-control">
        <label>Gramaj: </label>
        <input
          type="number"
          placeholder="Weight of the product"
          value={weight}
          onChange={(e) => setWeight(e.target.valueAsNumber)}
        ></input>
      </div>
      <div className="form-control">
        <label>Categorie: </label>
        <input
          type="text"
          placeholder="Category of the product"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        ></input>
      </div>
      <div className="form-control">
        <label>Furnizor: </label>
        <input
          type="text"
          placeholder="Supplier of the product"
          value={supplier}
          onChange={(e) => setSupplier(e.target.value)}
        ></input>
      </div>

      <input type="submit" value="Add product" className="btn btn-block" />
    </form>
  );
};

export default AddForm;
