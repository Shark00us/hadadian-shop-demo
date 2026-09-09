import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

function Layout({ children })
{
    const location = useLocation();

    const [showCreatorToast, setShowCreatorToast] = useState(false);

    useEffect(() =>
    {
        // نمایش خودکار معرفی سازنده فقط در صفحه اصلی
        if (location.pathname === "/")
        {
            const timer = setTimeout(() =>
            {
                setShowCreatorToast(true);
            }, 700);

            return () =>
            {
                clearTimeout(timer);
            };
        }

        setShowCreatorToast(false);
    }, [location.pathname]);

    useEffect(() =>
    {
        // امکان باز کردن معرفی سازنده از فوتر
        function handleOpenCreator()
        {
            setShowCreatorToast(true);
        }

        window.addEventListener(
            "open-creator-toast",
            handleOpenCreator
        );

        return () =>
        {
            window.removeEventListener(
                "open-creator-toast",
                handleOpenCreator
            );
        };
    }, []);

    return (
        <div className="app">
            <Navbar />

            <main>
                {children}
            </main>

            {/* پیام معرفی سازنده */}
            {showCreatorToast && (
                <div className="creator-toast">
                    <div className="creator-toast-image">
                        <img
                            src={
                                import.meta.env.BASE_URL +
                                "images/logo.png"
                            }
                            alt="تصویر سازنده"
                        />
                    </div>

                    <div className="creator-toast-content">
                        <div className="creator-toast-title">
                            ساخته شده توسط
                        </div>

                        <h3>
                            طلاکوب
                        </h3>

                        <p>
                            طراحی و توسعه فروشگاه جزوات سقازاده
                        </p>

                        <div className="creator-toast-links">
                            <a
                                href="https://github.com/Shark00us"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="creator-toast-close"
                        onClick={() =>
                        {
                            setShowCreatorToast(false);
                        }}
                        aria-label="بستن"
                    >
                        ×
                    </button>
                </div>
            )}

            <Footer />
        </div>
    );
}

export default Layout;