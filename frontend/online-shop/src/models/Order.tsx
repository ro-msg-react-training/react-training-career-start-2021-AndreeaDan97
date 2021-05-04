import Address from "./Address";
import OrderDetails from "./OrderDetails";

export default class Order {
  address: Address;
  productsInOrder: OrderDetails[];

  constructor(address: Address, productsInOrder: OrderDetails[]) {
    this.address = address;
    this.productsInOrder = productsInOrder;
  }
}
