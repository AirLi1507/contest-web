const tbody = document.getElementById('data');
const select1 = document.getElementById('disease-select');
const select2 = document.getElementById('medical-select');

const diseaseInfo = document.getElementById('data1');
const medicalInfo = document.querySelectorAll('.data2');

const medicalTime = document.getElementById('data3');

let userNum = 4;
function getUserNum() {
    let n = userNum.toString();
    document.getElementById('user-no').innerHTML = n;
}

var diseaseList = ['高血壓', '糖尿病', '心臟病', '阿茲海默症'];
var medicalList = ['ACE抑制劑', '胰島素', '降膽固醇藥', '多奈哌齊'];
var takingTimesList = ['4','3','2','3'];

var peopleList = ['老陳', '老黃', '小梅', '小青'];

let defaultPplNo = 3;

function addUser() {
    let name = document.getElementById('fn-input').value;
    let gender = document.getElementById('gender-input').value;
    let age = document.getElementById('age-input').value;
    let no = document.getElementById('num-input').value;
    let disease = document.getElementById('disease-input').value;
    let medical = document.getElementById('medical-input').value;
    let takeTime = document.getElementById('time-input').value;

    peopleList.push(name);
    console.log(peopleList);

    var lastPerson = peopleList[peopleList.length - 1];
    var lastPersonIndex = peopleList.length - 1;
    console.log(lastPerson);

    var newPpl = `<option value="${lastPersonIndex}">${lastPerson}</option>`;
    select1.innerHTML = select1.innerHTML + newPpl;
    select2.innerHTML = select2.innerHTML + newPpl;

    diseaseList.push(disease);

    medicalList.push(medical);

    takingTimesList.push(takeTime);
    
    var addTr = `<tr><td scope="row">${name}</td><td>${gender}</td><td>${age}</td><td>${no}</td></tr>`;
    tbody.innerHTML = tbody.innerHTML + addTr;
    userNum++;
}

$('select').on('change', function(){
    loadData1();
    loadData2();
})

function loadData1() {
    index = select1.selectedIndex;

    $('#data1').html(diseaseList[index]);
    $('#data2').html(medicalList[index]);
}


function loadData2() {
    index = select2.selectedIndex;

    $('#data3').html(medicalList[index]);
    $('#data4').html(`一天 ${takingTimesList[index]} 次`);
}