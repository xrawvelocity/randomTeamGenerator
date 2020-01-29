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
    namesArray = [...form.teamNames.value.split(',')];
    peoplePerTeam = form.teamNumbers.value;
    

    //randomize array
    numOfTeams = Math.floor(namesArray.length / peoplePerTeam);
    var totalTeams = (namesArray.length/numOfTeams);  
    var temparray,piece = totalTeams;
    if(!bigArray.length){
      for (i = 0, j= namesArray.length; i<j; i+=piece) {
        temparray = namesArray.slice(i,i+piece);
        bigArray.push(temparray);
      }
    }

    ////////////////
    };
    for(i = 0; i < bigArray.length; i++){
      //for(x = 0; x < bigArray[i].length; x++){
        name2 = `<tr id="name"><td>${bigArray[i].join('</td></tr><tr id="name"><td>')}</td></tr>`;
        html = `
          <table class="table">
            <thead><th>Team %num%</th></thead>
              ${name2}
          </table>
          `;
        
        console.log(name2);
            // ${name2.repeat(bigArray[i].length)}
        
      //}
      //${'<tr id="name"><td>%name%</td></tr>'.repeat(bigArray[i].length)}

    let newhtml = html.replace('%num%', i + 1 );
    console.log(newhtml);
    //newhtml = newhtml.replace('%name%', bigArray[0][1]);
    
    result.insertAdjacentHTML("beforeend", newhtml);
    }



    /* TESTING */
    //console.log(html);
    
    
  

/* when the 'reset' button is clicked do this */

reset.onclick = e => {
  result.innerHTML = '';
  namesArray = [];
  bigArray = [];
  heading.style.margin = '40rem auto 5rem auto';
  console.log('working');
};

document.addEventListener('click', e => {
  if(e.target.parentElement.className == 'table'){
    console.log(e.target.children[1].children);
  }
});