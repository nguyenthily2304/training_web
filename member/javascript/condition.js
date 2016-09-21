function search() { 
 var key = document.getElementById("key").value;    
 var data = document.getElementsByClassName("divKeywords");
 var keywords = document.getElementsByClassName("keywords");
 var resultContainer = [];
   
 for (var i = 0; i < data.length; i++) {
  if(keywords[i].innerHTML.indexOf(key) != -1){
      resultContainer.push(data[i].innerHTML);
     data[i].style.display="none";
  }
   if(resultContainer.length  <= 0){    
      data[i].style.display="none";
   }
 };
 var html = '<p>';
   html += resultContainer.toString();
   document.getElementById("result").innerHTML = html;
}
function optionSort() {
   var option = document.getElementById("optionSort").options.value;    
   var resultContainer = [];
}