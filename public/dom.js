var button = document.getElementById('button');
var image = document.getElementById('image');
var dateSubmit = document.getElementById('date_submit');
var title = document.getElementById('title');
var description = document.getElementById('description');
var top = document.getElementById('top');




button.addEventListener('click', function(){
    image.src ="";
    var date = dateSubmit.value;
    convertDate(date);
});


function convertDate(d){
  if(d === ''){
    alert('please enter date: DD/MM/YYYY');
    return;
  }
  d.split('-').reverse().join('-');
  xhrRequest(d);
}

function xhrRequest(date){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
      var nasaObj = JSON.parse(xhr.responseText);
      console.log(nasaObj);
      updateDom(nasaObj);
    }
  }

  xhr.open("GET", "/api" + '='+ date, true);
  xhr.send();

}


function updateDom(obj){
 image.src = obj.url;
 title.innerText = obj.title;
 description.innerText = obj.explanation;
}
