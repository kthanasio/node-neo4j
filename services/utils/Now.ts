function IntTwoChars(i: number) {
    return (`0${i}`).slice(-2);
}

function Now() {
    const dateOb = new Date();
    const hours = IntTwoChars(dateOb.getHours());
    const minutes = IntTwoChars(dateOb.getMinutes());
    const seconds = IntTwoChars(dateOb.getSeconds());
    const dateDisplay = `${hours}:${minutes}:${seconds}`;
    return dateDisplay;
}

export { Now }
