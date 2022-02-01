export function formatDate(date: string) {
    const d = new Date(date);

    return new Intl.DateTimeFormat('en-GB').format(d);
}
