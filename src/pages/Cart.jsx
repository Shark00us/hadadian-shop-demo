import { Link } from "react-router-dom";

import Button from "../components/common/Button.jsx";
import EmptyState from "../components/common/EmptyState.jsx";

import useCart from "../hooks/useCart.js";

function Cart()
{
    const {
        cart,
        total,
        updateQuantity,
        removeFromCart,
        clearCart
    } = useCart();

    // اگر سبد خرید خالی باشد، پیام مناسب نمایش داده می‌شود
    if (cart.length === 0)
    {
        return (
            <div className="cart-page">
                <EmptyState
                    title="سبد خرید شما خالی است"
                    message="هنوز هیچ جزوه‌ای به سبد خرید اضافه نکرده‌اید."
                    action={
                        <Link to="/shop">
                            مشاهده فروشگاه
                        </Link>
                    }
                />
            </div>
        );
    }

    return (
        <div className="cart-page">
            {/* عنوان صفحه */}
            <section className="cart-header">
                <h1>
                    سبد خرید
                </h1>

                <p>
                    محصولات انتخاب شده را بررسی کنید.
                </p>
            </section>

            <div className="cart-layout">
                {/* لیست محصولات سبد خرید */}
                <section className="cart-items">
                    {cart.map((item) =>
                    {
                        const price = Number(item.price) || 0;
                        const quantity = Number(item.quantity) || 1;

                        return (
                            <article
                                key={item.id}
                                className="cart-item"
                            >
                                {/* تصویر محصول */}
                                <Link
                                    to={`/product/${item.id}`}
                                    className="cart-item-image"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                    />
                                </Link>

                                {/* اطلاعات محصول */}
                                <div className="cart-item-content">
                                    <Link
                                        to={`/product/${item.id}`}
                                    >
                                        <h2>
                                            {item.title}
                                        </h2>
                                    </Link>

                                    {item.teacher && (
                                        <p>
                                            {item.teacher}
                                        </p>
                                    )}

                                    <div className="cart-item-price">
                                        {price.toLocaleString("fa-IR")}
                                        {" "}
                                        تومان
                                    </div>

                                    {/* کنترل تعداد */}
                                    <div className="cart-item-quantity">
                                        <button
                                            type="button"
                                            onClick={() =>
                                            {
                                                updateQuantity(
                                                    item.id,
                                                    quantity - 1
                                                );
                                            }}
                                            disabled={quantity <= 1}
                                            aria-label="کاهش تعداد"
                                        >
                                            −
                                        </button>

                                        <span>
                                            {quantity.toLocaleString("fa-IR")}
                                        </span>

                                        <button
                                            type="button"
                                            onClick={() =>
                                            {
                                                updateQuantity(
                                                    item.id,
                                                    quantity + 1
                                                );
                                            }}
                                            aria-label="افزایش تعداد"
                                        >
                                            +
                                        </button>
                                    </div>

                                    {/* حذف محصول */}
                                    <button
                                        type="button"
                                        className="cart-item-remove"
                                        onClick={() =>
                                        {
                                            removeFromCart(item.id);
                                        }}
                                    >
                                        حذف از سبد
                                    </button>
                                </div>
                            </article>
                        );
                    })}
                </section>

                {/* خلاصه سبد خرید */}
                <aside className="cart-summary">
                    <h2>
                        خلاصه سفارش
                    </h2>

                    <div className="cart-summary-row">
                        <span>
                            تعداد محصولات
                        </span>

                        <strong>
                            {cart.length.toLocaleString("fa-IR")}
                        </strong>
                    </div>

                    <div className="cart-summary-row">
                        <span>
                            مبلغ قابل پرداخت
                        </span>

                        <strong>
                            {total.toLocaleString("fa-IR")}
                            {" "}
                            تومان
                        </strong>
                    </div>

                    {/* ادامه فرآیند خرید */}
                    <Link to="/checkout">
                        <Button className="cart-checkout-button">
                            ادامه و ثبت سفارش
                        </Button>
                    </Link>

                    {/* خالی کردن سبد */}
                    <Button
                        className="cart-clear-button"
                        onClick={clearCart}
                    >
                        خالی کردن سبد خرید
                    </Button>
                </aside>
            </div>
        </div>
    );
}

export default Cart;