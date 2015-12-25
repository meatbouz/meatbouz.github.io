function chgM(t_id) {
    var nowtabId = document.getElementById(t_id);
    var nowtab_Con = document.getElementById(t_id + "_con");

    for (var i = 1; i <= 3; i++) {
        var tabId = "tab" + i;
        if (tabId == t_id) {
            nowtabId.className = "display1";
            nowtab_Con.className = "display2";
        } else {
            document.getElementById(tabId).className = "hide1";
            document.getElementById(tabId + "_con").className = "hide2";
        }
    }

    /*
        switch (opt) {
            case 1:
                tab1.className = "display1";
                tab2.className = "hide1";
                tab3.className = "hide1";
                hot.className = "display2";
                news.className = "hide2";
                soon.className = "hide2";
                break;
            case 2:
                tab1.className = "hide1";
                tab2.className = "display1";
                tab3.className = "hide1";
                hot.className = "hide2";
                news.className = "display2";
                soon.className = "hide2";
                break;
            case 3:
                tab1.className = "hide1";
                tab2.className = "hide1";
                tab3.className = "display1";
                hot.className = "hide2";
                news.className = "hide2";
                soon.className = "display2";
                break;
            default:
                tab1.className = "display1";
                tab2.className = "hide1";
                tab3.className = "hide1";
                hot.className = "display2";
                news.className = "hide2";
                soon.className = "hide2";
                break;
        }
    */
}
