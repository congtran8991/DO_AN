export const timeExam = (s,h,m) => {
    if (s === -1) {
        m -= 1;
        s = 59;
    }
    if (m === -1) {
        h -= 1;
        m = 59;
    }
    let  timeout = setTimeout(function () {
        s--;
        timeExam();
    }, 1000);
    if (h == -1) {
        clearTimeout(timeout);
        alert('Hết giờ');
        return false;
    }
    return s;

}