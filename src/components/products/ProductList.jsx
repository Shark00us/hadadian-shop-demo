import ProductCard from "./ProductCard.jsx";

function ProductList({
    products = [],
    onAddToCart
})
{
    // در صورتی که محصولی برای نمایش وجود نداشته باشد، لیست خالی نمایش داده می‌شود
    if (products.length === 0)
    {
        return (
            <div className="product-list-empty">
                محصولی برای نمایش وجود ندارد.
            </div>
        );
    }

    return (
        <div className="product-list">
            {/* نمایش هر محصول به صورت یک کارت جداگانه */}
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                />
            ))}
        </div>
    );
}

export default ProductList;