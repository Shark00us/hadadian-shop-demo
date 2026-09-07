import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../components/common/Button.jsx";

function Register()
{
    const navigate = useNavigate();

    const [form, setForm] = useState(
    {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: ""
    });

    const [error, setError] = useState("");

    // تغییر مقادیر فرم ثبت‌نام
    function handleChange(event)
    {
        const { name, value } = event.target;

        setForm((current) =>
        ({
            ...current,
            [name]: value
        }));

        // حذف خطای قبلی هنگام تغییر اطلاعات
        setError("");
    }

    // ثبت‌نام نمایشی کاربر
    function handleSubmit(event)
    {
        event.preventDefault();

        // بررسی یکسان بودن رمز عبور
        if (form.password !== form.confirmPassword)
        {
            setError(
                "رمز عبور و تکرار آن یکسان نیستند."
            );

            return;
        }

        // ذخیره اطلاعات کاربر به صورت نمایشی
        const user =
        {
            name: `${form.firstName} ${form.lastName}`,
            email: form.email,
            phone: form.phone
        };

        localStorage.setItem(
            "hadadian-shop-user",
            JSON.stringify(user)
        );

        // انتقال کاربر به حساب کاربری پس از ثبت‌نام
        navigate("/account");
    }

    return (
        <div className="register-page">
            <section className="register-container">
                {/* عنوان صفحه ثبت‌نام */}
                <div className="register-header">
                    <h1>
                        ایجاد حساب کاربری
                    </h1>

                    <p>
                        برای استفاده از امکانات فروشگاه ثبت‌نام کنید.
                    </p>
                </div>

                {/* فرم ثبت‌نام */}
                <form
                    className="register-form"
                    onSubmit={handleSubmit}
                >
                    <div className="register-form-row">
                        <div className="register-form-field">
                            <label htmlFor="firstName">
                                نام
                            </label>

                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                value={form.firstName}
                                onChange={handleChange}
                                autoComplete="given-name"
                                required
                            />
                        </div>

                        <div className="register-form-field">
                            <label htmlFor="lastName">
                                نام خانوادگی
                            </label>

                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                value={form.lastName}
                                onChange={handleChange}
                                autoComplete="family-name"
                                required
                            />
                        </div>
                    </div>

                    <div className="register-form-field">
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

                    <div className="register-form-field">
                        <label htmlFor="phone">
                            شماره موبایل
                        </label>

                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="۰۹۱۲۱۲۳۴۵۶۷"
                            autoComplete="tel"
                            required
                        />
                    </div>

                    <div className="register-form-field">
                        <label htmlFor="password">
                            رمز عبور
                        </label>

                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={form.password}
                            onChange={handleChange}
                            autoComplete="new-password"
                            required
                        />
                    </div>

                    <div className="register-form-field">
                        <label htmlFor="confirmPassword">
                            تکرار رمز عبور
                        </label>

                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            autoComplete="new-password"
                            required
                        />
                    </div>

                    {/* نمایش خطای فرم */}
                    {error && (
                        <div
                            className="register-error"
                            role="alert"
                        >
                            {error}
                        </div>
                    )}

                    <Button type="submit">
                        ثبت‌نام
                    </Button>
                </form>

                {/* انتقال به صفحه ورود */}
                <div className="register-login">
                    <span>
                        قبلاً حساب کاربری ساخته‌اید؟
                    </span>

                    <Link to="/login">
                        وارد شوید
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Register;