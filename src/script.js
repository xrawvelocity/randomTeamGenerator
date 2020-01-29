/*jshint esversion: 9*/
  

  /* VARIABLES */
  let namesArray = [];
  let peoplePerTeam, numOfTeams, html;
  let round = 0;
  let bigArray = [];

  /* DOM VARIABLES */
  let form = document.getElementById('team-form--2');
  let reset = document.querySelector('.reset');
  let result = document.querySelector('.result');
  let table = document.querySelectorAll('.table');
  let heading = document.querySelector('.heading-1');
  console.log(table);

  //when the 'make teams' button is clicked do this
  form.onsubmit = e => {

    //dont clear values of inputs
    e.preventDefault();

    //margin: 40rem auto 5rem auto;
    //make the space on top smaller on click
    heading.style.margin = '10rem auto 5rem auto';


    //get input into variables
    namesArray = [...form.teamNames.value.split(', ')];
    peoplePerTeam = form.teamNumbers.value;
    
    numOfTeams = Math.floor(namesArray.length / peoplePerTeam);


    var totalTeams = (namesArray.length/numOfTeams);  

    var temparray,piece = totalTeams;
    for (i = 0, j= namesArray.length; i<j; i+=piece) {
        temparray = namesArray.slice(i,i+piece);
        bigArray.push(temparray);
    }

    for(i = 0; i < bigArray.length; i++){
    html = `
    <table class="table">
      <thead><th>Team %num%</th></thead>
      ${'<tr><td>%name%</td></tr>'.repeat(3)}
    </table>
    `.repeat(numOfTeams);

    let newhtml = html.replace('%num%', i);
    newhtml = newhtml.replace('%name%', bigArray[0][1]);
    result.insertAdjacentHTML("beforeend", newhtml);
    }



    /* TESTING */
    //console.log(html);
    
    //console.log(bigArray);
  
  };


/* when the 'reset' button is clicked do this */

reset.onclick = e => {
  result.innerHTML = '';
  heading.style.margin = '40rem auto 5rem auto';
  console.log('working');
};

