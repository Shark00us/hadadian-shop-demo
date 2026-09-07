function EmptyState({
    title = "موردی پیدا نشد",
    message = "اطلاعاتی برای نمایش وجود ندارد.",
    action
})
{
    return (
        <div
            className="empty-state"
            role="status"
        >
            {/* عنوان وضعیت خالی */}
            <h2>
                {title}
            </h2>

            {/* توضیحات وضعیت خالی */}
            <p>
                {message}
            </p>

            {/* دکمه یا عملیات اختیاری */}
            {action && (
                <div className="empty-state-action">
                    {action}
                </div>
            )}
        </div>
    );
}

export default EmptyState;