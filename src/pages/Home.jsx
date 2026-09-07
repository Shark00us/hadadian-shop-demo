import { Link } from "react-router-dom";
import Button from "../components/common/Button.jsx";

function Home()
{
    return (
        <div className="home-page">
            {/* بخش اصلی معرفی فروشگاه */}
            <section className="home-hero">
                <div className="home-hero-content">
                    <span className="home-hero-label">
                        فروشگاه جزوات آموزشی
                    </span>

                    <h1>
                        فروشگاه جزوات استاد حدادیان نژاد یوسفی
                    </h1>

                    <p>
                        مجموعه‌ای از جزوات آموزشی برای مطالعه، یادگیری
                        و آمادگی بهتر دروس مختلف.
                    </p>

                    {/* انتقال کاربر به فروشگاه */}
                    <Link to="/shop">
                        <Button>
                            مشاهده جزوات
                        </Button>
                    </Link>
                </div>

                {/* تصویر لوگوی فروشگاه */}
                <div className="home-hero-image">
                    <img
                        src="/images/logo.png"
                        alt="فروشگاه جزوات استاد حدادیان نژاد یوسفی"
                    />
                </div>
            </section>

            {/* معرفی کوتاه خدمات فروشگاه */}
            <section className="home-features">
                <div className="home-feature">
                    <h2>
                        جزوات متنوع
                    </h2>

                    <p>
                        دسترسی به مجموعه‌ای از جزوات آموزشی در دسته‌بندی‌های مختلف.
                    </p>
                </div>

                <div className="home-feature">
                    <h2>
                        دسترسی آسان
                    </h2>

                    <p>
                        جستجو و انتخاب سریع جزوه مورد نظر از طریق فروشگاه.
                    </p>
                </div>

                <div className="home-feature">
                    <h2>
                        خرید آزمایشی
                    </h2>

                    <p>
                        این وب‌سایت یک نسخه نمایشی است و پرداخت واقعی انجام نمی‌شود.
                    </p>
                </div>
            </section>

            {/* فراخوان برای مشاهده محصولات */}
            <section className="home-shop-link">
                <h2>
                    آماده شروع هستید؟
                </h2>

                <p>
                    جزوات مورد نیاز خود را مشاهده و به سبد خرید اضافه کنید.
                </p>

                <Link to="/shop">
                    <Button>
                        ورود به فروشگاه
                    </Button>
                </Link>
            </section>
        </div>
    );
}

export default Home;