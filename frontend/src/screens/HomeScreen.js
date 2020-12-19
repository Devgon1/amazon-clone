import React, { useEffect, useState } from "react";
import axios from "axios";
import data from "../data";
import Product from "../components/Product";

function HomeScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/products"); //by running this line, the array in backend will be transfered to data in the front end
      setProducts(data);
    };

    fetchData();
  }, []);

  return (
    <div className="row center">
      {products.map((product) => {
        return <Product key={product._id} {...product} />;
      })}
    </div>
  );
}

export default HomeScreen;
