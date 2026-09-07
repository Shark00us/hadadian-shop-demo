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
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const { addToCart } = useCart();

    // دریافت محصولات هنگام باز شدن صفحه فروشگاه
    useEffect(() =>
    {
        async function loadProducts()
        {
            setLoading(true);
            setError(false);

            const data = await getProducts();

            if (data.length === 0)
            {
                setError(true);
            }

            setProducts(data);
            setFilteredProducts(data);
            setLoading(false);
        }

        loadProducts();
    }, []);

    // دریافت دسته‌بندی‌های موجود از روی محصولات
    const categories = products.reduce(
        (result, product) =>
        {
            if (
                product.category &&
                !result.includes(product.category)
            )
            {
                result.push(product.category);
            }

            return result;
        },
        []
    );

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