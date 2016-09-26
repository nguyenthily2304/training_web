var members = [{
  "id"   : 1,
  "name" : "abcdeft",
  "avatar": "images/01.png",
  "dob"  :"1992/04/12",
  "job"  :"Web Development",
  "phone": "0988481091",
  "email": "jons@gmail.com",
  "bio"  :"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi quisquam ad, tenetur assumenda laudantium, exercitationem? Explicabo harum impedit, aspernatur reiciendis nemo est! Tempora atque, cupiditate ab officia qui! Doloribus, doloremque."
},{
  "id"   : 2,
  "name" :"bcdehias",
  "avatar": "images/02.png",
  "dob"  :"1993/02/16",
  "job"  :"Design",
  "phone": "00124481091",
  "email": "dekihg@gmail.com",
  "bio"  :"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi quisquam ad, tenetur assumenda laudantium, exercitationem? Explicabo harum impedit, aspernatur reiciendis nemo est! Tempora atque, cupiditate ab officia qui! Doloribus, doloremque."
},{
  "id"   : 3,
  "name" :"huadoemgf",
  "avatar": "images/08.png",
  "dob"  :"1990/12/25",
  "job"  :"PHP Development",
  "phone": "01235481091",
  "email": "vekcos@gmail.com",
  "bio"  :"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi quisquam ad, tenetur assumenda laudantium, exercitationem? Explicabo harum impedit, aspernatur reiciendis nemo est! Tempora atque, cupiditate ab officia qui! Doloribus, doloremque."
 },{
  "id"   : 4,
 "name" :"John Klojh",
  "avatar": "images/man01.png",
  "dob"  :"1990/01/01",
  "job"  :"Tester",
  "phone": "01235021191",
  "email": "vekcos@gmail.com",
  'bio'  :"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi quisquam ad, tenetur assumenda laudantium, exercitationem? Explicabo harum impedit, aspernatur reiciendis nemo est! Tempora atque, cupiditate ab officia qui! Doloribus, doloremque."
}];
window.onload = function() {
  search();
}
function search() {
  var key = document.getElementById("key");    
  var name = members[name];
  var dataMember ="";
  if(key.value != ''){
    var members_tmp = [];
    for (var i = 0; i < members.length; i++) {
      if ((members[i].name).indexOf(key.value) != -1) {
        members_tmp.push(members[i]);
      }
    }
    members = members_tmp;
  }
  var getOption = document.getElementById("optionSort");//get id
  var option = getOption.options[getOption.selectedIndex].value;//*by text/get value to sort
  var sortBy = document.querySelector('.checkedSort:checked').value;//get selector checked
  var arr = [];
  if(option == 'name'){
    for (var i = 0; i < members.length; i++) {
      if(members[i].name != ''){
        arr.push(members[i].name);
      }
    }
    if(sortBy == 'asc'){
      arr.sort();
    }else{
      arr.reverse();
    }
    for (var j = 0; j < arr.length; j++) {
      for (var i = 0; i < members.length; i++) {
        if(members[i].name == arr[j]){
          dataMember += appendDataIndex(members[i]);
        }
      }
    };
  }
  else if(option == 'dob') {
    for (var i = 0; i < members.length; i++) {
      if (members[i].dob != '') {
        var testdate = new Date(members[i].dob);
        arr.push(testdate.getTime());
      }
    }
    if (sortBy == 'asc') {
      arr.sort(function (a, b) {
        return b - a
      });
    } else if (sortBy == 'desc') {
      arr.sort(function (a, b) {
        return a - b
      });
    }
    for (var j = 0; j < arr.length; j++) {
      for (var i = 0; i < members.length; i++) {
        var testdate = new Date(members[i].dob);
        if (testdate.getTime() == arr[j]) {
          dataMember += appendDataIndex(members[i]);
        }
      }
    };
  }
  document.getElementById("dataMember").innerHTML = dataMember;
}
function appendDataIndex(data) {
  var dataMember = '';
    dataMember += '<div class="row">';
    dataMember += '<div class="col-md-4">';
    dataMember += '<img src="' + data.avatar +'" alt="" class="img-responsive"/>';
    dataMember += '</div>';
    dataMember += '<div class="col-md-8">' ;
    dataMember += '<h3 class="redrectDetails" onclick="redrectDetails()">'+ '<a href="detail.html?id=' + data.id + '">' + data.name + '</a>'+ '</h3>';
    dataMember += '<p>' + data.job + '</p>';
    dataMember += '<date>'+ data.dob +'</date>';
    dataMember += '</div>';
    dataMember += '</div>';
  return dataMember;
}
function appendDataDetails(data) {
  var dataMember = '';
    dataMember += '<div class="row">';
    dataMember += '<div class="col-md-4">';
    dataMember += '<img src="' + data.avatar +'" alt="" class="img-responsive"/>'; // 
    dataMember += '</div>';
    dataMember += '<div class="col-md-8">' ;
    dataMember += '<h3">' + data.name + '</h3>';
    dataMember += '<p>' + data.job + '</p>';
    dataMember += '<date>'+ data.dob +'</date>';
    dataMember += '<p>'+ data.phone +'</p>';
    dataMember += '<p>'+ data.email +'</p>';
    dataMember += '<p>'+'<strong>'+ 'History:' +'</strong>' +data.bio +'</p>';
    dataMember += '</div>';
    dataMember += '</div>';
  return dataMember;
}
// data = JSON.parse(members);
function redrectDetails() {
  var redrectDetails = document.getElementsByClassName('redrectDetails');  
  for (var i = 0; i < members.length ; i++) {   
    var dataMember ="";
    if(redrectDetails == members[i].id){
      dataMember += appendDataDetails(members[i]);
    }
  }
  document.getElementById("infoDetail").innerHTML = dataMember;  
}
// var infoDetail ={};
// var infoDetail.keys = {};
// // NEXT 
// infoDetail.keys.next = function(o, id){
//   var keys = Object.keys( o ),html
//       idIndex = keys.indexOf(members[id]),
//       nextIndex = idIndex += 1;
//   if(nextIndex >= keys.length){
//     return;
//   }
//   var nextKey = keys[ nextIndex ]
//   return nextKey;
// };

// //PREVIOUS
// infoDetail.keys.previous = function(o, id){
//   var keys = Object.keys( o ),
//       idIndex = keys.indexOf(members[id]),
//       nextIndex = idIndex -= 1;
//   if(idIndex === 0){
//     return;
//   }
//   var nextKey = keys[ nextIndex ]
//   return nextKey;
// };
