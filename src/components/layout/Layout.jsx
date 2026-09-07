import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

function Layout({ children })
{
    return (
        <div className="app">
            {/* نوار بالایی سایت */}
            <Navbar />

            {/* محتوای اصلی هر صفحه */}
            <main>
                {children}
            </main>

            {/* پایین سایت */}
            <Footer />
        </div>
    );
}

export default Layout;