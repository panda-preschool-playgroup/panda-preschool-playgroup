const formatDate = (date?: string | null): string => {
    if (!date) return "";

    return new Date(date)
        .toLocaleDateString("en-gb", { weekday: "short", year: "numeric", month: "short", day: "numeric" })
        .replace(",", "");
};

const dateIsInThePast = (date: string): boolean => {
    const dayAfter = new Date(new Date(date).setDate(new Date(date).getDate() + 1));
    return dayAfter.getTime() < new Date().getTime();
};

export { formatDate, dateIsInThePast };
