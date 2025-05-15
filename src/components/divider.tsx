const Divider = ({
    orientation = "horizontal",
}: {
    orientation?: "vertical" | "horizontal";
}) => {
    return (
        <div
            className={`${
                orientation === "vertical" ? "h-full w-px" : "w-full h-px"
            } bg-border`}
        />
    );
};

export default Divider;
