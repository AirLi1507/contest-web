const tabs = document.querySelectorAll('.tabs');
function showTab1(tab_id) {
    if (tab_id == 1) {
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].style.display = "none";
        }
        document.getElementById('dashboard-div').style.display = "flex";
        showTab2(1);
    } else if (tab_id == 2) {
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].style.display = "none";
        }
        document.getElementById('users-div').style.display = "flex";
        showTab2(2);
    } else if (tab_id == 3) {
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].style.display = "none";
        }
        document.getElementById('record-div').style.display = "flex";
        showTab2(4);
    }
}

const tabs2 = document.querySelectorAll('.tab-content-container');
function showTab2(tab_id2) {
    if (tab_id2 == 1) {
        for (var i = 0; i < tabs2.length; i++) {
            tabs2[i].style.display = "none";
        }
        getUserNum();
        document.getElementById('overview').style.display = "flex";
    } else if (tab_id2 == 2) {
        for (var i = 0; i < tabs2.length; i++) {
            tabs2[i].style.display = "none";
        }
        document.getElementById('allusers').style.display = "flex";
    } else if (tab_id2 == 3) {
        for (var i = 0; i < tabs2.length; i++) {
            tabs2[i].style.display = "none";
        }
        document.getElementById('newuser').style.display = "flex";
    } else if (tab_id2 == 4) {
        for (var i = 0; i < tabs2.length; i++) {
            tabs2[i].style.display = "none";
        }
        document.getElementById('userrecords').style.display = "flex";
        loadData1()
    } else if (tab_id2 == 5) {
        for (var i = 0; i < tabs2.length; i++) {
            tabs2[i].style.display = "none";
        }
        document.getElementById('activites').style.display = "flex";
    } else if (tab_id2 == 6) {
        for (var i = 0; i < tabs2.length; i++) {
            tabs2[i].style.display = "none";
        }
        document.getElementById('userinfo').style.display = "flex";
    }
}