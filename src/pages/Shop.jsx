import { useCallback, useEffect, useState } from "react";

import ProductFilter from "../components/products/ProductFilter.jsx";
import ProductList from "../components/products/ProductList.jsx";
import Loading from "../components/common/Loading.jsx";
import EmptyState from "../components/common/EmptyState.jsx";

import { getProducts } from "../services/productService.js";
import useCart from "../hooks/useCart.js";

function Shop()
{
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const { addToCart } = useCart();

    // دریافت محصولات و دسته‌بندی‌ها هنگام باز شدن صفحه فروشگاه
    useEffect(() =>
    {
        async function loadData()
        {
            setLoading(true);
            setError(false);

            try
            {
                // دریافت محصولات
                const productsResponse = await getProducts();

                // دریافت دسته‌بندی‌ها
                const categoriesResponse = await fetch(
                    `${import.meta.env.BASE_URL}data/categories.json`,
                    {
                        cache: "no-store"
                    }
                );

                if (!categoriesResponse.ok)
                {
                    throw new Error(
                        `خطا در دریافت دسته‌بندی‌ها: ${categoriesResponse.status}`
                    );
                }

                const categoriesData = await categoriesResponse.json();

                if (!Array.isArray(categoriesData))
                {
                    throw new Error(
                        "ساختار فایل categories.json نامعتبر است."
                    );
                }

                if (productsResponse.length === 0)
                {
                    setError(true);
                }

                setProducts(productsResponse);
                setCategories(categoriesData);
                setFilteredProducts(productsResponse);
            }
            catch (error)
            {
                console.error(
                    "خطا در دریافت اطلاعات فروشگاه:",
                    error
                );

                setError(true);
            }
            finally
            {
                setLoading(false);
            }
        }

        loadData();
    }, []);

    // دریافت نتیجه فیلتر از کامپوننت ProductFilter
    const handleFilter = useCallback((filtered) =>
    {
        setFilteredProducts(filtered);
    }, []);

    return (
        <div className="shop-page">
            {/* عنوان صفحه فروشگاه */}
            <section className="shop-header">
                <h1>
                    فروشگاه جزوات
                </h1>

                <p>
                    جزوه مورد نظر خود را جستجو و انتخاب کنید.
                </p>
            </section>

            {/* نمایش فیلترها */}
            {!loading && !error && (
                <ProductFilter
                    products={products}
                    categories={categories}
                    onFilter={handleFilter}
                />
            )}

            {/* نمایش وضعیت بارگذاری */}
            {loading && (
                <Loading />
            )}

            {/* نمایش خطا در صورت نبود اطلاعات */}
            {!loading && error && (
                <EmptyState
                    title="خطا در دریافت جزوات"
                    message="اطلاعات جزوات در حال حاضر قابل دریافت نیست."
                />
            )}

            {/* نمایش نتیجه فیلتر */}
            {!loading && !error && filteredProducts.length === 0 && (
                <EmptyState
                    title="جزوه‌ای پیدا نشد"
                    message="با معیارهای انتخاب شده محصولی برای نمایش وجود ندارد."
                />
            )}

            {/* نمایش لیست محصولات */}
            {!loading && !error && filteredProducts.length > 0 && (
                <ProductList
                    products={filteredProducts}
                    onAddToCart={addToCart}
                />
            )}
        </div>
    );
}

export default Shop;