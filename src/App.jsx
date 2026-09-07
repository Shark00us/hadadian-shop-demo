import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Account from "./pages/Account.jsx";
import Orders from "./pages/Orders.jsx";

import Layout from "./components/layout/Layout.jsx";
import { CartProvider } from "./context/CartContext.jsx";

function App()
{
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <CartProvider>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/shop" element={<Shop />} />
                        <Route path="/product/:id" element={<ProductDetails />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/account" element={<Account />} />
                        <Route path="/orders" element={<Orders />} />
                        <Route path="*" element={<Home />} />
                    </Routes>
                </Layout>
            </CartProvider>
        </BrowserRouter>
    );
}

export default App;
