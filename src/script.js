/*jshint esversion: 9*/
// const teamGen = (array, num) => {
//     let index = array.length;
//     let temporary, random;
//     let teams = {};
//     while(index){
//       random = Math.floor(Math.random() * index);
//       index -= 1;
  
//       temporary = array[index];
//       array[index] = array[random];
//       array[random] = temporary;
//     }
//     for(let x = 0; x < array.length / num; x++){
//       teams[`teams${x + 1}`] = [];
//     }
//     for(let i = 0; i < array.length; i += num){
//       // teams['team' + i] = [].concat( array[i], array[i+num]);
//       // array.slice(0, i+=num)
//       for(let team in teams){
//         teams[team].push(array.slice(i, num));
//       }
//    }

    
//     console .log(teams);
//     result.innerHTML = `${names}`;
//   };
  
  let names = [];
  let noperTeam;
  let form = document.getElementById('team-form');
  let result = document.querySelector('.result');

  form.onsubmit = e => {
    e.preventDefault();
    names = [...form.teamNames.value.split(', ')];
    noPerTeam = form.teamNumbers.value;

    let round = 0;

    if (names){
      if (names.length % noPerTeam === 0){
        round = (names.length / noPerTeam);
      } else {
        round = (names.length / noPerTeam);
      }
    }

    let noOfTeams = Math.floor(round);
    var totalTeams = Math.ceil(names.length/noOfTeams);  
    
    var i,j,temparray,piece = totalTeams;
    for (i = 0, j= names.length; i<=j; i+=piece) {
        temparray = names.slice(i,i+piece);
        console.log(temparray);
    }
    console.log(noOfTeams);
    console.log(round);
  
  };