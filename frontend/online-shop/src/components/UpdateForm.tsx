const UpdateForm = (props: any) => {
  const dataReceived = props.location.state.data;
  console.log(dataReceived);
  return (
    <form className="add-form">
      <div className="form-control">
        <label>Produs: </label>
        <input type="text" placeholder={dataReceived.name}></input>
      </div>
      <div className="form-control">
        <label>Pret: </label>
        <input type="text" placeholder={dataReceived.price}></input>
      </div>
      <div className="form-control">
        <label>Tip faina: </label>
        <input type="text" placeholder={dataReceived.description}></input>
      </div>
      <div className="form-control">
        <label>Gramaj: </label>
        <input type="text" placeholder={dataReceived.weight}></input>
      </div>
      <div className="form-control">
        <label>Categorie: </label>
        <input type="text" placeholder={dataReceived.nameOfCategory}></input>
      </div>
      <div className="form-control">
        <label>Descriere categorie: </label>
        <input
          type="text"
          placeholder={dataReceived.descriptionOfCategory}
        ></input>
      </div>
      <div className="form-control">
        <label>Furnizor: </label>
        <input type="text" placeholder={dataReceived.nameOfSupplier}></input>
      </div>

      <input type="submit" value="Update product" className="btn btn-block" />
    </form>
  );
};

export default UpdateForm;
