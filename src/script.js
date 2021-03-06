/*jshint esversion: 9*/
  
/////////////////////////////////////////

  /* VARIABLES */
  let namesArray = [];
  let peoplePerTeam, numOfTeams, html, totalTeams, temparray;
  let round = 0;
  let bigArray = [];

  /* DOM VARIABLES */
  let form = document.getElementById('team-form--2');
  let reset = document.querySelector('.reset');
  let result = document.querySelector('.result');
  let table = document.querySelectorAll('.table');
  let heading = document.querySelector('.heading-1');
  let makeTeams = document.getElementById('team-btn');
  
  //when the 'make teams' button is clicked do this
  form.onsubmit = e => {

    //dont clear values of inputs
    e.preventDefault();

    //flip buttons
    makeTeams.style.zIndex = '-10';
    makeTeams.style.display = 'none';
    reset.style.zIndex = '10';

    //get input into variables
    namesArray = [...form.teamNames.value.split(',')];
    peoplePerTeam = form.teamNumbers.value;

    // name randomizer
    namesArray.sort(() => Math.round(Math.random()) - 0.5);
    numOfTeams = Math.floor(namesArray.length / peoplePerTeam);
    totalTeams = (namesArray.length/numOfTeams);  
    temparray = totalTeams;
    if(!bigArray.length){
      for (i = 0, j= namesArray.length; i<j; i+=totalTeams) {
        temparray = namesArray.slice(i,i+totalTeams);
        bigArray.push(temparray);
      }
    }

    // adds team tables to html
    for(i = 0; i < bigArray.length; i++){
      name2 = `<tr id="name"><td>${bigArray[i].join('</td></tr><tr id="name"><td>')}</td></tr>`;
      html = `
        <table class="table">
          <thead><th>Team %num%</th></thead>
            ${name2}
        </table>
        `;
        
      let newhtml = html.replace('%num%', i + 1 );      
      result.insertAdjacentHTML("beforeend", newhtml);
    }
  };


/* when the 'reset' button is clicked do this */

reset.onclick = () => {
  //flip buttons
  makeTeams.style.zIndex = '10';
  makeTeams.style.display = 'inline';
  reset.style.zIndex = '-10';
  
  //delete tables
  result.innerHTML = '';
  namesArray = [];
  bigArray = [];
};


