import { Link } from "react-router-dom";

function Footer()
{
    function openCreatorToast()
    {
        // ارسال رویداد برای باز کردن پیام معرفی سازنده
        window.dispatchEvent(
            new CustomEvent("open-creator-toast")
        );
    }

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>
                        فروشگاه جزوات سقازاده
                    </h3>

                    <p>
                        مرجع فروش و تهیه جزوات آموزشی.
                    </p>
                </div>

                <div className="footer-section">
                    <h4>
                        دسترسی سریع
                    </h4>

                    <Link to="/">
                        صفحه اصلی
                    </Link>

                    <Link to="/shop">
                        فروشگاه
                    </Link>

                    <Link to="/cart">
                        سبد خرید
                    </Link>

                    <button
                        type="button"
                        className="footer-about-button"
                        onClick={openCreatorToast}
                    >
                        درباره من
                    </button>
                </div>

                <div className="footer-section">
                    <h4>
                        ارتباط با ما
                    </h4>

                    <p>
                        پشتیبانی و ارتباط با فروشگاه
                    </p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>
                    تمامی حقوق این وب‌سایت محفوظ است.
                </p>
            </div>
        </footer>
    );
}

export default Footer;