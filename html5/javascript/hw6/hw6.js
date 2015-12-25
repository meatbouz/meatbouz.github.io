var box;

/*
// box座標
var x1;
var y1;
*/

// 座標距離長度
var x_len;
var y_len;

function init_box() {
    box = document.getElementById("box");
    box.addEventListener("mousedown", pickup);
    box.addEventListener("mouseup", putdown);
}

function pickup(e) {
    /*
    x1 = box.offsetLeft;
    y1 = box.offsetTop;
    x_len = e.clientX - x1;
    y_len = e.clientY - y1;
    */
    x_len = e.clientX - box.offsetLeft;
    y_len = e.clientY - box.offsetTop;
    document.addEventListener("mousemove", move);
    /*
    box.removeEventListener("mousedown", pickup);
    box.addEventListener("mouseup", putdown);
    */
}

function move(e) {
    box.style.left = (e.clientX - x_len) + "px";
    box.style.top = (e.clientY - y_len) + "px";
}

function putdown(e) {
    /*
    x1 = box.offsetLeft;
    y1 = box.offsetTop;
    x_len = e.clientX - x1;
    y_len = e.clientY - y1;
    */
    document.removeEventListener("mousemove", move);
    /*
    box.addEventListener("mousedown", pickup);
    box.removeEventListener("mouseup", putdown);
    */
}
