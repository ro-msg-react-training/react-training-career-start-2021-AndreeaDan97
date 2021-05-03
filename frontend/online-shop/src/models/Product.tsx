export default class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  weight: number;
  imageURL: string;
  nameOfCategory: string;
  descriptionOfCategory: string;
  nameOfSupplier: string;

  constructor(
    id: number,
    name: string,
    category: string,
    imageURL: string,
    price: number,
    description: string,
    weight: number,
    descriptionOfCategory: string,
    nameOfSupplier: string
  ) {
    this.id = id;
    this.name = name;
    this.nameOfCategory = category;
    this.imageURL = imageURL;
    this.price = price;
    this.description = description;
    this.weight = weight;
    this.descriptionOfCategory = descriptionOfCategory;
    this.nameOfSupplier = nameOfSupplier;
  }
}
