import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../components/common/Button.jsx";

function Login()
{
    const navigate = useNavigate();

    const [form, setForm] = useState(
    {
        email: "",
        password: ""
    });

    const [error, setError] = useState("");

    // تغییر مقادیر فرم ورود
    function handleChange(event)
    {
        const { name, value } = event.target;

        setForm((current) =>
        ({
            ...current,
            [name]: value
        }));

        // حذف پیام خطای قبلی هنگام ویرایش فرم
        setError("");
    }

    // ورود نمایشی کاربر
    function handleSubmit(event)
    {
        event.preventDefault();

        // در این نسخه هیچ احراز هویت واقعی انجام نمی‌شود
        if (!form.email || !form.password)
        {
            setError(
                "لطفاً ایمیل و رمز عبور را وارد کنید."
            );

            return;
        }

        // ایجاد یک کاربر نمایشی
        const user =
        {
            name: "کاربر فروشگاه",
            email: form.email
        };

        // ذخیره کاربر در مرورگر
        localStorage.setItem(
            "hadadian-shop-user",
            JSON.stringify(user)
        );

        // انتقال به حساب کاربری
        navigate("/account");
    }

    return (
        <div className="login-page">
            <section className="login-container">
                {/* عنوان صفحه ورود */}
                <div className="login-header">
                    <h1>
                        ورود به حساب کاربری
                    </h1>

                    <p>
                        برای ادامه، اطلاعات حساب خود را وارد کنید.
                    </p>
                </div>

                {/* فرم ورود */}
                <form
                    className="login-form"
                    onSubmit={handleSubmit}
                >
                    <div className="login-form-field">
                        <label htmlFor="email">
                            ایمیل
                        </label>

                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="example@email.com"
                            autoComplete="email"
                            required
                        />
                    </div>

                    <div className="login-form-field">
                        <label htmlFor="password">
                            رمز عبور
                        </label>

                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={form.password}
                            onChange={handleChange}
                            placeholder="رمز عبور"
                            autoComplete="current-password"
                            required
                        />
                    </div>

                    {/* نمایش پیام خطا */}
                    {error && (
                        <div
                            className="login-error"
                            role="alert"
                        >
                            {error}
                        </div>
                    )}

                    <Button type="submit">
                        ورود
                    </Button>
                </form>

                {/* انتقال به صفحه ثبت‌نام */}
                <div className="login-register">
                    <span>
                        حساب کاربری ندارید؟
                    </span>

                    <Link to="/register">
                        ثبت‌نام کنید
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Login;