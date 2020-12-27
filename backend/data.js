import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Gonzalo",
      email: "gonzalo@gonzalo.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "john",
      email: "john@john.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: "1",  get rid of _id after doping the productRouter in backend
      name: "Gamepad",
      category: "Videogames",
      image: "/images/product.jpg",
      price: 120,
      countInStock: 10,
      brand: "AMD",
      rating: 5,
      numReviews: 10,
      description: "High quality product",
    },
    {
      // _id: "2",
      name: "Controller",
      category: "Videogames",
      image: "/images/product.jpg",
      price: 100,
      countInStock: 20,
      brand: "AMD",
      rating: 2,
      numReviews: 22,
      description: "High quality product",
    },
    {
      // _id: "3",
      name: "Processor",
      category: "Videogames",
      image: "/images/product.jpg",
      price: 20,
      countInStock: 0,
      brand: "AMD",
      rating: 3,
      numReviews: 22,
      description: "High quality product",
    },
    {
      // _id: "4",
      name: "Graphic",
      category: "Videogames",
      image: "/images/product.jpg",
      price: 180,
      countInStock: 15,
      brand: "AMD",
      rating: 4.5,
      numReviews: 17,
      description: "High quality product",
    },
    {
      // _id: "5",
      name: "RAM",
      category: "Videogames",
      image: "/images/product.jpg",
      price: 75,
      countInStock: 12,
      brand: "AMD",
      rating: 5,
      numReviews: 8,
      description: "High quality product",
    },
  ],
};

export default data;
