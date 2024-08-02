const tbody = document.getElementById('data');
const select1 = document.getElementById('disease-select');
const selectConfirm1 = document.getElementById('selectConfirm1');

const diseaseInfo = document.getElementById('data1');
const medicalInfo = document.getElementById('data2');

let userNum = 4;
function getUserNum() {
    let n = userNum.toString();
    document.getElementById('user-no').innerHTML = n;
}

var diseaseList = ['高血壓', '糖尿病', '心臟病', '阿茲海默症'];

var medicalList = ['ACE抑制劑', '胰島素', '降膽固醇藥', '多奈哌齊'];

var peopleList = ['老陳', '老黃', '小梅', '小青'];

let defaultPplNo = 3;

function addUser() {
    let name = document.getElementById('fn-input').value;
    let gender = document.getElementById('gender-input').value;
    let age = document.getElementById('age-input').value;
    let no = document.getElementById('num-input').value;
    let disease = document.getElementById('disease-input').value;
    let medical = document.getElementById('medical-input').value;
    /*let takeTime = document.getElementById('time-input').value;*/
    

    peopleList.push(name);
    console.log(peopleList);

    var lastPerson = peopleList[peopleList.length - 1];
    var lastPersonIndex = peopleList.length - 1;
    console.log(lastPerson);

    var newPpl = `<option value="` + lastPersonIndex + `">` + lastPerson + `</option>`;
    select1.innerHTML = select1.innerHTML + newPpl;

    diseaseList.push(disease);
    console.log(disease);

    medicalList.push(medical);
    console.log(medicalList[lastPersonIndex])
    
    var addTr = `<tr><td scope="row">` + name + `</td><td>` + gender + `</td><td>` + age + `</td><td>` + no + `</td></tr>`;
    console.log(addTr);
    tbody.innerHTML = tbody.innerHTML + addTr;
    userNum++;
}

$('select').on('change', function(){
    loadData();
})

function loadData() {
    index1 = select1.selectedIndex;

    data1.innerHTML = diseaseList[index1];
    data2.innerHTML = medicalList[index1];
}
