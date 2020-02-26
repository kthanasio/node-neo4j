"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function IntTwoChars(i) {
    return ("0" + i).slice(-2);
}
function Now() {
    var dateOb = new Date();
    var hours = IntTwoChars(dateOb.getHours());
    var minutes = IntTwoChars(dateOb.getMinutes());
    var seconds = IntTwoChars(dateOb.getSeconds());
    var dateDisplay = hours + ":" + minutes + ":" + seconds;
    return dateDisplay;
}
exports.Now = Now;
//# sourceMappingURL=Now.js.map