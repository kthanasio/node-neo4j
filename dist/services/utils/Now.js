"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function IntTwoChars(i) {
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
exports.Now = Now;
//# sourceMappingURL=Now.js.map