// var members = [{
//   "name":"John Jperis",
//   "Dob" :"1995/04/12",
//   "Job" :"Web Development"
//   "phone": 0988481091,
//   "email": "jons@gmail.com"
//   "Bio" :"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi quisquam ad, tenetur assumenda laudantium, exercitationem? Explicabo harum impedit, aspernatur reiciendis nemo est! Tempora atque, cupiditate ab officia qui! Doloribus, doloremque."
//   },
//   {
//   "name":"Dekih Javes",
//   "Dob" :"1995/02/16",
//   "Job" :"Design"
//   "phone": 00124481091,
//   "email": "dekihg@gmail.com"
//   "Bio" :"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi quisquam ad, tenetur assumenda laudantium, exercitationem? Explicabo harum impedit, aspernatur reiciendis nemo est! Tempora atque, cupiditate ab officia qui! Doloribus, doloremque."
//   },
//   {
//   "name":"Vekcos Ahis",
//   "Dob" :"1990/12/25",
//   "Job" :"PHP Development"
//   "phone": 01235481091,
//   "email": "vekcos@gmail.com"
//   "Bio" :"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi quisquam ad, tenetur assumenda laudantium, exercitationem? Explicabo harum impedit, aspernatur reiciendis nemo est! Tempora atque, cupiditate ab officia qui! Doloribus, doloremque."
//   }];
//   var obj = JSON.parse(members);
//   document.getElementById("result".innerHTML= obj.members +<br>;

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
  var getOption = document.getElementById("optionSort");//get id
  var option = getOption.options[getOption.selectedIndex].value;//*by text/get value to sort
  var sortBy = document.getElementsByName("typeSort");
    resultContainer.sort();
    resultContainer.reverse();
  var html = '<div class="row">';
    html += resultContainer.toString();
    document.getElementById("result").innerHTML = html;
}