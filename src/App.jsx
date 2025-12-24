import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/products") // URL backend Anda
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Daftar Produk</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - Rp{product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
