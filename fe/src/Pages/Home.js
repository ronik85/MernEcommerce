import ProductList from "../features/Product/components/ProductList.js";
import Navbar from "../features/Navbar/Navbar.js";

function Home() {
  return (
    <div>
      <Navbar>
        <ProductList></ProductList>
      </Navbar>
    </div>
  );
}

export default Home;
