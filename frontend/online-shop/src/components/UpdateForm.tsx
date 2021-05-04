import { useState } from "react";
import Product from "../models/Product";
import ProductService from "../services/ProductService";
import { formStyle } from "../styles/Form.styles";

const UpdateForm = (props: any) => {
  const classes = formStyle();

  const dataReceived = props.location.state.data;
  const [name, setName] = useState(dataReceived.name);
  const [price, setPrice] = useState(dataReceived.price);
  const [imageURL, setImageURL] = useState(dataReceived.imageURL);
  const [description, setDescription] = useState(dataReceived.description);
  const [weight, setWeight] = useState(dataReceived.weight);
  const [category, setCategory] = useState(dataReceived.nameOfCategory);
  const [descCategory, setDescCategory] = useState(
    dataReceived.descriptionOfCategory
  );
  const [supplier, setSupplier] = useState(dataReceived.nameOfSupplier);

  const productService = new ProductService();

  const updateTask = () => {
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

    productService
      .updateProductById(dataReceived.id, product)
      .then((product) => {
        console.log(product.data);
        alert("The product was updated!");
      });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    updateTask();
  };

  return (
    <form className={classes.customForm} onSubmit={onSubmit}>
      <div className={classes.customFormControl}>
        <label>Produs: </label>
        <input
          type="text"
          placeholder={dataReceived.name}
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>
      <div className={classes.customFormControl}>
        <label>Pret: </label>
        <input
          type="number"
          placeholder={dataReceived.price}
          value={price}
          onChange={(e) => setPrice(e.target.valueAsNumber)}
        ></input>
      </div>
      <div className={classes.customFormControl}>
        <label>ImageURL: </label>
        <input
          type="text"
          placeholder="ImageURL of the product"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        ></input>
      </div>
      <div className={classes.customFormControl}>
        <label>Tip faina: </label>
        <input
          type="text"
          placeholder={dataReceived.description}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
      </div>
      <div className={classes.customFormControl}>
        <label>Gramaj: </label>
        <input
          type="number"
          placeholder={dataReceived.weight}
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        ></input>
      </div>
      <div className={classes.customFormControl}>
        <label>Categorie: </label>
        <input
          type="text"
          placeholder={dataReceived.nameOfCategory}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        ></input>
      </div>
      <div className={classes.customFormControl}>
        <label>Furnizor: </label>
        <input
          type="text"
          placeholder={dataReceived.nameOfSupplier}
          value={supplier}
          onChange={(e) => setSupplier(e.target.value)}
        ></input>
      </div>

      <input
        type="submit"
        value="Update product"
        className={classes.customButton}
      />
    </form>
  );
};

export default UpdateForm;
