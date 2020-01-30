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
  let makeTeams = document.getElementById('team-btn');
  
  //when the 'make teams' button is clicked do this
  form.onsubmit = e => {

    //dont clear values of inputs
    e.preventDefault();

    //margin: 40rem auto 5rem auto;
    //make the space on top smaller on click
    //heading.style.margin = '10rem auto 5rem auto';

    //flip buttons
    makeTeams.style.zIndex = '-10';
    makeTeams.style.display = 'none';
    reset.style.zIndex = '10';

    //get input into variables
    namesArray = [...form.teamNames.value.split(',')];
    peoplePerTeam = form.teamNumbers.value;
    
    numOfTeams = Math.floor(namesArray.length / peoplePerTeam);

    var totalTeams = (namesArray.length/numOfTeams);  

    var temparray,piece = totalTeams;
    
      if(!bigArray.length){
      for (i = 0, j= namesArray.length; i<j; i+=piece) {
        temparray = namesArray.slice(i,i+piece);
       
        bigArray.push(temparray);
        console.log(temparray)
         console.log(piece)
      }
    }

    
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

  result.innerHTML = '';
  namesArray = [];
  bigArray = [];
  //heading.style.margin = '40rem auto 5rem auto';
  console.log('working');
};

