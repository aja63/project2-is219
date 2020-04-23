(function () {

    let cities = [
/*        { name: "Monte Falco", height: 1658, place: "Parco Foreste Casentinesi" },
        { name: "Monte Falterona", height: 1654, place: "Parco Foreste Casentinesi" },
        { name: "Poggio Scali", height: 1520, place: "Parco Foreste Casentinesi" },
        { name: "Pratomagno", height: 1592, place: "Parco Foreste Casentinesi" },
        { name: "Monte Amiata", height: 1738, place: "Siena" }*/
        {
            "fldName": "Tokyo",
            "fldLat": 35.6850,
            "fldLong": 139.7514,
            "fldCountry": "Japan",
            "fldAbbreviation": "JPN",
            "fldCapitalStatus": "primary",
            "fldPopulation": 35676000
        }, {
            "fldName": "New York",
            "fldLat": 40.6943,
            "fldLong": -73.9249,
            "fldCountry": "United States",
            "fldAbbreviation": "USA",
            "fldCapitalStatus": "NA",
            "fldPopulation": 19354922
        }, {
            "fldName": "Mexico City",
            "fldLat": 19.4424,
            "fldLong": -99.1310,
            "fldCountry": "Mexico",
            "fldAbbreviation": "MEX",
            "fldCapitalStatus": "primary",
            "fldPopulation": 19028000
        }, {
            "fldName": "Los Angeles",
            "fldLat": 34.1139,
            "fldLong": -118.4068,
            "fldCountry": "United States",
            "fldAbbreviation": "USA",
            "fldCapitalStatus": "NA",
            "fldPopulation": 12815475
        }
    ];

    let table = document.querySelector("table");
    let TableHeadings = Object.keys(cities[0]);
    table.classList.add("table")
    generateTableHead(table, TableHeadings);
    generateTable(table, cities);

})();

function generateTableHead(table, TableHeadings) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let heading of TableHeadings) {
        let th = document.createElement("th");
        let text = document.createTextNode(heading);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

