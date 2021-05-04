export default class Address {
  country: string;
  county: string;
  city: string;
  street: string;

  constructor(country: string, county: string, city: string, street: string) {
    this.country = country;
    this.county = county;
    this.city = city;
    this.street = street;
  }
}
