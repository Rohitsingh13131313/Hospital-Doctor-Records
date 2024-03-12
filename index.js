// fill in javascript code here

let Drname = (document.getElementById("name"));
let Drid   = (document.getElementById("docID"));
let Drdep  = (document.getElementById("dept"));
let Drexp  = (document.getElementById("exp"));
let email  = (document.getElementById("email"));
let mobnum = (document.getElementById("mbl"));
let myform = (document.querySelector("form"));
let tbody  = (document.querySelector("tbody"));


let Alldata = []
myform.addEventListener("submit",function(e){

    e.preventDefault();

    let Drdata = {};

    Drdata.Drname = Drname.value;
    Drdata.Drid   = Drid.value;
    Drdata.Drdep  = Drdep.value
    Drdata.Drexp  = Drexp.value;
    Drdata.email  = email.value;
    Drdata.mobnum = mobnum.value;

    Alldata.push(Drdata);
    console.log(Alldata);
    tbody.innerHTML = null;
    tbody.innerHTML = null;
    

 Alldata.map((e)=>{

    

    let row = document.createElement("tr");

    let tdname = document.createElement("td");
    tdname.textContent = e.Drname
    row.appendChild(tdname);

    let tdid = document.createElement("td");
    tdid.textContent = e.Drid;
    row.appendChild(tdid);

    let tddep = document.createElement("td");
    tddep.textContent = e.Drdep;
    row.appendChild(tddep);

    let tdexp = document.createElement("td");
    tdexp.textContent = e.Drexp;
    row.appendChild(tdexp);

    let tdemail = document.createElement("td");
    tdemail.textContent = e.email;
    row.appendChild(tdemail);

    let tdmob = document.createElement("td");
    tdmob.textContent = e.mobnum;
    row.appendChild(tdmob);


    let tdrole = document.createElement("td");
    

    if(e.Drexp > 5){

        tdrole.textContent = "Senior";
    }
    else if(e.Drexp >= 2 && e.Drexp <= 5){

        tdrole.textContent = "Junior"
    }
    else if (e.Drexp <= 1){

        tdrole.textContent = "Fresher";
    }
    row.appendChild(tdrole)

    let tdDelete = document.createElement("td");
    tdDelete.style.backgroundColor = "red";

    let delebtn = document.createElement("button");
    delebtn.innerText = "Delete";
    delebtn.style.backgroundColor = "red";
    delebtn.style.border = 0;
    
    

    delebtn.addEventListener("click",function(){

        row.remove();
        

        
       


    })
    

 

    tdDelete.appendChild(delebtn);
    row.appendChild(tdDelete);
    tbody.appendChild(row);
    
    

    

 })
    

})


