import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import NavigationBar from "./components/NavigationBar";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import UserProfile from "./components/UserProfile";
import AddressPayment from "./components/AddressPayment";
import OrderDetails from "./components/OrderDetails";
import SingleOrderDetails from "./components/SingleOrderDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavigationBar />}>
      <Route path="/" element={<Home />} />
      <Route path="products" element={<Products />} />
      <Route path="products/:productId" element={<SingleProduct />} />
      <Route path="cart" element={<Cart />} />
      <Route path="login" element={<Login />} />
      <Route path="signUp" element={<SignUp />} />
      <Route path="userProfile" element={<UserProfile />} />
      <Route path="addressPayment" element={<AddressPayment />} />
      <Route path="orderDetails" element={<OrderDetails />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
