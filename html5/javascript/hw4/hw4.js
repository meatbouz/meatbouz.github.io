// 線段物件
function Line(x1, y1, x2, y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;

    // 斜率
    this.slope = (x1 - x2) / (y1 - y2);

    // 長度
    this.length = Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
}

// 是否平行
function isParallel(slope1, slope2) {
    if (slope1 == slope2) {
        alert("平行");
        return true;
    }

    alert("非平行");
    return false;
}

function send() {
    var x11 = document.getElementById("x11").value;
    var y11 = document.getElementById("y11").value;
    var x12 = document.getElementById("x12").value;
    var y12 = document.getElementById("y12").value;
    var x21 = document.getElementById("x21").value;
    var y21 = document.getElementById("y21").value;
    var x22 = document.getElementById("x22").value;
    var y22 = document.getElementById("y22").value;
    if (x11.length === 0 || y11.length === 0 || x12.length === 0 || y12.length === 0 || x21.length === 0 || y21.length === 0 || x22.length === 0 || y22.length === 0) {
        alert("輸入不完整");
        return;
    }
    // 座標相同
    if (x11 == x12 && y11 == y12) {
        alert("第一個線段座標相同，請重新輸入");
        return;
    }
    if (x21 == x22 && y21 == y22) {
        alert("第二個線段座標相同，請重新輸入");
        return;
    }

    var line1 = new Line(x11, y11, x12, y12);
    var line2 = new Line(x21, y21, x22, y22);
    var is_p = isParallel(line1.slope, line2.slope);
}
