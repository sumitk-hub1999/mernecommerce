import Navbar from "../features/navbar/Navbar";
import { ProductList } from "../features/productslist/ProductList";
import LoginPage from "./Login";
import SignUp from "../features/auth/components/SignUp";
function Home() {
  return (
    <div>
      <Navbar>
        {/* <LoginPage></LoginPage> */}
        <SignUp />
        {/* <ProductList></ProductList> */}
      </Navbar>
    </div>
  );
}

export default Home;
