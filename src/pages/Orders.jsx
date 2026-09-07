import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Button from "../components/common/Button.jsx";
import EmptyState from "../components/common/EmptyState.jsx";

function Orders()
{
    const [orders, setOrders] = useState([]);

    useEffect(() =>
    {
        // دریافت سفارش‌های آزمایشی ذخیره شده در مرورگر
        const storedOrders = localStorage.getItem(
            "hadadian-shop-orders"
        );

        if (!storedOrders)
        {
            return;
        }

        try
        {
            const parsedOrders = JSON.parse(storedOrders);

            // بررسی اینکه اطلاعات ذخیره شده به صورت آرایه باشد
            if (Array.isArray(parsedOrders))
            {
                setOrders(parsedOrders.reverse());
            }
        }
        catch (error)
        {
            console.error(
                "خطا در خواندن سفارش‌ها:",
                error
            );
        }
    }, []);

    // در صورت نداشتن سفارش
    if (orders.length === 0)
    {
        return (
            <div className="orders-page">
                <EmptyState
                    title="هنوز سفارشی ثبت نکرده‌اید"
                    message="پس از ثبت سفارش، اطلاعات آن در این قسمت نمایش داده خواهد شد."
                    action={
                        <Link to="/shop">
                            <Button>
                                مشاهده فروشگاه
                            </Button>
                        </Link>
                    }
                />
            </div>
        );
    }

    return (
        <div className="orders-page">
            {/* عنوان صفحه سفارش‌ها */}
            <section className="orders-header">
                <h1>
                    سفارش‌های من
                </h1>

                <p>
                    فهرست سفارش‌های ثبت شده در این مرورگر.
                </p>
            </section>

            {/* لیست سفارش‌ها */}
            <section className="orders-list">
                {orders.map((order) =>
                {
                    const orderDate = order.date
                        ? new Date(order.date).toLocaleDateString(
                            "fa-IR"
                        )
                        : "نامشخص";

                    return (
                        <article
                            key={order.id}
                            className="order-card"
                        >
                            {/* سربرگ سفارش */}
                            <div className="order-card-header">
                                <div>
                                    <span>
                                        شماره سفارش
                                    </span>

                                    <strong>
                                        {order.id}
                                    </strong>
                                </div>

                                <div>
                                    <span>
                                        تاریخ
                                    </span>

                                    <strong>
                                        {orderDate}
                                    </strong>
                                </div>
                            </div>

                            {/* وضعیت سفارش */}
                            <div className="order-card-status">
                                <span>
                                    وضعیت:
                                </span>

                                <strong>
                                    {order.status || "ثبت شده"}
                                </strong>
                            </div>

                            {/* محصولات سفارش */}
                            <div className="order-card-items">
                                {Array.isArray(order.items) &&
                                    order.items.map((item) =>
                                    {
                                        const quantity =
                                            Number(item.quantity) || 1;

                                        return (
                                            <div
                                                key={item.id}
                                                className="order-item"
                                            >
                                                <div>
                                                    <Link
                                                        to={`/product/${item.id}`}
                                                    >
                                                        {item.title}
                                                    </Link>

                                                    <span>
                                                        تعداد:
                                                        {" "}
                                                        {quantity.toLocaleString(
                                                            "fa-IR"
                                                        )}
                                                    </span>
                                                </div>

                                                <strong>
                                                    {(
                                                        (Number(item.price) || 0) *
                                                        quantity
                                                    ).toLocaleString("fa-IR")}
                                                    {" "}
                                                    تومان
                                                </strong>
                                            </div>
                                        );
                                    })}
                            </div>

                            {/* مبلغ نهایی سفارش */}
                            <div className="order-card-total">
                                <span>
                                    مبلغ سفارش
                                </span>

                                <strong>
                                    {(Number(order.total) || 0).toLocaleString(
                                        "fa-IR"
                                    )}
                                    {" "}
                                    تومان
                                </strong>
                            </div>
                        </article>
                    );
                })}
            </section>
        </div>
    );
}

export default Orders;