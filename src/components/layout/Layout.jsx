import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

// یک فلگ ساده برای حالت آزمایشی
// بعداً فقط این را false کنید یا کلاً حذف کنید
const TRIAL_MODE = true;

function Layout({ children })
{
return (
<div className="app">
<Navbar />

        <main>
            {children}
        </main>

        {TRIAL_MODE && (
            <div className="trial-overlay" role="dialog" aria-modal="true">
                <section className="trial-modal">
                    <div className="trial-modal-badge">
                        نسخه آزمایشی
                    </div>

                    <h2>
                        دسترسی کامل پس از پرداخت فعال می‌شود
                    </h2>

                    <p>
                        این سایت در حال حاضر در حالت آزمایشی است.
                        برای دسترسی کامل و استفاده از همه بخش‌ها،
                        پرداخت باید انجام شود.
                    </p>

                    <div className="trial-modal-note">
                        برای غیرفعال کردن این لایه، مقدار
                        <strong>TRIAL_MODE</strong>
                        را به
                        <strong>false</strong>
                        تغییر دهید.
                    </div>
                </section>
            </div>
        )}

        <Footer />
    </div>
);

}

export default Layout;