import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

// تغییر این مقدار بعداً overlay را کامل غیرفعال می‌کند
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
            <div
                className="trial-overlay"
                aria-hidden="true"
            >
                <div className="trial-watermark">
                    <div className="trial-watermark-badge">
                        نسخه آزمایشی
                    </div>

                    <div className="trial-watermark-text">
                        ######################
                    </div>
                </div>
            </div>
        )}

        <Footer />
    </div>
);

}

export default Layout;