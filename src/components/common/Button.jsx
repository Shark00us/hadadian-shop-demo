function Button({
    children,
    type = "button",
    onClick,
    disabled = false,
    className = ""
})
{
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`button ${className}`}
        >
            {/* محتوای داخل دکمه */}
            {children}
        </button>
    );
}

export default Button;