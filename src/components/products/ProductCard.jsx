import { Link } from "react-router-dom";

function ProductCard({ product })
{
if (!product)
{
return null;
}

return (
    <article className="product-card">
        {/* تصویر محصول */}
        <Link
            to={`/product/${product.id}`}
            className="product-card-image"
        >
            <img
                src={
                    import.meta.env.BASE_URL +
                    product.image
                }
                alt={product.title}
            />
        </Link>

        {/* اطلاعات محصول */}
        <div className="product-card-content">
            <Link
                to={`/product/${product.id}`}
                className="product-card-title"
            >
                <h3>
                    {product.title}
                </h3>
            </Link>

            {product.teacher && (
                <p className="product-card-teacher">
                    {product.teacher}
                </p>
            )}

            {product.category && (
                <p className="product-card-category">
                    {product.category}
                </p>
            )}

            <div className="product-card-price">
                {Number(product.price).toLocaleString("fa-IR")}
                {" "}
                تومان
            </div>

            <div className="product-card-actions">
                <Link
                    to={`/product/${product.id}`}
                    className="product-card-details"
                >
                    مشاهده جزئیات
                </Link>
            </div>
        </div>
    </article>
);

}

export default ProductCard;