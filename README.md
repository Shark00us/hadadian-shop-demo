# فروشگاه جزوات استاد حدادیان نژاد یوسفی

یک وب‌سایت فروشگاهی نمایشی برای فروش و نمایش جزوات آموزشی استاد حدادیان نژاد یوسفی.

این پروژه به صورت کاملاً استاتیک ساخته شده و برای اجرا و انتشار روی **GitHub Pages** طراحی شده است.

## ویژگی‌ها

- رابط کاربری فارسی و راست‌چین
- نمایش و جستجوی جزوات
- دسته‌بندی محصولات
- صفحه جزئیات هر جزوه
- سبد خرید
- ثبت سفارش آزمایشی
- ورود و ثبت‌نام نمایشی
- حساب کاربری نمایشی
- نمایش سفارش‌های ثبت‌شده
- ذخیره اطلاعات سبد خرید و سفارش‌ها در `localStorage`
- بدون نیاز به Backend یا Database
- مناسب برای انتشار روی GitHub Pages

## فناوری‌ها

- React
- Vite
- React Router
- JavaScript
- CSS
- JSON
- GitHub Pages

## ساختار پروژه

```text
hadadian-shop-demo/
│
├── public/
│   ├── images/
│   │   ├── logo.png
│   │   └── products/
│   │       ├── math.jpg
│   │       ├── physics.jpg
│   │       └── chemistry.jpg
│   │
│   └── data/
│       ├── products.json
│       ├── categories.json
│       └── teachers.json
│
├── src/
│   ├── assets/
│   │   └── fonts/
│   │       └── Vazirmatn/
│   │
│   ├── components/
│   │   ├── layout/
│   │   ├── products/
│   │   └── common/
│   │
│   ├── pages/
│   ├── services/
│   ├── hooks/
│   ├── context/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── .gitignore