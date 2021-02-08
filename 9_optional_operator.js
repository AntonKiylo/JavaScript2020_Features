const customer = {
  name: "Carl",
  details: {
    age: 82,
    location: "Paradise Falls"
  }
}
const customerCity = customer.details?.address?.city;

console.log(customerCity);