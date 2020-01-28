/*jshint esversion: 9*/
  
  let names = [];
  let noperTeam;
  let round = 0;
  let bigArray = [];

  let form = document.getElementById('team-form');
  let result = document.querySelector('.result');
  let table = document.querySelector('.table');

  form.onsubmit = e => {
    e.preventDefault();
    names = [...form.teamNames.value.split(', ')];
    noPerTeam = form.teamNumbers.value;

    
  

    if (names){
      if (names.length % noPerTeam === 0){
        round = (names.length / noPerTeam);
      } else {
        round = (names.length / noPerTeam);
      }
    }

    let noOfTeams = Math.floor(round);
    var totalTeams = (names.length/noOfTeams);  

    var i,j,temparray,piece = totalTeams;
    for (i = 0, j= names.length; i<j; i+=piece) {
        temparray = names.slice(i,i+piece);
        bigArray.push(temparray);
    }
    let html;
    table.parentElement.removeChild(table);

    for(i = 0; i < bigArray.length; i++){
    html = `
    <table class="table">
      <thead><th>Team %num%</th></thead>
      ${'<tr><td>%name%</td></tr>'.repeat(bigArray[i].length)}
    </table>
    `;

    let newhtml = html.replace('%num%', '2');
    newhtml = newhtml.replace('%name%', bigArray[0][1]);
    result.insertAdjacentHTML("beforeend", newhtml);
    }
    console.log(html);

  
    
    
    console.log(bigArray);
  
  };





