import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar()
{
const [user, setUser] = useState(null);

useEffect(() =>
{
    // دریافت کاربر وارد شده از localStorage
    function loadUser()
    {
        const storedUser = localStorage.getItem(
            "hadadian-shop-user"
        );

        if (!storedUser)
        {
            setUser(null);

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

            setUser(null);
        }
    }

    loadUser();

    // بررسی تغییرات کاربر در هنگام تغییر localStorage
    window.addEventListener(
        "storage",
        loadUser
    );

    return () =>
    {
        window.removeEventListener(
            "storage",
            loadUser
        );
    };
}, []);

return (
    <header className="navbar">
        <div className="navbar-container">
            {/* لوگوی فروشگاه */}
            <Link
                to="/"
                className="navbar-logo"
            >
                <img
                    src={
                        import.meta.env.BASE_URL +
                        "images/logo.png"
                    }
                    alt="فروشگاه جزوات سقازاده"
                />

                <span>
                    فروشگاه جزوات سقازاده
                </span>
            </Link>

            {/* منوی اصلی سایت */}
            <nav className="navbar-menu">
                <Link to="/">
                    صفحه اصلی
                </Link>

                <Link to="/shop">
                    فروشگاه
                </Link>

                <Link to="/cart">
                    سبد خرید
                </Link>

                {user && (
                    <Link to="/orders">
                        سفارش‌های من
                    </Link>
                )}
            </nav>

            {/* بخش حساب کاربری */}
            <div className="navbar-account">
                {user ? (
                    <Link to="/account">
                        {user.name || "حساب کاربری"}
                    </Link>
                ) : (
                    <>
                        <Link to="/login">
                            ورود
                        </Link>

                        <Link to="/register">
                            ثبت‌نام
                        </Link>
                    </>
                )}
            </div>
        </div>
    </header>
);

}

export default Navbar;