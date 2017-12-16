
/* eslint-disable*/

var button = document.getElementById('button');
var image = document.getElementById('image');
var dateSubmit = document.getElementById('date_submit');
var title = document.getElementById('title');
var description = document.getElementById('description');
var top = document.getElementById('top');
var theDate = document.getElementById("date_submit");
var stylesheet = document.styleSheets;
var button = document.getElementById('btn');

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10){
        dd='0'+dd
    }
    if(mm<10){
        mm='0'+mm
    }

today = yyyy+'-'+mm+'-'+dd;

theDate.setAttribute("max", today);
// 
// btn.addEventListener('click', function(){
//   if((stylesheet[1].href).includes('main')){
//     stylesheet[1].href = "../public/fancy.css"
//   } else {
//     stylesheet[1].href = "../public/main.css";
//     alert('not fancy');
//   }
// })



button.addEventListener('click', function(){
    image.src ="";
    var date = dateSubmit.value;
    convertDate(date);
});

function xhrRequest(date){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
      var nasaObj = JSON.parse(xhr.responseText);
      updateDom(nasaObj);
    }
  }

  xhr.open("GET", "/api" + '='+ date, true);
  xhr.send();

}

function convertDate(d){
  if(d === ''){
    alert('please select a date: DD/MM/YYYY');
    return;
  }
  d.split('-').reverse().join('-');
  xhrRequest(d);
}


function updateDom(obj){
 image.src = obj.url;
 title.innerText = obj.title;
 description.innerText = obj.explanation;
}
