import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Button from "../components/common/Button.jsx";

function Home()
{
const [teachers, setTeachers] = useState([]);

```
useEffect(() =>
{
    async function loadTeachers()
    {
        try
        {
            // دریافت اطلاعات اساتید از فایل JSON
            const response = await fetch(
                import.meta.env.BASE_URL + "data/teachers.json",
                {
                    cache: "no-store"
                }
            );

            if (!response.ok)
            {
                throw new Error(
                    "خطا در دریافت اساتید: " + response.status
                );
            }

            const data = await response.json();

            // بررسی معتبر بودن اطلاعات دریافت شده
            if (Array.isArray(data))
            {
                setTeachers(data);
            }
        }
        catch (error)
        {
            console.error(
                "خطا در دریافت اطلاعات اساتید:",
                error
            );
        }
    }

    loadTeachers();
}, []);

return (
    <div className="home-page">
        {/* بخش اصلی معرفی فروشگاه */}
        <section className="home-hero">
            <div className="home-hero-content">
                <span className="home-hero-label">
                    فروشگاه جزوات آموزشی
                </span>

                <h1>
                    فروشگاه جزوات سقازاده
                </h1>

                <p>
                    انواع جزوات رشته کامپیوتر
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
                    src={
                        import.meta.env.BASE_URL +
                        "images/logo.png"
                    }
                    alt="فروشگاه جزوات سقازاده"
                />
            </div>
        </section>

        {/* معرفی اساتید */}
        {teachers.length > 0 && (
            <section className="home-teachers">
                <div className="home-section-header">
                    <h2>
                        اساتید
                    </h2>

                    <p>
                        جزوات ارائه شده توسط اساتید مجموعه
                    </p>
                </div>

                <div className="teacher-list">
                    {teachers.map((teacher) =>
                    {
                        // حذف اسلش ابتدای مسیر برای سازگاری با GitHub Pages
                        const imagePath = teacher.image
                            ? teacher.image.replace(/^\//, "")
                            : "";

                        return (
                            <article
                                key={teacher.id}
                                className="teacher-card"
                            >
                                {/* تصویر استاد */}
                                <div className="teacher-image">
                                    {imagePath && (
                                        <img
                                            src={
                                                import.meta.env.BASE_URL +
                                                imagePath
                                            }
                                            alt={teacher.name}
                                        />
                                    )}
                                </div>

                                {/* اطلاعات استاد */}
                                <div className="teacher-content">
                                    <h3>
                                        {teacher.name}
                                    </h3>

                                    <p>
                                        {teacher.description}
                                    </p>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section>
        )}

        {/* معرفی کوتاه خدمات فروشگاه */}
        <section className="home-features">
            <div className="home-feature">
                <h2>
                    جزوات متنوع
                </h2>

                <p>
                    دسترسی به مجموعه‌ای از جزوات آموزشی.
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
```

}

export default Home;
