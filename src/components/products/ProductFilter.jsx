import { useEffect, useState } from "react";

function ProductFilter({
    products = [],
    categories = [],
    onFilter
})
{
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [sort, setSort] = useState("");

    useEffect(() =>
    {
        // ایجاد نسخه جدید از لیست محصولات برای جلوگیری از تغییر مستقیم آرایه اصلی
        let filteredProducts = [...products];

        // فیلتر بر اساس عبارت جستجو
        if (search.trim())
        {
            const searchText = search.trim().toLowerCase();

            filteredProducts = filteredProducts.filter((product) =>
            {
                return (
                    product.title?.toLowerCase().includes(searchText) ||
                    product.teacher?.toLowerCase().includes(searchText)
                );
            });
        }

        // فیلتر بر اساس دسته‌بندی
        if (category)
        {
            filteredProducts = filteredProducts.filter(
                (product) => product.category === category
            );
        }

        // مرتب‌سازی محصولات
        switch (sort)
        {
            case "price-asc":
                filteredProducts.sort(
                    (a, b) => Number(a.price) - Number(b.price)
                );
                break;

            case "price-desc":
                filteredProducts.sort(
                    (a, b) => Number(b.price) - Number(a.price)
                );
                break;

            case "name-asc":
                filteredProducts.sort(
                    (a, b) => a.title.localeCompare(b.title, "fa")
                );
                break;

            case "name-desc":
                filteredProducts.sort(
                    (a, b) => b.title.localeCompare(a.title, "fa")
                );
                break;

            default:
                break;
        }

        // ارسال نتیجه فیلتر به کامپوننت والد
        onFilter?.(filteredProducts);
    }, [products, search, category, sort, onFilter]);

    return (
        <div className="product-filter">
            {/* جستجوی محصولات */}
            <div className="product-filter-search">
                <label htmlFor="product-search">
                    جستجوی جزوه
                </label>

                <input
                    id="product-search"
                    type="search"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="نام جزوه یا استاد را وارد کنید..."
                />
            </div>

            {/* انتخاب دسته‌بندی */}
            <div className="product-filter-category">
                <label htmlFor="product-category">
                    دسته‌بندی
                </label>

                <select
                    id="product-category"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                >
                    <option value="">
                        همه دسته‌بندی‌ها
                    </option>

                    {categories.map((item) =>
                    {
                        const value =
                            typeof item === "string"
                                ? item
                                : item.slug ?? item.id;

                        const label =
                            typeof item === "string"
                                ? item
                                : item.name ?? item.title;

                        return (
                            <option
                                key={value}
                                value={value}
                            >
                                {label}
                            </option>
                        );
                    })}
                </select>
            </div>

            {/* انتخاب نوع مرتب‌سازی */}
            <div className="product-filter-sort">
                <label htmlFor="product-sort">
                    مرتب‌سازی
                </label>

                <select
                    id="product-sort"
                    value={sort}
                    onChange={(event) => setSort(event.target.value)}
                >
                    <option value="">
                        پیش‌فرض
                    </option>

                    <option value="price-asc">
                        ارزان‌ترین
                    </option>

                    <option value="price-desc">
                        گران‌ترین
                    </option>

                    <option value="name-asc">
                        نام: الف تا ی
                    </option>

                    <option value="name-desc">
                        نام: ی تا الف
                    </option>
                </select>
            </div>
        </div>
    );
}

export default ProductFilter;