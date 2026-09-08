import { Link } from "react-router-dom";

function Footer()
{
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* معرفی کوتاه فروشگاه */}
                <div className="footer-section">
                    <h3>
                        فروشگاه جزوات سقازاده
                    </h3>

                    <p>
                        مرجع فروش و تهیه جزوات آموزشی.
                    </p>
                </div>

                {/* لینک‌های سریع */}
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
                </div>

                {/* اطلاعات تماس */}
                <div className="footer-section">
                    <h4>
                        ارتباط با ما
                    </h4>

                    <p>
                        پشتیبانی و ارتباط با فروشگاه
                    </p>
                </div>
            </div>

            {/* بخش کپی‌رایت */}
            <div className="footer-bottom">
                <p>
                    تمامی حقوق این وب‌سایت محفوظ است.
                </p>
            </div>
        </footer>
    );
}

export default Footer;