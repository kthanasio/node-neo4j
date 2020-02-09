"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function IntTwoChars(i) {
    return ("0" + i).slice(-2);
}
function Now() {
    var date_ob = new Date();
    var hours = IntTwoChars(date_ob.getHours());
    var minutes = IntTwoChars(date_ob.getMinutes());
    var seconds = IntTwoChars(date_ob.getSeconds());
    var dateDisplay = hours + ":" + minutes + ":" + seconds;
    return dateDisplay;
}
exports.Now = Now;
//# sourceMappingURL=Now.js.map