import { Link } from "react-router-dom";
import Button from "../common/Button.jsx";

function ProductCard({ product, onAddToCart })
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
                    src={product.image}
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

                {/* نام استاد */}
                {product.teacher && (
                    <p className="product-card-teacher">
                        {product.teacher}
                    </p>
                )}

                {/* دسته‌بندی محصول */}
                {product.category && (
                    <p className="product-card-category">
                        {product.category}
                    </p>
                )}

                {/* قیمت */}
                <div className="product-card-price">
                    {Number(product.price).toLocaleString("fa-IR")}
                    {" "}
                    تومان
                </div>

                {/* عملیات محصول */}
                <div className="product-card-actions">
                    <Link
                        to={`/product/${product.id}`}
                        className="product-card-details"
                    >
                        مشاهده جزئیات
                    </Link>

                    <Button
                        onClick={() => onAddToCart?.(product)}
                    >
                        افزودن به سبد
                    </Button>
                </div>
            </div>
        </article>
    );
}

export default ProductCard;