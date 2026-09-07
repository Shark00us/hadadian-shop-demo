import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Button from "../components/common/Button.jsx";
import Loading from "../components/common/Loading.jsx";
import EmptyState from "../components/common/EmptyState.jsx";

import { getProductById } from "../services/productService.js";
import useCart from "../hooks/useCart.js";

function ProductDetails()
{
    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const { addToCart } = useCart();

    useEffect(() =>
    {
        async function loadProduct()
        {
            setLoading(true);

            // دریافت محصول مورد نظر بر اساس شناسه موجود در آدرس
            const data = await getProductById(id);

            setProduct(data);
            setLoading(false);
        }

        loadProduct();
    }, [id]);

    // نمایش وضعیت بارگذاری
    if (loading)
    {
        return (
            <Loading />
        );
    }

    // اگر محصول مورد نظر پیدا نشد
    if (!product)
    {
        return (
            <EmptyState
                title="جزوه پیدا نشد"
                message="جزوه مورد نظر وجود ندارد یا از فروشگاه حذف شده است."
                action={
                    <Link to="/shop">
                        بازگشت به فروشگاه
                    </Link>
                }
            />
        );
    }

    return (
        <div className="product-details-page">
            {/* لینک بازگشت به فروشگاه */}
            <div className="product-details-breadcrumb">
                <Link to="/shop">
                    فروشگاه
                </Link>

                <span>
                    /
                </span>

                <span>
                    {product.title}
                </span>
            </div>

            <section className="product-details">
                {/* تصویر محصول */}
                <div className="product-details-image">
                    <img
                        src={product.image}
                        alt={product.title}
                    />
                </div>

                {/* اطلاعات محصول */}
                <div className="product-details-content">
                    <h1>
                        {product.title}
                    </h1>

                    {product.teacher && (
                        <p className="product-details-teacher">
                            مدرس:
                            {" "}
                            {product.teacher}
                        </p>
                    )}

                    {product.category && (
                        <p className="product-details-category">
                            دسته‌بندی:
                            {" "}
                            {product.category}
                        </p>
                    )}

                    {/* مشخصات فایل */}
                    <div className="product-details-info">
                        {product.pages && (
                            <div>
                                <span>
                                    تعداد صفحات:
                                </span>

                                <strong>
                                    {Number(product.pages).toLocaleString("fa-IR")}
                                </strong>
                            </div>
                        )}

                        {product.file && (
                            <div>
                                <span>
                                    نوع فایل:
                                </span>

                                <strong>
                                    {product.file}
                                </strong>
                            </div>
                        )}

                        {product.size && (
                            <div>
                                <span>
                                    حجم:
                                </span>

                                <strong>
                                    {product.size}
                                </strong>
                            </div>
                        )}
                    </div>

                    {/* توضیحات جزوه */}
                    {product.description && (
                        <div className="product-details-description">
                            <h2>
                                توضیحات
                            </h2>

                            <p>
                                {product.description}
                            </p>
                        </div>
                    )}

                    {/* قیمت و خرید */}
                    <div className="product-details-purchase">
                        <div className="product-details-price">
                            {Number(product.price).toLocaleString("fa-IR")}
                            {" "}
                            تومان
                        </div>

                        <Button
                            onClick={() => addToCart(product)}
                        >
                            افزودن به سبد خرید
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ProductDetails;