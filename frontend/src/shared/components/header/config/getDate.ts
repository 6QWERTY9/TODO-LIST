export function getDate(): string {
    const today = new Date();

    const month = today.getMonth() + 1;
    const day = today.getDate();
    const year = today.getFullYear();

    const formattedDay = day < 10 ? `0${day}` : day;

    const formattedDate = `${month}/${formattedDay}/${year}`;

    return formattedDate;
}
