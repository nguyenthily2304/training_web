var members = [{
  "id"   : 1,
  "name" :"John Jperis",
  "avatar": "images/01.png",
  "dob"  :"1995/04/12",
  "job"  :"Web Development",
  "phone": "0988481091",
  "email": "jons@gmail.com",
  "bio"  :"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi quisquam ad, tenetur assumenda laudantium, exercitationem? Explicabo harum impedit, aspernatur reiciendis nemo est! Tempora atque, cupiditate ab officia qui! Doloribus, doloremque."
  },
  {
  "id"   : 2,
  "name" :"Dekih Javes",
  "avatar": "images/02.png",
  "dob"  :"1995/02/16",
  "job"  :"Design",
  "phone": "00124481091",
  "email": "dekihg@gmail.com",
  "bio"  :"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi quisquam ad, tenetur assumenda laudantium, exercitationem? Explicabo harum impedit, aspernatur reiciendis nemo est! Tempora atque, cupiditate ab officia qui! Doloribus, doloremque."
  },
  {
  "id"   : 3,
  "name" :"Vekcos Ahis",
  "avatar": "images/08.png",
  "dob"  :"1990/12/25",
  "job"  :"PHP Development",
  "phone": "01235481091",
  "email": "vekcos@gmail.com",
  "bio"  :"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi quisquam ad, tenetur assumenda laudantium, exercitationem? Explicabo harum impedit, aspernatur reiciendis nemo est! Tempora atque, cupiditate ab officia qui! Doloribus, doloremque."
  }];
  // console.log(members[0].id)
  window.onload = function() {
    var dataMember ="";
      for (var i = 0; i < members.length; i++) {
        dataMember += '<div class="row divKeywords">';
          dataMember += '<div class="col-md-4">';
            dataMember += '<img src="' + members[i].avatar +'" alt="" class="img-responsive"/>'; 
          dataMember += '</div>';  
          dataMember += '<div class="col-md-8">' ;
            dataMember += '<h3 class="keywords">' + members[i].name + '</h3>';
            dataMember += '<p>' + members[i].job + '</p>';
            dataMember += '<date>'+ members[i].dob +'</date>';
          dataMember += '</div>';
        dataMember += '</div>';
      }
    document.getElementById("dataMember").innerHTML = dataMember;
  }
  function search() { 
    var key = document.getElementById("key");    
    var name = members[name];
    var resultContainer = [];

    for (var i = 0; i < members.length; i++) {
      if((members[i].name).indexOf(key.value) !== -1 ){
        resultContainer.push(members[i].name.innerHTML);
        members[i].style.display="none";
      }
      if(resultContainer.length  <= 0){    
        members[i].style.display="none";
      }
  };
  var getOption = document.getElementById("optionSort");//get id
  var option = getOption.options[getOption.selectedIndex].value;//*by text/get value to sort
  var sortBy = document.getElementsByName("typeSort");
  resultContainer.sort();
  resultContainer.reverse();
  var html = '<hr>';
  html += resultContainer.toString();
  document.getElementById("dataMember").innerHTML = html;
}
  // function search() { 
  //   var key = document.getElementById("key");
  //   var name = members[name];
  //   // var regexp = /[a-z]/i; 
    
  //   var resultContainer = [];     
  //   for (var i = 0; i < members.length; i++) {
  //     if(members[i].name == key.value){
  //       var match_value = members[i].name.match(regexp);
  //       resultContainer.push(JSON.stringify(members[i]));
  //     }
  //     // if(resultContainer.length  <= 0){    
  //     //   members[i].style.display="none";
  //     // }
  //   };
  // console.log(resultContainer);
  // var getOption = document.getElementById("optionSort");//get id
  // var option = getOption.options[getOption.selectedIndex].value;//*by text/get value to sort
  // var sortBy = document.getElementsByName("typeSort");
  // resultContainer.sort();
  // resultContainer.reverse();
//   var html = '<hr>';
//   html += resultContainer.toString();
//   document.getElementById("dataMember").innerHTML = html;
// }
// function redirectToDetailbyId(clicked) { // target// refers to the clicked element
//   var idDetails = document.getElementById("list").id;
//   location.href='detail.html'.idDetails;
// };