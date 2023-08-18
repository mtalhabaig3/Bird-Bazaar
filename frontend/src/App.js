import logo from "./logo.svg";
import "./App.css";
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavigationBar />}>
      <Route path="/" element={<Home />} />
      <Route path="products" element={<Products />} />
      <Route path="products/:id" element={<Products />} />
      <Route path="cart" element={<Cart />} />
      <Route path="login" element={<Login />} />
      <Route path="signUp" element={<SignUp />} />
      <Route path="userProfile" element={<UserProfile />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
