const tabs = document.querySelectorAll('.tabs');
function showTab1(tab_id) {
    if (tab_id == 1) {
        $('.tabs').hide();
        document.getElementById('dashboard-div').style.display = "flex";
        showTab2(1);
    } else if (tab_id == 2) {
        $('.tabs').hide();
        document.getElementById('users-div').style.display = "flex";
        showTab2(2);
    } else if (tab_id == 3) {
        $('.tabs').hide();
        document.getElementById('record-div').style.display = "flex";
        showTab2(4);
        loadData1();
    }
}

const tabs2 = document.querySelectorAll('.tab-content-container');
function showTab2(tab_id2) {
    if (tab_id2 == 1) {
        $(tabs2).hide();
        getUserNum();
        document.getElementById('overview').style.display = "flex";
    } else if (tab_id2 == 2) {
        $(tabs2).hide();
        document.getElementById('allusers').style.display = "flex";
    } else if (tab_id2 == 3) {
        $(tabs2).hide();
        document.getElementById('newuser').style.display = "flex";
    } else if (tab_id2 == 4) {
        $(tabs2).hide();
        document.getElementById('userrecords').style.display = "flex";
        loadData1();
    } else if (tab_id2 == 5) {
        $(tabs2).hide();
        document.getElementById('activites').style.display = "flex";
        loadData2();
    }
}