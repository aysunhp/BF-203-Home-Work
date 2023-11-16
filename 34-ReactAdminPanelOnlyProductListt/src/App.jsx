import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { ChakraProvider } from "@chakra-ui/react";
import AddForm from "./components/AddForm";
import SearchProduct from "./components/SearchProduct";
import FilterButtons from "./components/FilterButtons";
import DataTable from "./components/DataTable";
// import Adminpanel from "./Adminpanel";

function App() {
  const [products, setProducts] = useState([]);
  const [proName, setProName] = useState([]);
  const [proPrice, setProPrice] = useState(0);
  const [active, setActive] = useState(false);
  useEffect(() => {
    axios.get("https://northwind.vercel.app/api/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <ChakraProvider>
      <>
        <AddForm
          proName={proName}
          proPrice={proPrice}
          setProPrice={setProPrice}
          setProName={setProName}
          products={products}
          setProducts={setProducts}
          active={active}
          setActive={setActive}
        />
        <SearchProduct products={products} setProducts={setProducts} />
        <FilterButtons products={products} setProducts={setProducts} />
        <DataTable products={products} setProducts={setProducts} />
      </>
    </ChakraProvider>
  );
}

export default App;
