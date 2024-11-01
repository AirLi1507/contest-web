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
var medicalList = ['"s.t." natural tears eye drops', 'cocaine hcl eye/nose drops 5%', 'allegro nasal spray 0.05%', 'amoxicillin sodium and clavulanate potassium for inj 0.6g (shandong lukang)'];
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
    select1.innerHTML += newPpl;
    select2.innerHTML += newPpl;

    diseaseList.push(disease);

    medicalList.push(medical);

    takingTimesList.push(takeTime);
    
    var addTr = `<tr><td scope="row">${name}</td><td>${gender}</td><td>${age}</td><td>${no}</td></tr>`;
    tbody.innerHTML += addTr;
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

    searchDrug(index)
}

let cachedXML = null;

async function fetchXML() {
    if (cachedXML) {
        console.log('Using cached XML data');
        return cachedXML;
    }

    try {
        const response = await fetch('http://host.hypernix.org:3000/druglist');
        if (!response.ok) throw new Error('Network response was not ok');
        const xmlText = await response.text();
        cachedXML = new window.DOMParser().parseFromString(xmlText, "text/xml");
        return cachedXML;
    } catch (error) {
        console.error('Error fetching XML:', error);
    }
}

async function searchDrug(index) {
    try {
        const xmlDoc = await fetchXML();
        if (!xmlDoc) {
            throw new Error('Failed to load XML document');
        }
        console.log('loading')
        const keyword = medicalList[index];
        const drugs = xmlDoc.getElementsByTagName('drug');
        const resultContainer = document.querySelector('.drug-info')
        resultContainer.innerHTML = '';

        for (let i = 0; i < drugs.length; i++) {
            const productNameNode = drugs[i].getElementsByTagName('productName')[0];
            const regCertHolderNameNode = drugs[i].getElementsByTagName('regCertHolderName')[0];
            const permitNoNode = drugs[i].getElementsByTagName('permitNo')[0];

            if (productNameNode) {
                const productName = productNameNode.textContent.toLowerCase();
                if (productName.includes(keyword)) {
                    const regCertHolderName = regCertHolderNameNode ? regCertHolderNameNode.textContent : 'N/A';
                    const permitNo = permitNoNode ? permitNoNode.textContent : 'N/A';
                    const activeIngs = drugs[i].getElementsByTagName('activeIng');
                    let activeIngsList = '';

                    for (let j = 0; j < activeIngs.length; j++) {
                        activeIngsList += `<li>${activeIngs[j].textContent}</li>`;
                    }

                    resultContainer.innerHTML += `
                        <div class="drug-item">
                            <h3>${productName}</h3>
                            <p><strong>Registration Certificate Holder:</strong> ${regCertHolderName}</p>
                            <p><strong>Permit No:</strong> ${permitNo}</p>
                            <p><strong>Active Ingredients:</strong></p>
                            <ul>${activeIngsList}</ul>
                        </div>
                    `;
                }
            }
        }

        if (resultContainer.innerHTML === '') {
            resultContainer.innerHTML = '<p>No drugs found matching the keyword.</p>';
        }
    } catch (error) {
        console.error('Error processing drugs:', error);
    }
}


function loadData2() {
    index = select2.selectedIndex;

    $('#data3').html(medicalList[index]);
    $('#data4').html(`一天 ${takingTimesList[index]} 次`);
}