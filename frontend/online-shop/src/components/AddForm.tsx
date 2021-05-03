const AddForm = () => {
  return (
    <form className="add-form">
      <div className="form-control">
        <label>Produs: </label>
        <input type="text" placeholder="Name of the product"></input>
      </div>
      <div className="form-control">
        <label>Pret: </label>
        <input type="text" placeholder="Price of the product"></input>
      </div>
      <div className="form-control">
        <label>Tip faina: </label>
        <input type="text" placeholder="Description of the product"></input>
      </div>
      <div className="form-control">
        <label>Gramaj: </label>
        <input type="text" placeholder="Weight of the product"></input>
      </div>
      <div className="form-control">
        <label>Categorie: </label>
        <input type="text" placeholder="Category of the product"></input>
      </div>
      <div className="form-control">
        <label>Descriere categorie: </label>
        <input type="text" placeholder="Description of the category"></input>
      </div>
      <div className="form-control">
        <label>Furnizor: </label>
        <input type="text" placeholder="Supplier of the product"></input>
      </div>

      <input type="submit" value="Add product" className="btn btn-block" />
    </form>
  );
};

export default AddForm;
