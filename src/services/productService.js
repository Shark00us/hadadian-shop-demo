// آدرس فایل اطلاعات محصولات
const PRODUCTS_URL = `${import.meta.env.BASE_URL}data/products.json`;

// دریافت تمام محصولات
export async function getProducts()
{
    try
    {
        const response = await fetch(PRODUCTS_URL);

        // بررسی موفق بودن درخواست
        if (!response.ok)
        {
            throw new Error(
                `خطا در دریافت محصولات: ${response.status}`
            );
        }

        // تبدیل پاسخ JSON به آرایه محصولات
        const products = await response.json();

        // اطمینان از اینکه اطلاعات دریافتی آرایه است
        if (!Array.isArray(products))
        {
            throw new Error(
                "ساختار فایل products.json نامعتبر است."
            );
        }

        return products;
    }
    catch (error)
    {
        console.error("خطا در دریافت محصولات:", error);

        // در صورت بروز خطا، آرایه خالی برگردانده می‌شود
        return [];
    }
}

// دریافت یک محصول بر اساس شناسه
export async function getProductById(id)
{
    const products = await getProducts();

    // پیدا کردن محصول مورد نظر
    return products.find(
        (product) => String(product.id) === String(id)
    ) ?? null;
}

// دریافت محصولات یک دسته‌بندی
export async function getProductsByCategory(category)
{
    const products = await getProducts();

    if (!category)
    {
        return products;
    }

    return products.filter(
        (product) => product.category === category
    );
}

// جستجوی محصولات بر اساس نام جزوه یا استاد
export async function searchProducts(query)
{
    const products = await getProducts();

    const searchText = query?.trim().toLowerCase();

    // اگر عبارت جستجو خالی باشد، همه محصولات برگردانده می‌شوند
    if (!searchText)
    {
        return products;
    }

    return products.filter((product) =>
    {
        return (
            product.title?.toLowerCase().includes(searchText) ||
            product.teacher?.toLowerCase().includes(searchText)
        );
    });
}
