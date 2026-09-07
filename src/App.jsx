import { HashRouter, Routes, Route } from "react-router-dom";

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
        <HashRouter>
            {/* فراهم کردن وضعیت سبد خرید برای تمام صفحات */}
            <CartProvider>
                <Layout>
                    <Routes>
                        {/* صفحه اصلی */}
                        <Route
                            path="/"
                            element={<Home />}
                        />

                        {/* فروشگاه */}
                        <Route
                            path="/shop"
                            element={<Shop />}
                        />

                        {/* جزئیات محصول */}
                        <Route
                            path="/product/:id"
                            element={<ProductDetails />}
                        />

                        {/* سبد خرید */}
                        <Route
                            path="/cart"
                            element={<Cart />}
                        />

                        {/* ثبت سفارش */}
                        <Route
                            path="/checkout"
                            element={<Checkout />}
                        />

                        {/* ورود */}
                        <Route
                            path="/login"
                            element={<Login />}
                        />

                        {/* ثبت‌نام */}
                        <Route
                            path="/register"
                            element={<Register />}
                        />

                        {/* حساب کاربری */}
                        <Route
                            path="/account"
                            element={<Account />}
                        />

                        {/* سفارش‌ها */}
                        <Route
                            path="/orders"
                            element={<Orders />}
                        />

                        {/* مسیر نامعتبر */}
                        <Route
                            path="*"
                            element={<Home />}
                        />
                    </Routes>
                </Layout>
            </CartProvider>
        </HashRouter>
    );
}

export default App;