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
  // gotoDetail();
  // gotoNextBack();
}
function gotoDetail(clicked_id){
   var dataMember = document.getElementById('dataMember');
    dataMember.style.display == 'none'; //hide div

    //appent html to div 
    var htmlAppend = '';
    htmlAppend += redrectDetails(members[clicked_id]);

    document.getElementById("info").innerHTML = htmlAppend;

    //add go to next and go to back
    document.getElementById("next").attr('id') = clicked_id + 1;
    document.getElementById("back").attr('id') = clicked_id - 1;
}

function gotoNextBack(clicked_id){
  var clicked_id = document.getElementById(this.id);
  //appent html to div 
    var htmlAppend = '';
    htmlAppend += redrectDetails(members[clicked_id]);

    document.getElementById("info").innerHTML = htmlAppend;

    //add go to next and go to back
    document.getElementById("next").attr('id') = clicked_id + 1;
    document.getElementById("back").attr('id') = clicked_id - 1;

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
    dataMember += '<h3 onclick="gotoDetail(this.id)" class="detailID" id='+ data.id +'>'+ data.name + '</h3>';
    dataMember += '<p>' + data.job + '</p>';
    dataMember += '<date>'+ data.dob +'</date>';
    dataMember += '</div>';
    dataMember += '</div>';
  return dataMember;
}
function redrectDetails(result) { 
  var detailMembers = '';
      detailMembers += '<div class="row">';
      detailMembers += '<div class="col-md-4">';
      detailMembers += '<img src="' + result.avatar +'" alt="" class="img-responsive"/>'; 
      detailMembers += '</div>';
      detailMembers += '<div class="col-md-8">' ;
      detailMembers += '<h3">' + result.name + '</h3>';
      detailMembers += '<p>' + result.job + '</p>';
      detailMembers += '<date>'+ result.dob +'</date>';
      detailMembers += '<p>'+ result.phone +'</p>';
      detailMembers += '<p>'+ result.email +'</p>';
      detailMembers += '<p>'+'<strong>'+ 'History:' +'</strong>' +result.bio +'</p>';
      detailMembers += '</div>';
      detailMembers += '</div>';
  document.getElementById("infoDetail").innerHTML = detailMembers;
}
// function onclickToChange(){
//   var previous = document.getElementById("previous");
//   var next = document.getElementById("next");
//   for (var i = 0; i < members.length; i++) {
//     if(previous < members[i].id){
//       splitUrl = splitUrl +1;
//       members[i].id.onclick = next();
//     }
//     if(next > members[i].id){
//       splitUrl = splitUrl -1;
//       members[i].id.onclick = previous();
//     }
//   }
//   redrectDetails.call();
// }

// function appendDataDetails(data) {
//   // console.log(data);
//   var detailMembers = '';
//     detailMembers += '<div class="row">';
//     detailMembers += '<div class="col-md-4">';
//     detailMembers += '<img src="' + data.avatar +'" alt="" class="img-responsive"/>'; 
//     detailMembers += '<div class="col-md-8">' ;
//     detailMembers += '<h3">' + data.name + '</h3>';
//     detailMembers += '<p>' + data.job + '</p>';
//     detailMembers += '<date>'+ data.dob +'</date>';
//     detailMembers += '<p>'+ data.phone +'</p>';
//     detailMembers += '<p>'+ data.email +'</p>';
//     detailMembers += '<p>'+'<strong>'+ 'History:' +'</strong>' +data.bio +'</p>';
//     detailMembers += '</div>';
//     detailMembers += '</div>';
//   return detailMembers;
// }
// function redrectDetails(id) { 
//   var url = window.location.href;
//   var splitUrl = url.split("=",2);
//   var idUrl = parseInt(splitUrl[1]);
//   console.log(members[id -1]);
//   var detailMembers = appendDataDetails(members[id -  1]);
//   // console.log(idUrl);
//   // for (var i = 0; i < members.length ; i++) {   
//   //   var detailMembers ="";
//   //   if (members[i].id == idUrl) {
//   //     detailMembers += appendDataDetails(members[i]);
//   //     // var result = JSON.stringify(detailMembers);
//   //   }  
//   // }

//   document.getElementById("infoDetail").innerHTML = detailMembers;
// }
