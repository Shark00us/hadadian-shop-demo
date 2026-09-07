import { Link } from "react-router-dom";

function Navbar()
{
    return (
        <header className="navbar">
            <div className="navbar-container">
                {/* لوگوی فروشگاه */}
                <Link
                    to="/"
                    className="navbar-logo"
                >
<img
    src={`${import.meta.env.BASE_URL}images/logo.png`}
    alt="فروشگاه جزوات استاد حدادیان نژاد یوسفی"
/>

                    <span>
                        فروشگاه جزوات استاد حدادیان نژاد یوسفی
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

                    <Link to="/orders">
                        سفارش‌های من
                    </Link>
                </nav>

                {/* بخش حساب کاربری */}
                <div className="navbar-account">
                    <Link to="/login">
                        ورود
                    </Link>

                    <Link to="/register">
                        ثبت‌نام
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
