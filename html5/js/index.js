function init(j) {
    document.getElementById("nav0_con").className = "nav0_con0";
    hide_all2(j);
    reSize();
    setInterval(setPic, 6000);
}

function init2(i) {
    hide_all2(i);
    reSize();
}

/*
function hide_all() {
    document.getElementById("nav0").className = "into";
    document.getElementById("nav0_con").style.display = "block";
    document.getElementById("nav0_con").className = "nav0_con0";

    for (var i = 1; i < 5; i++) {
        document.getElementById("nav" + i).className = "leave";
        document.getElementById("nav" + i + "_con").style.display = "none";
    }
}
*/

function hide_all2(j) {
    for (var i = 0; i < 5; i++) {
        if (i == j) {
            document.getElementById("nav" + i).className = "into";
        } else {
            document.getElementById("nav" + i).className = "leave";
        }
    }
}

function reSize() {
    document.getElementById("body1").style.minHeight = document.body.scrollHeight + "px";
}

function setPic() {
    var date1 = new Date();
    var s1 = date1.getSeconds() % 3;
    document.getElementById("nav0_con").className = "nav0_con" + s1;
}

/*
function show(id1) {
    // 目前click的id
    var now_id = document.getElementById(id1);
    now_id.className = "into";

    // 目前click的content
    var id2 = id1 + "_con";
    var now_id_con = document.getElementById(id2);

    if (now_id_con.style.display == "none") {
        now_id_con.style.display = "block";
    } else {
        now_id_con.style.display = "block";
    }

    for (var i = 0; i < 5; i++) {
        var id_other = "nav" + i;
        var id_con_other = "nav" + i + "_con";

        if (id_other == id1) {
            continue;
        }

        // 未選取的恢復原狀
        document.getElementById(id_other).className = "leave";
        document.getElementById(id_con_other).style.display = "none";
    }

    reSize();
}
*/

function chgImg(chgid, chg) {
    var m_id = document.getElementById(chgid);
    var m_src = m_id.src;
    var m_index = m_src.lastIndexOf(".jpg") - 1;
    var m_num = Number(m_src.substring(m_index, m_index + 1));

    if (chg === 0) {
        m_num++;
    } else {
        m_num--;
    }

    m_id.src = m_src.substring(0, m_index) + m_num + ".jpg";
}
