const github_slug_to_name = (slug: string) => {
    return slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
};

export default github_slug_to_name;
