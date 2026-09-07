import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";

// استایل‌های اصلی سایت
import "./styles/global.css";
import "./styles/rtl.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);