import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../components/common/Button.jsx";

function Account()
{
    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    useEffect(() =>
    {
        // دریافت اطلاعات کاربر ذخیره شده در مرورگر
        const storedUser = localStorage.getItem(
            "hadadian-shop-user"
        );

        if (!storedUser)
        {
            return;
        }

        try
        {
            setUser(JSON.parse(storedUser));
        }
        catch (error)
        {
            console.error(
                "خطا در خواندن اطلاعات کاربر:",
                error
            );

            localStorage.removeItem(
                "hadadian-shop-user"
            );
        }
    }, []);

    // خروج از حساب کاربری نمایشی
    function handleLogout()
    {
        localStorage.removeItem(
            "hadadian-shop-user"
        );

        setUser(null);

        navigate("/login");
    }

    // نمایش پیام در صورت وارد نشدن کاربر
    if (!user)
    {
        return (
            <div className="account-page">
                <section className="account-login-required">
                    <h1>
                        حساب کاربری
                    </h1>

                    <p>
                        برای مشاهده حساب کاربری ابتدا وارد شوید.
                    </p>

                    <Link to="/login">
                        <Button>
                            ورود به حساب
                        </Button>
                    </Link>
                </section>
            </div>
        );
    }

    return (
        <div className="account-page">
            {/* عنوان صفحه حساب کاربری */}
            <section className="account-header">
                <h1>
                    حساب کاربری
                </h1>

                <p>
                    اطلاعات حساب کاربری شما
                </p>
            </section>

            <div className="account-layout">
                {/* اطلاعات کاربر */}
                <section className="account-info">
                    <h2>
                        اطلاعات من
                    </h2>

                    <div className="account-info-row">
                        <span>
                            نام
                        </span>

                        <strong>
                            {user.name || "ثبت نشده"}
                        </strong>
                    </div>

                    <div className="account-info-row">
                        <span>
                            ایمیل
                        </span>

                        <strong>
                            {user.email || "ثبت نشده"}
                        </strong>
                    </div>

                    <div className="account-info-row">
                        <span>
                            شماره موبایل
                        </span>

                        <strong>
                            {user.phone || "ثبت نشده"}
                        </strong>
                    </div>
                </section>

                {/* دسترسی‌های حساب */}
                <section className="account-menu">
                    <h2>
                        دسترسی سریع
                    </h2>

                    <Link to="/orders">
                        سفارش‌های من
                    </Link>

                    <Link to="/shop">
                        ادامه خرید
                    </Link>

                    <Link to="/cart">
                        سبد خرید
                    </Link>

                    <Button onClick={handleLogout}>
                        خروج از حساب
                    </Button>
                </section>
            </div>
        </div>
    );
}

export default Account;