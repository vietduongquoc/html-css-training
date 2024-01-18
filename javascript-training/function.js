/*
 Mot so ham có san 
 - alert
 - console
 - confirm
 - prompt
 - set timeout
 - set interval
*/

const fullName = ('Duong Quoc Viet');
const age = (22);

// Tạo hộp thoại confirm
confirm('Ban la intern a?');

// Tạo 1 hộp thoại có ô Input
prompt('Ban la intern a?');

// Cho 1 đoạn code chạy sau 1 khoảng thời gian (mili giây:ms) chi chạy 1 lần
setTimeout(function () {
    alert('Thong bao')
}, 1000);

// In ra cac dong trong Console
console.log(fullName);
console.error(age);
console.warn(fullName);

// Cho 1 đoạn code chạy sau 1 khoảng thời gian (mili giây:ms) chạy liên tục không ngừng
setInterval(function () {
    console.log('Thong bao toi' + Math.random())
}, 1000);