function openPerson(evt, personName) {
    
    var i, tabcontent, tablinks;
  
    
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    
    document.getElementById(personName).style.display = "block";
    evt.currentTarget.className += " active";

 var x = document.getElementById("homeblock");
    x.style.display = "none";
  
  }
function goHome(){
location.reload();
return false;
}
