const Divider = ({
    orientation = "horizontal",
    pattern = false,
}: {
    orientation?: "vertical" | "horizontal";
    pattern?: boolean;
}) => {
    if (pattern)
        return (
            <div className="flex h-8 w-full bg-[repeating-linear-gradient(315deg,var(--border)_0,var(--border)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] border-y border-border" />
        );
    return (
        <div
            className={`${
                orientation === "vertical" ? "h-full w-px" : "w-full h-px"
            } bg-border`}
        />
    );
};

export default Divider;
