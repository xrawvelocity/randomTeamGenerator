/*jshint esversion: 9*/
  

  /* VARIABLES */
  let namesArray = [];
  let peoplePerTeam, numOfTeams, html;
  let round = 0;
  let bigArray = [];

  /* DOM VARIABLES */
  let form = document.getElementById('team-form');
  let result = document.querySelector('.result');
  let table = document.querySelectorAll('.table');


  //when the button is clicked do this
  form.onsubmit = e => {

    //dont clear values of inputs
    e.preventDefault();

    //get input into variables
    namesArray = [...form.teamNames.value.split(', ')];
    peoplePerTeam = form.teamNumbers.value;
    
    numOfTeams = Math.floor(namesArray.length / peoplePerTeam);


    var totalTeams = (namesArray.length/numOfTeams);  

    var i,j,temparray,piece = totalTeams;
    for (i = 0, j= namesArray.length; i<j; i+=piece) {
        temparray = namesArray.slice(i,i+piece);
        bigArray.push(temparray);
    }
    //if(table) table.parentNode.removeChild(table);

    table.forEach(e => e.parentNode.removeChild(e));

    for(i = 0; i < bigArray.length; i++){
    html = `
    <table class="table">
      <thead><th>Team %num%</th></thead>
      ${'<tr><td>%name%</td></tr>'.repeat(3)}
    </table>
    `.repeat(3);

    let newhtml = html.replace('%num%', i);
    newhtml = newhtml.replace('%name%', bigArray[0][1]);
    result.insertAdjacentHTML("beforeend", newhtml);
    }



    /* TESTING */
    console.log(html);
    
    console.log(bigArray);
  
  };





