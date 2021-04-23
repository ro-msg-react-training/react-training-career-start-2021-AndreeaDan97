import React from "react";

export default class Product {
  id: number;
  name: string;
  category: string;
  image: string;
  price: number;
  description: string;

  constructor(
    id: number,
    name: string,
    category: string,
    image: string,
    price: number,
    description: string
  ) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.image = image;
    this.price = price;
    this.description = description;
  }
}
