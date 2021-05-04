export default class OrderDetails {
  idProduct: number;
  quantity: number;

  constructor(idProduct: number, quantity: number) {
    this.idProduct = idProduct;
    this.quantity = quantity;
  }
}
