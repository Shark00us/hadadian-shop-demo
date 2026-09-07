import { useCallback, useContext } from "react";

import { CartContext } from "../context/CartContext.jsx";

function useCart()
{
    const context = useContext(CartContext);

    if (!context)
    {
        throw new Error(
            "هوک useCart باید داخل CartProvider استفاده شود."
        );
    }

    // برگرداندن وضعیت و عملیات مربوط به سبد خرید
    return context;
}

export default useCart;