// کلید ذخیره‌سازی سبد خرید در localStorage
const CART_STORAGE_KEY = "hadadian-shop-cart";

// دریافت سبد خرید ذخیره شده
export function getCart()
{
    try
    {
        const storedCart = localStorage.getItem(CART_STORAGE_KEY);

        // اگر سبدی ذخیره نشده باشد، یک آرایه خالی برمی‌گردانیم
        if (!storedCart)
        {
            return [];
        }

        const cart = JSON.parse(storedCart);

        // بررسی می‌کنیم که اطلاعات ذخیره شده آرایه باشد
        if (!Array.isArray(cart))
        {
            return [];
        }

        return cart;
    }
    catch (error)
    {
        console.error("خطا در دریافت سبد خرید:", error);

        return [];
    }
}

// ذخیره سبد خرید در localStorage
export function saveCart(cart)
{
    try
    {
        localStorage.setItem(
            CART_STORAGE_KEY,
            JSON.stringify(cart)
        );

        return true;
    }
    catch (error)
    {
        console.error("خطا در ذخیره سبد خرید:", error);

        return false;
    }
}

// افزودن محصول به سبد خرید
export function addToCart(product)
{
    if (!product)
    {
        return getCart();
    }

    const cart = getCart();

    // پیدا کردن محصول در سبد خرید
    const existingItem = cart.find(
        (item) => String(item.id) === String(product.id)
    );

    if (existingItem)
    {
        // اگر محصول قبلاً وجود داشته باشد، تعداد آن افزایش پیدا می‌کند
        existingItem.quantity += 1;
    }
    else
    {
        // محصول جدید با تعداد اولیه یک عدد به سبد اضافه می‌شود
        cart.push(
        {
            ...product,
            quantity: 1
        });
    }

    saveCart(cart);

    return cart;
}

// حذف کامل یک محصول از سبد خرید
export function removeFromCart(productId)
{
    const cart = getCart();

    const updatedCart = cart.filter(
        (item) => String(item.id) !== String(productId)
    );

    saveCart(updatedCart);

    return updatedCart;
}

// تغییر تعداد یک محصول
export function updateCartItemQuantity(productId, quantity)
{
    const cart = getCart();

    const item = cart.find(
        (cartItem) => String(cartItem.id) === String(productId)
    );

    if (!item)
    {
        return cart;
    }

    // تعداد کمتر از یک مجاز نیست
    const newQuantity = Math.max(
        1,
        Number(quantity) || 1
    );

    item.quantity = newQuantity;

    saveCart(cart);

    return cart;
}

// خالی کردن کامل سبد خرید
export function clearCart()
{
    try
    {
        localStorage.removeItem(CART_STORAGE_KEY);
    }
    catch (error)
    {
        console.error("خطا در خالی کردن سبد خرید:", error);
    }

    return [];
}

// محاسبه تعداد کل محصولات موجود در سبد
export function getCartItemCount(cart = getCart())
{
    return cart.reduce(
        (total, item) =>
        {
            return total + (Number(item.quantity) || 0);
        },
        0
    );
}

// محاسبه مبلغ کل سبد خرید
export function getCartTotal(cart = getCart())
{
    return cart.reduce(
        (total, item) =>
        {
            const price = Number(item.price) || 0;
            const quantity = Number(item.quantity) || 0;

            return total + (price * quantity);
        },
        0
    );
}