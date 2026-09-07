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

function App()
{
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    {/* صفحه اصلی فروشگاه */}
                    <Route
                        path="/"
                        element={<Home />}
                    />

                    {/* صفحه فروشگاه و لیست جزوات */}
                    <Route
                        path="/shop"
                        element={<Shop />}
                    />

                    {/* صفحه جزئیات یک جزوه */}
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

                    {/* ورود کاربر */}
                    <Route
                        path="/login"
                        element={<Login />}
                    />

                    {/* ثبت‌نام کاربر */}
                    <Route
                        path="/register"
                        element={<Register />}
                    />

                    {/* حساب کاربری */}
                    <Route
                        path="/account"
                        element={<Account />}
                    />

                    {/* سفارش‌های کاربر */}
                    <Route
                        path="/orders"
                        element={<Orders />}
                    />

                    {/* در صورت پیدا نشدن صفحه، بازگشت به صفحه اصلی */}
                    <Route
                        path="*"
                        element={<Home />}
                    />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;