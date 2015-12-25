//var x1 = prompt("請輸入一個正整數", "");

function check() {
    var num = document.getElementById("num").value;
    if (!isNaN(num) && (parseInt(num) > 0)) {
        var boolean1 = true;
        num = parseInt(num);
        for (var i = 2; i < num; i++) {
            if (num % i === 0) {
                boolean1 = false;
                break;
            }
        }

        if (boolean1) {
            alert(num + " 為質數");
        } else {
            alert(num + " 非質數");
        }

    } else {
        alert("輸入錯誤");
    }
}

