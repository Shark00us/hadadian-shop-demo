function Loading()
{
    return (
        <div
            className="loading"
            role="status"
            aria-label="در حال بارگذاری"
        >
            {/* نمایش پیام هنگام دریافت یا آماده‌سازی اطلاعات */}
            <span>
                در حال بارگذاری...
            </span>
        </div>
    );
}

export default Loading;