import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../components/common/Button.jsx";
import EmptyState from "../components/common/EmptyState.jsx";

import useCart from "../hooks/useCart.js";

function Checkout()
{
    const navigate = useNavigate();

    const {
        cart,
        total,
        clearCart
    } = useCart();

    const [customer, setCustomer] = useState(
    {
        firstName: "",
        lastName: "",
        phone: "",
        email: ""
    });

    const [submitted, setSubmitted] = useState(false);
    const [orderNumber, setOrderNumber] = useState("");

    // تغییر اطلاعات فرم مشتری
    function handleChange(event)
    {
        const { name, value } = event.target;

        setCustomer((current) =>
        ({
            ...current,
            [name]: value
        }));
    }

    // ثبت سفارش آزمایشی
    function handleSubmit(event)
    {
        event.preventDefault();

        // تولید یک شماره سفارش نمایشی
        const generatedOrderNumber =
            `HD-${Math.floor(
                100000 + Math.random() * 900000
            )}`;

        setOrderNumber(generatedOrderNumber);

        // ذخیره سفارش نمایشی در localStorage
        const orders = JSON.parse(
            localStorage.getItem("hadadian-shop-orders")
        ) || [];

        orders.push(
        {
            id: generatedOrderNumber,
            date: new Date().toISOString(),
            customer,
            items: cart,
            total,
            status: "پردازش سفارش"
        });

        localStorage.setItem(
            "hadadian-shop-orders",
            JSON.stringify(orders)
        );

        // سبد خرید پس از ثبت سفارش خالی می‌شود
        clearCart();

        setSubmitted(true);
    }

    // جلوگیری از دسترسی به پرداخت زمانی که سبد خالی است
    if (!submitted && cart.length === 0)
    {
        return (
            <div className="checkout-page">
                <EmptyState
                    title="سبد خرید خالی است"
                    message="برای ثبت سفارش ابتدا یک یا چند جزوه به سبد خرید اضافه کنید."
                    action={
                        <Link to="/shop">
                            مشاهده فروشگاه
                        </Link>
                    }
                />
            </div>
        );
    }

    // نمایش نتیجه ثبت سفارش
    if (submitted)
    {
        return (
            <div className="checkout-page">
                <section className="checkout-success">
                    <h1>
                        سفارش با موفقیت ثبت شد
                    </h1>

                    <p>
                        این سفارش کاملاً آزمایشی است و هیچ پرداخت واقعی انجام نشده است.
                    </p>

                    <div className="checkout-success-order">
                        <span>
                            شماره سفارش
                        </span>

                        <strong>
                            {orderNumber}
                        </strong>
                    </div>

                    <div className="checkout-success-actions">
                        <Link to="/orders">
                            <Button>
                                مشاهده سفارش‌ها
                            </Button>
                        </Link>

                        <Link to="/shop">
                            <Button>
                                بازگشت به فروشگاه
                            </Button>
                        </Link>
                    </div>
                </section>
            </div>
        );
    }

    return (
        <div className="checkout-page">
            {/* عنوان صفحه */}
            <section className="checkout-header">
                <h1>
                    ثبت سفارش
                </h1>

                <p>
                    اطلاعات خود را وارد کنید تا سفارش آزمایشی ثبت شود.
                </p>
            </section>

            <div className="checkout-layout">
                {/* فرم اطلاعات مشتری */}
                <form
                    className="checkout-form"
                    onSubmit={handleSubmit}
                >
                    <h2>
                        اطلاعات خریدار
                    </h2>

                    <div className="checkout-form-row">
                        <div className="checkout-form-field">
                            <label htmlFor="firstName">
                                نام
                            </label>

                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                value={customer.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="checkout-form-field">
                            <label htmlFor="lastName">
                                نام خانوادگی
                            </label>

                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                value={customer.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="checkout-form-field">
                        <label htmlFor="phone">
                            شماره موبایل
                        </label>

                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={customer.phone}
                            onChange={handleChange}
                            placeholder="۰۹۱۲۱۲۳۴۵۶۷"
                            required
                        />
                    </div>

                    <div className="checkout-form-field">
                        <label htmlFor="email">
                            ایمیل
                        </label>

                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={customer.email}
                            onChange={handleChange}
                            placeholder="example@email.com"
                            required
                        />
                    </div>

                    <div className="checkout-demo-notice">
                        پرداخت واقعی در این نسخه انجام نمی‌شود.
                    </div>

                    <Button type="submit">
                        ثبت سفارش آزمایشی
                    </Button>
                </form>

                {/* خلاصه سفارش */}
                <aside className="checkout-summary">
                    <h2>
                        خلاصه سفارش
                    </h2>

                    {cart.map((item) =>
                    {
                        const price = Number(item.price) || 0;
                        const quantity = Number(item.quantity) || 1;

                        return (
                            <div
                                key={item.id}
                                className="checkout-summary-item"
                            >
                                <div>
                                    <span>
                                        {item.title}
                                    </span>

                                    <small>
                                        {quantity.toLocaleString("fa-IR")}
                                        {" "}
                                        عدد
                                    </small>
                                </div>

                                <strong>
                                    {(price * quantity).toLocaleString("fa-IR")}
                                    {" "}
                                    تومان
                                </strong>
                            </div>
                        );
                    })}

                    <div className="checkout-summary-total">
                        <span>
                            مجموع
                        </span>

                        <strong>
                            {total.toLocaleString("fa-IR")}
                            {" "}
                            تومان
                        </strong>
                    </div>
                </aside>
            </div>
        </div>
    );
}

export default Checkout;