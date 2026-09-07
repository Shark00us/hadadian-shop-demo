import { createContext, useCallback, useMemo, useState } from "react";

import {
    addToCart,
    clearCart,
    getCart,
    getCartItemCount,
    getCartTotal,
    removeFromCart,
    updateCartItemQuantity
} from "../services/cartService.js";

// کانتکست مربوط به سبد خرید
export const CartContext = createContext(null);

export function CartProvider({ children })
{
    // دریافت سبد خرید ذخیره شده هنگام بارگذاری برنامه
    const [cart, setCart] = useState(() => getCart());

    // افزودن محصول به سبد خرید
    const handleAddToCart = useCallback((product) =>
    {
        const updatedCart = addToCart(product);

        setCart(updatedCart);
    }, []);

    // حذف محصول از سبد خرید
    const handleRemoveFromCart = useCallback((productId) =>
    {
        const updatedCart = removeFromCart(productId);

        setCart(updatedCart);
    }, []);

    // تغییر تعداد یک محصول
    const handleUpdateQuantity = useCallback(
        (productId, quantity) =>
        {
            const updatedCart = updateCartItemQuantity(
                productId,
                quantity
            );

            setCart(updatedCart);
        },
        []
    );

    // خالی کردن کامل سبد خرید
    const handleClearCart = useCallback(() =>
    {
        const updatedCart = clearCart();

        setCart(updatedCart);
    }, []);

    // تعداد کل محصولات موجود در سبد
    const itemCount = useMemo(
        () => getCartItemCount(cart),
        [cart]
    );

    // مبلغ کل سبد خرید
    const total = useMemo(
        () => getCartTotal(cart),
        [cart]
    );

    // مقادیر در دسترس تمام کامپوننت‌هایی که از سبد خرید استفاده می‌کنند
    const value = useMemo(
        () =>
        ({
            cart,
            itemCount,
            total,
            addToCart: handleAddToCart,
            removeFromCart: handleRemoveFromCart,
            updateQuantity: handleUpdateQuantity,
            clearCart: handleClearCart
        }),
        [
            cart,
            itemCount,
            total,
            handleAddToCart,
            handleRemoveFromCart,
            handleUpdateQuantity,
            handleClearCart
        ]
    );

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}