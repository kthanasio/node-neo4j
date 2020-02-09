function IntTwoChars(i) {
    return (`0${i}`).slice(-2);
}

function Now() {
    let date_ob = new Date();
    let hours = IntTwoChars(date_ob.getHours());
    let minutes = IntTwoChars(date_ob.getMinutes());
    let seconds = IntTwoChars(date_ob.getSeconds());
    let dateDisplay = `${hours}:${minutes}:${seconds}`;
    return dateDisplay;
}

export { Now }
