let firtName=document.getElementById("firstname");
let lastName=document.getElementById("lastname");
let YearOfBirth=document.getElementById("bornyear");
let id=document.getElementById("id");
let city=document.getElementById("city");
let button=document.getElementById("but1");
let mydiv=document.getElementById("div4");
let myTable=document.getElementById("mytable");
let check=document.getElementById("check")
let search=document.getElementById("search");
let div8=document.getElementById("div8");
let button8=document.getElementById("search8");
let patientArayy=[
    { name:"matan",
        lastName:"ysyas",
        YearOfBirth:1996,
        id:5,
        city:"haif",
        dateOfTets:new Date(),
        TimeOfTest:new Date().getHours()},
];

button.onclick=function(){
    
  let  patient={
        name:firtName.value,
        lastName:lastName.value,
        YearOfBirth:YearOfBirth.value,
        id:id.value,
        city:city.value,
        dateOfTets:new Date(),
        TimeOfTest:new Date().getHours()
        

    }
    console.log(patient);
    for(var i=0;i<patientArayy.length;i++){
        if(patientArayy[i].id!=patient.id){
            patientArayy.push(patient)
           break
        }else{console.log("you are here")}
    }
    console.log(patientArayy);

    mydiv.innerHTML=`(${patient.name} ${patient.lastName} ${patient.YearOfBirth}  ${patient.id}  ${patient.city} ${patient.dateOfTets} ${patient.TimeOfTest} )`
    myTable.innerHTML+=`<tr><td>${patient.name}</td><td>${patient.lastName}</td><td>${patient.YearOfBirth}</td><td><td>${patient.id}</td><td>${patient.city}</td></tr>`

}


firtName.oninput=function(){
    firtName.value=firtName.value.toUpperCase();
}
lastName.oninput=function(){
    lastName.value=lastName.value.toUpperCase();
}
city.oninput=function(){
    city.value=city.value.toUpperCase();
}


search.onclick=function(){
for(var i=0;i<patientArayy.length;i++){
    if(patientArayy[i].name==check.value){
        div8.innerHTML=`${patientArayy[i].name}  ${patientArayy[i].lastName} ${patientArayy[i].YearOfBirth}  ${patientArayy[i].id}   ${patientArayy[i].city}`
    }

    else{div8.innerHTML=`your name is here`}
}
}


button8.onclick=function(){
    for(var i=0;i<patientArayy.length;i++){
        if(patientArayy[i].id==check.value){
            div8.innerHTML=`${patientArayy[i].name}  ${patientArayy[i].lastName} ${patientArayy[i].YearOfBirth}  ${patientArayy[i].id}   ${patientArayy[i].city}`
        }
    
        else{div8.innerHTML=`your id is here`}
    }
    }
    