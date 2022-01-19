let demodata = [
    {a: "aa1", b:"bb1", c:"cc1"},
    {a: "aa2", b:"bb2", c:"cc2"},
    {a: "aa3", b:"bb3", c:"cc3"}
];

// First we select the html table:
let tableBody = document.querySelector("#demoTable");

// This is the function that gets the actual table cell values
// from the demodata array and inserts them into a table cell:
let createTD = (html, parent) => {
    let td = document.createElement("td");
    td.innerHTML = html;
    parent.appendChild(td);
};

// This part is only responsible for creating the buttons at the end of each row:
let createButtonGroup = parent => {
    let group = document.createElement("div");
    group.className = "btn-group";
    
    let btnInfo = document.createElement("button");
    btnInfo.className = "btn-info btn";
    btnInfo.innerHTML = "O";

    group.appendChild(btnInfo);
    let td = document.createElement("td");
    td.appendChild(group);
    parent.appendChild(td);
}

// Here is where we are copying the data from the array
// to the table cells, using the createTD function:
for (let k in demodata) {
    let tr = document.createElement("tr");
    createTD(parseInt(k)+1, tr);
    for (let value of Object.values(demodata[k]) ) {
        createTD(value, tr);
    }
    createButtonGroup(tr);
    tableBody.appendChild(tr);  
} 

//group.className="btn-group";

/* let table = document.querySelector("#demoTable"); 
for ( let i = 0; i < demodata.length; i++ ) {
    let tr = document.createElement("tr");
    for ( let data of Object.values(demodata[i]) ) {
        let td = document.createElement("td");
        td.innerHTML = data;
        tr.appendChild(td);
    }
    table.appendChild(tr);  
} */