const formatDate = (date?: string | null): string => {
    if (!date) return "";

    return new Date(date)
        .toLocaleDateString("en-gb", { weekday: "short", year: "numeric", month: "short", day: "numeric" })
        .replace(",", "");
};

export { formatDate };
